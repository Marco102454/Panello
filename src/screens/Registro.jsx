import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import '../styles/registro.css'; // Importa el archivo de estilos
import image from "../assets/paisajesolar.jpg"; // Importa la imagen de fondo

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistro = async () => {
    try {
      // Crea un nuevo usuario utilizando el método createUserWithEmailAndPassword
      await createUserWithEmailAndPassword(auth, email, password);
      // Si el registro se realiza correctamente, muestra una alerta
      alert('¡Registro exitoso! Se ha enviado un correo electrónico de verificación.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-containers" style={{backgroundImage: `url(${image})`}}>
      <h2 className="register-titles">Registro</h2>
      <div className="input-containers">
        <label htmlFor="email" className="labels">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-fields"
        />
      </div>
      <div className="input-containers">
        <label htmlFor="password" className="labels">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-fields"
        />
      </div>
      <button onClick={handleRegistro} className="register-buttons">Registrarse</button>
      {error && <p className="error-messages">{error}</p>}
    </div>
  );
};

export default Registro;
