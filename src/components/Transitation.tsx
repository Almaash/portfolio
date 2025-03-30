import { motion } from "framer-motion";
import { FC } from "react";

const Transition = (OgComponent: FC) => {
  const WrappedComponent: FC = (props) => {
    return (
      <>
        <OgComponent {...props} />

        {/* Exit transition overlay */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black z-50"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 0, y: "100%" }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Entry transition overlay */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black z-50"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: "-100%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </>
    );
  };

  return WrappedComponent;
};

export default Transition;
