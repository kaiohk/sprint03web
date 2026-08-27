import Image from "next/image";

const publicItems = [
  {
    title: "Demora para achar funções",
    text: "Perde tempo procurando o modo certo no meio de várias opções.",
  },
  {
    title: "Perde momentos",
    text: "A interface lenta faz o momento ideal da foto passar.",
  },
  {
    title: "Sente-se confuso",
    text: "O excesso de opções na tela gera insegurança sobre qual usar.",
  },
  {
    title: "Dificuldade para aprender",
    text: "Sente dificuldade em usar a câmera como ferramenta de aprendizado.",
  },
];

export default function Public() {
  return (
    <section
      id="publico-alvo"
      className="py-16 lg:py-28 bg-(--bg-secondary) border-t border-b border-(--border-color)"
    >
      <div className="w-full max-w-300 mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Público-Alvo
          </h2>
          <p className="text-(--text-muted) text-base md:w-2xl">
            O projeto nasceu observando o comportamento de jovens que vivem com
            a câmera na mão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <article className="bg-(--bg-card) border border-(--border-color) rounded-[14px] p-8 grid gap-4">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full object-cover"
                src="/lucas.png"
                alt="Lucas"
                width={60}
                height={60}
              />
              <div>
                <h3 className="text-lg font-bold font-sans">Lucas, 20 anos</h3>
                <span className="text-(--text-muted) text-xs">
                  Universitário
                </span>
              </div>
            </div>
            <div className="grid gap-2 text-sm text-(--text-muted)">
              <p>
                <strong className="text-(--text-main)">Comportamento:</strong>{" "}
                usa a câmera diariamente, tanto para aprendizado quanto
                entretenimento.
              </p>
              <p>
                Gosta de produzir conteúdo para redes sociais e quer rapidez e
                praticidade em cada captura.
              </p>
            </div>
          </article>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {publicItems.map((dor, i) => (
                <div
                  key={i}
                  className="bg-(--bg-card) border border-(--border-color) rounded-[10px] p-5 text-sm text-(--text-muted)"
                >
                  <strong className="block text-(--text-main) font-display text-xs font-bold mb-1.5">
                    {dor.title}
                  </strong>
                  {dor.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
