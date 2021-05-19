import React, { useState } from "react";
const UserContext = React.createContext();
function UserProvider({ children }) {
  const [User, setUser] = useState(null);
  const [Modal, setModal] = useState(false);
  const value = {
    User,
    setUser,
    Modal,
    setModal,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };