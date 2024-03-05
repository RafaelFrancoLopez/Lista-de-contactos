import React, { useState } from 'react';
import Contacto from './Contacto';
import './Contactos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

const Contactos = ({ contactos, onDeleteContact }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contactos.filter(contacto => {
    return (
      contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contacto.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contacto.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='container'>
      <h2>Contactos</h2>
      
      <input
        className='input-busqueda'
        type="text"
        placeholder="Buscar contactos..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <FontAwesomeIcon className='fa-search' icon={faSearch} />
      <div className='user-container'>
        {filteredContacts.map(contacto => (
          <Contacto key={contacto.id} contacto={contacto} onDelete={onDeleteContact} />
        ))}
      </div>
    </div>
  );
};

export default Contactos;
