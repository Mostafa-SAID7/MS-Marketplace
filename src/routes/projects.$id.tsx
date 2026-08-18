import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { ExternalLink, Github, ArrowLeft, Code2 } from "lucide-react";

export const Route = createFileRoute("/projects/$id")({
  head: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    return {
      meta: [
        { title: `${project?.title || "Project"} | Marketplace Systems Architect` },
        {
          name: "description",
          content: project?.description || "Project details",
        },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.id}` }],
    };
  },
  component: ProjectDetail,
});

export function ProjectDetail() {
  const { id } = Route.useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link
          to="/projects"
          className="text-gold hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const projectIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[projectIndex + 1];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden bg-black/20 md:h-[500px]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Back Button */}
        <Link
          to="/projects"
          className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-background transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-gold border border-gold/20">
                {project.category}
              </span>
              <span className="inline-block rounded-full bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-gold border border-gold/20">
                {project.type}
              </span>
              {project.status && (
                <span className="inline-block rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent border border-accent/20">
                  {project.status}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </div>

          {/* Meta Info Grid */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.client && (
              <div className="glass rounded-xl p-4 border border-border">
                <div className="text-xs font-semibold text-muted-foreground mb-1">
                  CLIENT
                </div>
                <div className="text-lg font-semibold">{project.client}</div>
              </div>
            )}
            {project.database && (
              <div className="glass rounded-xl p-4 border border-border">
                <div className="text-xs font-semibold text-muted-foreground mb-1">
                  DATABASE
                </div>
                <div className="text-lg font-semibold">{project.database}</div>
              </div>
            )}
            <div className="glass rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-1">
                <Code2 className="size-3.5 text-gold" />
                <div className="text-xs font-semibold text-muted-foreground">
                  TECH STACK
                </div>
              </div>
              <div className="text-lg font-semibold">{project.tech.length} Tools</div>
            </div>
            <div className="glass rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-1">
                <ExternalLink className="size-3.5 text-gold" />
                <div className="text-xs font-semibold text-muted-foreground">
                  STATUS
                </div>
              </div>
              <div className="text-lg font-semibold">
                {project.live ? "Live" : "Archived"}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mb-12 flex flex-wrap gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gold text-background px-6 py-3 font-semibold transition-all hover:shadow-lg hover:shadow-gold/50 hover:-translate-y-0.5"
              >
                <ExternalLink className="size-4" />
                Visit Live Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-6 py-3 font-semibold transition-all hover:border-gold/50 hover:text-gold"
              >
                <Github className="size-4" />
                View Source Code
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mb-12 glass rounded-2xl border border-border p-8">
            <h2 className="mb-6 text-2xl font-bold">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-background px-4 py-2 text-sm font-semibold text-gold border border-gold/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-border pt-12">
            <div className="grid gap-6 sm:grid-cols-2">
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject.id}`}
                  className="group glass rounded-xl border border-border p-6 transition-all hover:border-gold/50 hover:glow-gold"
                >
                  <div className="text-xs font-semibold text-muted-foreground mb-2">
                    ← PREVIOUS PROJECT
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-gold transition-colors">
                    {prevProject.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  to={`/projects/${nextProject.id}`}
                  className="group glass rounded-xl border border-border p-6 transition-all hover:border-gold/50 hover:glow-gold text-right sm:text-left"
                >
                  <div className="text-xs font-semibold text-muted-foreground mb-2">
                    NEXT PROJECT →
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-gold transition-colors">
                    {nextProject.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </motion.div>
    </motion.div>
  );
}
