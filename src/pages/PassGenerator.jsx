import { useState } from "react";
import PasswordsShow from "../components/PasswordsShow.jsx";
import Form from "../components/Form.jsx";
import usePass from "../hooks/usePass.jsx";

const PassGenerator = () => {
  const [length, setLength] = useState(4);
  const [chars, setChars] = useState("");
  //   const [passwords, setPasswords] = useState([]);
  const { passwords, setPasswords } = usePass();
  const generatePassword = (length, chars) => {
    let result = "";
    const charactersLength = chars.length;
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPasswords = [];
    for (let i = 0; i < 4; i++) {
      newPasswords.push(generatePassword(length, chars));
    }
    setPasswords([...passwords, ...newPasswords]);
    console.log(passwords);
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        generatePassword={generatePassword}
        setChars={setChars}
        setLength={setLength}
      />
      <h1>esta es</h1>
      <PasswordsShow />
    </>
  );
};

export default PassGenerator;
