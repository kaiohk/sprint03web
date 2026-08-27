import Image from "next/image";

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 lg:py-28">
      <div className="w-full max-w-300 mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Galeria
          </h2>
          <p className="text-(--text-muted) text-base">
            Um olhar sobre a interface e a lógica por trás do projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-50 lg:auto-rows-auto">
          <figure className="rounded-4xl overflow-hidden border border-(--border-color) lg:col-span-1 lg:row-span-2">
            <Image
              className="w-full h-full object-cover"
              src="/galeria%20(2).png"
              alt="Galeria 2"
              width={1000}
              height={1000}
            />
          </figure>
          <figure className="rounded-4xl overflow-hidden border border-(--border-color)">
            <Image
              className="w-full h-full object-cover"
              src="/galeria%20(3).png"
              alt="Galeria 3"
              width={1000}
              height={1000}
            />
          </figure>
          <figure className="rounded-4xl overflow-hidden border border-(--border-color)">
            <Image
              className="w-full h-full object-cover"
              src="/galeria%20(4).png"
              alt="Galeria 4"
              width={1000}
              height={1000}
            />
          </figure>
          <figure className="rounded-4xl overflow-hidden border border-(--border-color) sm:col-span-2 lg:col-span-2">
            <Image
              className="w-full h-full object-cover"
              src="/galeria%20(1).png"
              alt="Galeria 1"
              width={1000}
              height={1000}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
