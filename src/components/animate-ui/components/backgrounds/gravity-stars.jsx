import React, { useEffect, useRef, useState } from 'react';

const GravityStarsBackground = ({
  starsCount = 20,
  starsSize = 0.3,
  starsOpacity = 1,
  glowIntensity = 7,
  glowAnimation = 'ease',
  movementSpeed = 0.8,
  mouseInfluence = 10,
  mouseGravity = 'attract',
  gravityStrength = 10,
  starsInteraction = true,
  starsInteractionType = 'bounce',
  className = '',
  ...props
}) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    starsRef.current = Array.from({ length: starsCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * movementSpeed,
      vy: (Math.random() - 0.5) * movementSpeed,
      size: Math.random() * starsSize + 0.5,
      opacity: Math.random() * starsOpacity,
      targetOpacity: Math.random() * starsOpacity,
    }));

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update stars
      starsRef.current.forEach((star) => {
        // Calculate distance to mouse
        const dx = mousePosRef.current.x - star.x;
        const dy = mousePosRef.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply gravity/repel effect
        if (distance < mouseInfluence && distance > 0) {
          const force = (1 - distance / mouseInfluence) * gravityStrength * 0.001;
          if (mouseGravity === 'attract') {
            star.vx += (dx / distance) * force;
            star.vy += (dy / distance) * force;
          } else {
            star.vx -= (dx / distance) * force;
            star.vy -= (dy / distance) * force;
          }
        }

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Bounce off edges
        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        // Wrap around
        star.x = (star.x + canvas.width) % canvas.width;
        star.y = (star.y + canvas.height) % canvas.height;

        // Opacity animation
        if (glowAnimation === 'ease') {
          star.opacity += (star.targetOpacity - star.opacity) * 0.05;
        } else if (glowAnimation === 'spring') {
          star.opacity += (star.targetOpacity - star.opacity) * 0.1;
        } else {
          star.opacity = star.targetOpacity;
        }

        // Occasionally change target opacity
        if (Math.random() < 0.01) {
          star.targetOpacity = Math.random() * starsOpacity;
        }
      });

      // Draw stars
      starsRef.current.forEach((star) => {
        // Star glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * glowIntensity);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(
          star.x - star.size * glowIntensity,
          star.y - star.size * glowIntensity,
          star.size * glowIntensity * 2,
          star.size * glowIntensity * 2
        );

        // Star core
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    starsCount,
    starsSize,
    starsOpacity,
    glowIntensity,
    glowAnimation,
    movementSpeed,
    mouseInfluence,
    mouseGravity,
    gravityStrength,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      {...props}
    />
  );
};

export { GravityStarsBackground };
export default GravityStarsBackground;
