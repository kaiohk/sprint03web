"use client";

export default function MoreModes({ voltarParaFoto }) {
  const itensModos = [
    { icon: "fa-expand", label: "Alta Resolução" },
    { icon: "fa-panorama", label: "Panorâmica" },
    {
      icon: "fa-file-lines",
      label: (
        <>
          Documento
          <br />
          Ultra HD
        </>
      ),
    },
    { icon: "fa-hourglass-half", label: "Câmera Lenta" },
    { icon: "fa-stopwatch", label: "Intervalo" },
    { icon: "fa-moon", label: "Superlua" },
    { icon: "fa-star", label: "Astro" },
    { isText: true, text: "PRO", label: "Profissional" },
    { icon: "fa-person-running", label: "Instantâneo" },
    { icon: "fa-utensils", label: "Comida" },
    { icon: "fa-picture-in-picture", label: "Visualização Dupla" },
    { icon: "fa-bullseye", label: "Feito em Movimento" },
    { icon: "fa-user", label: "Retrato" },
    { icon: "fa-cloud-moon", label: "Noite" },
    { icon: "fa-film", label: "Microfilme" },
  ];
  const linhas = [];
  for (let i = 0; i < itensModos.length; i += 3) {
    linhas.push(itensModos.slice(i, i + 3));
  }

  return (
    <div className="hero h-200 w-90 bg-[#0c0c0c] rounded-[30px] relative outline-[5px] outline-[rgb(85,82,82)]">
      <div className="icons text-white text-[14px] mt-11.5 mx-2.5 text-center flex flex-col gap-5">
        {linhas.map((linha, rowIndex) => (
          <div key={rowIndex} className="row grid grid-cols-3">
            {linha.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="item flex flex-col items-center gap-1"
              >
                <div className="icon w-13.5 h-13.5 rounded-full bg-[#4c4c4c] flex justify-center items-center font-medium">
                  {item.isText ? (
                    item.text
                  ) : (
                    <i className={`fa-solid ${item.icon} text-[20px]`} />
                  )}
                </div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="modos grid grid-cols-3 place-items-center mt-8">
        <button
          onClick={voltarParaFoto}
          className="bg-none border-none text-white font-['Poppins'] text-[1.1rem] cursor-pointer shrink-0 transition-all duration-300"
        >
          Foto
        </button>
        <button className="bg-none border-none text-[#ffbb00] font-['Poppins'] text-[1.1rem] cursor-pointer shrink-0 transition-all duration-300">
          Mais
        </button>
      </div>

      <h3 className="editar text-white absolute bottom-10 right-7 font-normal cursor-pointer">
        Editar
      </h3>
    </div>
  );
}
