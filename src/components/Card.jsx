import React from 'react';



const Card = ({ record }) => {
  let tipo_san = record.tipo_sangre;
  console.log(tipo_san)
  const getBloodTypeImage = (tipo_san) => {
    switch (tipo_san) {
      case 1:
        return '../../public/Assets.xcassets/A+.imageset/A+.png';
      case 2:
        return '../../public/Assets.xcassets/A-.imageset/A-.png';
      case 3:
        return '../../public/Assets.xcassets/B+.imageset/B+.png';
      case 4:
        return '../../public/Assets.xcassets/B-.imageset/B-.png';
      case 5:
        return '../../public/Assets.xcassets/O+.imageset/O+.png';
      case 6:
        return '../../public/Assets.xcassets/O-.imageset/O-.png';
      case 7:
        return '../../public/Assets.xcassets/AB+.imageset/AB+.png';
      case 8:
        return '../../public/Assets.xcassets/AB-.imageset/AB-.png';
      default:
        return 'default.png';
    }
  };

  const bloodTypeImage = getBloodTypeImage(record.tipo_sangre);
  
  return (
    <div className="w-[300px] h-[400px] bg-white text-black flex flex-col justify-between rounded-lg p-4 " key={record.id}>
      <div className="flex justify-between">
        <div className="flex-1 font-bold" id="bold-title">{record.nombre_apellido_donatario}</div>
        <div id="basura">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        <div id="whatsapp">
          <a href="https://wa.me/595986501547?text=esto es un test a">
            <ion-icon name="logo-whatsapp" className=" text-2xl"></ion-icon>
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex-1" id="telefono">Telefono:</div>
        <div id="nro-telefono">{record.creado_por}</div>
      </div>
      <div className="flex justify-between">
        <div id="ci">CI:</div>
        <div id="nro-ci">{record.cedula_donatario}</div>
      </div>
      <div className="flex justify-between">
        <div id="lugar">Lugar establecido: </div>
        <div id="lugarD">{record.establecimiento}</div>
      </div>
      <div className="flex justify-between">
        <div id="sangre">Tipo de sangre:</div>
        <div id="tipo">  <img src={bloodTypeImage} alt={record.tipo_sangre} width={"30px"} height={"30px"} /></div>
      </div>
      <div className="flex justify-between">
        <div id="volumenes">Volumenes requeridos: </div>
        <div id="nro-vol">{record.volumenes_necesarios}</div>
      </div>
      <div className="flex justify-between">
        <div id="fecha">Fecha limite</div>
        <div id="fecha-limite">{record.fecha_limite}</div>
      </div>
      <div className="flex justify-center">
        <div id="token">{record.solicitud}</div>
      </div>
    </div>
  );
};

export default Card;
