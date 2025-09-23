import type React from "react";
import { motion, Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: custom * 0.5, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: custom * 0.5, duration: 0.01 },
    },
  }),
};

export default function PathDrawing() {
  return (
    <motion.svg
      width="400"
      height="400"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      style={image}
    >
      {/* First Row */}
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="orange"
        variants={draw}
        custom={1}
        style={shape}
      />
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="black"
        variants={draw}
        custom={2}
        style={shape}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        stroke="black"
        variants={draw}
        custom={2.5}
        style={shape}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="30"
        rx="20"
        stroke="gray"
        variants={draw}
        custom={3}
        style={shape}
      />

      {/* Second Row */}
      <motion.circle
        cx="100"
        cy="300"
        r="80"
        stroke="gray"
        variants={draw}
        custom={2}
        style={shape}
      />
      <motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="orange"
        variants={draw}
        custom={3}
        style={shape}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="orange"
        variants={draw}
        custom={3.5}
        style={shape}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="230"
        rx="20"
        stroke="black"
        variants={draw}
        custom={4}
        style={shape}
      />

      {/* Third Row */}
      <motion.circle
        cx="100"
        cy="500"
        r="80"
        stroke="black"
        variants={draw}
        custom={3}
        style={shape}
      />
      <motion.line
        x1="220"
        y1="430"
        x2="360"
        y2="570"
        stroke="gray"
        variants={draw}
        custom={4}
        style={shape}
      />
      <motion.line
        x1="220"
        y1="570"
        x2="360"
        y2="430"
        stroke="gray"
        variants={draw}
        custom={4.5}
        style={shape}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="430"
        rx="20"
        stroke="orange"
        variants={draw}
        custom={5}
        style={shape}
      />
    </motion.svg>
  );
}

/**
 * ==============   Styles   ================
 */
const image: React.CSSProperties = {
  maxWidth: "80vw",
};

const shape: React.CSSProperties = {
  strokeWidth: 10,
  strokeLinecap: "round",
  fill: "transparent",
};
