import aadrika from "../../assets/images/aadrika.jpg";
import cdzljpg from "../../assets/images/cdzljpg.jpg";

const experiences = [
  {
    logo: aadrika,
    role: "Fullstack Software Developer",
    company: "Aadrika Enterprises",
    location: "Ranchi, India",
    period: "Feb 2024 — Present",
    description:
      "Aadrika is a collaboration platform for modern engineering teams. It bridges the gap between communication, cloud, code, projects, and more—with an incredible developer experience.",
    achievements: [
      "Worked on developing and enhancing feature-rich government projects. Implemented user-friendly interfaces with clean designs. User Authentication with JWT",
      "Efficiently fetch data from RESTful APIs using Axios, ensuring seamless integration and dynamic content for enhanced user experiences.",
      "Built responsive web apps with scalable, optimized code. Employed component-based architecture and organized folder structures for efficient development and maintenance",
    ],
  },
  {
    logo: cdzljpg,
    role: "Frontend Developer",
    company: "Codezeal Technology Pvt Ltd",
    location: "Ranchi, India",
    period: "Aug 2023 — Jan 2024",
    description:
      "Built responsive and interactive user interfaces using Next.js, React, and Tailwind, contributing to public transport and parking management system projects.",
    achievements: [
      "Developed client-side applications using React.Js and integrate them with server-side APIs, enhancing user interaction and visual aesthetics",
      "Design and developed scalable and efficient Node.Js application using Express.Js Framework, resulting in improved performance and user experience",
    ],
  },
];

const Experience = ({
  logo,
  role,
  company,
  location,
  period,
  description,
  achievements,
  isRight,
}: any) => {
  return (
    <div
      className={`relative flex max-sm:flex-col  ${
        isRight ? "flex-row-reverse" : ""
      } items-center mb-10`}
    >
      <div
        className={`hidden md:block w-1/2 max-sm:w-full ${
          isRight ? "pl-12 text-left" : "pr-12 text-right"
        }`}
      >
        {period}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#004D43] rounded-full z-10 max-sm:hidden"></div>
      <div className="w-1/2 px-20 max-sm:px-0 max-sm:w-full">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={logo || "/placeholder.svg"}
              alt={`${company} logo`}
              className="w-10 h-10 rounded-full border border-gray-400 p-1"
            />
            <div>
              <h3 className="text-xl font-bold">{role}</h3>
              <p className="">
                {company} • {location}
              </p>
            </div>
          </div>
          <div className="md:hidden text-sm  mb-4">{period}</div>
          <p className=" mb-4">{description}</p>
          <ul className="space-y-3">
            {achievements.map((achievement: any, index: any) => (
              <li key={index} className="flex items-start gap-2">
                <div className="min-w-4 mt-1.5">
                  <div className="w-2 h-2 bg-[#004D43] rounded-full"></div>
                </div>
                <p className="text-sm">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperiencesTimeline = () => {
  return (
    <div className="bg-[#F8F6EE]">
      <div className=" min-h-screen  px-30 py-1 max-sm:px-5 max-sm:py-0">
        <div className="">
          <h1 className="text-5xl  py-15 leading-[1.2] underline">
            Experiences
          </h1>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <Experience key={index} {...exp} isRight={index % 2 !== 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="border-gray-300 mt-10 w-[95%]" />
      </div>
    </div>
  );
};

export default ExperiencesTimeline;
