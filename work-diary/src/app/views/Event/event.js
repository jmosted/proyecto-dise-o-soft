import React, { useState, useEffect } from "react";
import { userService } from "../../api/user/user.service";

const Event = () => {
  const [Event, setEvent] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    userService
      .GetEvents()
      .then((res) => {
        if (res.error) {
          alert(res.message);
        } else {
          setEvent(res.data.event);
        }
      })
      .catch((error) => {
        console.log(error);
      });
      return isCancelled = true;
      
  }, [Event]);
  return (
    <div>
      {Event.map((evento) => (
        <div key={evento.id} style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="card" style={{ margin: "20px", maxWidth: "350PX" }}>
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{evento.tittle}</h5>
              <p className="card-text">{evento.description}</p>
              <a className="btn btn-primary">Ver mas</a>
            </div>
          </div>
        </div>
      ))}
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
