'use client';
import { Globe } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import headerVideo from "../../assets/videos/newww.mp4";
import headerImage from "../../assets/videos/image.png";

import { TextRoll } from "../../../components/ui/text-roll";
import { TextLoop } from "../../../components/ui/text-loop";
import { Cursor } from "../../../components/ui/cursor";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const HeaderNew = () => {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, ease: "linear" });

    gsap.set("#scrolling-text", { x: -150 });
    tl.to("#scrolling-text", { x: 150, duration: 4 });

    const updateDirection = (direction: number) => {
      tl.timeScale(direction);
    };

    let timeout: ReturnType<typeof setTimeout>;

    window.addEventListener("wheel", (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        updateDirection(event.deltaY > 0 ? -1 : 1);
      }, 100);
    });
  });

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0D1117] overflow-hidden">
      {/* Custom Cursor */}
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{ bounce: 0.001 }}
        transition={{ ease: "easeInOut", duration: 0.15 }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 16,
            height: isHovering ? 32 : 16,
          }}
          className="flex items-center justify-center rounded-[24px] bg-white/90 backdrop-blur-md dark:bg-white/90"
        >
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="inline-flex w-full items-center justify-center"
              >
                <div className="inline-flex items-center text-sm text-black dark:text-black">
                  Almaash
                  {/* <PlusIcon className="ml-1 h-4 w-4" /> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Cursor>


      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={headerVideo}
        autoPlay
        loop
        muted
        playsInline
        controls={false} // optional, iOS may need this as fallback
        poster={headerImage}
        onCanPlay={() => {
          const video = document.querySelector("video") as HTMLVideoElement;
          if (video) video.play().catch(() => { });
        }}
      />


      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-6">
        <div
          ref={targetRef}
          className="bg-white/10 backdrop-blur-2xl p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-white/30 text-center w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%]"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl">
            <TextRoll
              className="inline-block"
              variants={{
                enter: {
                  initial: { rotateX: 0, filter: "blur(0px)" },
                  animate: { rotateX: 90, filter: "blur(2px)" },
                },
                exit: {
                  initial: { rotateX: 90, filter: "blur(2px)" },
                  animate: { rotateX: 0, filter: "blur(0px)" },
                },
              }}
            >
              Push The Possible.
            </TextRoll>
          </h1>

          <div className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-gray-300">
            <TextLoop className="inline-block">
              <span>Frontend Developer</span>
              <span>Backend Developer</span>
              <span>Full Stack Developer</span>
            </TextLoop>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-400">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            <span className="tracking-widest font-semibold">INDIA</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-gray-400">est. 2024</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderNew;
