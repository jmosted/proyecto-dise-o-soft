import Login from "../views/Login/login";
import Event from "../views/Event/event";
import Register from "../views/Register/register";
import Profile from "../views/Profile/profile";
import CreateEvent from "../views/Create-Event/create-event";
import CreateTask from "../views/Create-Task/create-task";
export default [
  {
    path: "/login",
    exact: true,
    page: Login,
  },
  {
    path: "/register",
    exact: true,
    page: Register,
  },
  {
    path: "/event",
    exact: true,
    page: Event,
  },
  {
    path: "/profile",
    exact: true,
    page: Profile,
  },
  {
    path:"/create-event",
    exact: true,
    page:CreateEvent,
  },
  {
    path:"/create-task",
    exact: true,
    page:CreateTask,
  },
];
