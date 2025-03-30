import eyecatching from "../../assets/images/eyecatching.jpg";
import eyeopening from "../../assets/images/eyeopening.jpg";

const Persentation = () => {
  return (
    <>
      <div className="  bg-[#EFEFEF] rounded-t-4xl -mt-5">
        <h1 className="text-5xl px-20 pt-20 leading-[1.2] max-sm:hidden">
          Two core values I uphold in <br /> every aspect of my work:
        </h1>
        <h1 className="hidden max-sm:block text-3xl px-5 pt-20 leading-[1.2] tracking-tighter ">
          Two core values I uphold in every aspect of my work:
        </h1>

        <hr className="w-full border-[#c1bdbd] my-6  bottom-0" />
        <div className="flex px-20 py-10 max-sm:flex-col max-sm:p-5">
          <div className="">
            <img src={eyeopening} className="rounded-2xl "  />
            <h1 className="max-sm:tracking-tighter max-sm:pt-5">
              Whether the presentation needs to convince <br /> or educate it
              always has to change audience <br /> perception. I seek insights
              to make decks <br /> unexpectedly enlightening for our audience.
            </h1>
          </div>
          <div className="max-sm:pt-10 max-sm:pb-10">
            <img src={eyecatching} className="rounded-2xl" />
            <h1 className="max-sm:tracking-tighter max-sm:pt-5">
              The presentation helps to see what's hidden, <br /> unseen, or
              simply never known before. I use <br /> design to drive their
              attention, focus them to <br /> clearly see, and help them feel
              the message.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Persentation;
