import React, { useState } from "react";
const UserContext = React.createContext();
function UserProvider({ children }) {
  const [User, setUser] = useState(null);
  const value = {
    User,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };