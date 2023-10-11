import React from 'react';
import '../styles/destino.css'; // Importa el archivo CSS
export function Destinos(){
    return(
        
        <>
        <div className="contenedor">
            <div id='contend' className="container fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Destinos</h1>
                        <h4>¡A recorrer el Perú! Descubre todo lo que puedes conocer en cada una de las regiones</h4>
                    </div>
                </div>
            </div>
            {/* ---------------------------------------- */}
            <div className="container">
                <h1>Lo más buscado por los viajeros</h1>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-4">

                    </div>
                </div>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        
                    </div>
                </div>
            </div>
            {/* ---------------------- */}

            <div className="container">
                <h1>Descubre tu país</h1>
                <nav className="namvar">
                    <li>
                        <ul><a href="">Todos</a></ul>
                        <ul><a href="">Norte</a></ul>
                        <ul><a href="">Centro</a></ul>
                        <ul><a href="">Sur</a></ul>
                    </li>
                </nav>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
            {/* ------------------------ */}

            <div className="container">
                <h1>Rutas Cortas</h1>
                <div className="row">
                    <div className="col-4">
                        <p>Ver 12 lugares</p>
                    </div>
                    <div className="col-4">
                        <p>Ver 6 lugares</p>
                    </div>
                    <div className="col-4">
                        <p>Ver siete lugares</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}