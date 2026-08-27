const teamMembers = [
  {
    sigla: "KH",
    nome: "Kaio Hiroki Kinoshita",
    rm: "RM569127",
    desc: "responsável pela sprint de Web Development.",
  },
  {
    sigla: "LD",
    nome: "Leonardo Daniel dos Santos",
    rm: "RM571092",
    desc: "responsável pela sprint de Front End Design.",
  },
  {
    sigla: "MC",
    nome: "Matheus Dionisio Cintra",
    rm: "RM569844",
    desc: "responsável pela sprint de Software & Total Experience design.",
  },
  {
    sigla: "MS",
    nome: "Murilo Monteiro Silva",
    rm: "RM568719",
    desc: "responsável pela sprint de Storytelling e Inspiração Empreendedora.",
  },
  {
    sigla: "TB",
    nome: "Tiago Shimazaki Barros",
    rm: "RM570359",
    desc: "responsável pela print de Computational Thinking With Python.",
  },
];

export default function Team() {
  return (
    <section
      id="nossa-equipe"
      className="py-16 lg:py-28 bg-(--bg-secondary) border-t border-b border-(--border-color)"
    >
      <div className="w-full max-w-300 mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Nossa Equipe
          </h2>
          <p className="text-(--text-muted) text-base">
            Estudantes de Engenharia de Software da FIAP, equipe MINDCORE.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {teamMembers.map((membro, index) => (
            <article
              key={index}
              className="bg-(--bg-card) border border-(--border-color) rounded-xl p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-(--border-hover)"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-(--border-hover) to-(--bg-card) flex items-center justify-center font-display font-bold text-lg text-(--accent-blue) border border-(--border-hover)">
                {membro.sigla}
              </div>
              <h3 className="font-sans text-[0.98rem] font-bold mb-1">
                {membro.nome}
              </h3>
              <span className="text-(--accent-blue) text-[0.78rem] font-display uppercase tracking-wider mb-3 block">
                {membro.rm}
              </span>
              <p className="text-(--text-muted) text-[0.85rem] leading-relaxed">
                Integrante da equipe MINDCORE, {membro.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
