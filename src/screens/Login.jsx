import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom
import '../styles/login.css'; // Importa tus estilos CSS personalizados
import image from "../assets/paisajesolar.jpg"; // Importa tu imagen de fondo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Si el inicio de sesión se realiza correctamente, muestra una alerta
      alert('¡Inicio de sesión exitoso!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="login-form">
        <h2 className="login-title">Inicio de Sesión</h2>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <button onClick={handleLogin} className="login-button">Iniciar sesión</button>
        {error && <p className="error-message">{error}</p>}
        <p>¿No tienes una cuenta? <Link to="/Registro">Regístrate</Link></p>
      </div>
    </div>
  );
};

export default Login;
