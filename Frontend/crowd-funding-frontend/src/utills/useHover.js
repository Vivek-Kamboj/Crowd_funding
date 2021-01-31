import { useState, useEffect, useRef } from "react";

// Hover state hook
// Returns a tuple of [ref, hovered]
// - ref: A react ref that you need to assign to an element
// - hovered: A boolean, true if hovered and false otherwise

export default function useHover() {
  // Reference to the element we're listen for events from
  const ref = useRef();

  // Hover state management
  const [hovered, setHovered] = useState(false);

  // Event handlers
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  // Simple effect, just bind and unbind the event handlers
  useEffect(() => {
    let x = ref.current;
    x.addEventListener("mouseenter", enter);
    x.addEventListener("mouseleave", leave);
    return () => {
      x.removeEventListener("mouseenter", enter);
      x.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
}
