import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      {kicker && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          {kicker}
        </span>
      )}
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </Reveal>
  );
}
