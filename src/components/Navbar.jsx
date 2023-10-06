import { useState } from "react";
import { Menubar } from "primereact/menubar";
// import { Link } from "react-router-dom";

function Navbar() {

  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
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
    },
  ];

  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

  return (
    <div className="card">
      <Menubar model={items} start={start} className="flex justify-content-between"/>
    </div>
  );
}

export default Navbar;
