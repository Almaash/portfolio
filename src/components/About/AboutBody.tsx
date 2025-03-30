import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutBody = () => {
  return (
    <>
      <div className="bg-[#f1f1f1]  max-sm:m-0 ">
        {/*----------- About me Part 1 -------------*/}
        <div className="grid grid-cols-5 max-sm:grid-cols-1 max-sm:px-10 w-full pl-22 py-10 tracking-thin  border-gray-400 ">
          <div className=" col-span-2 ">
            <h1>About me:</h1>
          </div>
          <hr className="hidden w-[50%] max-sm:block mt-4 border-gray-400" />

          <div className=" col-span-2   max-sm:pt-5">
            <h1 className="">
              For me, technology is all about vision—the ability{" "}
              <br className="max-sm:hidden" />
              to turn ideas into reality through clean code and{" "}
              <br className="max-sm:hidden" />
              seamless experiences.. <br className="max-sm:hidden" />
            </h1>
            <h1 className="pt-2">
              As a MERN stack developer from India, I believe{" "}
              <br className="max-sm:hidden" />
              that the best way to communicate is through experience,{" "}
              <br className="max-sm:hidden" />
              not just words.
            </h1>
            <h1 className="pt-10 ">
              Well-crafted applications, intuitive interfaces, and{" "}
              <br className="max-sm:hidden" /> seamless interactions leave a
              lasting impression. <br className="max-sm:hidden" />
              That’s why I built applications transform ideas into{" "}
              <br className="max-sm:hidden" />
              visually compelling and engaging digital experiences.
            </h1>
          </div>

          <div className=" flex justify-end items-start pr-10 space-x-2 max-sm:pt-10 max-sm:justify-start">
            <div className="flex items-center gap-4">
              {/* Text Button */}
              <Link to={'/work/2'}>
              <div className="group relative border border-gray-600 px-4 py-1 rounded-full cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
                <h1 className="relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300">
                  my work
                </h1>
              </div>
              </Link>

              {/* Icon Button */}
              <Link to={'/work/2'}>
              <div className="group relative border border-gray-600 p-1 rounded-full cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
                <ArrowUpRight className="relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              </Link>
            </div>
          </div>
        </div>
        {/*----------- About me Part 2 -------------*/}
        <div className="">
          <h1 className="text-5xl px-20 py-15 leading-[1.2] max-sm:text-4xl max-sm:px-5">
            I can craft impactful, visually compelling applications,{" "}
            <br className="max-sm:hidden" /> that enhance user experiences.
          </h1>

          <div className="grid grid-cols-5 max-sm:grid-cols-1  w-full pl-22 max-sm:px-10 py-5 pb-20 tracking-thin  border-[#bcc4ce] border-t ">
            <div className=" col-span-2 ">
              <h1>What I do:</h1>
              <hr className="hidden w-[50%] max-sm:block mt-4 border-gray-400" />
            </div>

            <div className=" col-span-2 max-sm:pt-5">
              <h1 className="">
                A passionate designer and storyteller dedicated to creating{" "}
                <br className="max-sm:hidden" /> industry-shifting presentations
                that captivate hearts and minds.
                <br className="max-sm:hidden" /> With a keen eye for detail, a
                deep understanding of visual <br className="max-sm:hidden" />{" "}
                communication, and a strategic approach, I craft compelling{" "}
                <br className="max-sm:hidden" /> narratives and stunning designs
                that engage, inspire,
                <br className="max-sm:hidden" /> and leave a lasting impact.
              </h1>

              <h1 className="pt-5 ">
                By combining creativity, innovation, and data-driven insights,
                <br className="max-sm:hidden" /> I transform ideas into visually
                powerful stories that connect
                <br className="max-sm:hidden" /> with audiences, drive
                meaningful engagement, and deliver results.
              </h1>
            </div>

            <div className=" flex justify-end items-start pr-10 space-x-2">
        
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBody;
