import React from 'react';
import image from "../assets/panel 4.avif";
import "../styles/home.css";

const Home = () => {
  return (
    <div className='container'>
      <header>
        <h1>Panello</h1>
        <h2>Bienvenidos a la página de panello</h2>
        <p> Ofrecemos un dispositivo para paneles solares de alta calidad </p>
      </header>
      <img className="emp" src={image} alt="" width="600px" />
    </div>
  );
};

export default Home;
