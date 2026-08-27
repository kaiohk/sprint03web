"use client";
import { useState } from "react";

export default function Contact() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagemEnviada(true);
    setTimeout(() => {
      setMensagemEnviada(false);
      e.target.reset();
    }, 4000);
  };
  return (
    <section id="contato" className="py-16 lg:py-28">
      <div className="w-full max-w-300 mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Contato
          </h2>
          <p className="text-(--text-muted) text-base">
            Tem dúvidas sobre a nossa ideia ou quer trocar uma ideia sobre o
            projeto? Fale com a equipe MINDCORE.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-(--bg-card) border border-(--border-color) rounded-[14px] p-8 grid gap-5 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="grid gap-1.5">
              <label
                htmlFor="campo-nome"
                className="text-xs text-(--text-muted)"
              >
                Nome
              </label>
              <input
                type="text"
                id="campo-nome"
                name="nome"
                placeholder="Seu nome"
                required
                className="bg-(--bg-primary) border border-(--border-color) rounded-lg p-3 text-(--text-main) text-sm focus:border-(--accent-blue) focus:outline-none"
              />
            </div>
            <div className="grid gap-1.5">
              <label
                htmlFor="campo-email"
                className="text-xs text-(--text-muted)"
              >
                E-mail
              </label>
              <input
                type="email"
                id="campo-email"
                name="email"
                placeholder="voce@exemplo.com"
                required
                className="bg-(--bg-primary) border border-(--border-color) rounded-lg p-3 text-(--text-main) text-sm focus:border-(--accent-blue) focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="campo-assunto"
              className="text-xs text-(--text-muted)"
            >
              Assunto
            </label>
            <input
              type="text"
              id="campo-assunto"
              name="assunto"
              placeholder="Sobre o que você quer falar?"
              className="bg-(--bg-primary) border border-(--border-color) rounded-lg p-3 text-(--text-main) text-sm focus:border-(--accent-blue) focus:outline-none"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="campo-mensagem"
              className="text-xs text-(--text-muted)"
            >
              Mensagem
            </label>
            <textarea
              id="campo-mensagem"
              name="mensagem"
              placeholder="Escreva sua mensagem para a equipe MINDCORE"
              required
              className="bg-(--bg-primary) border border-(--border-color) rounded-lg p-3 text-(--text-main) text-sm focus:border-(--accent-blue) focus:outline-none resize-y min-h-27.5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-(--accent-blue) text-[#05070D] border-none p-3.5 rounded-lg font-bold text-sm cursor-pointer transition-all duration-200 hover:bg-(--accent-hover) hover:-translate-y-0.5"
          >
            Enviar mensagem
          </button>

          {mensagemEnviada && (
            <p className="text-xs text-(--accent-blue) font-medium mt-1">
              Mensagem enviada! A equipe MINDCORE vai responder em breve.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
