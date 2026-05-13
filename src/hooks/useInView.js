import { useRef, useState, useEffect } from "react";

/**
 * Detects when an element enters the viewport.
 * @param {number} threshold - Intersection ratio to trigger (0–1).
 * @returns {[React.RefObject, boolean]} - [ref to attach, isVisible]
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
