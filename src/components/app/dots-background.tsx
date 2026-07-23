import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  currentRadius: number;
  currentOpacity: number;
  row: number;
  col: number;
}

export default function DotBackground(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dots: Dot[] = [];
    let animationFrameId: number;
    const spacing = 20;

    const mouse = { x: -1000, y: -1000 };

    const resize = (): void => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      createGrid();
    };

    const createGrid = (): void => {
      if (!canvas) return;
      dots = [];
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const startX = c * spacing + spacing / 2;
          const startY = r * spacing + spacing / 2;
          dots.push({
            x: startX,
            y: startY,
            baseX: startX,
            baseY: startY,
            currentRadius: 0,
            currentOpacity: 0,
            row: r,
            col: c,
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = (): void => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const render = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const maxDistance = 300;

      dots.forEach((dot) => {
        const dx = mouse.x - dot.baseX;
        const dy = mouse.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetRadius = 0;
        let targetOpacity = 0;
        let isHovered = false;

        if (distance < maxDistance) {
          isHovered = true;
          const factor = 1 - distance / maxDistance;
          const powerFactor = Math.pow(factor, 2);

          targetRadius = 1 + powerFactor * 5.5;
          targetOpacity = powerFactor * 0.85;
        }

        const easeSpeed = isHovered ? 0.25 : 0.05; 
        
        dot.currentRadius += (targetRadius - dot.currentRadius) * easeSpeed;
        dot.currentOpacity += (targetOpacity - dot.currentOpacity) * easeSpeed;

        if (dot.currentOpacity > 0.01) {
          ctx.save();
          ctx.globalAlpha = dot.currentOpacity;
          ctx.beginPath();
          ctx.arc(dot.baseX, dot.baseY, dot.currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = '#52b788';
          ctx.fill();
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0"
      style={{ display: 'block' }}
    />
  );
}