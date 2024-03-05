import React from 'react';
import './Navegacion.css';

const Navegacion = ({ onAddContact }) => {
  return (
    <nav>
      <h1>Mi Lista de Contactos</h1>
      <button className="boton-agregar" onClick={onAddContact}>Agregar Contacto</button>
    </nav>
  );
};

export default Navegacion;
