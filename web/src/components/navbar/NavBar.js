
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


  function NavBar() {
    const { user } = useContext(AuthContext);
  
    if (!user) {
      return null;
    }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <div className=" navbar" id="navbarTogglerDemo02">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link to="/AddBeats" className="nav-link active">
                        <i className="fa fa-plus" />
              </Link>
          </li>
          <li className="nav-item">
              <Link to="/Beats" className="nav-link active">
                ALLBeats
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/BeatMakers" className="nav-link active">
              BEATMakers
            </Link>
          </li >

          <li className="nav-item">
            <Link to="/Profile" className="nav-link active">
              Perfil : {user.name}
            </Link>

          </li>




          </ul>
        
          
          
        </div>

        
      </div>
    </nav>
  )
}

export default NavBar;