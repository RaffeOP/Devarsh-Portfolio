import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import { useTheme } from 'next-themes';

const HyperMatrix: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  // Handle Hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    let p5Instance: p5;

    const sketch = (p: p5) => {
      let grid: { x: number, y: number, z: number }[] = [];
      let cols = 0;
      let rows = 0;
      const spacing = 50;
      const mouseRange = 400;

      p.setup = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        p.createCanvas(w, h, p.WEBGL).parent(containerRef.current!);
        p.pixelDensity(1); // Performance boost
        initGrid();
      };

      const initGrid = () => {
        grid = [];
        // Overscan by 60% for deep edge coverage during movement
        const w = p.width * 1.6;
        const h = p.height * 1.6;
        cols = Math.ceil(w / spacing);
        rows = Math.ceil(h / spacing);
        
        const startX = -w / 2;
        const startY = -h / 2;

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            grid.push({ 
              x: startX + x * spacing, 
              y: startY + y * spacing, 
              z: 0 
            });
          }
        }
      };

      p.draw = () => {
        const currentTheme = resolvedTheme || theme || 'dark';
        const isDark = currentTheme === 'dark';
        
        // Solid background to clear frames
        p.background(isDark ? 0 : 255);

        // WebGL Mouse coords
        const mx = p.mouseX - p.width / 2;
        const my = p.mouseY - p.height / 2;

        // Camera Dynamics (End-to-End coverage logic)
        p.rotateX(p.PI * 0.15 + p.map(p.mouseY, 0, p.height, 0.1, -0.1));
        p.rotateY(p.map(p.mouseX, 0, p.width, -0.1, 0.1));
        p.translate(0, 0, -50);

        p.noFill();

        // Multi-pass Mesh Rendering
        for (let y = 0; y < rows; y++) {
          p.beginShape(p.LINES);
          for (let x = 0; x < cols; x++) {
            const idx = y * cols + x;
            const pt = grid[idx];
            
            const distToMouse = p.dist(mx, my, pt.x, pt.y);
            const targetZ = distToMouse < mouseRange ? p.map(distToMouse, 0, mouseRange, 220, 0, true) : 0;
            pt.z = p.lerp(pt.z, targetZ, 0.1);

            const alpha = p.map(distToMouse, 0, mouseRange * 2, isDark ? 255 : 200, isDark ? 30 : 10, true);
            p.stroke(isDark ? 255 : 0, isDark ? 160 : 100, isDark ? 0 : 255, alpha);

            // Connect horizontal
            if (x < cols - 1) {
              const nextX = grid[idx + 1];
              p.strokeWeight(distToMouse < mouseRange ? 1.6 : 0.8);
              p.vertex(pt.x, pt.y, pt.z);
              p.vertex(nextX.x, nextX.y, nextX.z);
            }
            
            // Connect vertical
            if (y < rows - 1) {
              const nextY = grid[idx + cols];
              p.strokeWeight(distToMouse < mouseRange ? 1.6 : 0.8);
              p.vertex(pt.x, pt.y, pt.z);
              p.vertex(nextY.x, nextY.y, nextY.z);
            }
          }
          p.endShape();
        }

        // Hyper-Accents
        if (p.frameCount % 2 === 0) {
          p.strokeWeight(3);
          for (let i = 0; i < 30; i++) {
            const idx = Math.floor(p.random(grid.length));
            const pt = grid[idx];
            if (p.dist(mx, my, pt.x, pt.y) < mouseRange * 1.2) {
              p.stroke(isDark ? 255 : 0, isDark ? 200 : 120, 0, 180);
              p.point(pt.x, pt.y, pt.z + 5);
            }
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        initGrid();
      };
    };

    p5Instance = new p5(sketch);
    return () => {
      p5Instance.remove();
    };
  }, [mounted, theme, resolvedTheme]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
      {/* Use absolute positioning inside fixed for full bleed */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full block" 
        style={{ zIndex: -1 }}
      />
      <div className="absolute inset-0 noise-overlay opacity-[0.01]" />
    </div>
  );
};

export default HyperMatrix;
