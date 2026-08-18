import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const mouseState = useRef({ x: 0, y: 0, isInteractive: false });
  const ringState = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("hide-cursor");

    let raf = 0;
    let hasMovedOnce = false;

    const onMove = (e: MouseEvent) => {
      if (!hasMovedOnce) {
        hasMovedOnce = true;
        setIsVisible(true);
      }

      mouseState.current.x = e.clientX;
      mouseState.current.y = e.clientY;

      // Directly update dot position (no easing needed for precise tracking)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor]"
      );
      mouseState.current.isInteractive = !!interactive;
    };

    // Smooth ring animation loop (only updates ring, not dot)
    const loop = () => {
      if (!isVisible) {
        raf = requestAnimationFrame(loop);
        return;
      }

      const { x: mouseX, y: mouseY } = mouseState.current;
      const { x: ringX, y: ringY } = ringState.current;

      // Smooth easing factor for ring (lower = smoother/slower)
      const easing = 0.18;
      ringState.current.x = ringX + (mouseX - ringX) * easing;
      ringState.current.y = ringY + (mouseY - ringY) * easing;

      if (ringRef.current) {
        const scale = mouseState.current.isInteractive ? 1.8 : 1;
        ringRef.current.style.transform = `translate(${ringState.current.x}px, ${ringState.current.y}px) scale(${scale})`;
      }

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot: Precise cursor position */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 size-2 rounded-full bg-gold will-change-transform"
      />
      {/* Ring: Smooth easing animation */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-4 -mt-4 size-8 rounded-full border border-gold/60 transition-transform duration-200 will-change-transform"
      />
    </>
  );
}
