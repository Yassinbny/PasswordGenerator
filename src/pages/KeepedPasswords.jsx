import React, { useEffect, useState } from "react";
import usePass from "../hooks/usePass.jsx";
import { deletesvg } from "../svg/indexSVG.jsx";

const KeepedPasswords = () => {
  const { keepedPass, setKeepedPass } = usePass();
  const handleDelete = (e, password) => {
    e.preventDefault();
    const passUpdated = keepedPass.filter((pas) => !pas.includes(password));
    setKeepedPass(passUpdated);
  };
  useEffect(() => {
    localStorage.setItem("keepedPass", JSON.stringify(keepedPass));
  }, [keepedPass]);
  return (
    <ul id="keepedpass-ul">
      {keepedPass.map((pass, i) => {
        return (
          <li key={i}>
            {pass}
            <span
              id="li-delete"
              onClick={(e) => {
                handleDelete(e, pass);
              }}
            >
              {deletesvg}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default KeepedPasswords;
