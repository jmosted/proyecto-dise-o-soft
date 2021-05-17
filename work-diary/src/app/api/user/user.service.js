const baseUrl = "http://127.0.0.1:4000";

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

export const userService = {
  createUser,
  Login
};
