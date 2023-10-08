import { Link } from "react-router-dom";
import "../styles/destinos.css";

export function DestinosComponent() {
  return (
    <>
      <div className="enc2 flex align-items-center w-6 mb-2" style={{border:"1px solid #000"}}>
        <h1 className="titleDes flex align-items-center ml-3 mt-3">
          <i className="pi pi-ticket text-3xl"></i>
          <Link to="/destinos" className="nav-link ml-3 mr-3">
            Descubre los destinos del Perú
          </Link>
          <div className="cubeDs">
            <i className="pi pi-arrow-right"></i>
          </div>
        </h1>
      </div>
    </>
  );
}
