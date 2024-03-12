import './App.css'
import imagen1 from './assets/imagen1.png'
import imagen2 from "./assets/imagen2.png"
import imagen3 from "./assets/imagen3.png"
import imagen4 from "./assets/imagen4.png"
import imagen5 from "./assets/imagen5.png"
import imagen6 from "./assets/imagen6.png"
import imagen7 from "./assets/imagen7.png"
import imagen8 from "./assets/imagen8.png"
import imagen9 from "./assets/imagen9.png"
import imagen10 from "./assets/imagen10.png"
import imagen11 from "./assets/imagen11.png"
import imagen12 from "./assets/imagen12.png"
import imagen13 from "./assets/imagen13.png"
import imagen14 from "./assets/imagen14.png"
import imagen15 from "./assets/imagen15.png"
import imagen16 from "./assets/imagen16.png"
import imagen17 from "./assets/imagen17.png"
import imagen18 from "./assets/imagen18.png"
import imagen19 from "./assets/imagen19.png"
import imagen20 from "./assets/imagen20.png"

import { useState } from 'react';
function Card({ imagen, contactMe }) {
  return (
    <div className="card">
      <img src={imagen} alt="Imagen seleccionada" />
      <h3>Diputado</h3>
      <p>Lorem ipsum dolor, </p>
      <button onClick={contactMe}>Contáctame</button>
    </div>
  );
}

function App() {
  const [showCard, setShowCard] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleMouseEnter = (imagen) => {
    setSelectedImage(imagen);
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
    setSelectedImage(null);
  };

  const imagenes = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
    imagen11,
    imagen12,
    imagen13,
    imagen14,
    imagen15,
    imagen16,
    imagen17,
    imagen18,
    imagen19,
    imagen20
  ];

  return (
    <>
    <div className="galeria">
      {imagenes.map((imagen, index) => (
        <div
          className={`imagen ${selectedImage === imagen ? 'selected' : ''}`}
          key={index}
          onMouseEnter={() => handleMouseEnter(imagen)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={imagen} alt="Imagen" />
          {showCard && selectedImage === imagen && <Card imagen={selectedImage} onClose={handleMouseLeave} />}
        </div>
      ))}
    </div>
  </>
  );
}

export default App;