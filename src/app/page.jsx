"use client";

import Image from "next/image";
import {
  NavBar,
  Problem,
  Public,
  Gallery,
  GalleryImages,
  Team,
  Contact,
  Footer,
} from "../components";

export default function Page() {
  return (
    <div className="bg-(--bg-primary) text-(--text-main) antialiased overflow-x-hidden selection:bg-(--accent-blue) selection:text-[#05070D]">
      <NavBar />
      <main id="topo">
        <section className="relative pt-36 pb-24 bg-(--bg-primary) overflow-hidden">
          <div className="w-full max-w-300 mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="conteudo-hero">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
                Uma câmera mais simples,{" "}
                <span className="text-(--accent-blue)">do seu jeito.</span>
              </h1>
              <p className="text-(--text-muted) text-lg max-w-130 mb-9 leading-relaxed">
                Uma UI minimalista e inteligente que aprende com o seu jeito de
                fotografar e coloca os modos que você mais usa a um toque de
                distância. Sem excesso. Sem esforço. Só você.
              </p>
              <div className="flex gap-4 flex-wrap mb-12">
                <a
                  href="prototipo"
                  className="bg-(--accent-blue) text-[#05070D] px-6 py-3.5 rounded-lg font-bold text-sm transition-all duration-200 hover:bg-(--accent-hover) hover:-translate-y-0.5 inline-block"
                >
                  Conheça o protótipo
                </a>
                <a
                  href="#contato"
                  className="border border-(--border-color) text-(--text-main) px-6 py-3.5 rounded-lg font-bold text-sm transition-all duration-200 hover:border-(--accent-blue) hover:-translate-y-0.5 inline-block"
                >
                  Falar com a equipe
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                className="w-[80%] md:w-1/2 max-w-full rounded-[30px] object-cover shadow-2xl"
                src="/videoHero2.gif"
                alt="Demonstração da Interface da Câmera"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>
        <Problem />
        <Public />
        <Gallery />
        <GalleryImages />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
