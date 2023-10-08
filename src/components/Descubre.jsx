export function DescubreComponent() {
  const destinos = [
    {
      id: 1,
      nombre: "Casma",
      estado: "Ancash",
      imagenUrl:
        "https://www.viajespicaflorperu.net/images/nacionales/casma-semana-santa-baner.jpg",
    },
    {
      id: 2,
      nombre: "El valle de los Geiseres",
      estado: "Tacna",
      imagenUrl:
        "https://www.peru.travel/Contenido/Uploads/Interior%20Geiseres%202_637400906580449224.jpg",
    },
    {
      id: 3,
      nombre: "Acuaducto de Cantalloc",
      estado: "Ica",
      imagenUrl:
        "https://static.wixstatic.com/media/c3e050_f91542a8e3dc4d288412c2dfeda941c1.jpg/v1/fill/w_1024,h_558,al_c,q_85,enc_auto/c3e050_f91542a8e3dc4d288412c2dfeda941c1.jpg",
    },
    {
      id: 4,
      nombre: "Provincia Mariscal Caceres",
      estado: "San Martin",
      imagenUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKQj-qYrvj26LuwmLjwbkWCeUf23csT__Sw&usqp=CAU",
    },
  ];

  return (
    <>
      <div className="main-ds-container flex flex-wrap justify-content-center align-items-center mt-4 mb-3">
        {destinos.map((destino) => (
          <div key={destino.id}>
            <div className="image-container-ds">
              <img
                src={destino.imagenUrl}
                alt={destino.nombre}
                className="imageOferta-ds"
                width="600"
                height="366"
              />
              <div className="overlay-ds">
                <h2>{destino.nombre}</h2>
                <p><i className="pi pi-map-marker"></i> {destino.estado}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
