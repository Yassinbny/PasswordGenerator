import { useRef } from "react";
import usePass from "../hooks/usePass.jsx";

const PasswordsShow = () => {
  const liRef = useRef();
  const { passwords, setKeepedPass, keepedPass } = usePass();
  return (
    <ul>
      {passwords.map((pass, i) => {
        return (
          <>
            <li key={i} ref={liRef}>
              {pass}

              <button
                className="li-button"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(pass);
                  setKeepedPass([...keepedPass, pass]);
                  console.log(keepedPass);
                }}
              >
                Guardar
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default PasswordsShow;
