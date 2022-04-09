import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ users, index, status, ...props }) => {
    return (
        <>
            <tr key={users[index]._id}>
                <td>{users[index].name}</td>
                <td>
                    <Qualitie users={users} index={index} />
                </td>
                <td align="center"> {users[index].profession.name}</td>
                <td align="center">{users[index].completedMeetings}</td>
                <td align="center">{users[index].rate}</td>
                <td>
                    <button onClick={() => props.onBookmark(users[index]._id)}>
                        <Bookmark status={status} />
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => props.onDelete(users[index]._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    users: PropTypes.arrayOf.isRequired,
    index: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
    onBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
