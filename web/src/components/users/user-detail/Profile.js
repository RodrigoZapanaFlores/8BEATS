import * as Services from "../../../services/beat-service";
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState();
 
  useEffect(() => {
    const user = Services.getProfile(user => user.id === id);
    if (user) {
      setUser(user);
    } else {
      navigate('/profile');
    }
  }, [id]);

  console.log('Rendering user detail')
  return (
    <div>{user?.name}</div>
  )
}

export default Profile