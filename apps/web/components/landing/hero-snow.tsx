"use client";

import { useEffect, useRef } from "react";

type Flake = {
  x: number;
  y: number;
  r: number;
  vy: number;
  a: number;
  p: number;
  s: number;
};

// Gentle snowfall around the hero trees. A CSS mask keeps it away from the centre text.
export function HeroSnow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (
      !canvas ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let flakes: Flake[] = [];
    let frame = 0;

    // Most flakes fall near the left and right trees.
    const spawnX = () => {
      const side = Math.random();
      if (side < 0.42) return Math.random() * w * 0.3;
      if (side < 0.84) return w - Math.random() * w * 0.3;
      return Math.random() * w;
    };

    const make = (y: number): Flake => ({
      x: spawnX(),
      y,
      r: Math.random() * 1.8 + 0.6,
      vy: Math.random() * 0.45 + 0.25,
      a: Math.random() * 0.45 + 0.25,
      p: Math.random() * 6.28,
      s: Math.random() * 0.4 + 0.15,
    });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(130, Math.round(w / 11));
      flakes = Array.from({ length: count }, () => make(Math.random() * h));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const color =
        document.documentElement.getAttribute("data-theme") === "light"
          ? "rgba(120, 150, 190,"
          : "rgba(232, 243, 255,";
      for (const f of flakes) {
        f.p += 0.01;
        f.y += f.vy;
        f.x += Math.sin(f.p) * f.s;
        if (f.y > h) Object.assign(f, make(-4));
        const fade = Math.min(1, (h - f.y) / 160);
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, 6.28);
        ctx.fillStyle = `${color}${f.a * fade})`;
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas id="heroSnow" ref={canvasRef} aria-hidden="true" />;
}
