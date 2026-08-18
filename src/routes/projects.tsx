import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectFilters } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All Projects | Marketplace Systems Architect" },
      {
        name: "description",
        content: "View all 15+ projects built for multi-vendor marketplaces, e-commerce platforms, and high-scale systems.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const projectCardClassName = "group glass relative flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1.5 hover:glow-gold";

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <Reveal>
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">All Projects</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {filtered.length} {filter === "All" ? "projects" : filter + " projects"}
            </p>
          </div>
        </Reveal>

        {/* Filters */}
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

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className={projectCardClassName}
                >
                  {/* Image Header */}
                  <div className="relative h-44 overflow-hidden bg-black/20">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{
                          background:
                            project.gradient ||
                            "linear-gradient(135deg, oklch(0.6 0.18 30), oklch(0.45 0.12 320))",
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Type Badge */}
                    <div className="my-4 flex flex-wrap gap-2">
                      <span className="inline-block rounded-full bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold border border-gold/20">
                        {project.type}
                      </span>
                      {project.client && (
                        <span className="inline-block rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent border border-accent/20">
                          {project.client}
                        </span>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-background/50 px-2 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="rounded-md bg-background/50 px-2 py-1 text-xs text-gold">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3">
                      View Details
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No projects found</p>
          </div>
        )}
      </div>
    </section>
  );
}
