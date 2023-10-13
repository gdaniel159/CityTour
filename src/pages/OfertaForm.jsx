import { useParams } from "react-router-dom";
import {
  storePaqueteDetalle,
  storeClientes,
  storeRegistroPaquete,
} from "../api/api";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import "../styles/OfertaForm.css";

export function OfertaFormComponent() {
  const { id } = useParams();

  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef(null);

  const [cliente, setCliente] = useState({
    nombre: "",
    correo: "",
    DNI: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleCreateDetallePaquete = async (newPaqueteId) => {
    try {
      const response = await storePaqueteDetalle(newPaqueteId);
      return response.data;
      // const paqueteDetalleId = response.data.detalle_paquete_id;
      // console.log(paqueteDetalleId);
    } catch (error) {
      console.error("Error al crear el paquete:", error);
    }
  };

  const handleCreateCliente = async () => {
    try {
      const response = await storeClientes(cliente);
      return response.data;
      // const clienteId = response.data.cliente_id;
      // console.log(clienteId);
    } catch (error) {
      console.error("Error al crear el cliente:", error);
    }
  };

  const handleCreateRegistroPaquete = async (newRegistroPaquete) => {
    try {
      await storeRegistroPaquete(newRegistroPaquete);
      console.log("Registro paquete creado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnviarClick = async () => {
    try {
      const data = { paquete_id: id };
      const paqueteDetalleResponse = await handleCreateDetallePaquete(data);
      const clienteResponse = await handleCreateCliente(cliente);
      await handleCreateRegistroPaquete({
        cliente_id: clienteResponse.cliente_id,
        detalle_pack_id: paqueteDetalleResponse.detalle_paquete_id,
      });
      toastRef.current.show({
        severity: "success",
        summary: "Guardado correctamente",
        life: 3000,
      });
    } catch (error) {
      console.error("Error al crear el paquete o el cliente:", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="mt-4 mb-4 text-center text-blue-600">
        ¡Qué esperas! Solicita esta oferta y vive una nueva aventura
      </h1>
      <Toast ref={toastRef} />
      <div className="main-container-oferta">
        <div className="form-user">
          <form action="">
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="nombre">Nombres y Apellidos</label>
              <InputText
                id="nombre"
                name="nombre"
                className="p-2"
                value={cliente.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="correo">Correo Electronico</label>
              <InputText
                id="correo"
                name="correo"
                className="p-2"
                value={cliente.correo}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="dni">DNI</label>
              <InputText
                id="DNI"
                name="DNI"
                className="p-2"
                value={cliente.DNI}
                onChange={handleInputChange}
              />
            </div>
            <div className="card flex justify-content-center">
              <InputTextarea
                autoResize
                rows={5}
                cols={30}
                className="w-full mb-3 mt-3 p-2"
                name="mensaje"
                id="mensaje"
                value={cliente.mensaje}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex align-items-center mb-3">
              <Checkbox inputId="terminosCondiciones" name="terminos" />
              <label htmlFor="ingredient1" className="ml-2">
                He leído y acepto los términos y condiciones
              </label>
            </div>
            <div className="card flex flex-wrap justify-content-center gap-3">
              <Button
                label="Enviar"
                severity="warning"
                className="w-full p-3 mt-3"
                onClick={handleEnviarClick}
                type="button"
              />
            </div>
          </form>
        </div>
        <div className="social-contact flex flex-column justify-content-center align-items-center m-4">
          <p className="text-600 font-medium text-xl">Contacta directamente</p>
          <div className="whatsapp mt-3">
            <i className="pi pi-whatsapp"></i>
            <p>Whatsapp</p>
          </div>
          <div className="facebook-c mt-3">
            <i className="pi pi-facebook"></i>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
