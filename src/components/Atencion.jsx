import "../styles/Atencion.css";
import img1 from "../assets/img/call.png";
import img2 from "../assets/img/ml.png";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export function AtencionComponent() {
  return (
    <>
      <div className="flex justify-content-center align-items-center h-full">
        <div className="contact-container">
          <h2 className="title-contact">
            CONTACTATE CON <p>NOSOTROS</p>
          </h2>
          <div className="container-form">
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="nombre">Nombre</label>
              <InputText id="nombre" />
            </div>
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="correo">Correo</label>
              <InputText id="correo" />
            </div>
            <div className="card flex justify-content-center mb-2">
              <InputTextarea
                autoResize
                rows={5}
                cols={30}
                className="w-full p-2"
              />
            </div>
          </div>
          <div className="card flex justify-content-center">
            <Button label="Enviar" className="p-2 w-full" />
          </div>
        </div>

        {/* ATENCION */}
        <div className="call-info-container">
          <div className="">
            {/* 1 */}
            <div className="info-cont">
              <div className="flex align-items-center">
                <span className="mr-2">
                  <img src={img1} alt="" width="40" height="40" />
                </span>
                <h5 className="text-3xl">LLAMANOS</h5>
              </div>
              <p className="mt-2"> (01) 574 8000</p>
            </div>

            {/* 2 */}
            <div className="info-cont">
              <div className="flex align-items-center">
                <span className="mr-2">
                  <img src={img2} alt="" width="40" height="40" />
                </span>
                <h5 className="text-3xl">NUESTRO EMAIL</h5>
              </div>
              <p className="mt-2"> Example@gmail.com</p>
            </div>

            {/* 3 */}
            <div className="info-cont">
              <div className="flex align-items-center">
                <span className="mr-2">
                  <img src={img2} alt="" width="40" height="40"/>
                </span>
                <h5 className="text-3xl">UN ASESOR TE AYUDARA</h5>
              </div>
              <p className="mt-2">
                Atenderemos todos los días de 08:00 a.m. a 05:00 p.m.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
