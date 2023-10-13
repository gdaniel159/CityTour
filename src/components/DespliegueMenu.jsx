import React, { useState } from "react";
import "../styles/DespliegueM.css";
import { MapaComponent } from "./Mapa";
// import "../assets/js/DespliegueMenu";
import { Link } from "react-router-dom";

export function DespliegueMenu() {
  
  return (
    <div className="navlistab -activo-" style={{ overflowY: "hidden" }}>
      <div className="headercontenedor">
        <div className="bloque -activo-" id="mprincipal" style={{}}>
          <div className="mDestinos">
            <div className="mapa-destinos">
              <span className="mapa-menu">
                <MapaComponent/>
              </span>
            </div>
            <div className="departamentos-destinos">
              <a href="#">
                <h2>
                  <span>{/* <img src="#" alt="Alternate Text"> */}</span>
                  <span>
                    <Link to="/destinos" className="nav-link text-white">
                      Destinos
                    </Link>
                    {/* <img src="#" alt="Destinos"> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <rect
                        x="33"
                        y="33"
                        width="32"
                        height="32"
                        rx="2"
                        transform="rotate(-180 33 33)"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <path
                        d="M13.8679 24.6191L20.6985 18.3287C21.5722 17.524 21.5562 16.1396 20.6641 15.3554L13.8679 9.38105"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </a>
              <ul>
                <li>
                  <a data-filtro="amazonas" href="#" className="departamento">
                    Amazonas
                  </a>
                </li>
                <li>
                  <a data-filtro="ancash" href="#" className="departamento">
                    Áncash
                  </a>
                </li>
                <li>
                  <a data-filtro="apurimac" href="#" className="departamento">
                    Apurímac
                  </a>
                </li>
                <li>
                  <a data-filtro="arequipa" href="#" className="departamento">
                    Arequipa
                  </a>
                </li>
                <li>
                  <a data-filtro="ayacucho" href="#" className="departamento">
                    Ayacucho
                  </a>
                </li>
                <li>
                  <a data-filtro="cajamarca" href="#" className="departamento">
                    Cajamarca
                  </a>
                </li>
                <li>
                  <a data-filtro="callao" href="#" className="departamento">
                    Callao
                  </a>
                </li>
                <li>
                  <a data-filtro="cusco" href="#" className="departamento">
                    Cusco
                  </a>
                </li>
                <li>
                  <a data-filtro="huancavelica" href="#" className="departamento">
                    Huancavelica
                  </a>
                </li>
                <li>
                  <a data-filtro="huanuco" href="#" className="departamento">
                    Huánuco
                  </a>
                </li>
                <li>
                  <a data-filtro="ica" href="#" className="departamento">
                    Ica
                  </a>
                </li>
                <li>
                  <a data-filtro="junin" href="#" className="departamento">
                    Junín
                  </a>
                </li>
                <li>
                  <a data-filtro="lalibertad" href="#" className="departamento">
                    La Libertad
                  </a>
                </li>
                <li>
                  <a data-filtro="lambayeque" href="#" className="departamento">
                    Lambayeque
                  </a>
                </li>
                <li>
                  <a data-filtro="lima" href="#" className="departamento">
                    Lima
                  </a>
                </li>
                <li>
                  <a data-filtro="loreto" href="#" className="departamento">
                    Loreto
                  </a>
                </li>
                <li>
                  <a data-filtro="madredios" href="#" className="departamento">
                    Madre de Dios
                  </a>
                </li>
                <li>
                  <a data-filtro="moquegua" href="#" className="departamento">
                    Moquegua
                  </a>
                </li>
                <li>
                  <a data-filtro="pasco" href="#" className="departamento">
                    Pasco
                  </a>
                </li>
                <li>
                  <a data-filtro="piura" href="#"className="departamento">
                    Piura
                  </a>
                </li>
                <li>
                  <a data-filtro="puno" href="#" className="departamento">
                    Puno
                  </a>
                </li>
                <li>
                  <a data-filtro="sanmartin" href="#" className="departamento">
                    San Martín
                  </a>
                </li>
                <li>
                  <a data-filtro="tacna" href="#" className="departamento">
                    Tacna
                  </a>
                </li>
                <li>
                  <a data-filtro="tumbes" href="#" className="departamento">
                    Tumbes
                  </a>
                </li>
                <li>
                  <a data-filtro="ucayali" href="#" className="departamento">
                    Ucayali
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="listaopciones">
            <li>
              <h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="49"
                  viewBox="0 0 36 49"
                  fill="none"
                >
                  <path
                    d="M18.1206 7.03675C18.5076 7.42372 19.4673 8.33697 20.2102 8.89421C20.9532 9.45145 21.2938 10.0551 21.3712 10.2873C21.6807 9.049 21.9748 6.06158 20.6746 4.01837C19.3744 1.97517 18.4302 1.15479 18.1206 1M22.7643 12.1448C24.0026 12.377 26.6649 12.3305 27.4079 10.2873C28.1509 8.2441 27.7175 5.10189 27.4079 4.01837C26.9435 4.48274 25.7826 5.64365 24.8539 6.10802C24.0068 6.53159 23.5382 6.49499 23.4608 6.57238C23.693 7.03675 24.1574 7.96548 23.693 9.59076C23.3044 10.9509 22.7643 11.8352 22.7643 12.1448Z"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.0618 26.3091C30.0618 26.3091 30.9176 26.6982 31.6178 27.8654C32.2012 28.8382 32.3957 30.3945 32.3957 30.3945C32.3957 30.3945 30.6453 29.0327 28.5059 29.6163"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.6221 14.0213C26.7615 14.0213 27.5395 14.2159 29.0954 13.4377C30.3402 12.8151 31.8184 10.5195 31.8184 10.5195C31.8184 10.5195 32.9853 13.2431 32.4018 15.9668C31.9172 18.2291 30.4569 19.6631 30.4569 19.6631"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.306 20.0396C30.306 20.0396 30.5381 20.7362 31.931 20.9684C33.0917 21.1619 34.9488 20.2718 34.9488 20.2718C34.9488 20.2718 34.2522 23.0581 31.6988 25.1479C29.1454 27.2377 27.2882 26.5411 27.2882 26.5411"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.1206 13.5377C18.3528 13.2281 18.9851 12.7852 19.5137 12.6089C20.2102 12.3768 20.6746 12.4542 20.9068 12.3768C20.9068 12.1446 20.7211 11.3087 19.9781 10.7515C19.2351 10.1942 18.4302 9.97754 18.1206 9.82275"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5778 23.501C19.4808 22.5045 18.792 21.0666 18.792 19.4679C18.792 16.4596 21.2306 14.021 24.2389 14.021C27.2471 14.021 29.6858 16.4596 29.6858 19.4679C29.6858 22.4761 27.2471 24.9148 24.2389 24.9148C23.7152 24.9148 23.2087 24.8408 22.7294 24.7029"
                    stroke="white"
                    strokeWidth="0.998018"
                  />
                  <circle
                    cx="24.2391"
                    cy="19.4678"
                    r="2.72344"
                    stroke="white"
                    strokeWidth="0.998018"
                  />
                  <path
                    d="M21.8359 18.8782C21.8359 18.8782 22.9852 18.4138 24.3899 18.4138C25.7947 18.4138 26.7118 18.8782 26.7118 18.8782"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.8887 7.03675C17.5017 7.42372 16.542 8.33697 15.799 8.89421C15.056 9.45145 14.7155 10.0551 14.6381 10.2873C14.3285 9.049 14.0344 6.06158 15.3347 4.01837C16.6349 1.97517 17.5791 1.15479 17.8887 1M13.245 12.1448C12.0067 12.377 9.34435 12.3305 8.60136 10.2873C7.85838 8.2441 8.29179 5.10189 8.60136 4.01837C9.06573 4.48274 10.2266 5.64365 11.1554 6.10802C12.0025 6.53159 12.4711 6.49499 12.5485 6.57238C12.3163 7.03675 11.8519 7.96548 12.3163 9.59076C12.7049 10.9509 13.245 11.8352 13.245 12.1448Z"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.8887 13.5377C17.6565 13.2281 17.0242 12.7852 16.4956 12.6089C15.799 12.3768 15.3347 12.4542 15.1025 12.3768C15.1025 12.1446 15.2882 11.3087 16.0312 10.7515C16.7742 10.1942 17.5791 9.97754 17.8887 9.82275"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.52383 26.3079C6.52383 26.3079 5.66789 26.6969 4.96758 27.8641C4.38398 28.8368 4.18945 30.393 4.18945 30.393C4.18945 30.393 5.94023 29.0313 8.08008 29.6149"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9648 14.0211C9.825 14.0211 9.04687 14.2156 7.49062 13.4375C6.24562 12.815 4.76718 10.5195 4.76718 10.5195C4.76718 10.5195 3.59999 13.243 4.18359 15.9664C4.66834 18.2286 6.1289 19.6625 6.1289 19.6625"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.27937 20.0389C6.27937 20.0389 6.04716 20.7355 4.65406 20.9677C3.49315 21.1612 1.63567 20.2711 1.63567 20.2711C1.63567 20.2711 2.33235 23.0573 4.88624 25.147C7.44014 27.2366 9.29771 26.5401 9.29771 26.5401"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.7094 24.5595C13.107 24.789 12.4534 24.9148 11.7704 24.9148C8.76218 24.9148 6.32353 22.4761 6.32353 19.4679C6.32353 16.4596 8.76218 14.021 11.7704 14.021C14.7786 14.021 17.2173 16.4596 17.2173 19.4679C17.2173 21.0777 16.5189 22.5245 15.4085 23.5217"
                    stroke="white"
                    strokeWidth="0.998018"
                  />
                  <circle
                    r="2.72344"
                    transform="matrix(-1 0 0 1 11.7702 19.4678)"
                    stroke="white"
                    strokeWidth="0.998018"
                  />
                  <path
                    d="M9.29785 18.8782C9.29785 18.8782 10.4472 18.4138 11.8519 18.4138C13.2566 18.4138 14.1737 18.8782 14.1737 18.8782"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.4639 41.8146C18.0769 41.4276 17.1172 40.5143 16.3742 39.9571C15.6312 39.3999 15.2907 38.7962 15.2133 38.564C14.9037 39.8023 14.6096 42.7897 15.9099 44.8329C17.2101 46.8762 18.1543 47.6965 18.4639 47.8513M13.8202 36.7065C12.5819 36.4744 9.91955 36.5208 9.17656 38.564C8.43358 40.6072 8.86698 43.7494 9.17656 44.8329C9.64093 44.3686 10.8018 43.2077 11.7306 42.7433C12.5777 42.3197 13.0463 42.3563 13.1237 42.2789C12.8915 41.8146 12.4271 40.8858 12.8915 39.2606C13.2801 37.9004 13.8202 37.0161 13.8202 36.7065Z"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.4639 35.3136C18.2317 35.6232 17.5994 36.0662 17.0708 36.2424C16.3742 36.4746 15.9099 36.3972 15.6777 36.4746C15.6777 36.7067 15.8634 37.5426 16.6064 38.0998C17.3494 38.6571 18.1543 38.8738 18.4639 39.0286"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6963 41.8146C19.0833 41.4276 20.0429 40.5143 20.7859 39.9571C21.5289 39.3999 21.8695 38.7962 21.9468 38.564C22.2564 39.8023 22.5505 42.7897 21.2503 44.8329C19.9501 46.8762 19.0059 47.6965 18.6963 47.8513M23.3399 36.7066C24.5783 36.4744 27.2406 36.5208 27.9836 38.564C28.7266 40.6072 28.2932 43.7494 27.9836 44.8329C27.5192 44.3686 26.3583 43.2077 25.4296 42.7433C24.5825 42.3197 24.1139 42.3563 24.0365 42.2789C24.2687 41.8146 24.733 40.8858 24.2687 39.2606C23.8801 37.9004 23.3399 37.0161 23.3399 36.7066Z"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6963 35.3136C18.9285 35.6232 19.5607 36.0662 20.0894 36.2424C20.7859 36.4746 21.2503 36.3972 21.4825 36.4746C21.4825 36.7067 21.2967 37.5426 20.5538 38.0998C19.8108 38.6571 19.0059 38.8738 18.6963 39.0286"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99441 26.3697C12.7806 25.3153 14.4059 29.1815 18.1208 29.1815C20.4426 29.1815 23.9253 26.0182 26.2471 26.3697C28.5689 26.7212 29.2655 32.6963 26.9437 33.7508C24.7534 34.7455 21.6036 33.7508 18.1208 33.7508C14.569 33.7508 11.0103 35.0469 9.29784 33.7508C7.44033 32.3448 7.20821 27.4241 9.99441 26.3697Z"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M16.4955 28.1338C16.4955 28.1338 11.6398 26.8661 14.0284 24.0794C15.8997 21.8962 16.1624 25.5388 18.1525 25.5388C20.1425 25.5388 20.4136 22.3553 21.8256 23.7675C24.3205 26.2625 19.7461 28.1338 19.7461 28.1338"
                    stroke="white"
                    strokeWidth="0.998018"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M28.5104 39.5774C29.4603 37.8655 30.0013 35.8954 30.0013 33.7988C30.0013 32.3358 29.7378 30.9343 29.2558 29.6392M6.89289 29.6392C6.41089 30.9343 6.14746 32.3358 6.14746 33.7988C6.14746 36.4505 7.01277 38.9 8.47643 40.8804M16.2108 45.581C14.2783 45.2778 12.4997 44.5105 10.9928 43.3968M21.0561 45.35C22.8754 44.8817 24.5268 43.995 25.9014 42.7984"
                    stroke="white"
                    strokeWidth="1.19269"
                  />
                </svg>
                Experiencias
              </h2>
              {/* <img src="/assets/images/iconos/ic-festividades-ch.svg" alt="Festividades">Experiencias</h2> */}
              <ul>
                <li>
                  <a href="#">Festividades y eventos</a>
                </li>
                <li>
                  <a href="#">Artesanías del Perú</a>
                </li>
                <li>
                  <a href="#">Aventura</a>
                </li>
                <li>
                  <a href="#">Turismo Comunitario</a>
                </li>
                <li>
                  <a href="#">Perú Contigo</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <h2>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="44"
                      viewBox="0 0 39 44"
                      fill="none"
                    >
                      <path
                        d="M17.125 8.5L24.4649 7.45145C24.7844 7.40579 25.0974 7.56976 25.2417 7.8585L38.157 33.6889C38.3452 34.0653 38.1869 34.5228 37.8064 34.7025L25 40.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.3823 12.785L12.6264 6.46015C12.8579 6.32993 13.141 6.33187 13.3707 6.46524L24.2516 12.7832C24.4827 12.9174 24.625 13.1645 24.625 13.4318V42.25C24.625 42.6642 24.2892 43 23.875 43H1.75C1.33579 43 1 42.6642 1 42.25V13.4386C1 13.1677 1.14615 12.9178 1.3823 12.785Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="13"
                        cy="15.25"
                        r="2.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 23.875L7 35.875"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="8.875"
                        cy="25.375"
                        r="2.625"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="17.875"
                        cy="34.375"
                        r="2.625"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.75 8.125C19.75 4.18997 16.56 1 12.625 1C8.68997 1 5.5 4.18997 5.5 8.125C5.5 12.06 8.68997 15.25 12.625 15.25C13.552 15.25 14.4377 15.073 15.25 14.7509"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    Ofertas
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <rect
                        x="33"
                        y="33"
                        width="32"
                        height="32"
                        rx="2"
                        transform="rotate(-180 33 33)"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <path
                        d="M13.8679 24.6191L20.6985 18.3287C21.5722 17.524 21.5562 16.1396 20.6641 15.3554L13.8679 9.38105"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="42"
                      viewBox="0 0 44 42"
                      fill="none"
                    >
                      <path
                        d="M3.19434 16.9109H10.3269"
                        stroke="white"
                        strokeWidth="1.22393"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13.0705 7.03523C13.0705 10.3684 8.13254 15.8137 7.03523 15.8137C5.93791 15.8137 1 10.3684 1 7.03523C1 3.70206 3.70206 1 7.03523 1C10.3684 1 13.0705 3.70206 13.0705 7.03523Z"
                        stroke="white"
                        strokeWidth="1.22393"
                      />
                      <circle
                        cx="7.03528"
                        cy="7.03503"
                        r="2.74328"
                        stroke="white"
                        strokeWidth="1.22393"
                      />
                      <path
                        d="M33.3706 41.0518H40.5031"
                        stroke="white"
                        strokeWidth="1.22393"
                        strokeLinecap="round"
                      />
                      <path
                        d="M43.2462 31.1761C43.2462 34.5093 38.3083 39.9546 37.211 39.9546C36.1137 39.9546 31.1758 34.5093 31.1758 31.1761C31.1758 27.8429 33.8778 25.1409 37.211 25.1409C40.5442 25.1409 43.2462 27.8429 43.2462 31.1761Z"
                        stroke="white"
                        strokeWidth="1.22393"
                      />
                      <circle
                        cx="37.2111"
                        cy="31.1759"
                        r="2.74328"
                        stroke="white"
                        strokeWidth="1.22393"
                      />
                      <path
                        d="M7.26878 34.7596C7.26878 34.4221 6.9952 34.1485 6.65771 34.1485C6.32023 34.1485 6.04665 34.4221 6.04665 34.7596H7.26878ZM6.04665 34.7596C6.04665 35.0971 6.32023 35.3707 6.65771 35.3707C6.9952 35.3707 7.26878 35.0971 7.26878 34.7596H6.04665ZM25.3745 22.8777C25.3745 22.5403 25.1009 22.2667 24.7634 22.2667C24.4259 22.2667 24.1523 22.5403 24.1523 22.8777H25.3745ZM24.1523 22.8777C24.1523 23.2152 24.4259 23.4888 24.7634 23.4888C25.1009 23.4888 25.3745 23.2152 25.3745 22.8777H24.1523ZM13.7707 17.8308C14.1081 17.8308 14.3817 17.5572 14.3817 17.2197C14.3817 16.8822 14.1081 16.6087 13.7707 16.6087V17.8308ZM17.6505 16.6087C17.313 16.6087 17.0394 16.8822 17.0394 17.2197C17.0394 17.5572 17.313 17.8308 17.6505 17.8308V16.6087ZM19.9519 17.9014C20.2847 17.9575 20.6 17.7333 20.6561 17.4005C20.7123 17.0677 20.488 16.7524 20.1553 16.6963L19.9519 17.9014ZM22.7338 17.7648C22.4587 17.5693 22.0772 17.6338 21.8817 17.9089C21.6861 18.1839 21.7506 18.5654 22.0257 18.761L22.7338 17.7648ZM23.2222 19.9574C23.4177 20.2325 23.7992 20.297 24.0743 20.1015C24.3493 19.9059 24.4138 19.5244 24.2183 19.2494L23.2222 19.9574ZM25.2868 21.8279C25.2307 21.4951 24.9154 21.2708 24.5826 21.327C24.2498 21.3831 24.0256 21.6984 24.0817 22.0312L25.2868 21.8279ZM24.0817 23.7243C24.0256 24.0571 24.2498 24.3724 24.5826 24.4285C24.9154 24.4847 25.2307 24.2604 25.2868 23.9276L24.0817 23.7243ZM24.2183 26.5061C24.4138 26.2311 24.3493 25.8496 24.0743 25.654C23.7992 25.4585 23.4177 25.523 23.2222 25.7981L24.2183 26.5061ZM22.0257 26.9945C21.7506 27.1901 21.6861 27.5716 21.8817 27.8466C22.0772 28.1217 22.4587 28.1862 22.7338 27.9907L22.0257 26.9945ZM20.1553 29.0592C20.488 29.0031 20.7123 28.6878 20.6561 28.355C20.6 28.0222 20.2847 27.798 19.9519 27.8541L20.1553 29.0592ZM17.7717 27.9247C17.4342 27.9247 17.1606 28.1983 17.1606 28.5358C17.1606 28.8733 17.4342 29.1468 17.7717 29.1468V27.9247ZM14.2152 29.1468C14.5527 29.1468 14.8263 28.8733 14.8263 28.5358C14.8263 28.1983 14.5527 27.9247 14.2152 27.9247V29.1468ZM11.7368 28.0202C11.4041 28.0764 11.1798 28.3917 11.236 28.7245C11.2921 29.0572 11.6074 29.2815 11.9402 29.2253L11.7368 28.0202ZM9.63378 30.1813C9.90885 29.9858 9.97334 29.6043 9.77781 29.3292C9.58229 29.0542 9.2008 28.9897 8.92572 29.1852L9.63378 30.1813ZM7.30713 30.8038C7.11161 31.0788 7.1761 31.4603 7.45117 31.6559C7.72624 31.8514 8.10773 31.7869 8.30326 31.5118L7.30713 30.8038ZM7.34728 33.8182C7.40343 33.4854 7.17918 33.1702 6.8464 33.114C6.51362 33.0579 6.19834 33.2821 6.14218 33.6149L7.34728 33.8182ZM6.14218 35.9043C6.19833 36.2371 6.51362 36.4613 6.8464 36.4052C7.17918 36.349 7.40343 36.0338 7.34728 35.701L6.14218 35.9043ZM8.30326 38.0074C8.10773 37.7323 7.72624 37.6678 7.45117 37.8633C7.17609 38.0589 7.11161 38.4403 7.30713 38.7154L8.30326 38.0074ZM8.92572 40.334C9.20079 40.5295 9.58229 40.465 9.77781 40.19C9.97333 39.9149 9.90885 39.5334 9.63377 39.3379L8.92572 40.334ZM11.9402 40.2939C11.6074 40.2377 11.2921 40.462 11.236 40.7947C11.1798 41.1275 11.4041 41.4428 11.7368 41.499L11.9402 40.2939ZM14.1883 41.5945C14.5258 41.5945 14.7993 41.3209 14.7993 40.9834C14.7993 40.6459 14.5258 40.3724 14.1883 40.3724V41.5945ZM17.6729 40.3724C17.3354 40.3724 17.0618 40.6459 17.0618 40.9834C17.0618 41.3209 17.3354 41.5945 17.6729 41.5945V40.3724ZM20.2864 41.5945C20.6239 41.5945 20.8974 41.3209 20.8974 40.9834C20.8974 40.6459 20.6239 40.3724 20.2864 40.3724V41.5945ZM23.771 40.3724C23.4335 40.3724 23.1599 40.6459 23.1599 40.9834C23.1599 41.3209 23.4335 41.5945 23.771 41.5945V40.3724ZM26.3845 41.5945C26.7219 41.5945 26.9955 41.3209 26.9955 40.9834C26.9955 40.6459 26.7219 40.3724 26.3845 40.3724V41.5945ZM29.8691 40.3724C29.5316 40.3724 29.258 40.6459 29.258 40.9834C29.258 41.3209 29.5316 41.5945 29.8691 41.5945V40.3724ZM12.3157 17.8308H13.7707V16.6087H12.3157V17.8308ZM17.6505 17.8308H19.1054V16.6087H17.6505V17.8308ZM19.1054 17.8308C19.3943 17.8308 19.6771 17.855 19.9519 17.9014L20.1553 16.6963C19.8135 16.6386 19.4627 16.6087 19.1054 16.6087V17.8308ZM22.0257 18.761C22.4884 19.0898 22.8933 19.4948 23.2222 19.9574L24.2183 19.2494C23.8102 18.6752 23.3079 18.1729 22.7338 17.7648L22.0257 18.761ZM24.0817 22.0312C24.1281 22.3061 24.1523 22.5888 24.1523 22.8777H25.3745C25.3745 22.5204 25.3445 22.1696 25.2868 21.8279L24.0817 22.0312ZM24.1523 22.8777C24.1523 23.1667 24.1281 23.4494 24.0817 23.7243L25.2868 23.9276C25.3445 23.5859 25.3745 23.2351 25.3745 22.8777H24.1523ZM23.2222 25.7981C22.8933 26.2607 22.4884 26.6657 22.0257 26.9945L22.7338 27.9907C23.3079 27.5826 23.8102 27.0803 24.2183 26.5061L23.2222 25.7981ZM19.9519 27.8541C19.6771 27.9005 19.3943 27.9247 19.1054 27.9247V29.1468C19.4627 29.1468 19.8135 29.1169 20.1553 29.0592L19.9519 27.8541ZM19.1054 27.9247H17.7717V29.1468H19.1054V27.9247ZM14.2152 27.9247H12.8815V29.1468H14.2152V27.9247ZM12.8815 27.9247C12.4919 27.9247 12.1094 27.9574 11.7368 28.0202L11.9402 29.2253C12.2459 29.1738 12.5603 29.1468 12.8815 29.1468V27.9247ZM8.92572 29.1852C8.29976 29.6301 7.75207 30.1778 7.30713 30.8038L8.30326 31.5118C8.66897 30.9973 9.11928 30.547 9.63378 30.1813L8.92572 29.1852ZM6.14218 33.6149C6.07931 33.9875 6.04665 34.37 6.04665 34.7596H7.26878C7.26878 34.4384 7.2957 34.1239 7.34728 33.8182L6.14218 33.6149ZM6.04665 34.7596C6.04665 35.1492 6.07931 35.5317 6.14218 35.9043L7.34728 35.701C7.2957 35.3953 7.26878 35.0808 7.26878 34.7596H6.04665ZM7.30713 38.7154C7.75207 39.3414 8.29976 39.8891 8.92572 40.334L9.63377 39.3379C9.11928 38.9722 8.66897 38.5219 8.30326 38.0074L7.30713 38.7154ZM11.7368 41.499C12.1094 41.5618 12.4919 41.5945 12.8815 41.5945V40.3724C12.5603 40.3724 12.2459 40.3454 11.9402 40.2939L11.7368 41.499ZM12.8815 41.5945H14.1883V40.3724H12.8815V41.5945ZM17.6729 41.5945H20.2864V40.3724H17.6729V41.5945ZM23.771 41.5945H26.3845V40.3724H23.771V41.5945ZM29.8691 41.5945H31.1758V40.3724H29.8691V41.5945Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span>
                    Rutas Cortas
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <rect
                        x="33"
                        y="33"
                        width="32"
                        height="32"
                        rx="2"
                        transform="rotate(-180 33 33)"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <path
                        d="M13.8679 24.6191L20.6985 18.3287C21.5722 17.524 21.5562 16.1396 20.6641 15.3554L13.8679 9.38105"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41"
                      height="33"
                      viewBox="0 0 41 33"
                      fill="none"
                    >
                      <path
                        d="M28.063 23.3118H8.58635C7.1984 23.3118 6.07324 22.1866 6.07324 20.7986V3.83513C6.07324 2.44718 7.1984 1.32202 8.58636 1.32202H37.4872C38.8751 1.32202 40.0003 2.44718 40.0003 3.83513V20.7986C40.0003 22.1866 38.8751 23.3118 37.4872 23.3118H34.974"
                        stroke="white"
                        strokeWidth="1.2792"
                        strokeLinecap="round"
                      />
                      <path
                        d="M28.063 23.3118L36.8589 28.6521L34.974 23.3118"
                        stroke="white"
                        strokeWidth="1.2792"
                        strokeMiterlimit="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.4346 23.3115V25.1592C27.4346 26.5472 26.3094 27.6723 24.9215 27.6723H10.1067M4.66085 27.6723H3.21332C1.82536 27.6723 0.700205 26.5472 0.700205 25.1592V12.8576C0.700205 11.4696 1.82536 10.3445 3.21332 10.3445H6.07311"
                        stroke="white"
                        strokeWidth="1.2792"
                      />
                      <path
                        d="M10.1069 27.6726L3.1758 31.8808L4.66104 27.6726"
                        stroke="white"
                        strokeWidth="1.2792"
                        strokeMiterlimit="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.0991 7.60449H24.2604"
                        stroke="white"
                        strokeWidth="1.2792"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11.0991 12.0027H27.0877"
                        stroke="white"
                        strokeWidth="1.2792"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11.0991 17.0288H25.2029"
                        stroke="white"
                        strokeWidth="1.2792"
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.8229 6.95138C34.9362 6.24771 36.0843 6.07177 36.4322 6.59954C36.7801 7.12731 35.9103 8.24145 35.3885 8.71058L32.9531 10.4698C33.0111 12.3462 33.1271 16.3454 33.1271 17.3306C33.1271 18.3157 32.0834 18.7965 31.5615 18.9138L30.1699 14.164L29.648 12.9326L26.5169 14.8677L26.8648 16.8028L25.8211 17.6824L22.6899 13.2844L23.9076 12.4049L25.4732 13.4604L28.4304 10.9975L27.7346 10.2938C27.3171 9.87163 25.0093 7.88961 23.9076 6.95138C24.1395 6.54091 24.7426 5.71997 25.2992 5.71997C25.8559 5.71997 29.706 7.71371 31.5615 8.71058C31.8514 8.41737 32.7096 7.65505 33.8229 6.95138Z"
                        stroke="white"
                        strokeWidth="0.994936"
                        strokeMiterlimit="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    Blog Viajero
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <rect
                        x="33"
                        y="33"
                        width="32"
                        height="32"
                        rx="2"
                        transform="rotate(-180 33 33)"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <path
                        d="M13.8679 24.6191L20.6985 18.3287C21.5722 17.524 21.5562 16.1396 20.6641 15.3554L13.8679 9.38105"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
