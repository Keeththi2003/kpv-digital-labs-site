import { CTASection } from "@/app/components/CTASection";
import { Hero } from "./Hero";
import Project from "./Project";

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    href: string;
};

const projects = [
  {
    id: "p1",
    title: "Product Discovery Platform",
    description:
      "Research-driven platform that helped a fintech startup validate market fit and accelerate MVP delivery.",
    image: "/pr1.jpeg",
    href: "#",
  },
  {
    id: "p2",
    title: "Scalable Commerce API",
    description:
      "Headless commerce API built for high throughput, reducing latency and improving checkout conversion.",
    image: "/pr2.png",
    href: "#",
  },
  {
    id: "p3",
    title: "Enterprise Data Pipeline",
    description:
      "Robust ETL pipeline that unified analytics and slashed reporting time from hours to minutes.",
    image: "/pr3.jpeg",
    href: "#",
  },
];

export default async function Home(props: { params: Promise<{ id: string }> }) {
      const { id } = await props.params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center text-red-500 py-20">
        Project not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center font-sans dark:bg-black">
      <Hero title={project.title} description={project.description} />
      <Project/>
      <CTASection />
    </div>
  );
}
