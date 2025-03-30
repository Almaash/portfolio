import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AngledTextDesign() {
  const textRef = useRef<HTMLDivElement>(null);
  const blackTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
          end: "top 15%",
          scrub: 1,
          // markers:true
        },
      });

      tl.to(blackTextRef.current, { width: "100%" });
    });

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <div className="relative w-full h-screen  overflow-hidden  bg-[#f1f1f1]">
      <div className="absolute inset-0 flex flex-col justify-center">
        <div ref={textRef} className="relative whitespace-nowrap font-thin p-10 ">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight absolute overflow-hidden strokeText opacity-25 tracking-tighter text-gray-400 
                "
          >
            Here's what I’ve created! <br />
            demonstrating my expertise and innovation.
          </h1>
          <h1
            ref={blackTextRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight w-[0%] relative overflow-hidden blackText tracking-tighter"
          >
            Here's what I’ve created! <br />
            demonstrating my expertise and innovation.
          </h1>
        </div>
      </div>
    </div>
  );
}