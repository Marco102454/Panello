import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Nosotros.css"; // Importamos el archivo CSS para los estilos

// Importamos las imágenes
import logoPanello from "../assets/logopanello.jpg";
import paisajeSolar from "../assets/paisajesolar.jpg";

const Nosotros = () => {
  return (
    <div className="contenedor" style={{ backgroundImage: `url(${paisajeSolar})` }}>
      <img src={logoPanello} alt="Imagen del equipo" />
      <p>Panello se dedica a ofrecer soluciones energéticas sostenibles a través de la instalación de paneles solares de alta calidad. Nos apasiona contribuir a un futuro más verde y ayudar a nuestros clientes a ahorrar dinero en sus facturas de energía. Nuestros valores fundamentales son la responsabilidad, la innovación y la excelencia. Nos comprometemos a ofrecer a nuestros clientes un servicio personalizado y de alta calidad, utilizando los mejores productos del mercado. Panello ofrece una amplia gama de soluciones para cubrir las necesidades de cada cliente.</p>
      <Link className="boton" to="/Contacto">Contacto</Link>
    </div>
  );
};

export default Nosotros;
