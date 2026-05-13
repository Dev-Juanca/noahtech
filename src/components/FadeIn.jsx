import { useInView } from "../hooks/useInView";

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 *
 * @param {React.ReactNode} children
 * @param {number}          delay     - Animation delay in ms.
 * @param {string}          className - Optional extra class.
 */
export default function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
