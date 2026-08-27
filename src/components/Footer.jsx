export default function Footer() {
  return (
    <footer className="bg-(--bg-secondary) border-t border-(--border-color) pt-16 pb-6">
      <div className="w-full max-w-300 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr_1fr] gap-10 pb-12">
          <div className="flex flex-col items-start">
            <a
              href="#topo"
              className="font-display text-2xl font-bold text-(--accent-blue) mb-3 transition-opacity hover:opacity-80"
            >
              JOVI
            </a>
            <p className="text-(--text-muted) text-sm leading-relaxed max-w-82.5">
              Uma câmera mais simples, pensada para se adaptar ao jeito de cada
              pessoa.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="font-display text-sm text-(--text-main) mb-4 font-bold">
              Navegação
            </h3>
            <nav
              className="flex flex-col gap-2.5"
              aria-label="Navegação do rodapé"
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
                  <a
                    key={id}
                    href={`#${id}`}
                    className="text-(--text-muted) text-sm transition-all duration-200 hover:text-(--accent-blue) hover:translate-x-1"
                  >
                    {labels[index]}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="font-display text-sm text-(--text-main) mb-4 font-bold">
              MINDCORE
            </h3>
            <p className="text-(--text-muted) text-sm leading-relaxed">
              Projeto desenvolvido por estudantes de Engenharia de Software da
              FIAP para a Challenge 2026.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-(--border-color) text-(--text-muted) text-xs">
          <p>© 2026 MINDCORE. Todos os direitos reservados.</p>
          <span className="text-(--accent-blue) font-display font-semibold">
            FIAP Challenge 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
