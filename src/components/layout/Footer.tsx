import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group grid size-11 place-items-center rounded-full border border-border bg-secondary/50 transition-colors hover:border-gold/50"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5 text-muted-foreground transition-colors group-hover:text-gold" />
        </button>

        <div className="flex items-center gap-3">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social link"
              className="grid size-10 place-items-center rounded-full border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Marketplace Systems Architect. Crafted with
          precision.
        </p>
      </div>
    </footer>
  );
}
