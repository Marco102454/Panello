import React from 'react';
import "../styles/descargar.css";

const Descargar = () => {
  return (
    <div className="descargar-container">
      <h2>Descargar App</h2>
      <p>Haz clic en el siguiente enlace para descargar la aplicación:</p>
      <a href="https://appdistribution.firebase.google.com/testerapps/1:744178616052:android:b5e8c5a9b7a19cfe6ac0a1/releases/1qd3kvae0bdgo?utm_source=firebase-console" download className="descargar-link">Descargar App</a>
    </div>
  );
};

export default Descargar;
