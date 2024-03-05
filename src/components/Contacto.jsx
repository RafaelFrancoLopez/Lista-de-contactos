import React from 'react';
import './Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'; 

const Contacto = ({ contacto, onDelete }) => {
  const handleDelete = () => {
    onDelete(contacto.id);
  };

  return (
    <div className="contacto-card">
      <h3>{contacto.nombre}  <FontAwesomeIcon className='fa-user' icon={faUser} /></h3>
      <p> <FontAwesomeIcon className='fa-phone' icon={faPhone} /> {contacto.numero}</p>
      <p> <FontAwesomeIcon className='fa-mail' icon={faEnvelope} /> {contacto.email}</p>
      <button onClick={handleDelete}><FontAwesomeIcon className='fa-trash' icon={faTrashCan} /></button>
    </div>
  );
};

export default Contacto;

