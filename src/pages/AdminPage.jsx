import { useState, useEffect } from "react";
import LogoutButtonComponent from "../components/LogOutButton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";

import {
  getDestinos,
  getRegiones,
  getUsuarios,
  getPaquetes,
  getRegistroPaquetes,
  getClientes,
} from "../api/api";
import "../styles/admin.css";

export function AdminSite() {
  const [destinos, setDestinos] = useState([]);
  const [regiones, setRegiones] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [paquetes, setPaquetes] = useState([]);
  const [registroPaquete, setRegistroPaquete] = useState([]);
  const [clientes, setClientes] = useState([]);

  const opRefs = {};
  const opRefsD = {}

  const handleButtonClick = (e, id) => {
    opRefs[id].toggle(e);
  };

  const handleButtonClickOvD = (e, id) => {
    opRefsD[id].toggle(e);
  }

  // Destinos

  useEffect(() => {
    async function loadDestinos() {
      const res = await getDestinos();
      setDestinos(res.data);
    }
    loadDestinos();
  }, []);

  // Regiones

  useEffect(() => {
    async function loadRegiones() {
      const res = await getRegiones();
      setRegiones(res.data);
    }
    loadRegiones();
  }, []);

  // Usuarios

  useEffect(() => {
    async function loadUsuarios() {
      const res = await getUsuarios();
      setUsuarios(res.data);
    }
    loadUsuarios();
  }, []);

  // Paquete

  useEffect(() => {
    async function loadPaquetes() {
      const res = await getPaquetes();
      setPaquetes(res.data);
    }
    loadPaquetes();
  }, []);

  // Detalle Paquete

  useEffect(() => {
    async function loadRegistroPaquete() {
      const res = await getRegistroPaquetes();
      setRegistroPaquete(res.data);
    }
    loadRegistroPaquete();
  }, []);

  // Clientes

  useEffect(() => {
    async function loadClientes() {
      const res = await getClientes();
      setClientes(res.data);
    }
    loadClientes();
  }, []);

  return (
    <>
      <header className="flex justify-content-between p-3">
        <div>
          <h1 className="text-blue-800">Administracion</h1>
          <small>
            <strong>Bienvenido Sr(a) ...</strong>
          </small>
        </div>
        <LogoutButtonComponent />
      </header>
      <main className="p-3">
        <div className="destinos-table">
          <h2 className="underline">Destinos</h2>
          <DataTable value={destinos} tableStyle={{ minWidth: "50rem" }}>
            <Column field="id" header="Code"></Column>
            <Column field="nombre" header="Nombre"></Column>
            <Column
              field="id"
              header="Imagen"
              body={(rowDataD) => (
                <div>
                  <Button
                    type="button"
                    icon="pi pi-image"
                    label="Image"
                    onClick={(e) => handleButtonClickOvD(e, rowDataD.id)} // Use the id as the identifier
                    className="p-2"
                  />
                  <OverlayPanel ref={(el) => (opRefsD[rowDataD.id] = el)}>
                    <img
                      src={`http://127.0.0.1:8000/${rowDataD.imageUrl}`}
                      alt={rowDataD.nombre}
                      className="small-image"
                      width="360"
                      height="280"
                    ></img>
                  </OverlayPanel>
                </div>
              )}
            ></Column>
            <Column field="regiones.nombre" header="Región"></Column>
          </DataTable>
        </div>
        <div className="paquete-table">
          <h2 className="underline">Paquete</h2>
          <DataTable value={paquetes} tableStyle={{ minWidth: "50rem" }}>
            <Column field="id" header="Code"></Column>
            <Column field="descripcion" header="Descripcion"></Column>
            <Column field="precio" header="Precio"></Column>
            <Column field="duracion" header="Duracion"></Column>
            <Column field="estado" header="Estado"></Column>
          </DataTable>
        </div>
        <div className="regiones-table">
          <h2 className="underline">Regiones</h2>
          <DataTable value={regiones} tableStyle={{ minWidth: "50rem" }}>
            <Column field="id" header="Code"></Column>
            <Column field="nombre" header="Nombre"></Column>
            <Column
              field="id"
              header="Imagen"
              body={(rowData) => (
                <div>
                  <Button
                    type="button"
                    icon="pi pi-image"
                    label="Image"
                    onClick={(e) => handleButtonClick(e, rowData.id)} // Use the id as the identifier
                    className="p-2"
                  />
                  <OverlayPanel ref={(el) => (opRefs[rowData.id] = el)}>
                    <img
                      src={`http://127.0.0.1:8000/${rowData.imageUrl}`}
                      alt={rowData.nombre}
                      className="small-image"
                    ></img>
                  </OverlayPanel>
                </div>
              )}
            ></Column>
          </DataTable>
        </div>
        <div className="registro-paquete-table">
          <h2 className="underline">Registro Paquete</h2>
          <DataTable value={registroPaquete} tableStyle={{ minWidth: "50rem" }}>
            <Column field="id" header="Code"></Column>
            <Column field="cliente.nombre" header="Nombre"></Column>
            <Column field="cliente.correo" header="Correo"></Column>
            <Column field="cliente.mensaje" header="Mensaje"></Column>
            <Column
              field="detalle_paquete.paquete.descripcion"
              header="Descripcion"
            ></Column>
            <Column
              field="detalle_paquete.paquete.precio"
              header="Precio"
            ></Column>
          </DataTable>
        </div>
        <div className="registro-paquete-table">
          <h2 className="underline">Usuarios</h2>
          <DataTable value={usuarios} tableStyle={{ minWidth: "50rem" }}>
            <Column field="id" header="Code"></Column>
            <Column field="nombre" header="Nombre"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="correo" header="Correo"></Column>
            <Column field="tipo_usuario.nombre" header="Tipo Usuario"></Column>
          </DataTable>
        </div>
        <div className="clientes-table">
          <h2 className="underline">Clientes</h2>
          <DataTable value={clientes} tableStyle={{ minWidth: "50rem" }}>
            <Column field="id" header="Code"></Column>
            <Column field="nombre" header="Nombre"></Column>
            <Column field="DNI" header="Username"></Column>
            <Column field="correo" header="Correo"></Column>
          </DataTable>
        </div>
      </main>
    </>
  );
}
