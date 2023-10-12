import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';

function LogoutButtonComponent() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Button label="Cerrar Sesion" severity="danger" onClick={handleLogout} className="p-2"/>
  );
}

export default LogoutButtonComponent;