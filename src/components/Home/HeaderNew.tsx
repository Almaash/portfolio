import { Globe } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import headerVideo from "../../assets/videos/newww.mp4";

const HeaderNew = () => {
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
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover" src={headerVideo} autoPlay loop muted></video>
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-6 ">
        <div className="bg-white/10 backdrop-blur-2xl p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-white/30 text-center w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl">
            Push The Possible.
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-gray-300">
            Full Stack Developer
          </p>
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
