import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const noImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const login = async (inputs) => {
    const res = await axios.post("https://socialappbackend-kezq.onrender.com/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)

   
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, setCurrentUser, noImage }}>
      {children}
    </AuthContext.Provider>
  );
};
