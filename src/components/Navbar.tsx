"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-4 sm:px-6 md:px-10 bg-[#D9D9D9] border-b border-gray-300 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* IZQUIERDA: LOGO */}
        <h1 className="text-2xl text-black font-bold tracking-tight">Neku</h1>

        {/* CENTRO: MENÚ ESCRITORIO */}
        <ul className="hidden md:flex gap-6 sm:gap-8 text-black font-medium text-base sm:text-lg absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
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

        {/* BOTÓN HAMBURGUESA (solo móvil) */}
        <button
          className="md:hidden ml-auto text-black"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {/* Icono simple de hamburguesa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeWidth={2}
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#D9D9D9] border-b border-gray-300">
            <ul className="flex flex-col items-center gap-4 py-6 text-black font-medium text-lg">
              <li>
                <Link href="/" onClick={() => setOpen(false)}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setOpen(false)}>
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={() => setOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* DERECHA: ICONOS */}
        <div className="hidden md:flex items-center gap-4 text-black text-xl ml-auto">
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
