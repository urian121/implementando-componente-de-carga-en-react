import "../styles/loader.css";

const ComponentLoading = () => {
  return (
    <div className="page-loading active">
      <div className="page-loading-inner">
        <div className="page-spinner"></div>
        <span>Cargando...</span>
      </div>
    </div>
  );
};
export default ComponentLoading;
