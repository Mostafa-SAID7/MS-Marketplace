import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { tr } = useI18n();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/3 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-5xl px-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground"
        >
          <Sparkles className="size-4 text-gold" />
          {tr("hero.eyebrow")}
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gold"
        >
          {tr("hero.role")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl"
        >
          {tr("hero.title1")}{" "}
          <span className="text-gradient-gold">{tr("hero.title2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-balance text-lg text-muted-foreground"
        >
          {tr("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-gold-foreground transition-transform hover:scale-[1.03] glow-gold"
          >
            {tr("hero.cta1")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full border border-border bg-secondary/40 px-7 py-3.5 font-semibold transition-colors hover:border-gold/50 hover:text-gold"
          >
            {tr("hero.cta2")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
