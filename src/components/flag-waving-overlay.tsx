import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface FlagWavingOverlayProps {
  opacity?: number;
  windStrength?: number;
  speed?: number;
  className?: string;
}

export function FlagWavingOverlay({
  opacity = 0.35,
  windStrength = 0.08,
  speed = 1,
  className,
}: FlagWavingOverlayProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const parent = canvas.parentElement;
    if (!parent) {
      return;
    }

    const syncSize = () => {
      const rect = parent.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    syncSize();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(syncSize);
      observer.observe(parent);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", syncSize);
    return () => window.removeEventListener("resize", syncSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const updateCanvasResolution = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateCanvasResolution();

    const handleResize = () => updateCanvasResolution();
    window.addEventListener("resize", handleResize);

    const startTime = performance.now();
    let frameId: number;

    const drawFrame = (timestamp: number) => {
      const elapsedSeconds = (timestamp - startTime) / 1000;
      ctx.clearRect(0, 0, width, height);
      drawFlag(ctx, width, height, elapsedSeconds, opacity, windStrength, speed);
      frameId = requestAnimationFrame(drawFrame);
    };

    frameId = requestAnimationFrame(drawFrame);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
    };
  }, [height, opacity, speed, width, windStrength]);

  return <canvas ref={canvasRef} className={clsx("pointer-events-none absolute inset-0", className)} aria-hidden="true" />;
}

function drawFlag(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  elapsedSeconds: number,
  opacity: number,
  windStrength: number,
  speed: number,
): void {
  const amplitude = height * Math.min(Math.max(windStrength, 0.01), 0.2);
  const waveCount = 1.8;
  const frequency = ((Math.PI * 2) / width) * waveCount;
  const phase = elapsedSeconds * speed * 2;
  const step = Math.max(1, width / 80);
  const midline = height / 2;

  const boundary: Array<{ x: number; y: number }> = [];
  for (let x = 0; x <= width; x += step) {
    const waveOffset = Math.sin(x * frequency + phase) * amplitude;
    boundary.push({ x, y: midline + waveOffset });
  }
  boundary.push({ x: width, y: midline });

  ctx.save();
  ctx.globalAlpha = opacity;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width, 0);
  for (let i = boundary.length - 1; i >= 0; i -= 1) {
    ctx.lineTo(boundary[i].x, boundary[i].y);
  }
  ctx.closePath();
  ctx.fillStyle = "#005BBB";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, height);
  ctx.lineTo(width, height);
  for (let i = 0; i < boundary.length; i += 1) {
    ctx.lineTo(boundary[i].x, boundary[i].y);
  }
  ctx.closePath();
  ctx.fillStyle = "#FFD500";
  ctx.fill();

  ctx.restore();
}

