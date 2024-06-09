import { useContext } from "react";
import { PassContext } from "../context/Pass.context.jsx";

const usePass = () => {
  return useContext(PassContext);
};

export default usePass;
