
import Login from "../views/Login/login";
import Register from "../views/Register/register"
export default [
  {
    path: "/login",
    exact: true,
    page: Login,
  },
  {
    path:"/register",
    exact:true,
    page: Register,
  },
];