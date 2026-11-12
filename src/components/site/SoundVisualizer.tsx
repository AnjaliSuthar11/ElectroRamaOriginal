"use client";

import { useEffect, useState } from "react";

export function SoundVisualizer() {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    setBars(Array.from({ length: 200 }, () => Math.random() * 100));

    const interval = setInterval(() => {
      setBars(
        Array.from({ length: 200 }, (_, i) => {
          const wave =
            Math.sin(Date.now() / 250 + i * 0.18) *
            Math.cos(Date.now() / 700 + i * 0.08);

          return Math.max(8, Math.abs(wave) * 85 + Math.random() * 15);
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-20 w-full overflow-hidden bg-transparent py-5">
      <div className="flex h-20 w-[150%] min-w-[150%] -translate-x-[16.66%] items-center justify-center gap-[3px] overflow-hidden">
        {bars.map((height, index) => (
          <div
            key={index}
            className="w-[3px] shrink-0 rounded-full transition-all duration-100"
            style={{
              height: `${height}%`,
              background:
                "linear-gradient(to top, #8c2525, #d5a04c, #f4d49a)",
              opacity: 0.45 + (height / 100) * 0.55,
            }}
          />
        ))}
      </div>
    </section>
  );
}