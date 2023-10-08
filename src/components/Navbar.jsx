import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { DespliegueMenu } from "./DespliegueMenu"; // Asegúrate de ajustar la ruta de importación según la ubicación de tu componente DespliegueMenu

function Navbar() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // Agregamos estado para controlar la visibilidad del menú

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Cambiar la visibilidad del menú al hacer clic en el icono del menú
  };

  const items = [
    {
      label: modoOscuro ? "Modo Claro" : "Modo Oscuro",
      icon: modoOscuro ? "pi pi-sun" : "pi pi-moon",
      command: toggleModo,
    },
    {
      icon: "pi pi-search",
    },
    {
      icon: "pi pi-phone",
    },
    {
      icon: "pi pi-bell",
    },
    {
      icon: "pi pi-user",
    },
    {
      label: "Menú",
      icon: "pi pi-bars",
      command: toggleMenu, // Asignamos la función para mostrar/ocultar el menú al hacer clic en el icono del menú
    },
  ];

  items.forEach((item) => {
    if (item.icon) {
      item.className = "ml-3 mr-3";
    }
  });

  const start = (
    <img
      alt="logo"
      src="https://cdn-icons-png.flaticon.com/512/826/826070.png"
      height="40"
      className="mr-2"
    />
  );

  return (
    <div className="p-mb-4">
      <Menubar
        model={items}
        start={start}
        className={`p-2 text-lg flex justify-content-between ${menuVisible ? 'active' : ''}`} // Agregamos una clase CSS 'active' cuando el menú está visible
      />
      {menuVisible && <DespliegueMenu />} {/* Renderiza DespliegueMenu solo cuando el menú esté visible */}
    </div>
  );
}

export default Navbar;
