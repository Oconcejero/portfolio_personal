import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] text-black py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
        {/* Texto "Sobre mí" */}
        <p className="text-base text-gray-800">
          Diseñador gráfico con años de experiencia en diversos campos del
          diseño gráfico. He trabajado en empresas de eventos, galerías de arte,
          agencias de comunicación, escuelas de diseño y, como me gusta decir a
          mí, siendo un duende de Papá Noel en una empresa juguetera diseñando
          juguetes. Reconvertido a desarrollador Full Stack.
        </p>

        {/* Línea divisoria */}
        <hr className="border-t border-gray-400 w-full my-6" />

        {/* Logotipo */}
        <h3 className="text-xl font-bold">neku</h3>

        {/* Menú horizontal */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/">Inicio</Link>
          <Link href="/about">Sobre mí</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contacto</Link>
        </nav>

        {/* Iconos sociales */}
        <div className="flex gap-4 text-xl mt-2">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-700 mt-4">
          © {new Date().getFullYear()} neku. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
