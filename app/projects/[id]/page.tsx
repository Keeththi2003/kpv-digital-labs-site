import Image from "next/image";

const projects = {
  p1: {
    title: "Product Discovery Platform",
    description:
      "Research-driven platform that helped a fintech startup validate market fit and accelerate MVP delivery.",
    image: "/pr1.jpeg",
  },
  p2: {
    title: "Scalable Commerce API",
    description:
      "Headless commerce API built for high throughput, reducing latency and improving checkout conversion.",
    image: "/pr2.png",
  },
  p3: {
    title: "Enterprise Data Pipeline",
    description:
      "Robust ETL pipeline that unified analytics and slashed reporting time from hours to minutes.",
    image: "/pr3.jpeg",
  },
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id];

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={700}
        className="rounded-xl mb-8"
      />

      <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
      <p className="text-lg text-white/80 leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}
