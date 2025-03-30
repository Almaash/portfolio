import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedText = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" }); // Trigger when 100px before

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl font-bold text-center pl-0 max-sm:text-start"
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedText;
