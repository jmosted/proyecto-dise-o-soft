import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userService } from "../../api/user/user.service";
import "./register.css";
const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConf: "",
    cellphone: "",
    direction: "",
  });
  const onChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (register.password.length < 8){
      alert("La contraseña no tiene el tamaño minimo");
    }else if(register.password != register.passwordConf){
      alert("Las contraseñas no coinciden");
    }else{
      delete register.passwordConf
      console.log(register);
      userService.createUser().then(
        (res) => {
          console.log(res);
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      );
    }  
  };
  return (
    <div>
      <h1>Formulario de Registro</h1>
      <form
        method="post"
        className="form-register"
        onChange={onChange}
        onSubmit={onSubmit}
      >
        <h2 className="form-titulo">Registrar Usuario</h2>
        <div className="contenedor-inputs">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="input-48"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellidos"
            className="input-48"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-100"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="input-48"
            required
          />
          <input
            type="password"
            name="passwordConf"
            placeholder="Confirmar contraseña"
            className="input-48"
            required
          />
          <input
            type="text"
            name="cellphone"
            placeholder="Teléfono"
            className="input-100"
            required
          />
          <input
            type="text"
            name="direction"
            placeholder="Dirección"
            className="input-100"
            required
            input
          />
          <input type="submit" value="Registrar" className="btn-enviar" />
          <p className="form-link">
            Ya tienes una cuenta?
            <Link to="/login">
              Ingresa aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
