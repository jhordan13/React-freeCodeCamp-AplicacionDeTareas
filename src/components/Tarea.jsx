import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completado, cambiarStatusTarea, eliminarTarea }) {

  return(
    // <div className={ completado ? 'tarea-contenedor completado' : 'tarea-contenedor' }>
    <div className={`tarea-contenedor ${completado ? 'completado' : ''}`.trim()}>
      <div 
        className="tarea-texto"
        onClick={() => cambiarStatusTarea(id)}
      >
        { texto }
      </div>
      <div 
        className="tarea-contenedor-icono"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;