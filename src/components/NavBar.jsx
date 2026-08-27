"use client";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-(--bg-primary)/85 backdrop-blur-md border-b border-(--border-color)">
      <nav className="w-full max-w-300 mx-auto px-6 py-4 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-6">
        <a
          href="#topo"
          className="flex items-center gap-2.5 font-display font-bold text-lg text-(--text-main)"
        >
          <Image src="/logo.png" alt="Logo MINDCORE" width={50} height={50} />
          MINDCORE
        </a>

        <ul
          className={`
              fixed lg:static top-16.25 lg:top-auto left-0 right-0 lg:left-auto lg:right-auto
              bg-(--bg-secondary) lg:bg-transparent border-b lg:border-b-0 border-(--border-color) lg:border-none
              flex flex-col lg:flex-row justify-center items-start lg:items-center
              gap-0 lg:gap-8 p-6 lg:p-0 text-sm font-medium
              transition-all duration-200 ease-in-out
              ${menuAberto ? "translate-y-0 opacity-100" : "translate-y-[-130%] opacity-0 lg:translate-y-0 lg:opacity-100"}
            `}
        >
          {[
            "solucao",
            "publico-alvo",
            "galeria",
            "nossa-equipe",
            "contato",
          ].map((id, index) => {
            const labels = [
              "A Solução",
              "Público-Alvo",
              "Galeria",
              "Nossa Equipe",
              "Contato",
            ];
            return (
              <li
                key={id}
                className="w-full lg:w-auto border-b lg:border-b-0 border-(--border-color)"
              >
                <a
                  href={`#${id}`}
                  onClick={() => setMenuAberto(false)}
                  className="block lg:inline-block py-3 lg:py-1 text-(--text-muted) hover:text-(--text-main) transition-colors relative group"
                >
                  {labels[index]}
                  <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-(--accent-blue) transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contato"
          className="hidden lg:inline-block justify-self-end bg-(--accent-blue) text-[#05070D] font-bold text-xs px-5 py-2.5 rounded-md transition-all duration-200 hover:bg-(--accent-hover) hover:-translate-y-px"
        >
          Fale com a equipe
        </a>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="lg:hidden bg-transparent border border-(--border-color) rounded-md w-10 h-10 text-(--text-main) text-lg flex items-center justify-center cursor-pointer"
          aria-label="Abrir Menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
