"use client";

import { useState } from "react";
import Image from "next/image";

export default function GaleriaView({ setCurrentView }) {
  const imagens = [
    "/prototipo/galeria1.jpg",
    "/prototipo/galeria2.jpg",
    "/prototipo/galeria3.jpg",
  ];

  const [fotoAtual, setFotoAtual] = useState(0);

  const nextSlide = () => {
    setFotoAtual((prev) => (prev + 1) % imagens.length);
  };

  const prevSlide = () => {
    setFotoAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="hero h-200 w-90 bg-[#0c0c0c] rounded-[30px] relative outline-[5px] outline-[rgb(85,82,82)] overflow-hidden flex flex-col">
      <div className="title text-white grid grid-cols-3 place-items-center mt-7.5 mb-4 z-20 relative w-full px-4">
        <i
          onClick={() => setCurrentView("camera")}
          className="fa-solid fa-arrow-left fa-xl cursor-pointer justify-self-start"
        />
        <h3 className="text-lg font-semibold justify-self-center">Galeria</h3>
        <div />
      </div>
      <div className="fotos-container relative w-full h-150 flex items-center justify-center overflow-hidden z-0">
        <div className="fotos-trilho">
          <Image
            src={imagens[fotoAtual]}
            alt={`Imagem da galeria ${fotoAtual + 1}`}
            width={360}
            height={600}
            className="img-galeria w-90 h-auto object-cover bg-center bg-no-repeat"
            priority
          />
        </div>
        <div className="arrows text-white absolute flex justify-between w-full top-1/2 -translate-y-1/2 px-2.5 z-10">
          <i
            onClick={prevSlide}
            className="fa-solid fa-angle-left fa-2xl cursor-pointer drop-shadow-lg opacity-70 hover:opacity-100 transition-opacity"
          />
          <i
            onClick={nextSlide}
            className="fa-solid fa-angle-right fa-2xl cursor-pointer drop-shadow-lg opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
}
