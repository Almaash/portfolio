import { motion } from "framer-motion";

interface AccordionProps {
  index: number;
  title: string;
  content: string;
  subTitle: string;
  image: string;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const CustomAccordion: React.FC<AccordionProps> = ({
  index,
  title,
  content,
  subTitle,
  image,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-t border-gray-300 overflow-hidden ">
      {/* Header */}
      <button className="w-full flex justify-between items-center py-3 px-20 max-sm:px-5 transition duration-200 tracking-thin text-gray-700">
        <span>{title}</span>
        <span>{subTitle}</span>
        <h1
          className="hover:underline cursor-pointer"
          onClick={() => onToggle(index)}
        >
          {isOpen ? "Close" : "Read"}
        </h1>
      </button>

      {/* Collapsible Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="flex p-4 bg-[#f1f1f1] text-gray-700">
          <div className=" text-sm invisible bg-amber-800 w-[50%]">{content}</div>
          <div className=" text-sm w-[50%]">
            <div className="">
              <img
                src={image}
                alt="Accordion"
                className="rounded-xl"
                height={100}
                width={100}
              />
            </div>
            <div className="text-sm w-1/2 pt-5 max-sm:w-full">{content}</div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomAccordion;
