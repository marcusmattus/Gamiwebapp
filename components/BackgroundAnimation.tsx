"use client";

import { useEffect, useRef } from "react";

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    const numParticles = 40;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const drawLine = (x1: number, y1: number, x2: number, y2: number, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(110, 60, 251, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156, 108, 255, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles (Blockchain nodes effect)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            drawLine(p.x, p.y, p2.x, p2.y, 0.15 * (1 - distance / 120));
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Dynamic Canvas Nodes */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{ opacity: 0.8 }}
      />
      {/* Global Pulse Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#6E3CFB]/20 rounded-full blur-[150px] pointer-events-none z-[-2] animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#9C6CFF]/10 rounded-full blur-[150px] pointer-events-none z-[-2] animate-pulse" style={{ animationDuration: '12s' }}></div>
    </>
  );
}
