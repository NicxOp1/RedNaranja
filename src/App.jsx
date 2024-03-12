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

  const handleMouseEnter = (id) => {
    setSelectedImage(id);
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
    setSelectedImage(null);
  };

  const imagenes = [
    { id: 1, src: imagen1 },
    { id: 2, src: imagen2 },
    { id: 3, src: imagen3 },
    { id: 4, src: imagen4 },
    { id: 5, src: imagen5 },
    { id: 6, src: imagen6 },
    { id: 7, src: imagen7 },
    { id: 8, src: imagen8 },
    { id: 9, src: imagen9 },
    { id: 10, src: imagen10 },
    { id: 11, src: imagen11 },
    { id: 12, src: imagen12 },
    { id: 13, src: imagen13 },
    { id: 14, src: imagen14 },
    { id: 15, src: imagen15 },
    { id: 16, src: imagen16 },
    { id: 17, src: imagen17 },
    { id: 18, src: imagen18 },
    { id: 19, src: imagen19 },
    { id: 20, src: imagen20 },
  ];

  return (
    <>
    <div className="galeria">
      {imagenes.map((imagen) => (
        <div
          className={`imagen ${selectedImage === imagen.id ? 'selected' : ''}`}
          key={imagen.id}
          onMouseEnter={() => handleMouseEnter(imagen.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={imagen.src} alt="Imagen" />
          {showCard && selectedImage === imagen.id && <Card imagen={imagen.src} onClose={handleMouseLeave} />}
        </div>
      ))}
    </div>
  </>
  );
}

export default App;