"use client";
import { useState, useEffect } from "react";

export default function DynamicGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    fetch("https://6ae0e14cbe3bc8fead980abe.mockapi.io/api/v1/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => console.error("Erro ao buscar fotos:", err));
  }, []);

  const handleAddPhoto = async (e) => {
    e.preventDefault();
    if (!newTitle) return;

    const randomId = Math.floor(Math.random() * 1000) + 1;

    const newPhoto = {
      title: newTitle,
      imageUrl: `https://picsum.photos/id/${randomId}/600/800`,
      mode: "Modo Limpo",
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        "https://6ae0e14cbe3bc8fead980abe.mockapi.io/api/v1/photos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPhoto),
        },
      );
      const savedPhoto = await response.json();

      setPhotos([savedPhoto, ...photos]);
      setNewTitle("");
    } catch (err) {
      console.error("Erro ao salvar foto:", err);
    }
  };

  return (
    <section id="api-galeria" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Teste nossa galeria sincronizada!
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Dados consumidos em tempo real do nosso servidor mockado para simular
          o histórico do JOVI.
        </p>
        <p className="text-gray-400 text-xs sm:text-base mt-1">
          Aqui você poderá testar o nosso sistema para salvar fotos na galeria!
        </p>
      </div>

      <form
        onSubmit={handleAddPhoto}
        className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Nome da nova captura (ex: Pôr do sol)"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border border-gray-600 bg-gray-900/50 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-(--accent-blue) text-sm"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-(--accent-blue) text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-(--accent-hover) transition cursor-pointer hover:-translate-y-0.5 whitespace-nowrap shadow-md"
        >
          Simular Captura 📸
        </button>
      </form>

      {loading ? (
        <p className="text-center text-gray-500 py-8">
          Carregando capturas da API...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => {
            const validImageUrl =
              photo.imageUrl && photo.imageUrl.startsWith("http")
                ? photo.imageUrl
                : "https://picsum.photos/600/800";

            return (
              <div
                key={photo.id}
                className="bg-(--bg-secondary) rounded-xl shadow-md overflow-hidden border border-(--border-color) hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={validImageUrl}
                  alt={photo.title || "Foto capturada"}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-(--accent-blue) uppercase tracking-wider">
                    {photo.mode || "Modo Limpo"}
                  </span>
                  <h3 className="text-lg font-bold text-gray-200 mt-1">
                    {photo.title || "Sem título"}
                  </h3>
                  <span className="text-xs text-gray-400 block mt-auto pt-2">
                    Salvo via MockAPI
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
