import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [user, setUser] = useState(null);
  const [expiresAt, setExpiresAt] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const savedExpiry = localStorage.getItem("expiresAt");

    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
        setExpiresAt(savedExpiry);
      } catch (error) {
        console.error("Error al analizar JSON:", error);
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `https://todo-app-mu-nine-85.vercel.app/api/users/login`,
        { email: email, password: password }
      );
      const token = response.data.token;
      const user = response.data;
      const expiry = new Date(Date.now() + 60 * 60 * 1000);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("expiresAt", expiry);
      setUser(user);

      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message };
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expiresAt");
    setUser(null);
  };

  return (
    <SessionContext.Provider value={{ login, logout, user }}>
      {children}
    </SessionContext.Provider>
  );
}
