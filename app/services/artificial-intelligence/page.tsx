import { CTASection } from "@/app/components/CTASection";
import { Hero } from "@/app/services/artificial-intelligence/Hero";
import FAQ from "@/app/components/FAQ";
import WorkSteps from "@/app/components/WorkSteps";
import { ServiceHero } from "@/app/components/ServiceHero";

const heroProps = {
  title: "Artificial Intelligence Consulting Services",
  subtitle:
    "We are a team of experts across multiple tech disciplines eager to provide a well-rounded custom artificial intelligence consulting services to help you meet your business needs. We aim to craft top-tier solutions that combine advanced technology with detailed insights to provide a real-world impact. Whether it’s streamlining operations, enhancing customer engagement, or unlocking new revenue streams, our data driven AI expertise ensures measurable success.",
};
const faqs = {
  subtitle:
    "Answers to common questions about our AI services, integration, security, and pricing.",
  faqs: [
    {
      question: "What AI services do you offer?",
      answer:
        "We build custom solutions including natural language processing, computer vision, recommendation systems, and automation pipelines tailored to business needs.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Reach out for an initial consultation. We run a discovery phase to define goals, data requirements, and a project plan with milestones and deliverables.",
    },
    {
      question: "How do you protect our data and privacy?",
      answer:
        "We use industry-standard encryption, strict access controls, and contractual agreements (e.g., NDA, data processing addendum). We don’t use customer data to train public models without consent.",
    },
    {
      question: "Can you integrate the solution with our existing systems?",
      answer:
        "Yes. We provide APIs, webhooks, and SDKs, and can build connectors to CRMs, databases, or cloud services to fit your architecture.",
    },
    {
      question: "What is a typical timeline for delivery?",
      answer:
        "Timelines vary by scope: a proof-of-concept can take 3–6 weeks, an MVP 6–12 weeks, and full production deliveries depend on complexity and integration needs.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "We offer flexible models: fixed-price for scoped projects, time-and-materials, or usage-based pricing for managed AI services. We provide a custom estimate after discovery.",
    },
  ],
};

const workSteps = {
  title: "Our 6-step AI Consulting Process",
  subtitle:
    "We partner with you to understand goals, prepare data, build and validate models, and deploy reliable, maintainable AI into production with ongoing monitoring and improvements.",
  steps: [
    {
      step: "1",
      title: "Discovery & Strategy",
      disc: "Define business objectives, success metrics, technical constraints, and a phased project roadmap including feasibility and ROI assessment.",
    },
    {
      step: "2",
      title: "Data Preparation & Engineering",
      disc: "Collect, clean, label, and transform data; build scalable data pipelines and storage that ensure quality and reproducibility.",
    },
    {
      step: "3",
      title: "Model Development & Prototyping",
      disc: "Iterate on model options, architectures, and features; produce proof-of-concept prototypes to validate technical approach and value.",
    },
    {
      step: "4",
      title: "Evaluation & Validation",
      disc: "Evaluate models using business and technical metrics, perform robustness and fairness checks, and validate on holdout and real-world data.",
    },
    {
      step: "5",
      title: "Integration & Deployment",
      disc: "Package models as APIs or services, integrate with existing systems, implement CI/CD and MLOps practices for scalable, reliable deployments.",
    },
    {
      step: "6",
      title: "Monitoring & Continuous Improvement",
      disc: "Monitor performance, data drift, and costs in production; iterate with retraining, updates, and ongoing support to sustain value.",
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <ServiceHero title={heroProps.title} subtitle={heroProps.subtitle} />
      <WorkSteps
        title={workSteps.title}
        subtitle={workSteps.subtitle}
        steps={workSteps.steps}
      />
      <FAQ faqs={faqs.faqs} subtitle={faqs.subtitle} />
      <CTASection />
    </div>
  );
}
