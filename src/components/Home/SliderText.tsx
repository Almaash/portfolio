import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const SliderText = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current.querySelectorAll("h1"), {
      x: "-150%", // Use 'x' instead of 'transform'
      scrollTrigger: {
        trigger: containerRef.current, // Correctly target the parent div
        start: "top 0%",
        end: "top -100%",
        markers: true,
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  return (
    <>
    <div
      ref={containerRef}
      id="page"
      className="w-[100%] h-[100%] bg-[#004d43] text-white flex items-center justify-center overflow-hidden"
    >
      <h1 className="text-[18rem]  font-bold">Experiences</h1>
    </div>
    <div
    //   ref={containerRef}
      id="page"
      className="w-[100%] h-[100%] bg-[#004d43] text-white flex items-center justify-center overflow-hidden"
    >
      <h1 className="text-[18rem]  font-bold">Experiences</h1>
    </div>
    </>
  );
};

export default SliderText;
