import header from "../../assets/images/header.jpg";

export default function Header() {
  return (
    <>
      <div className="bg-[#1e2022] flex justify-center items-end w-full py-44">
        <div className="w-[50%]">
          <h1 className="text-white text-8xl font-light leading-tight ">
            Let&apos;s start a<br />
            project together
          </h1>
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden bg-amber-200">
          <img
            src={header}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
    // <div className=" w-full bg-[#1e2022] ">
    //   <div className="">
    //     <div className=" flex justify-center items-center p-20">
    //       <div className="bg-gray-100">
    //         <h1 className="text-white text-7xl font-light leading-tight ">
    //           Let&apos;s start a<br />
    //           project together
    //         </h1>
    //       </div>

    //       <div className="mt-8  bg-gray-100">
    //         <div className=" w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
    //           <img
    //             src={header}
    //             alt="Profile"
    //             width={100}
    //             height={100}
    //             className="object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 animate-bounce">
    //     <ChevronDown className="w-6 h-6 text-white" />
    //   </div>
    // </div>
  );
}
