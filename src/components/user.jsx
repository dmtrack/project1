import userEvent from "@testing-library/user-event";
import React, {useState} from "react";
import api from "../api/"

const Users = () => {

const [users, setUsers] = useState(api.users.fetchAll());
console.log(users)


const renderPhraseClasses = () => {
let classes = "badge m-2 "
classes+= users.length===0?"bg-danger":"bg-primary"
return classes
}
const renderPhrase = () => {
  let phrase = ""

  switch (users.length) {
    case 0:
      phrase += "Никто с тобой не тусанёт";
      break;
    case 2:
      phrase += `${users.length} человека тусанёт с тобой сегодня`
      break;
    case 3:
      phrase += `${users.length} человека тусанёт с тобой сегодня`
      break;
    case 4:
      phrase += `${users.length} человека тусанёт с тобой сегодня`
        break;

    default:
      phrase += `${users.length} человек тусанёт с тобой сегодня`
  }

return phrase
}

const handleDelete = (id) => {
  setUsers(prevState => prevState.filter(user => user._id !==id))
}

const renderTags = (color) => {
  let string = "badge m-1 bg-";
  string += color
  return string
  };

const renderTable = () => {
  if (users.length !== 0) { 
  return <table className="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился, раз</th>
      <th scope="col">Оценка</th>
      <th scope="col"></th>
    </tr>
  </thead>

 <tbody>
   {users.map((user)=>(
    <tr key={user._id}>
      <td>{user.name}</td>
              <td>{user.qualities.map(quality =>
        <span className={renderTags(quality.color)} key = {quality._id}>
          {quality.name}
        </span>
        )}
              </td>


      <td align="center"> {user.profession.name}</td>    
      <td align="center">{user.completedMeetings}</td>
      <td align="center">{user.rate}</td>
      <td><button 
        className="btn btn-danger"
        onClick={()=>handleDelete(user._id)}
        >delete</button></td>

    </tr>
   )
)}
 </tbody>

</table>
} else {
  return
}}

return (
    <>
    <span className={renderPhraseClasses()}>{renderPhrase()} </span>
    {renderTable()}
    </>
)
};
export default Users
