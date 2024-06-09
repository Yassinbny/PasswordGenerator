import usePass from "../hooks/usePass.jsx";

const Form = ({ handleSubmit, setChars, setLength }) => {
  const { setPasswords } = usePass();
  const handleInputChange = (e) => {
    setLength(e.target.value);
  };
  return (
    <div id="formulario">
      <h1>Password Generator</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="number">Introduzca longitud deseada</label>
        <input type="number" name="number" onChange={handleInputChange} />
        <label htmlFor="texto">Introduzca caracteres permitidos</label>
        <input
          type="text"
          name="texto"
          onChange={(e) => setChars(e.target.value)}
        />
        <button>Enviar</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setPasswords([]);
          }}
        >
          Borrar
        </button>
      </form>
    </div>
  );
};

export default Form;
