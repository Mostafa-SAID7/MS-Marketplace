import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("hide-cursor");

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, [data-cursor]");
      ringRef.current?.classList.toggle("scale-[1.8]", !!interactive);
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 size-2 rounded-full bg-gold"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-4 -mt-4 size-8 rounded-full border border-gold/60 transition-transform duration-200"
      />
    </>
  );
}
