const createUser = (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch("http://127.0.0.1:4000/user/create-user", requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};


export const userService = {
    createUser
}