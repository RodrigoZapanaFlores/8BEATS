import { createContext, useState, useEffect } from "react";
import { Profile } from "../services/beat-service";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined means loading

  useEffect(() => {
    Profile()
      .then((user) => setUser(user))
      .catch((user) => setUser(null));
  }, []);

  const value = {
    user,
    setUser,
  };

  if (user === undefined) {
    return <></>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;