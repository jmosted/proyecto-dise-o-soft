import React, { useState } from "react";
//import { Link } from "react-router-dom";
//import "./login.css"

const Event = () => {
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
                <a className="nav-link align-middle px-0">
                  <i class="far fa-user"></i>
                  <span className="ms-1 d-none d-sm-inline">Perfil</span>
                </a>
              </li>
              <li>
                <a
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i class="fas fa-calendar-week"></i>
                  <span className="ms-1 d-none d-sm-inline">Eventos</span>{" "}
                </a>
              </li>
              <li>
                <a
                  className="nav-link px-0 align-middle"
                  data-bs-toggle="collapse"
                >
                  <i class="fas fa-tasks"></i>
                  <span className="ms-1 d-none d-sm-inline">Tareas</span>{" "}
                </a>
              </li>
              <li>
                <a className="nav-link px-0 align-middle">
                  <i class="fas fa-power-off"></i>
                  <span className="ms-1 d-none d-sm-inline">Cerrar Sesión</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3" style={{overflowY:"hidden"}}>
          <div style={{display:"flex", flexWrap:"wrap"}}>
            <div class="card" style={{margin: "20px", maxWidth:"350PX"}}>
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a class="btn btn-primary">
                  Ver mas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

{
  /* <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
      <div classNameName="container-fluid">
        <a classNameName="navbar-brand" href="#">
          MENU
        </a>
        <button
          classNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
            <li classNameName="nav-item">
              <a classNameName="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link" href="#">
                Eventos
              </a>
            </li>
            <li classNameName="nav-item">
              <a
                classNameName="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
              >
                Tareas
              </a>
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link disabled" href="#" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <div classNameName="navbar-nav">
            <input
              classNameName="form-control me-2 align-items-center"
              type="search"
              placeholder="Search"
            />
            <div>
              <button classNameName="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav> */
}
