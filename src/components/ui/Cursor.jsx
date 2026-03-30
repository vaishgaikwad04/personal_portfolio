import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    window.addEventListener("mousemove", moveCursor);

    // detect hover on links/buttons
    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[999] rounded-full transition-all duration-200 ${
        hovering ? "w-12 h-12 bg-white/20" : "w-4 h-4 bg-white"
      }`}
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    ></div>
  );
}

export default Cursor;