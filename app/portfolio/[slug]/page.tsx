import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: `${project.name} Case Study`,
    description: `${project.name} (${project.industry}) case study: ${project.result}`
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <section className="bg-ink-900 pb-16 pt-20 text-white sm:pt-24">
        <Container className="max-w-5xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
            Case Study
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">{project.name}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.1em] text-brand-200">{project.industry}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">{project.overview}</p>
          <p className="mt-4 text-lg font-semibold text-white">{project.result}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-slate-200">
            <Image
              src={project.thumbnail}
              alt={`${project.name} hero visual`}
              fill
              sizes="100vw"
              quality={74}
              className="object-cover"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold text-ink-900">Client Background</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{project.background}</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold text-ink-900">Challenges</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 sm:text-base">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-ink-900">Strategy</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:text-base">
              {project.strategy.map((item) => (
                <li key={item} className="flex gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-ink-900">Results</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <li key={metric} className="rounded-xl border border-brand-100 bg-brand-50 p-4 text-sm font-medium text-brand-800">
                  {metric}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="font-heading text-2xl font-semibold text-ink-900">Project Gallery</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {project.gallery.map((image) => (
                <div key={image} className="relative h-52 overflow-hidden rounded-2xl border border-slate-200">
                  <Image
                    src={image}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={72}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-mist-100 p-8 text-center sm:p-10">
            <h2 className="font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
              Want results like this? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Book a strategy call and we will map a practical growth plan for your business.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PrimaryLink href="/contact#lead-form">Book a Strategy Call</PrimaryLink>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
              >
                Back to Portfolio
              </Link>
            </div>
          </article>
        </Container>
      </section>
    </div>
  );
}
