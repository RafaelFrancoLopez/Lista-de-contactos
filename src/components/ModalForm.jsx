import React, { useState } from 'react';
import './ModalForm.css';

function ModalForm({ onCloseModal, onAddContact }) {
  const [inputValues, setInputValues] = useState({
    nombre: '',
    numero: '',
    email: ''
  });

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!inputValues.nombre || !inputValues.numero || !inputValues.email) {
      alert('Por favor ingrese todos los campos');
      return;
    }
    onAddContact(inputValues);
    setInputValues({ nombre: '', numero: '', email: '' });
    onCloseModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
      <button className="close-btn" onClick={onCloseModal}>X</button>
        <h2>Registra tu contacto</h2>
        <form className="form-contactos">
          <input type="text" name="nombre" placeholder="Nombre" value={inputValues.nombre} onChange={handleChange} />
          <input type="text" name="numero" placeholder="Número de teléfono" value={inputValues.numero} onChange={handleChange} />
          <input type="email" name="email" placeholder="Correo electrónico" value={inputValues.email} onChange={handleChange} />
          <button type="button" className='form-btn' onClick={handleSave}>Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;

