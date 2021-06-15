import { createContext, useState, useEffect, useContext } from "react";
import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  console.log("currentUser : ", currentUser);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
