import { Globe } from "lucide-react";
import header from "../../assets/images/header.jpg";
// import header from "../../assets/images/888.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, ease: "linear" });

    gsap.set("#scrolling-text", { x: -150 }); // Start from middle
    tl.to("#scrolling-text", { x: 150, duration: 4 });

    const updateDirection = (direction: number) => {
      tl.timeScale(direction);
    };

    let timeout: ReturnType<typeof setTimeout>;

    window.addEventListener("wheel", function (dets) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        updateDirection(dets.deltaY > 0 ? -1 : 1);
      }, 100);
    });
  });

  return (
    <>
      <div
        id="body"
        className="relative flex justify-center h-screen items-end bg-[#999D9E]"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          style={{ backgroundImage: `url(${header})` }}
          className="w-[700px] h-[700px] max-sm:w-[400px] max-sm:h-[500px] bg-cover bg-center bg-no-repeat"
        ></div>

        <div className="absolute w-full flex flex-col justify-between items-center">
          <div className="w-full flex justify-between mb-20">
            <div className="w-[85%] ">
              <div className="flex items-between justify-between bg-black/90 text-white px-3 py-4 rounded-r-full w-fit max-sm:hidden">
                <div className="text-left mr-10 ml-5 tracking-wide">
                  <p className="text-sm font-light">Located</p>
                  <p className="text-sm font-light">in the</p>
                  <p className="text-sm font-light">India</p>
                </div>
                <div className="w-14 h-14 bg-[#999D9E] rounded-full flex items-center justify-center">
                  <Globe className="w-9 h-9 text-white" />
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <h1 className="text-white text-4xl max-sm:text-2xl  rounded-lg tracking-thin z-10">
                Designer & <br /> Developer
              </h1>
            </div>
          </div>
          <div className="relative w-full overflow-hidden flex items-center">
            <div id="scrolling-text" className="flex space-x-10">
              {Array(5)
                .fill("Almaash Alam")
                .map((name, index) => (
                  <h1
                    key={index}
                    className="text-white text-[12rem] whitespace-nowrap mb-12 tracking-thin"
                  >
                    {name} <span className="pl-10">—</span>
                  </h1>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
