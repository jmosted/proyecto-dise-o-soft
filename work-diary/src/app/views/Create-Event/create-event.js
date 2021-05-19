
import { createEvent } from "@testing-library/dom";
import React, { useState } from "react";
import { Link ,useHistory } from "react-router-dom";
import { userService } from "../../api/user/user.service";
//import "./login.css"

const CreateEvent = ({setModal}) => {
  const history = useHistory();
  const [CreateEvent, setCreateEvent] = useState({
    tittle: "",
    description: "",
    typeWork:"",
    ubication: "",
    nameClient: "",
    emailClient: "",
    time: "",
    status: "",
  });
  const onChange = (e) => {
    setCreateEvent({ ...CreateEvent, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(CreateEvent);
    userService.CreateEvent(CreateEvent).then(
      (res)=>{
        if(res.error){
          alert(res.message);
        }else{
          alert(res.message);
          history.push("");
          setModal(false);
        }
      }
    ).catch((err)=>{
      console.log(err);
    })
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
              name="typeWork"
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
              name="time"
              placeholder="dd/mm/yy"
              className="form-control form-control-line"
            />
          </div>
        </div>
        <div className="form-group ">
          <select className="form-select form-control form-control-line" name="status" >
            <option defaultValue hidden>Estado del Trabajo</option>
            <option value="Sin iniciar">Sin iniciar</option>
            <option value="En proceso">En proceso</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-outline-success" type="submit">Crear Evento</button>
        </div>
        <div className="form-group">
            <button className="btn btn-outline-success" onClick={()=>setModal(false)} type="button">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
