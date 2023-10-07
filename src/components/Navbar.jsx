import { useState } from "react";
import { Menubar } from "primereact/menubar";

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

  items.forEach(item => {
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
      <Menubar model={items} start={start} className="p-2 text-lg flex justify-content-between" />
    </div>
  );
}

export default Navbar;