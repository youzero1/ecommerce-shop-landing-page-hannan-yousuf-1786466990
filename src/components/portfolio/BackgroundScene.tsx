import { useEffect, useState } from 'react';

export function BackgroundScene() {
  const [point, setPoint] = useState({ x: 50, y: 30 });
  useEffect(() => {
    const move = (event: PointerEvent) => setPoint({ x: event.clientX / window.innerWidth * 100, y: event.clientY / window.innerHeight * 100 });
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-40 opacity-70 mix-blend-screen" style={{ background: `radial-gradient(420px circle at ${point.x}% ${point.y}%, rgba(255,79,216,.1), rgba(139,92,246,.045) 42%, transparent 72%)` }} />;
}
