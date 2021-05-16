import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "./login.css"

const CreateEvent = () => {
  const [CreateEvent, setCreateEvent] = useState({
    tittle: "",
    description: "",
    work: "",
    ubication: "",
    nameClient: "",
    emailClient: "",
    date: "",
    status: "",
  });
  const onChange = (e) => {
    setCreateEvent({ ...CreateEvent, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row">
      <form onChange={onChange} onSubmit={onSubmit}>
        <div className="form-group">
          <label className="col-md-12">Titulo</label>
          <div className="col-md-12">
            <input
              type="text"
              name="tittle"
              className="form-control form-control-line"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-12">"Descripción"</label>
          <div className="col-md-12">
            <input
              type="text"
              name="description"
              className="form-control form-control-line"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-12">Trabajo</label>
          <div className="col-md-12">
            <input
              type="text"
              name="work"
              className="form-control form-control-line"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-12">Ubicación</label>
          <div className="col-md-12">
            <input
              type="text"
              name="ubication"
              className="form-control form-control-line"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-12">Nombre del cliente</label>
          <div className="col-md-12">
            <input
              type="text"
              name="nameClient"
              className="form-control form-control-line"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-12">Correo del cliente</label>
          <div className="col-md-12">
            <input
              type="email"
              name="emailClient"
              className="form-control form-control-line"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-12">Fecha</label>
          <div className="col-md-12">
            <input
              type="date"
              name="date"
              placeholder="dd/mm/yy"
              className="form-control form-control-line"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-12">Estado del trabajo</label>
          <div className="col-md-12">
            <input
              type="text"
              name="status"
              className="form-control form-control-line"
            />
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-outline-success">Crear Evento</button>
        </div>
        <div className="form-group">
          <Link to="/create-task">
            <button className="btn btn-outline-success">Añadir Tarea</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
