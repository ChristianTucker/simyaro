"use client";

import { useEffect, useRef } from "react";

interface Streak {
  x: number;
  y: number;
  len: number;
  speed: number;
  alpha: number;
  red: boolean;
  width: number;
}

export default function SpeedCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const w = () => canvas.width / dpr;
    const h = () => canvas.height / dpr;

    const streakCount = 45;
    const streaks: Streak[] = [];

    const spawn = (startOffscreen = true): Streak => {
      const cw = w();
      const ch = h();
      return {
        x: startOffscreen ? -Math.random() * cw * 0.5 : Math.random() * cw,
        y: Math.random() * ch,
        len: 60 + Math.random() * 200,
        speed: 3 + Math.random() * 8,
        alpha: 0.03 + Math.random() * 0.12,
        red: Math.random() < 0.4,
        width: 0.5 + Math.random() * 1.5,
      };
    };

    for (let i = 0; i < streakCount; i++) {
      streaks.push(spawn(false));
    }

    const sparks: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];
    let sparkTimer = 0;

    const loop = () => {
      const cw = w();
      const ch = h();
      ctx.clearRect(0, 0, cw, ch);

      for (const s of streaks) {
        s.x += s.speed;
        if (s.x - s.len > cw) {
          Object.assign(s, spawn(true));
        }

        const grad = ctx.createLinearGradient(s.x - s.len, s.y, s.x, s.y);
        grad.addColorStop(0, "transparent");
        if (s.red) {
          grad.addColorStop(0.5, `rgba(220, 38, 38, ${s.alpha * 0.6})`);
          grad.addColorStop(1, `rgba(239, 68, 68, ${s.alpha})`);
        } else {
          grad.addColorStop(0.5, `rgba(255, 255, 255, ${s.alpha * 0.4})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${s.alpha})`);
        }

        ctx.beginPath();
        ctx.moveTo(s.x - s.len, s.y);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.stroke();

        if (s.red && s.alpha > 0.08) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.width * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(239, 68, 68, ${s.alpha * 0.5})`;
          ctx.fill();
        }
      }

      sparkTimer++;
      if (sparkTimer % 3 === 0) {
        const sx = Math.random() * cw;
        const sy = Math.random() * ch;
        for (let k = 0; k < 2; k++) {
          sparks.push({
            x: sx, y: sy,
            vx: 1 + Math.random() * 4,
            vy: (Math.random() - 0.5) * 2,
            life: 0,
            maxLife: 20 + Math.random() * 30,
          });
        }
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vy += 0.04;
        sp.life++;
        const fade = 1 - sp.life / sp.maxLife;
        if (fade <= 0) { sparks.splice(i, 1); continue; }
        ctx.globalAlpha = fade * 0.6;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#EF4444";
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };

    loop();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0" />;
}
