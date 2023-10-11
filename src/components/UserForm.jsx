import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useState } from "react";
import "../styles/userform.css";

export function UserFormComponent() {
  const [value, setValue] = useState("");

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
              <label htmlFor="email">Correo</label>
              <InputText
                id="email"
                aria-describedby="email-help"
                keyfilter="email"
                placeholder="Ingrese Correo"
              />
            </div>
            <div className="flex flex-column gap-2">
              <label htmlFor="password">Contraseña</label>
              <div>
                <Password
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  feedback={false}
                  tabIndex={1}
                  placeholder="Contraseña"
                  toggleMask
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
            />
            <Divider />
            <small className="mt-2">
              Al continuar, aceptas nuestros{" "}
              <a href="">Términos y condiciones.</a>
            </small>
          </form>
        </div>
        <div
          className="register w-4 p-3 m-2"
          style={{ border: "1px solid #ccc" }}
        >
          <p className="mt-2 mb-3 text-center">¿Eres nuevo?</p>
          <form action="">
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="nombre">Nombre</label>
              <InputText id="nombre" placeholder="Ingrese nombres" />
            </div>
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="apellido">Apellido</label>
              <InputText id="apellido" placeholder="Ingrese apellidos" />
            </div>
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="email">Correo</label>
              <InputText
                id="email"
                aria-describedby="email-help"
                keyfilter="email"
                placeholder="Ingrese Correo"
              />
            </div>
            <div className="flex flex-column gap-2 mb-3">
              <label htmlFor="password">Contraseña</label>
              <Password
                value={value}
                onChange={(e) => setValue(e.target.value)}
                feedback={false}
                tabIndex={1}
                placeholder="Contraseña"
              />
            </div>
            <Button
              label="Crear cuenta"
              severity="warning"
              className="btnRegister mb-3"
            />
            <div className="container-social-login mb-3">
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
