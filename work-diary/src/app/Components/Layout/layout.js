import React from "react";
import UseRoutes from "../../hooks/useRoutes";
import Event from "../../views/Event/event";
import Profile from "../../views/Profile/profile";
import { useUserContext } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import "./layout.css";
import ModalComponent from "react-bootstrap/Modal";
import CreateEvent from "../../views/Create-Event/create-event"
import {useState} from "react"
//import Task from "../../views/Create-Task/create-task"
//import CreateTask from '../../views/Create-Task/create-task'

const Layout = () => {
  const SubPage = UseRoutes(
    {
      "": Event,
      profile: Profile,
    },
    "subpage"
  );
  const [Modal, setModal] = useState(false)
  const { setUser} = useUserContext();
  const logout = () => {
    sessionStorage.clear();
    setUser(null);
  };
  console.log(Modal);
  const changeStatusModal = (value) => {
    
    setModal(value);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline">MENU</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link align-middle px-0 custom-items"
                >
                  <i className="far fa-user"></i>
                  <span className="ms-1 d-none d-sm-inline">Perfil</span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="nav-link px-0 align-middle custom-items"
                  data-bs-toggle="collapse"
                >
                  <i className="fas fa-calendar-week"></i>
                  <span className="ms-1 d-none d-sm-inline">Eventos</span>{" "}
                </Link>
              </li>
              <li>
                <a
                  className="nav-link px-0 align-middle custom-items"
                  onClick={()=>changeStatusModal(true)}
                  data-bs-toggle="collapse"
                >
                  <i className="fas fa-calendar-week"></i>
                  <span className="ms-1 d-none d-sm-inline">
                    Crear Evento
                  </span>{" "}
                </a>
              </li>
              <li>
                <a
                  className="nav-link px-0 align-middle custom-items"
                  onClick={logout}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-power-off"></i>
                  <span className="ms-1 d-none d-sm-inline">Cerrar Sesión</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3" style={{ overflowY: "hidden" }}>
          <SubPage />
           <ModalComponent show={Modal}>
            <CreateEvent setModal={setModal}></CreateEvent>
          </ModalComponent> 
        </div>
      </div>
    </div>
  );
};
export default Layout;
