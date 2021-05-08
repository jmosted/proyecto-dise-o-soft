import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"

const Loginpage = () => {
  const [login, setLogin] = useState({email:"",password:""});
  const onChange= (e)=>{
    setLogin({...login,[e.target.name]: e.target.value});
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    if (login.password.length >= 8) {
      console.log(login);
    } else {
      alert("La constraseña no tiene el tamaño minimo");
    }
  }

  return (
    <div>
      <form onChange={onChange} onSubmit={onSubmit}>
        <div className="group">
          <input type="email" name="email"/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="group">
          <input type="password" name="password" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Password</label>
        </div>
        <button type="submit" className="button buttonBlue">
          Iniciar Sesión
          <div className="ripples buttonRipples">
            <span className="ripplesCircle"></span>
          </div>
        </button>
        <Link to="/register">
          <button type="button" className="button-register" >
            Registrarse
          </button>
        </Link>
        
      </form>
    </div>
  );
};

export default Loginpage;
