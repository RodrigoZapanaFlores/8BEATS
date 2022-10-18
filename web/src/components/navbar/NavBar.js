import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function NavBar() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light main-nav">
      <div className="container">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link 
                to="/beats/create"
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        <i className="fa fa-plus" />
                </Link>
          </li>
          <li className="nav-item">
              <Link 
                to="/beats/List"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                ALLBeats
              </Link>
          </li>
          
          <li className="nav-item">
            <Link 
              to="/distribution"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
              Distribucion
            </Link>
          </li>
          <li className="nav-item">
              <Link 
                to="/myList"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                Mis archivos
              </Link>
          </li>
   
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Perfil: {user.name}
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/mensajes"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Buzon
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/mensajes"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Favoritos
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/mensajes"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
          
          
        </div>

        </ul>
      </div>
    </nav>
  );
}

export default NavBar;