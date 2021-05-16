import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateTask = () => {
  const [CreateTask, setCreateTask] = useState({
    tittle: "",
    description: "",
    status: "",
    date: "",
  });
  const onChange = (e) => {
    setCreateTask({ ...CreateTask, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row">
      <form onChange={onChange} onSubmit={onSubmit}>
        <div className="form-group">
          <label className="col-md-12">Nombre de la Tarea</label>
          <div className="col-md-12">
            <input
              type="text"
              name="tittle"
              className="form-control form-control-line"
            />
          </div>
          <div className="form-group">
            <label className="col-md-12">Descripción</label>
            <div className="col-md-12">
              <input
                type="text"
                name="description"
                className="form-control form-control-line"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-12">Estado</label>
            <div className="col-md-12">
              <input
                type="text"
                name="status"
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
            <button className="btn btn-outline-success">Cancelar</button>
          </div>
          <div className="form-group">
            <button className="btn btn-outline-success">Añadir Tarea</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
