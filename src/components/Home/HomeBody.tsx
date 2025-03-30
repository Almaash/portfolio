// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import header from "../../assets/images/headerCroped.jpg";
import header from "../../assets/images/alm.png";
// import header from "../../assets/images/ammmm.png";
// import { motion } from "framer-motion";

const HomeBody = () => {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");

  // useEffect(() => {
  //   const mouseMove = (e: any) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants: any = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //     scale: 1,
  //     backgroundColor: "#111",
  //     transition: { type: "spring", stiffness: 70, damping: 10 },

  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: "yellow",
  //     mixBlendMode: "difference",
  //     transition: { type: "spring", stiffness: 70, damping: 10 },

  //   },
  // };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <>
      {/* about part */}
      <div className="relative flex justify-center">
        <hr className="border-t-2 w-[90%] border-gray-400 my-6 absolute bottom-0 max-sm:hidden" />
        <div className="flex max-sm:flex-col tracking-thin">
          <div className="text-4xl max-sm:text-2xl px-36 max-sm:px-5 max-sm:py-10 py-40">
            <h1
              className="leading-[1.5]"
              // onMouseEnter={textEnter}
              // onMouseLeave={textLeave}
            >
              Helping others grow in the digital world. Together, we will set
              new trends — clear, simple, and always ahead.
            </h1>
          </div>
          <div className=" w-full grid grid-rows-3 max-sm:grid-rows-2">
            <div className="max-sm:hidden"></div>

            <div className="pt-5 flex justify-start max-sm:px-5 ">
              <h1 className="leading-[1.7] text-">
                The combination of my passion <br /> for design, code &
                interaction <br />
                positions me in a unique place in <br /> the web design world.
              </h1>
            </div>

            <div className=" flex justify-start max-sm:justify-end items-end -ml-10 mb-2 max-sm:mb-10">
              <div className="w-35 h-35 max-sm:mt-10 bg-black text-white rounded-full flex items-center justify-center text-center absolute">
                <h1>
                  About <br /> me
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* strategic part */}

      <div className="bg-[#fcd34d] p-16 px-22 max-sm:px-5 rounded-t-4xl">
        <h1 className="tracking-thin text-4xl max-sm:text-xl max-sm:text-left leading-[1.2] ">
          I help forward-thinking businesses create strategic websites that are
          not only <u>highly interactive</u> and <u>engaging</u> but also{" "}
          <u>visually stunning, fast, and optimized</u> for a seamless user
          experience—with a touch of <u>dynamic animations</u> to bring ideas to
          life.
        </h1>
      </div>

      {/* what expect */}

      <div className="grid grid-cols-5 max-sm:grid-cols-1 bg-[#fcd34d] w-full pl-22 py-10 max-sm:px-5 tracking-thin border-t border-b border-[#dfb425]">
        <div className=" col-span-2 ">
          <h1 className="max-sm:font-bold">What you can expect:</h1>
        </div>

        <div className=" col-span-2">
          <h1 className="max-sm:hidden">
            I help visionaries bring their ideas to life with immersive, <br />
            high-performance websites. Whether you're advancing <br /> the
            net-zero economy or developing photonic chips, I create <br />{" "}
            interactive, engaging digital experiences that captivate users{" "}
            <br /> and elevate your brand.
          </h1>
          <h1 className="hidden max-sm:block pt-5">
            I help visionaries bring their ideas to life with immersive,
            high-performance websites. Whether you're advancing the net-zero
            economy or developing photonic chips, I create interactive, engaging
            digital experiences that captivate users and elevate your brand.
          </h1>
          <h1 className="pt-10 ">
            I combine strategy and <br /> design (with a little tea) to make{" "}
            <br /> your message clear, compelling,
            <br /> and engaging.
          </h1>
        </div>

        <div className="pl-10 flex justify-start items-end max-sm:hidden ">
          <div className="">
            <h1>S</h1>
            <h1>Instagram</h1>
            <h1>Linkedin</h1>
            <h1>Facebook </h1>
            <h1>Github </h1>
          </div>
        </div>
      </div>

      {/* Approch */}

      <div className="bg-[#fcd34d] flex  px-20 pt-5 pb-20 max-sm:flex-col max-sm:px-5 max-sm:justify-center max-sm:items-center">
        <div className="w-1/2 max-sm:flex-col max-sm:w-full">
          <h2 className="text-5xl text-black tracking-thin max-sm:text-3xl">
            My approach:
          </h2>
          <Link to="/about/1">
            <button className="group relative overflow-hidden mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full transition-all duration-500 cursor-pointer">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-[#484646] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 border border-[#586c0e] rounded-full"></div>

              {/* Text & Circle (Above Background) */}
              <span className="relative z-10 transition-all duration-300 ">
                READ MORE
              </span>
              <span className="relative z-10 w-2 h-2 bg-white rounded-full transition-all duration-300 group-hover:bg-black "></span>
            </button>
          </Link>
        </div>

        <div className="w-1/2 flex justify-end max-sm:w-full max-sm:mt-10">
          <img
            src={header}
            alt="Our approach"
            className="rounded-full shadow-lgborder border-[#a8840e] border-2 w-[30rem]"
          />
        </div>
      </div>
    </>
  );
};

export default HomeBody;
