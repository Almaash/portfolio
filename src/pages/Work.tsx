import Body from "../components/Work/Body";
import CustomAccordion from "../components/Work/CustomAccordion";
import Header from "../components/Work/Header";
import Discovery from "../assets/images/Discovery.png";
import storytelling from "../assets/images/storytelling.png";
import design from "../assets/images/design.png";
import feedback from "../assets/images/feedback.png";
import delivery from "../assets/images/delivery.png";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import PortfolioShowcase from "../components/Work/PortfolioShowcase";
import Transitation from "../components/Transitation";

// =================

const Work = () => {
  const accordionData = [
    {
      title: "01. Phase",
      subTitle: "Discovery",
      image: Discovery,
      content:
        "We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions.",
    },
    {
      title: "02. Phase",
      subTitle: "Storytelling",
      image: storytelling,
      content:
        "Based on the answers, previous drafts, and additional research, we will develop a foundation of the deck — the structure of the presentation. We build a tone of voice, flow, and narrative to engage our audience. Here we will win people's minds.",
    },
    {
      title: "03. Phase",
      subTitle: "Design",
      image: design,
      content:
        "We use design to guide our audience's attention and keep them engaged. It's not only what you want them to do, but also how you make them feel. We make sure the presentation wins people's hearts and leaves a perfect long-lasting impression.",
    },
    {
      title: "04. Phase",
      subTitle: "Feedback",
      image: feedback,
      content:
        "We want to stay on the same page. Hence, each phase wraps up presenting the work to you to collect and implement your feedback if such appears.",
    },
    {
      title: "05. Phase",
      subTitle: "Delivery",
      image: delivery,
      content:
        "We will carefully collect and prepare all the project files to ensure smooth future use.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <Header />
      <Body />
      {/* <AngledTextDesign /> */}
      <div className=" border border-t border-gray-400 ">
        <h1 className="text-5xl px-20 py-20 bg-[#f1f1f1] rounded-t-4xl  leading-[1.2]  max-sm:text-4xl max-sm:px-5">
          Showcasing my work through <span className="underline">clear</span>{" "}
          and
          <br className="max-sm:hidden" />{" "}
          <span className="underline">impactful presentations</span>
        </h1>
        <PortfolioShowcase />
      </div>
      {/*  */}
      <div className="bg-[#f1f1f1] rounded-t-4xl -mt-5">
        <h1 className="text-5xl px-20  pt-10 leading-[1.2] max-sm:px-5 ">
          Holistic Process
        </h1>
      </div>
      <div className=" py-5 pt-10 space-y-2 bg-[#f1f1f1] ">
        {accordionData.map((item, index) => (
          <CustomAccordion
            key={index}
            index={index}
            title={item.title}
            subTitle={item.subTitle}
            content={item.content}
            image={item.image}
            isOpen={openIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </div>
      <div className="h-10 bg-[#f1f1f1]"></div>
      <Footer />
    </>
  );
};

export default Transitation(Work);
