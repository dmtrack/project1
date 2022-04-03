import React from "react";
import User from "./user";


const UsersList = ({users, ...props }) => {
    return (
        <> 
        {<table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
              </tr>
            </thead>
           <tbody>
                {users.map((user, index)=>(
              <User key={user._id} users={users} index={index} status={user.bookmark} {...props}/>
              )
              )}
           </tbody>        
          </table>
          } 
        </>


    )
}

export default UsersList

