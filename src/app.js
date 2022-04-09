import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Searchstatus from "./components/searchstatus";
import api from "./api";
import UsersList from "./components/usersList";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id !== id));
    };
    const handleToggleBookmark = (id) => {
        const newIncrementArray = [...users];
        const index = users.findIndex((c) => c._id === id);
        if (users[index].bookmark) {
            newIncrementArray[index].bookmark = false;
            setUsers(newIncrementArray);
        } else {
            newIncrementArray[index].bookmark = true;
            setUsers(newIncrementArray);
        }
    };

    return (
        <div>
            <div>
                <Searchstatus users={users} />
            </div>
            <div>
                <UsersList
                    users={users}
                    onDelete={handleDelete}
                    onBookmark={handleToggleBookmark}
                />
            </div>
        </div>
    );
}

export default App;
