import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react"
import React from 'react'

function ProfileUserScreen() {
  const { user } = useContext(AuthContext);
  
  if (!user) {
    return null;
  }

  return (
    <div>Perfil : {user.name}</div>
    
  )
}

export default ProfileUserScreen