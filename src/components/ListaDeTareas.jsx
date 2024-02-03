import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../styles/ListaDeTareas.css';

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas);
    }
  }

  const borrarTarea = id => {
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareaActualizadas);
  }

  const modificarStatusTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completado = !tarea.completado;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completado={tarea.completado}
              eliminarTarea={borrarTarea}
              cambiarStatusTarea={modificarStatusTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;