import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();


export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  ); 
  
  // localStorage.getItem("chat-user") retrieves the value associated with the key "chat-user" from the browser's localStorage. If there is no value associated with that key, it returns null.

  //JSON.parse(): Parses a JSON string and returns a JavaScript object or value. This is used when retrieving data from localStorage, as the data is stored as a string.

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
