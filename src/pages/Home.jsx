import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <main>
        <section>
          <div>
            <h2>Bienvenido a la Aplicación de Gestión de Contraseñas</h2>
            <p>Tu solución integral para generar y almacenar contraseñas.</p>
          </div>

          <div>
            <h3>Generador de contraseñas</h3>
            <p>
              Genera contraseñas según tu preferencia de longitud y caracteres
              con un solo clic.
            </p>
          </div>
          <div>
            <h3>Galeria de contraseñas</h3>
            <p>Guarda y gestiona tus contraseñas importantes comodamente.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
