import { Children, createContext, useState } from "react";

export const PassContext = createContext({
  passwords: [],
  setPasswords: () => {},
  keepedPass: [],
  setKeepedPass: () => {},
});

export default function PassContextProvider({ children }) {
  const [passwords, setPasswords] = useState([]);
  const [keepedPass, setKeepedPass] = useState(() => {
    const savedPass = localStorage.getItem("keepedPass");
    return savedPass ? JSON.parse(savedPass) : [];
  });

  return (
    <PassContext.Provider
      value={{
        passwords,
        setPasswords,
        keepedPass,
        setKeepedPass,
      }}
    >
      {children}
    </PassContext.Provider>
  );
}
