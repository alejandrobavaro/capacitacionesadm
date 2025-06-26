import React from "react";
import "../assets/scss/_03-Componentes/_AreaPrivada.scss";

const AreaPrivada = () => {
  return (
    <div className="area-privada-container">
      <h1>Acceso Área Privada</h1>
      <p>
        Bienvenido a la sección exclusiva para Administradores y Consorcistas. Desde aquí podrás acceder a tus documentos, balances, expensas y reportes de tu edificio.
      </p>

      <div className="opciones-acceso">
        <button className="btn-opcion">Ingresar al Sistema</button>
        <button className="btn-opcion">Descargar Expensas</button>
        <button className="btn-opcion">Reportar un Reclamo</button>
      </div>

      <p className="nota">
        Si aún no tenés usuario o tenés problemas de acceso, comunicate con nosotros a través del área de Contacto.
      </p>
    </div>
  );
};

export default AreaPrivada;
