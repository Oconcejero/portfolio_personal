"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#D9D9D9] border-b border-gray-300 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center relative">
        {/* IZQUIERDA: LOGO */}
        <h1 className="text-2xl text-black font-bold tracking-tight">Neku</h1>

        {/* CENTRO: MENÚ */}
        <ul className="flex gap-8 text-black font-medium text-lg absolute left-1/2 -translate-x-1/2">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about">Sobre mí</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>

        {/* DERECHA: ICONOS */}
        <div className="flex items-center gap-4 text-black text-xl ml-auto">
          <a
            href="https://github.com/Oconcejero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/oconcejero/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
