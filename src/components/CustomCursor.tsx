import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      scale: 1,
      backgroundColor: "#fff",
      mixBlendMode: "normal",
      transition: { type: "spring", stiffness: 70, damping: 10 },
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      width: 150,
      height: 150,
      scale: 1,
      backgroundColor: "#fff",
      mixBlendMode: "difference", // Apply blending effect
      transition: { type: "spring", stiffness: 70, damping: 10 },
    },
  };

  console.log(setCursorVariant)
  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      style={{ position: "fixed" }}
    />
  );
}

export function useCursorHandlers() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return { cursorVariant, textEnter, textLeave };
}
