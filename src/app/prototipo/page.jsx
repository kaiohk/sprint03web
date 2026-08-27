"use client";

import { useState, useRef, useEffect } from "react";
import { MoreModes, GalleryView } from "@/components";
import Image from "next/image";

export default function CameraPage() {
  const [currentView, setCurrentView] = useState("camera");
  const [activeMode, setActiveMode] = useState("foto-btn");
  const [activeZoom, setActiveZoom] = useState("1x");
  const [flashColor, setFlashColor] = useState("text-[#ffbb00]");
  const imgBgRef = useRef(null);

  const botoesModosRef = useRef({});
  useEffect(() => {
    const timer = setTimeout(() => {
      const botaoAtual = botoesModosRef.current[activeMode];
      if (botaoAtual) {
        botaoAtual.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [activeMode, currentView]);

  const voltarParaFoto = () => {
    setActiveMode("foto-btn");
    localStorage.setItem("ultimoModo", "foto-btn");
    setCurrentView("camera");
  };

  useEffect(() => {
    const preferences = () => {
      try {
        const modo = window.localStorage.getItem("ultimoModo");
        if (modo) setActiveMode(modo);

        const zoom = window.localStorage.getItem("ultimoZoom");
        if (zoom) setActiveZoom(zoom);
      } catch (e) {
        console.error("Erro ao acessar o localStorage:", e);
      }
    };

    preferences();
  }, []);

  const getZoomScale = (zoom) => {
    switch (zoom) {
      case "0.6":
        return "scale(1)";
      case "1x":
        return "scale(1.4)";
      case "2":
        return "scale(2.0)";
      default:
        return "scale(1.4)";
    }
  };

  const selecionarModo = (botaoId) => {
    setActiveMode(botaoId);
    localStorage.setItem("ultimoModo", botaoId);

    if (botaoId === "mais-btn") {
      localStorage.setItem("ultimoModo", "foto-btn");
      setCurrentView("mais");
    }
  };

  const aplicarZoom = (textoZoom, animacao = true) => {
    setActiveZoom(textoZoom);
    const escala = getZoomScale(textoZoom);

    if (imgBgRef.current) {
      imgBgRef.current.style.transition = animacao
        ? "transform 0.4s ease-in-out"
        : "none";
      imgBgRef.current.style.transform = escala;
    }

    localStorage.setItem("ultimoZoom", textoZoom);
  };

  const handleFlashClick = () => {
    setFlashColor((prev) =>
      prev === "text-[#ffbb00]" ? "text-[#a7a7a7]" : "text-[#ffbb00]",
    );
  };

  const handleIaClick = () => {
    const iaPrompt = prompt(
      "Digite um prompt para a IA MindCore gerar na sua foto:",
    );
    if (iaPrompt) {
      alert("Comando recebido! Agora você pode tirar sua foto");
    }
  };

  const isVideoMode = activeMode === "video-btn";

  return (
    <div>
      <main className="scale-90 md:h-screen md:w-full flex items-center justify-center font-['Poppins']">
        {currentView === "camera" && (
          <div className="hero relative h-200 w-90 rounded-[30px] outline-[5px] outline-[rgb(85,82,82)] overflow-hidden bg-black">
            <div
              ref={imgBgRef}
              style={{ transform: getZoomScale(activeZoom) }}
              className="absolute inset-0 h-200 w-90 z-1"
            >
              <Image
                src="/prototipo/bg-img.jpg"
                alt="Câmera de fundo"
                width={1000}
                height={1000}
                className="object-cover bg-center bg-no-repeat h-200 w-90"
                priority
              />
            </div>

            <div className="ativos absolute top-0 flex justify-center w-full mt-4 gap-[15em] z-10 px-4">
              <button
                onClick={handleFlashClick}
                className={`botao-flash w-10 h-10 rounded-full bg-black/70 border-none flex items-center justify-center cursor-pointer ${flashColor} transition-colors`}
              >
                <i className="fa-solid fa-bolt-lightning fa-lg" />
              </button>
              <button className="botao-modos w-10 h-10 rounded-full bg-black/70 border-none text-[#a7a7a7] flex items-center justify-center cursor-pointer">
                <i className="fa-solid fa-table-cells fa-lg" />
              </button>
            </div>

            <div className="flutuantes absolute bottom-67.5 left-1/2 -translate-x-1/2 z-10 flex">
              <div className="zooms grid grid-cols-3 items-center place-items-center w-40 h-7.5 bg-black/50 rounded-[40px]">
                {["0.6", "1x", "2"].map((zoom) => (
                  <button
                    key={zoom}
                    onClick={() => aplicarZoom(zoom, true)}
                    className={`bg-transparent border-none cursor-pointer no-underline transition-all duration-200 text-[15px] ${
                      activeZoom === zoom
                        ? "text-[#ffbb00] opacity-100 scale-110 w-6.25 h-6.25 flex items-center justify-center bg-black/67 rounded-full font-bold"
                        : "text-white opacity-60 hover:opacity-100"
                    }`}
                  >
                    {zoom}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleIaClick}
              className="botao-ia absolute bottom-67.5 right-5 w-7.5 h-7.5 flex items-center justify-center bg-black/70 rounded-full border-none z-10 cursor-pointer"
            >
              <span className="text-[#ffbb00] cursor-pointer text-xs font-bold">
                IA
              </span>
            </button>

            <div className="actions absolute bottom-0 flex flex-col gap-8 w-full h-62.5 bg-[rgba(0,0,0,0.78)] rounded-b-[30px] z-10">
              <div className="modos flex gap-7.5 overflow-x-auto scroll-smooth px-35 items-center mt-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
                {[
                  { id: "video-btn", label: "Vídeo" },
                  { id: "foto-btn", label: "Foto" },
                  { id: "mais-btn", label: "Mais" },
                ].map((item) => (
                  <button
                    key={item.id}
                    ref={(el) => {
                      botoesModosRef.current[item.id] = el;
                    }}
                    onClick={() => selecionarModo(item.id)}
                    className={`bg-transparent border-none font-['Poppins'] text-[1.1rem] cursor-pointer shrink-0 transition-all duration-300 ${
                      activeMode === item.id
                        ? "text-[#ffbb00] scale-125 font-bold"
                        : "text-white hover:opacity-80 scale-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="funcoes flex flex-row items-center justify-between mx-8">
                <div
                  className="w-13.25 h-13.25 cursor-pointer rounded-lg overflow-hidden relative"
                  onClick={() => setCurrentView("galeria")}
                >
                  <Image
                    src="/prototipo/galeria.jpg"
                    alt="Galeria"
                    fill
                    className="object-cover"
                    sizes="53px"
                  />
                </div>

                <button
                  onClick={() => alert("Vídeo ou foto salva!")}
                  style={{
                    outline: isVideoMode ? "2px solid red" : "none",
                    outlineOffset: isVideoMode ? "0.2rem" : "0px",
                  }}
                  className="botao-foto w-21 h-21 rounded-full bg-black/67 border-2 border-white cursor-pointer active:scale-95 transition-transform"
                />

                <div className="camera-rotate w-13.5 h-13.5 rounded-full bg-black/67 flex items-center justify-center cursor-pointer">
                  <i className="fa-solid fa-camera-rotate fa-xl text-white" />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === "mais" && (
          <MoreModes voltarParaFoto={voltarParaFoto} />
        )}
        {currentView === "galeria" && (
          <GalleryView setCurrentView={setCurrentView} />
        )}
      </main>
    </div>
  );
}
