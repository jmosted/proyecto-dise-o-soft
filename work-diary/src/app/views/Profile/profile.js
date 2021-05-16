import React, {useState} from "react";
import logo from "../../assests/images/450_1000.jpeg";
import "./profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    names: "",
    email: "",
    dni: "",
    pass: "",
    cellphone: "",
    direction: "",
  });
  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row">
      <div className="col-lg-4 col-xlg-3">
        <div className="card">
          <div className="card-body">
            <center className="mt-4">
              {" "}
              <img src={logo} className="img-circle" width="150" />
              <h4 className="card-title mt-2">Nombres y apellidos</h4>
              <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
              <div className="row text-center justify-content-md-center"></div>
            </center>
          </div>
        </div>
      </div>

      <div className="col-lg-8 col-xlg-9">
        <div className="card">
          <div className="card-body">
            <form className="form-horizontal form-material mx-2">
              <div className="form-group">
                <label className="col-md-12" htmlFor="names">
                  Nombres y Apellidos
                </label>
                <div className="col-md-12">
                  <input
                    type="text"
                    id="names"
                    name="names"
                    placeholder="José Manuel Román Bustamante"
                    className="form-control form-control-line"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="example-email" className="col-md-12">
                  Email
                </label>
                <div className="col-md-12">
                  <input
                    type="email"
                    placeholder="romja.tigo@gmail.com"
                    className="form-control form-control-line"
                    name="email"
                    id="example-email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">DNI</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="dni"
                    placeholder="74761761"
                    className="form-control form-control-line"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Password</label>
                <div className="col-md-12">
                  <input
                    type="password"
                    name="pass"
                    className="form-control form-control-line"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Celular No</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="cellphone"
                    placeholder="916259507"
                    className="form-control form-control-line"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Dirección</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="direction"
                    placeholder="Av. Amazonas 339"
                    className="form-control form-control-line"
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-outline-success"
                  style={{ width: "100%" }}
                >
                  Actualizar datos
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
