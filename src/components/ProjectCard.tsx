type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tech: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500 mb-4">{tech}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
}
