import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useState } from "react";
import "../styles/userform.css";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

export function UserFormComponent() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    correo: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);

      if (
        response.data.message === "Inicio de sesión exitoso" ||
        response.data.verification_code === 1
      ) {
        navigate("/admin");
      } else {
        setLoginMessage("Credenciales incorrectas");
      }
    } catch (error) {
      setLoginMessage("Error al iniciar sesión");
      console.error(error);
    }
  };

  return (
    <>
      <div className="container h-full flex align-items-center justify-content-center">
        <div className="login w-4 p-3 m-2" style={{ border: "1px solid #ccc" }}>
          <p className="text-center mt-2 mb-3">Ingresa</p>
          <div className="container-social-login">
            <div className="facebook flex">
              <i className="pi pi-facebook mr-2"></i>
              <Divider layout="vertical" />
              <p className="ml-2"> Continua con Facebook</p>
            </div>
            <div className="google flex mt-2">
              <i className="pi pi-google mr-2"></i>
              <Divider layout="vertical" />
              <p className="ml-2"> Continua con Google</p>
            </div>
          </div>
          <p className="text-center mt-3 mb-3">
            o ingresas con tu correo electronico
          </p>
          <form action="">
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="email-l">Correo</label>
              <InputText
                id="email-l"
                name="correo"
                aria-describedby="email-help-login"
                keyfilter="email"
                placeholder="Ingrese Correo"
                value={formData.correo}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-column gap-2">
              <label htmlFor="password">Contraseña</label>
              <div>
                <Password
                  feedback={false}
                  tabIndex={1}
                  placeholder="Contraseña"
                  toggleMask
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>
              <small className="mb-3">
                <a href="">¿Olvidaste tu contraseña?</a>
              </small>
            </div>
            <Button
              label="Iniciar Sesion"
              severity="warning"
              className="btnLogin mb-3"
              onClick={handleLogin}
            />
            {loginMessage && <p>{loginMessage}</p>}
            <Divider />
            <small className="mt-2">
              Al continuar, aceptas nuestros{" "}
              <a href="">Términos y condiciones.</a>
            </small>
          </form>
        </div>
      </div>
    </>
  );
}
