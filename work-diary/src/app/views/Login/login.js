import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import {userService} from "../../api/user/user.service";
import jwt_decode from "jwt-decode";
import {useUserContext} from '../../hooks/useAuth'

const Loginpage = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const {setUser} = useUserContext();
  const onSubmit = (e) => {
    e.preventDefault();
    if (login.password.length >= 8) {
      userService.Login(login).then(
        (response)=>{
         if(response.error){
           console.log(response.message);
         }else{
           sessionStorage.setItem("token",response.data.token);
           const user = jwt_decode(response.data.token);
           setUser(user);
         }
        }
      ).catch(
        (err)=>{
          console.log(err);
        }
      );
    } else {
      alert("La constraseña no tiene el tamaño minimo");
    }
  };

  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <div style={{textAlign:""}}>
        <span>BIENVENIDO A WORK DIARY</span>
      </div>
      <div className="group">
        <label>Email</label>
        <input type="email" name="email" />
        <span className="highlight"></span>
        <span className="bar"></span>
       
      </div>
      <div className="group">
      <label>Password</label>
        <input type="password" name="password" />
        <span className="highlight"></span>
        <span className="bar"></span>
        
      </div>
      <button type="submit" className="button buttonBlue">
        Iniciar Sesión
        <div className="ripples buttonRipples">
          <span className="ripplesCircle"></span>
        </div>
      </button>
      <Link to="/register">
        <button type="button" className="button-register">
          Registrarse
        </button>
      </Link>
    </form>
  );
};

export default Loginpage;
