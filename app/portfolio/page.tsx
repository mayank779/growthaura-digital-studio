import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore GrowthAura portfolio projects across e-commerce, coaching, real estate, healthcare, and local services with measurable growth outcomes."
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Portfolio
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Case studies from startups, coaches, e-commerce, and local businesses
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
            We partner with ambitious teams to build websites, SEO systems, and ad campaigns that turn digital
            traffic into predictable growth.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Selected GrowthAura campaigns and buildouts"
            description="Each project includes services delivered and measurable outcomes."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
