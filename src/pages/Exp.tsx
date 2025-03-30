import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Exp() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "#111",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="flex items-center justify-center h-screen ">
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-[10rem] font-bold"
      >
        Hello World
      </h1>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        style={{ position: "fixed" }}
      />
    </div>
  );
}
