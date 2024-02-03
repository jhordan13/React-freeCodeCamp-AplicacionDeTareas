import React, { useState } from "react";
import '../styles/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid'; 

function TareaFormulario(props) {

  const [input, setInput] = useState('');
  
  const manejarCambio = e => {
    // console.log('value: ', e.target.value);
    setInput(e.target.value)
  }

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completado: false
    }

    props.onSubmit(tareaNueva);
    setInput('');
  }

  return(
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}
    >
      <input 
        type="text" 
        className="tarea-input"
        placeholder="Escribe una tarea"
        name="texto"  
        value={input} // Enlazar el valor del input con el estado
        onChange={manejarCambio}
      />
      <button
        className="tarea-boton"
      >
        Agregar tarea
      </button>
    </form>
  );
}

export default TareaFormulario;