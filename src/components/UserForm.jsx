import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useState } from "react";

export function UserFormComponent() {
  const [value, setValue] = useState("");

  return (
    <>
      <div
        className="container h-full flex align-items-center justify-content-center"
        style={{ border: "1px solid #000" }}
      >
        <div className="login w-4" style={{ border: "1px solid #000" }}>
          <p>Ingresa</p>
          <div className="container-social-login">
            <div className="facebook">
              <i className="pi pi-facebook"></i>
              <Divider layout="vertical" />
              <p> Continua con Facebook</p>
            </div>
            <div className="google">
              <i className="pi pi-google"></i>
              <Divider layout="vertical" />
              <p> Continua con Google</p>
            </div>
          </div>
          <p>o ingresas con tu correo electronico</p>
          <form action="">
            <div className="flex flex-column gap-2">
              <label htmlFor="email">Correo</label>
              <InputText
                id="email"
                aria-describedby="email-help"
                keyfilter="email"
              />
            </div>
            <div className="flex flex-column gap-2">
              <label htmlFor="password">Contraseña</label>
              <Password
                value={value}
                onChange={(e) => setValue(e.target.value)}
                feedback={false}
                tabIndex={1}
              />
              <small>
                <a href="">¿Olvidaste tu contraseña?</a>
              </small>
            </div>
            <Button label="Iniciar Sesion" severity="warning" />
            <Divider />
            <small>
              Al continuar, aceptas nuestros{" "}
              <a href="">Términos y condiciones.</a>
            </small>
          </form>
        </div>
        <div className="register w-4" style={{ border: "1px solid #000" }}>
          <p>¿Eres nuevo?</p>
          <form action="">
            <div className="flex flex-column gap-2">
              <label htmlFor="nombre">Nombre</label>
              <InputText id="nombre" placeholder="Ingrese nombres" />
            </div>

            <div className="flex flex-column gap-2">
              <label htmlFor="apellido">Apellido</label>
              <InputText id="apellido" placeholder="Ingrese apellidos" />
            </div>

            <div className="flex flex-column gap-2">
              <label htmlFor="email">Correo</label>
              <InputText
                id="email"
                aria-describedby="email-help"
                keyfilter="email"
              />
            </div>

            <div className="flex flex-column gap-2">
              <label htmlFor="password">Contraseña</label>
              <Password
                value={value}
                onChange={(e) => setValue(e.target.value)}
                feedback={false}
                tabIndex={1}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
