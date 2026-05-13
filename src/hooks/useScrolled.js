import { useState, useEffect } from "react";

/**
 * Returns true when the window has scrolled past a given Y threshold.
 * @param {number} threshold - Scroll distance in px.
 */
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
