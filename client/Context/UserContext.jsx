import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const server = import.meta.env.VITE_SERVER_URL

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo,server }}>
      {children}
    </UserContext.Provider>
  );
};
