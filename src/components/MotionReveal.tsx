import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';

// Viewport configuration for all scroll-triggered elements
// Elements animate when entering viewport during scroll, and stay visible without re-animating repeatedly
const VIEWPORT_CONFIG = {
  once: true,
  margin: '0px 0px -40px 0px',
  amount: 0.15,
};

const EASING = [0.22, 1, 0.36, 1];

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  duration?: number;
  type?: 'heading' | 'text' | 'card' | 'image' | 'icon' | 'button' | 'stat' | 'section';
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration,
  type,
}) => {
  // Preset animation configurations based on element type
  if (type === 'heading') {
    return <RevealHeading delay={delay} className={className}>{children}</RevealHeading>;
  }
  if (type === 'text') {
    return <RevealText delay={delay} className={className}>{children}</RevealText>;
  }
  if (type === 'card') {
    return <RevealCard delay={delay} className={className}>{children}</RevealCard>;
  }
  if (type === 'image') {
    return <RevealImage delay={delay} className={className}>{children}</RevealImage>;
  }
  if (type === 'icon') {
    return <RevealIcon delay={delay} className={className}>{children}</RevealIcon>;
  }
  if (type === 'button') {
    return <RevealButton delay={delay} className={className}>{children}</RevealButton>;
  }
  if (type === 'stat') {
    return <RevealStat delay={delay} className={className}>{children}</RevealStat>;
  }

  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 20 };
      case 'down':
        return { opacity: 0, y: -20 };
      case 'left':
        return { opacity: 0, x: -24 };
      case 'right':
        return { opacity: 0, x: 24 };
      case 'scale':
        return { opacity: 0, scale: 0.94 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: duration || 0.45,
        delay,
        ease: EASING,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * RevealHeading: Smooth fade-in and upward reveal for section titles and headlines
 */
export const RevealHeading: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT_CONFIG}
    transition={{
      duration: 0.48,
      delay,
      ease: EASING,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * RevealText: Gentle fade-in with a slight upward movement for paragraphs and descriptions
 */
export const RevealText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0.05 }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT_CONFIG}
    transition={{
      duration: 0.44,
      delay,
      ease: EASING,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * RevealCard: Slide-up with soft fade-in, ideal for service/product cards with staggered delays
 */
export const RevealCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT_CONFIG}
    transition={{
      duration: 0.48,
      delay,
      ease: EASING,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * RevealImage: Smooth reveal with subtle zoom-in effect (scale 0.94 -> 1.0)
 */
export const RevealImage: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={VIEWPORT_CONFIG}
    transition={{
      duration: 0.55,
      delay,
      ease: EASING,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * RevealIcon: Subtle scale-up or fade-in for feature badges and service icons
 */
export const RevealIcon: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.78 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={VIEWPORT_CONFIG}
    transition={{
      duration: 0.38,
      delay,
      ease: EASING,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * RevealButton: Subtle fade-in and slight upward movement for CTAs and buttons
 */
export const RevealButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEWPORT_CONFIG}
    transition={{
      duration: 0.38,
      delay,
      ease: EASING,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * RevealStat: Dynamic scale and lift for numerical metrics and trust figures
 */
export const RevealStat: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.88, y: 12 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={VIEWPORT_CONFIG}
    transition={{
      duration: 0.42,
      delay,
      ease: EASING,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * ScrollZoomImage: Smooth reveal with subtle zoom and parallax drift as user scrolls
 */
interface ScrollZoomImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const ScrollZoomImage: React.FC<ScrollZoomImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.02]);
  const y = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${containerClassName}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ scale, y }}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${className}`}
        loading="lazy"
      />
    </div>
  );
};

/**
 * ScrollParallax: Subtle floating parallax displacement for background or accent sections
 */
interface ScrollParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  offset = 20,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};


