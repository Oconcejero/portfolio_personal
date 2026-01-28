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
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-black focus:outline-none focus:text-black active:text-black"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-gray-900 text-center mb-2">{description}</p>
          <p className="text-sm text-center text-gray-500 mb-4">{tech}</p>
        </div>
      </div>
    </a>
  );
}
