import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, projectFilters, type Project } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="glass group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1.5 hover:glow-gold"
    >
      <div
        className="relative h-44 overflow-hidden"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.category}
        </span>
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white drop-shadow">
          {project.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="my-5 grid grid-cols-3 gap-2 border-y border-border py-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-lg font-extrabold text-gradient-gold">
                {m.value}
              </div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-background/50 px-2 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          <a
            href={project.live}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
          >
            <ExternalLink className="size-4" /> Live
          </a>
          <a
            href={project.github}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            <Github className="size-4" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { tr } = useI18n();
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title={tr("projects.title")} />

        <Reveal className="mb-12 flex flex-wrap justify-center gap-2.5">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                filter === f
                  ? "bg-gold text-gold-foreground"
                  : "border border-border bg-secondary/40 text-muted-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
