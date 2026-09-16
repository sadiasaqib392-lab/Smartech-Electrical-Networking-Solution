import { useEffect, useRef } from 'react';

interface UseAutoScrollOptions {
  activePage: string;
  disabled?: boolean;
  speed?: number; // pixels per frame (approx 60fps)
  startDelay?: number; // ms to wait before starting scroll on a fresh page
}

/**
 * useAutoScroll:
 * Automatically scrolls slowly and smoothly from top to bottom when a page is opened.
 * Immediately and permanently cancels on user manual interaction (wheel, touch, drag, keydown, focus).
 * Resets afresh whenever the user changes pages or returns to a previous page.
 */
export function useAutoScroll({
  activePage,
  disabled = false,
  speed = 0.6,
  startDelay = 700,
}: UseAutoScrollOptions) {
  const userInteractedRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);
  const startTimerRef = useRef<NodeJS.Timeout | null>(null);
  const accumulatedRef = useRef<number>(0);

  useEffect(() => {
    // Reset scroll to top instantly on every new page visit
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Reset state on every new page visit
    userInteractedRef.current = false;
    accumulatedRef.current = 0;

    if (disabled) {
      return;
    }

    const cancelAutoScroll = () => {
      userInteractedRef.current = true;
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (startTimerRef.current !== null) {
        clearTimeout(startTimerRef.current);
        startTimerRef.current = null;
      }
    };

    // User manual interaction event listeners
    const handleUserInteraction = () => {
      if (!userInteractedRef.current) {
        cancelAutoScroll();
      }
    };

    // Specific keydown events that scroll or move viewport
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = [
        'ArrowDown',
        'ArrowUp',
        'PageDown',
        'PageUp',
        'Home',
        'End',
        ' ',
      ];
      if (scrollKeys.includes(e.key)) {
        cancelAutoScroll();
      }
    };

    // Passive event listeners so they NEVER block or lag user interaction
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true });
    window.addEventListener('mousedown', handleUserInteraction, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: true });
    window.addEventListener('focusin', handleUserInteraction, { passive: true });

    // Function to run smooth gradual auto-scroll
    const step = () => {
      if (userInteractedRef.current || disabled) {
        return;
      }

      // Check if page bottom reached
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      // Stop when reaching the bottom (with small tolerance)
      if (windowHeight + scrollY >= docHeight - 8) {
        cancelAutoScroll();
        return;
      }

      // Accumulate smooth fractional steps
      accumulatedRef.current += speed;
      if (accumulatedRef.current >= 1) {
        const px = Math.floor(accumulatedRef.current);
        accumulatedRef.current -= px;
        window.scrollBy({ top: px, left: 0, behavior: 'auto' });
      }

      rafIdRef.current = requestAnimationFrame(step);
    };

    // Delay start slightly so the user sees the top of the newly loaded page
    startTimerRef.current = setTimeout(() => {
      if (!userInteractedRef.current && !disabled) {
        rafIdRef.current = requestAnimationFrame(step);
      }
    }, startDelay);

    return () => {
      if (startTimerRef.current) {
        clearTimeout(startTimerRef.current);
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('mousedown', handleUserInteraction);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('focusin', handleUserInteraction);
    };
  }, [activePage, disabled, speed, startDelay]);
}
