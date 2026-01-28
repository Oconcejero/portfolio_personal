import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* SOBRE MI */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Texto a la izquierda */}
          <div className="md:w-2/3">
            <h1 className="text-4xl text-black font-bold mb-4">SOBRE MI</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Soy diseñador gráfico desde hace años que emprendí el viaje de la
              creatividad. Después de pasar por varios trabajos, la empresa en
              la que estaba como creativo y diseñador de producto, cerró
              inesperadamente dejándome en la tesitura de qué hacer con mi
              futuro profesional.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              El mundo de la programación siempre me pareció algo curioso y ya
              lo estudié, no teniendo nada que ver como lo que existe ahora,
              cuando estudiaba mis primeros años de diseñador gráfico.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Ahora, buscando aspiraciones de desarrollo personal y laboral, me
              veo inmerso en este amplio mundo de la programación.
            </p>
          </div>
          {/* Imagen a la derecha */}
          <div className="md:w-1/3 flex justify-center md:justify-end mb-19">
            <Image
              src="/img_about.png" // ajusta el nombre según tu archivo
              alt="Foto de Oscar"
              width={750}
              height={750}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        {/* PROGRAMAS DE DESARROLLO */}
        <div className="max-w-6xl mx-auto px-4 space-y-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl text-black text-center font-semibold mb-2">
              PROGRAMAS DE DESARROLLO
            </h2>
            <p className="text-gray-700 text-lg text-center leading-relaxed mb-4">
              Actualmente estoy estudiando un Máster de programación Full Stack
              en la escuela ConquerBlocks donde ya he trabajado con diferentes
              programas y lenguajes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Image src="/SVGs/HTML5.svg" alt="HTML5" width={50} height={50} />
              <Image src="/SVGs/CSS.svg" alt="CSS3" width={50} height={50} />
              <Image
                src="/SVGs/JS.svg"
                alt="JavaScript"
                width={50}
                height={50}
              />
              <Image
                src="/SVGs/DJANGO.svg"
                alt="Django"
                width={50}
                height={50}
              />
              <Image
                src="/SVGs/WP.svg"
                alt="WordPress"
                width={50}
                height={50}
              />
              <Image
                src="/SVGs/GITHUB.svg"
                alt="GitHub"
                width={50}
                height={50}
              />
              <Image src="/SVGs/REACT.svg" alt="React" width={50} height={50} />
            </div>
          </div>
          {/* SKILLS DESTACADAS */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl text-black text-center font-semibold mb-2">
              SKILLS DESTACADAS
            </h2>
            <p className="text-gray-700 text-lg text-center text-center leading-relaxed">
              Alta capacidad de aprendizaje · Trabajo en equipo · Trabajo bajo
              presión · Creatividad · Actitud positiva · Adaptabilidad ·
              Responsabilidad · Trato con el cliente · Entorno MAC · Entorno
              Windows
            </p>
          </div>

          {/* PROGRAMAS DE DISEÑO */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl text-black text-center font-semibold mb-2">
              PROGRAMAS DE DISEÑO
            </h2>
            <p className="text-gray-700 text-lg text-center leading-relaxed mb-4">
              Como era esperable, también manejo programas de diseño. Siempre me
              he considerado un “todoterreno”. Un “solucionador de problemas”.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Image
                src="/SVGs/PS.svg"
                alt="Photoshop"
                width={60}
                height={60}
              />
              <Image src="/SVGs/ID.svg" alt="InDesign" width={60} height={60} />
              <Image
                src="/SVGs/AI.svg"
                alt="Illustrator"
                width={60}
                height={60}
              />
              <Image
                src="/SVGs/PR.svg"
                alt="Premiere Pro"
                width={60}
                height={60}
              />
              <Image
                src="/SVGs/AE.svg"
                alt="After Effects"
                width={60}
                height={60}
              />
              <Image src="/SVGs/MAX.svg" alt="Max" width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
