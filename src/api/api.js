import axios from "axios";

const cityAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// === GET === //

export const getTipoUsuarios = () => {
  return cityAPI.get("/tipo_usuario/get");
};

export const getClientes = () => {
  return cityAPI.get("/cliente/get");
};

export const getDestinos = () => {
  return cityAPI.get("/destino/get");
};

export const getDetallePaquetes = () => {
  return cityAPI.get("/detalle_paquete/get");
};

export const getPaquetes = () => {
  return cityAPI.get("/paquete/get");
};

export const getRegiones = () => {
  return cityAPI.get("/region/get");
};

export const getUsuarios = () => {
  return cityAPI.get("usuario/get");
};

export const getRegistroPaquetes = () => {
  return cityAPI.get("registro_paquete/get");
};

// === POST === //

export const storeTipoUsuario = (newTipoUsuario) => {
  return cityAPI.post("/tipo_usuario/create", newTipoUsuario);
};

export const storeClientes = (newCliente) => {
  return cityAPI.post("/cliente/create", newCliente);
};

export const storeDestino = (newDestino, idRegion) => {
  return cityAPI.post(`/destino/create/${idRegion}`, newDestino);
};

export const storePaqueteDetalle = (newPaqueteDetalle) => {
  return cityAPI.post("/detalle_paquete/create", newPaqueteDetalle);
};

export const storePaquete = (newPaquete) => {
  return cityAPI.post("/paquete/create", newPaquete);
};

export const storeRegion = (newRegion) => {
  return cityAPI.post("/region/create", newRegion);
};

export const storeUsuario = (newUsuario) => {
  return cityAPI.post("usuario/create", newUsuario);
};

export const storeRegistroPaquete = (newRegistroPaquete) => {
  return cityAPI.post("registro_paquete/create", newRegistroPaquete);
};

// === UPDATE === //
// === DELETE === //
