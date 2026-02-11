import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={`${project.name} project thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={72}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-ink-900">{project.name}</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-600">
            {project.industry}
          </span>
        </div>
        <p className="text-sm text-slate-600">{project.services.join(" + ")}</p>
        <p className="text-sm font-medium leading-relaxed text-slate-700">{project.result}</p>
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
        >
          View Case Study <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
