import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LangToggle } from "@/components/ui/LangToggle";

const links = [
  { id: "about", key: "nav.about", to: "/", hash: "about" },
  { id: "skills", key: "nav.skills", to: "/", hash: "skills" },
  { id: "projects", key: "nav.projects", to: "/projects" },
  { id: "experience", key: "nav.experience", to: "/", hash: "experience" },
  { id: "contact", key: "nav.contact", to: "/", hash: "contact" },
];

export function Navbar() {
  const { tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <Link
          to="/"
          className="text-lg font-extrabold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-gradient-gold">MS</span>
          <span className="text-foreground">.DEV</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.to}
              hash={l.hash}
              hashScrollIntoView={l.hash ? { behavior: "smooth" } : undefined}
              onClick={handleNavClick}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {tr(l.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-full border border-border bg-secondary/50 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mx-auto mt-3 flex max-w-6xl flex-col gap-1 px-5 pb-3">
              {links.map((l) => (
                <Link
                  key={l.id}
                  to={l.to}
                  hash={l.hash}
                  hashScrollIntoView={l.hash ? { behavior: "smooth" } : undefined}
                  onClick={handleNavClick}
                  className="rounded-lg px-3 py-3 text-start text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-gold"
                >
                  {tr(l.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
