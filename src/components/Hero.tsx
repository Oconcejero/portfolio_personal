import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <Container>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/img_home.png"
              alt="Foto de Neku"
              width={450}
              height={450}
            />
          </div>

          {/* Texto a la derecha */}
          <div className="text-center md:text-left max-w-xl md:max-w-none">
            {" "}
            <h1 className="text-3xl font-bold mb-4">
              {" "}
              MI NOMBRE ES NEKU, FULL-STACK DEVELOPER.{" "}
            </h1>{" "}
            <p className="text-lg text-gray-700 mb-6">
              {" "}
              Tras años dedicados al diseño gráfico he dado un vuelco a mi
              carrera para dedicarme a la programación.{" "}
            </p>{" "}
            <p className="text-lg text-gray-700">
              {" "}
              Estudiando el Máster de Full Stack en ConquerBlock.{" "}
            </p>{" "}
          </div>
        </div>
      </Container>
    </section>
  );
}
