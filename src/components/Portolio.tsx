import ProjectCard from "./ProjectCard";
import Image from "next/image";

export default function Portfolio() {
  // 👉 AQUÍ va tu array de proyectos
  const projects = [
    {
      title: "ADIDAS ORIGINALS WOMEN'S SUPERSTAR !!!",
      description: "Proyecto página completa de ZAPATOS",
      image: "projects/AxZapas.jpg",
      tech: "WORDPRESS - WOOCOMMERCE",
      link: "https://axzapas.ct.ws",
      date: "2026-01-05",
    },
    {
      title: "Nice to meet you! I'm Adam Keyes.",
      description: "Proyecto Portafolio Adam Keyes (Desarrollador)",
      image: "projects/AdamKeyes.jpg",
      tech: "HTML - CSS - SASS",
      link: "https://oconcejero.github.io/HTML-CSS-PORTFOLIO-ADAM/",
      date: "2026-01-04",
    },
    {
      title: "MODERN ART GALLERY",
      description: "Proyecto diseño y desarrollo de una galería de arte",
      image: "projects/ModernArtGallery.jpg",
      tech: "HTML - CSS - SASS",
      link: "https://oconcejero.github.io/HTML-CSS-MODERN-ART-GALLERY/",
      date: "2026-01-01",
    },
    {
      title: "Build your best community starting from here",
      description: "Proyecto página GAMERSROOM",
      image: "projects/GathSession.jpg",
      tech: "HTML - CSS - SASS",
      link: "https://oconcejero.github.io/HTML-CSS-HEADER-GATHSESSION/",
      date: "2024-01-10",
    },
    {
      title: "Bring back the beauty and glow of your skin",
      description: "Proyecto tienda de Belleza SKINCARE",
      image: "projects/GlowQueen.jpg",
      tech: "HTML - CSS - SASS",
      link: "https://oconcejero.github.io/CSS-HEADER-SPA-BEAUTY/",
      date: "2025-02-01",
    },
    {
      title: "JUEGOS JAVASCRIPT",
      description: "BUSCAMINAS · SUDOKU · Proyecto ejercicios de JAVASCRIPT",
      image: "projects/JuegosJavascript.jpg",
      tech: "HTML - CSS - SASS - JAVASCRIPT",
      link: "https://oconcejero.github.io/JAVASCRIPT-JUEGOS/",
      date: "2024-02-01",
    },
    {
      title: "Proyecto tienda de calzado SNEAKERS",
      description: "Diseño tienda de calzado",
      image: "projects/Sneakers.jpg",
      tech: "WORDPRESS - WOOCOMMERCE",
      link: "https://github.com/Oconcejero/WORDPRESS-PRODUCT-PAGE-SNEAKERS",
      date: "2025-01-04",
    },

    {
      title: "SUDOKU",
      description: "Proyecto SUDOKU en REACT",
      image: "projects/SudokuReact.jpg",
      tech: "REACT",
      link: "https://oconcejero.github.io/react_sudoku/",
      date: "2024-02-01",
    },
    {
      title: "EJERCICIOS REACT",
      description: "Proyecto ejercicios REACT",
      image: "projects/EjerciciosReact.jpg",
      tech: "REACT",
      link: "https://oconcejero.github.io/VITE_REACT_TS/",
      date: "2024-02-01",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      {" "}
      <div className="max-w-6xl mx-auto px-4">
        {" "}
        <h2 className="text-3xl font-bold mb-6">PORTFOLIO</h2>{" "}
        <p className="text-gray-600 mb-10">
          {" "}
          La mayoría de trabajos actuales son prácticas y diferentes ejercicios
          de programas de desarrollo.{" "}
        </p>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
