import omero from "../imgs/omero.gif";
const Layout = () => {
  return (
    <>
      <h1 className="text-center mb-3">Bienvenidos a la página de Inicio</h1>
      <p className="text-center">
        {" "}
        Manejando rutas en{" "}
        <span
          style={{ color: "#087ea4", fontWeight: "bold", fontSize: "1.5rem" }}>
          {" "}
          ReactJS{" "}
        </span>
        con react-router-dom
      </p>
      <img src={omero} alt="Liza" className="img-fluid" />
    </>
  );
};

export default Layout;
