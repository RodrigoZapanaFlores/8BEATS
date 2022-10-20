import * as Services from "../../../services/userservice";
import React, { useEffect, useState } from 'react';
//import { Link } from "react-router-dom"; para linkear un boton de editar
import { UserItem } from "../../"
function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Services.getUsers()
    .then(users => setUsers(users))
    .catch(error => console.error(error));
  }, [])

  return (
    <div className=" row row-cols-12 row-cols-sm-6 row-cols-md-5">
    {users.map((user) => (
      <div className='col' key={user.id}>
      <UserItem {...user}/>
      </div>
    ))}
    </div>
  )
}

export default ListUsers