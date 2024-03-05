import React, { useState, useEffect } from 'react';
import Contactos from './components/Contactos';
import ModalForm from './components/ModalForm';
import Navegacion from './components/Navegacion';
import defaultContacts from './contactos.json'; 

 
function App() {
  const [contactos, setContactos] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
   
    setContactos(defaultContacts);
  }, []); 

  const handleAddContact = (newContact) => {
    setContactos([...contactos, { ...newContact, id: Date.now() }]);
    setIsModalVisible(false);
  };

  const handleDeleteContact = (id) => {
    setContactos(contactos.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <Navegacion onAddContact={() => setIsModalVisible(true)} />
      <Contactos contactos={contactos} onDeleteContact={handleDeleteContact} />
      {isModalVisible && <ModalForm onCloseModal={() => setIsModalVisible(false)} onAddContact={handleAddContact} />}
    </div>
  );
}

export default App;
