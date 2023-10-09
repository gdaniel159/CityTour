import { useState } from "react";
import { Menubar } from "primereact/menubar";
import { DespliegueMenu } from "./DespliegueMenu";
import '../styles/navbar.css';

function Navbar() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); 
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
      command: toggleMenu,
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
    <div className={`p-mb-4 ${menuVisible ? 'navbar-fixed' : ''}`}>
      <Menubar
        model={items}
        start={start}
        className={`p-2 text-lg flex justify-content-between navbar ${menuVisible ? 'active' : ''}`}
      />
      {/* Renderiza DespliegueMenu solo cuando el menú esté visible */}
      {menuVisible && <DespliegueMenu />} 
    </div>
  );
}

export default Navbar;
