import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import cabzzz from "../../assets/images/cabzz.png";
import work from "../../assets/images/msms.png";
import { motion } from "framer-motion";

const projects = [
  {
    name: "CABZZ",
    bgColor: "bg-gray-400",
    alt: "Cab Booking System",
    image: cabzzz,
    link: "https://cabzz-git-almaash-almaashs-projects.vercel.app",
    tags: ["CAB BOOKING", "LOCATION TRACKING"],
  },
  {
    name: "MultiStore Managemnet System",
    bgColor: "bg-amber-700",
    image: work,
    link: "https://microposindia.vercel.app",
    alt: "All Things Go music festival poster",
    tags: ["BRAND IDENTITY", "PITCH DECK"],
  },
];

export default function PortfolioShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredProject) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [hoveredProject]);

  return (
    <div className="relative min-h-screen bg-[#f1f1f1] p-4 flex items-center justify-center">
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-9"
      >
        <h2
          className="text-7xl max-sm:text-5xl font-bold text-[#E1FB84] tracking-tighter 
      [text-shadow:1px_1px_0px_black,-1px_-1px_0px_black,1px_-1px_0px_black,-1px_1px_0px_black]"
        >
          {hoveredProject}
        </h2>
      </motion.div>

      <div className="px-20 max-sm:px-5">
        <div className="grid grid-cols-2 gap-8 place-items-center max-sm:grid-cols-1 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  setHoveredProject,
}: {
  project: any;
  setHoveredProject: (name: string | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imgRef.current;

    gsap.set(card, { scale: 1 });
    gsap.set(image, { scale: 1 });

    const handleMouseEnter = () => {
      setHoveredProject(project.name);
      gsap.to(card, { scale: 0.96, duration: 0.5, ease: "power3.out" });
      gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      setHoveredProject(null);
      gsap.to(card, { scale: 1, duration: 0.6, ease: "expo.out" });
      gsap.to(image, { scale: 1, duration: 0.6, ease: "expo.out" });
    };

    if (card) {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [project.name, setHoveredProject]);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="your-class-names"
    >
      {" "}
      <div className="flex flex-col">
        <div className="flex justify-start items-center gap-3 pb-3">
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <span className="text-base">{project.name}</span>
        </div>

        <div
          ref={cardRef}
          className="relative overflow-hidden w-full flex flex-col justify-between rounded-lg cursor-pointer"
        >
          <div
            className={`relative h-[35rem] max-sm:h-full w-full overflow-hidden flex items-center justify-center ${project.bgColor} rounded-lg`}
          >
            <img
              ref={imgRef}
              src={project.image}
              alt={project.alt}
              className="h-full w-full object-cover transition-transform"
            />
          </div>

          <div className="mt-2 flex flex-wrap gap-2 justify-start">
            {project.tags.map((tag: any, tagIndex: any) => (
              <button
                key={tagIndex}
                className="rounded-full text-xs font-medium px-3 py-1 border border-gray-300"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
