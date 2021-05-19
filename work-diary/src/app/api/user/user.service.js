const baseUrl = "http://127.0.0.1:4000";
const token = sessionStorage.getItem("token");

const createUser = (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + "/user/create-user", requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const Login = (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + "/api/v1/login", requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const UpdateProfile = (data) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + "/user/update-user", requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const CreateEvent = (data) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + "/event/create-event", requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const GetEvents = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    
  };
  return fetch(baseUrl + "/event/get-all-events", requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const userService = {
  createUser,
  Login,
  UpdateProfile,
  CreateEvent,
  GetEvents
};
