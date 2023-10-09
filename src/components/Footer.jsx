import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <div className="sec1 flex justify-content-center align-items-center ml-3 mr-3 mt-5 mb-5">
        <div className="enterete">
          <p>Entérate de las ofertas</p>
          <p>antes que los demás</p>
          <Button
            label="Suscribirme"
            severity="warning"
            className="mt-3 p-2 text-blue-800"
          />
        </div>
        <div className="conoce">
          <p>Conviértete en</p>
          <p>Socio “CityTour”</p>
          <Button
            label="Conoce más"
            severity="warning"
            className="mt-3 p-2 text-blue-800"
          />
        </div>
        <div className="app">
          <p>Descarga nuestra App de App RUTAS CORTAS</p>
          <div className="app-img mt-2">
            <a href="">
              <img
                src="https://www.ytuqueplanes.com/assets/images/download_apple.png"
                alt="Download on the App Store"
              />
            </a>
            <a href="">
              <img
                src="https://www.ytuqueplanes.com/assets/images/download_android.png"
                alt="Get it on Google Play"
              />
            </a>
            <a href="">
              <img
                src="https://www.ytuqueplanes.com/assets/images/download_huawei_app_gallery.png"
                alt="Get it on App Huawei1"
              />
            </a>
          </div>
          <div className="dscm flex justify-content-center align-items-center mt-2">
            <a href="" className="text-white underline">
              Conoce más
            </a>
            <div className="cubeFt ml-2">
              <i className="pi pi-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-2 flex justify-content-center align-items-center mt-5 mb-5">
        <div className="sub-sec-1">
          <p>Turismo en el Perú</p>
          <ul>
            <li>
              <a href="">Turismo en Lima</a>
            </li>
            <li>
              <a href="">Turismo en Cusco</a>
            </li>
            <li>
              <a href="">Turismo en Cajamarca</a>
            </li>
            <li>
              <a href="">Turismo en Arequipa</a>
            </li>
            <li>
              <a href="">Turismo en Piura</a>
            </li>
            <li>
              <a href="">Turismo en Ayacucho</a>
            </li>
            <li>
              <a href="">Turismo en Ica</a>
            </li>
            <li>
              <a href="">Turismo en Loreto</a>
            </li>
          </ul>
        </div>
        <Divider layout="vertical" />
        <div className="sub-sec-2">
          <p>Patrimonio Cultural</p>
          <ul>
            <li>
              <a href="">Machu Picchu</a>
            </li>
            <li>
              <a href="">Ciudad de Cusco</a>
            </li>
            <li>
              <a href="">Sitio arqueológico Chavín</a>
            </li>
            <li>
              <a href="">Parque Nacional Huascarán</a>
            </li>
            <li>
              <a href="">Complejo arqueológico Chan Chan</a>
            </li>
            <li>
              <a href="">Parque Nacional del Manu</a>
            </li>
            <li>
              <a href="">Centro Histórico de Lima</a>
            </li>
            <li>
              <a href="">Líneas y geoglifos de Nasca</a>
            </li>
          </ul>
        </div>
        <Divider layout="vertical" />
        <div className="sub-sec-3">
          <p>Reservas Naturales</p>
          <ul>
            <li>
              <a href="">Reserva Nacional de Paracas</a>
            </li>
            <li>
              <a href="">Reserva Nacional Pacaya Samiria</a>
            </li>
            <li>
              <a href="">Parque Nacional Huascarán</a>
            </li>
            <li>
              <a href="">Parque Nacional del Manu</a>
            </li>
            <li>
              <a href="">Reserva Nacional de Lachay</a>
            </li>
            <li>
              <a href="">Reserva Nacional de San Fernando</a>
            </li>
            <li>
              <a href="">Reserva Nacional del Titicaca</a>
            </li>
            <li>
              <a href="">Reserva Nacional Pampa Galeras</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sec-4 flex justify-content-between align-items-center">
        <div>
          <p><small>Todos los derechos reservados a CityTour2023</small></p>
        </div>
        <div className="flex avisos">
          <p><a href=""><small>Mapa de sitio</small></a></p>
          <Divider layout="vertical"/>
          <p><a href=""><small>Aviso Legal</small></a></p>
          <Divider layout="vertical"/>
          <p><a href=""><small>Terminos Legales Legal</small></a></p>
        </div>
      </div>
    </>
  );
}

export default Footer;
