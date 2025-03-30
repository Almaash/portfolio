import AnimatedText from "./AnimatedText";
import PathDrawing from "./PathDrawing";

const Body = () => {
  return (
    <>
      <div className="flex justify-center items-center max-sm:items-start h-screen bg-[#f1f1f1] max-sm:pl-10 space-x-15 max-sm:flex-col">
        <div className=" text-gray-900">
          <h1 className="text-4xl font-bold space-y-2 ">
            <span className="relative inline-block ">
              <span className="absolute inset-x-0 bottom-3 h-1 bg-orange-500"></span>
              <span className="tracking-tighter">You need a website.</span>
            </span>
            <br />
            <span className="text-black tracking-tighter">
            <AnimatedText text="You need a high-performing website." />
              
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 tracking-thin">
            This word will make the difference between a simple visit on your
            <br className="max-sm:hidden" />
            website and a sale.
          </p>
          <p className="mt-4 text-lg text-gray-700 tracking-thin">
            Web designer and Webflow expert, I help you solve your online <br className="max-sm:hidden" />
            visibility challenges and generate more sales by designing custom{" "}
            <br className="max-sm:hidden" />
            websites,{" "}
            <span className="font-bold">
              art direction dedicated to your brand
            </span>{" "}
            and{" "}
            <span className="font-bold">
              bespoke <br className="max-sm:hidden" /> digital strategies.
            </span>
          </p>
        </div>
        <div className="max-sm:hidden">
          <PathDrawing/>
        </div>
      </div>
    </>
  );
};

export default Body;
