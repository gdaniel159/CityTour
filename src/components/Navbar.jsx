import { useState } from "react";
import { Menubar } from "primereact/menubar";
import { DespliegueMenu } from "./DespliegueMenu";
import { Sidebar } from "primereact/sidebar";
import { AtencionComponent } from "./atencion";
import { UserFormComponent } from "./UserForm";
import "../styles/navbar.css";

function Navbar() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const [visible, setVisible] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);

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
    if (item.icon === "pi pi-phone") {
      item.command = () => {
        setVisible(!visible);
      };
    }
    if (item.icon === "pi pi-user") {
      item.command = () => {
        setVisibleForm(!visible);
      };
    }
  });

  const start = (
    <a href="/">
      <img
        alt="logo"
        src="https://cdn-icons-png.flaticon.com/512/826/826070.png"
        height="40"
        className="mr-2"
      />
    </a>
  );

  return (
    <div className={`p-mb-4 ${menuVisible ? "navbar-fixed" : ""}`}>
      <Menubar
        model={items}
        start={start}
        className={`p-2 text-lg flex justify-content-between navbar ${
          menuVisible ? "active" : ""
        }`}
      />
      {/* Renderiza DespliegueMenu solo cuando el menú esté visible */}
      {menuVisible && <DespliegueMenu />}
      {visible && (
        <div className="card flex justify-content-center">
          <Sidebar
            visible={visible}
            onHide={() => setVisible(false)}
            fullScreen
          >
            <AtencionComponent />
          </Sidebar>
        </div>
      )}
      {visibleForm && (
        <div className="card">
          <Sidebar
            visible={visibleForm}
            onHide={() => setVisibleForm(false)}
            fullScreen
          >
            <UserFormComponent />
          </Sidebar>
        </div>
      )}
    </div>
  );
}

export default Navbar;
