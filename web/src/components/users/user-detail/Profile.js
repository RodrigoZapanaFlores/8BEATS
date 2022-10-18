import * as Services from "../../../services/beat-service";
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';



function Profile() {
  
  const { id } = useParams();
  const [user, setUser] = useState();
  
  const userConnected = useContext(AuthContext);//localizar

  useEffect(() => {
    Services
      .getProfile(id)
      .then(user => setUser(user[0]))
      .catch(error => console.error(error))
  }, [id]) 

  console.log('Rendering user detail')
  return (
    <div className="profile">
      {
        user ? 
          <div className="container">
            <div className="user-profile row">
              <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                <div className="img-profile card d-flex">
                  <div className="align-items-center text-center">
                    <img src="https://ca.slack-edge.com/T03BGN686QJ-U03CE8042BU-871f5c5f2740-192" alt="profile-img" className="rounded-circle" width="190" />
                    <div>
                      <h4>{user.id}</h4>
                      <p>Bienvenido a tu perfil<p/>
                      <p/>Desde aquí podrás gestionar todos tus pedidos, tanto los que ofreces como aquellos que necesitas</p>
                          ¡Manos a la obra!
                    </div>
                  </div>
                </div>
              </div>  
              <div className="col-4">
                <div className="info-user card">
                  <Link to={"/"} className="patch-profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>Editar  perfil?</Link>
                  <div className="card-body d-flex flex-column justify-content-evenly">
                      <div>
                        <h6>Nombre</h6>
                        <p>{user.name}</p>
                      </div>
                    <div>
                      <h6>Apellidos</h6>
                      <p>{user.surname}</p>
                    </div>
                    <div>
                      <h6>Dirección</h6>
                      <p>{user.address}</p>
                    </div>
                    <div>
                      <h6>Localidad</h6>
                      <p>{user.locality}</p>
                    </div>
                    <div className="row">
                      <h6>Provincia</h6>
                      <p>{user.city}</p>
                    </div>
                  </div> 
                </div>
              </div>  
            </div>  
            {
              user.id === userConnected.user.id &&
              <div className="fav-profile row">
            
              </div>                    //aki poner la lista de favs}
            }
   
          </div>: 
          <p>Loading....</p>
      }
    </div>
  )
}


export default Profile