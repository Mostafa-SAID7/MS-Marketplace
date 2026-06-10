import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { tr } = useI18n();
  return (
    <section id="experience" className="scroll-mt-24 bg-secondary/20 py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading title={tr("experience.title")} />

        <div className="relative ms-3 border-s border-border ps-8">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.1}>
              <div className="relative mb-12 last:mb-0">
                <span className="absolute -start-[2.6rem] top-1 grid size-5 place-items-center rounded-full border border-gold bg-background">
                  <span className="size-2 rounded-full bg-gold" />
                </span>
                <div className="glass rounded-2xl p-6">
                  <span className="text-sm font-semibold text-gold">
                    {item.period}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">{item.role}</h3>
                  <p className="text-muted-foreground">{item.company}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
