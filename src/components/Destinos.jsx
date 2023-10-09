import { Link } from "react-router-dom";
import { DescubreComponent } from "./Descubre";
import "../styles/destinos.css";

export function DestinosComponent() {
  return (
    <>
      <div className="enc2 flex align-items-center w-6 mb-2">
        <h1 className="titleDes flex align-items-center ml-5 mt-6 mb-3">
          <i className="pi pi-ticket text-3xl"></i>
          <Link to="/destinos" className="nav-link ml-3 mr-3">
            Descubre los destinos del Perú
          </Link>
          <div className="cubeDs">
            <i className="pi pi-chevron-right"></i>
          </div>
        </h1>
      </div>

      <div className="container-images">

        <DescubreComponent/>

      </div>
    </>
  );
}
