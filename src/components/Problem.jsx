const cardsItems = [
  {
    num: "01",
    title: "Tela limpa por padrão",
    desc: "Ao abrir o app, o usuário vê só o essencial: botão de captura e controle de zoom.",
  },
  {
    num: "02",
    title: "Interface que aprende com o uso",
    desc: "A IA observa o uso ao longo do tempo e aprende quais modos e ajustes cada pessoa mais usa.",
  },
  {
    num: "03",
    title: "Modos em destaque automático",
    desc: "Os recursos mais utilizados ganham mais destaque, reduzindo o tempo gasto procurando opções dentro da câmera.",
  },
  {
    num: "04",
    title: "Simplicidade e rapidez",
    desc: "Menos cliques entre abrir o app e registrar o momento, com uma interface que nunca atrapalha.",
  },
];

export default function Problem() {
  return (
    <section id="solucao" className="py-16 lg:py-28">
      <div className="w-full max-w-300 mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            O problema que resolvemos
          </h2>
          <p className="text-(--text-muted) text-base max-w-160">
            Hoje, os aplicativos de câmera oferecem cada vez mais funções. O
            problema é que, na hora de tirar uma foto, tantas opções podem
            acabar atrapalhando. Às vezes, até encontrar o modo ou ajuste certo,
            o momento já passou.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="flex flex-col">
            <article className="bg-(--bg-card) border border-(--border-color) border-l-[3px] border-l-(--accent-coral) rounded-[10px] p-7 mb-6">
              <h3 className="text-base text-(--accent-coral) mb-2.5 font-bold font-sans">
                O problema
              </h3>
              <p className="text-(--text-muted) text-[0.95rem] leading-relaxed">
                As câmeras dos smartphones possuem muitos recursos, mas nem
                sempre eles são fáceis de encontrar. Para quem usa apenas alguns
                modos com frequência, navegar por várias opções acaba tornando
                uma tarefa simples mais demorada do que deveria.
              </p>
            </article>
            <article className="bg-(--bg-card) border border-(--border-color) border-l-[3px] border-l-(--accent-blue) rounded-[10px] p-7 mb-6">
              <h3 className="text-base text-(--accent-blue) mb-2.5 font-bold font-sans">
                Nossa resposta
              </h3>
              <p className="text-(--text-muted) text-[0.95rem] leading-relaxed">
                A nossa proposta é tornar essa experiência mais simples. A
                interface observa quais modos e recursos o usuário mais utiliza
                e, com o tempo, passa a dar mais destaque a essas opções. Por
                exemplo: se uma pessoa usa bastante o modo Retrato, esse recurso
                pode aparecer com mais facilidade na interface. Assim, cada
                usuário passa a ter uma câmera mais próxima da forma como
                realmente costuma fotografar.
              </p>
            </article>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" role="list">
            {cardsItems.map((passo, idx) => (
              <div
                key={idx}
                className="bg-(--bg-card) border border-(--border-color) rounded-[10px] p-6 transition-all duration-200 hover:border-(--border-hover) hover:-translate-y-1"
                role="listitem"
              >
                <span className="font-display text-(--accent-blue) text-xs font-semibold mb-2.5 block">
                  {passo.num}
                </span>
                <h4 className="font-sans text-[1.02rem] font-bold mb-2">
                  {passo.title}
                </h4>
                <p className="text-(--text-muted) text-sm leading-relaxed">
                  {passo.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
