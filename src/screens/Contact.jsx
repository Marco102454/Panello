import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; // Assuming you have already initialized Firebase Firestore

import "../styles/contacto.css";
import image from "../assets/paisajesolar.jpg"; // Assuming this is your contact background image file path

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    try {
      // Add a new document with the form data to a collection called "contacts"
      const docRef = await addDoc(collection(db, 'contacts'), {
        nombre,
        correo,
        telefono,
        mensaje
      });
      console.log('Document written with ID: ', docRef.id);
      alert('¡Mensaje enviado con éxito!');
      
      // Clear the form fields after successful submission
      setNombre('');
      setCorreo('');
      setTelefono('');
      setMensaje('');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
    }
  };

  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh', // Ensures the background covers the entire viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={divStyle} className="contact-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre"/>
        <input type="email" name="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo"/>
        <input type="tel" name="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Telefono"/>
        <textarea name="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escribe aquí tu mensaje"></textarea>
        <input type="submit" value="ENVIAR" id="boton"/>
      </form>
    </div>
  );
};

export default Contact;
