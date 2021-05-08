import React from "react";
import "../../css/login.css"

const Loginpage = () => {
  return (
    <div>
      <form>
        <div class="group">
          <input type="text" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Nombre</label>
        </div>
        <div class="group">
          <input type="email" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>
        <button type="button" class="button buttonBlue">
          Iniciar Sesión
          <div class="ripples buttonRipples">
            <span class="ripplesCircle"></span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
