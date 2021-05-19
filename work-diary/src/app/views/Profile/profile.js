import React, { useState } from "react";
import { userService } from "../../api/user/user.service";
import logo from "../../assests/images/450_1000.jpeg";
import { useUserContext } from "../../hooks/useAuth";
import "./profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    lastName: "",
    email: "",
    dni: "",
    cellphone: "",
    direction: "",
  });
  const { User,setUser } = useUserContext();
  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    profile.dni = parseInt(User.dni, 10);
    profile.email = User.email;
    profile.cellphone =
      profile.cellphone !== ""
        ? parseInt(profile.cellphone, 10)
        : parseInt(User.cellphone, 10);
    profile.name = profile.name !== "" ? profile.name : User.name;
    profile.lastName =
      profile.lastName !== "" ? profile.lastName : User.lastName;
    profile.direction =
      profile.direction !== "" ? profile.direction : User.direction;
    userService
      .UpdateProfile(profile)
      .then((res) => {
        if(res.error){
          alert(res.message);
        }else{
          alert(res.message);
          setUser(res.data.user.data.user);
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="row">
      <div className="col-lg-4 col-xlg-3">
        <div className="card">
          <div className="card-body">
            <center className="mt-4">
              {" "}
              <img src={logo} className="img-circle" width="150" />
              <h4 className="card-title mt-2">
                {User.name + " " + User.lastName}
              </h4>
              <div className="row text-center justify-content-md-center"></div>
            </center>
          </div>
        </div>
      </div>

      <div className="col-lg-8 col-xlg-9">
        <div className="card">
          <div className="card-body">
            <form
              className="form-horizontal form-material mx-2"
              onChange={onChange}
              onSubmit={onSubmit}
            >
              <div className="form-group">
                <label className="col-md-12" htmlFor="names">
                  Nombres
                </label>
                <div className="col-md-12">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={User.name}
                    className="form-control form-control-line"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="lastNnames">
                  Apellidos
                </label>
                <div className="col-md-12">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={User.lastName}
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
                    placeholder={User.email}
                    className="form-control form-control-line"
                    name="email"
                    id="example-email"
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">DNI</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="dni"
                    placeholder={User.dni}
                    className="form-control form-control-line"
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">Celular No</label>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="cellphone"
                    placeholder={User.cellphone}
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
                    placeholder={User.direction}
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
