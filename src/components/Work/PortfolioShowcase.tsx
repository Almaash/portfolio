import { useEffect, useRef } from "react";
import gsap from "gsap";
import cabzzz from "../../assets/images/cabzz.png";
import chipx  from "../../assets/images/chipx.png";
import work from "../../assets/images/msms.png";
import elfos from "../../assets/images/elfos.png";

const projects = [
  {
    name: "Elfos Pizza Ordering System",
    bgColor: "bg-orange-500",
    image: elfos,
    link: "http://elfospizza.in/",
    alt: "Full-stack pizza ordering and management system for multiple outlets",
    tags: ["FULL-STACK DEVELOPMENT", "CMS", "E-COMMERCE"],
  },
  {
    name: "ChipX Semiconductor School",
    bgColor: "bg-blue-500",
    image: chipx,
    link: "https://www.chipx.co.in/",
    alt: "ChipX equips engineers with practical skills and career support to thrive in India’s semiconductor industry.",
    tags: ["FULL-STACK DEVELOPMENT", "E-COMMERCE"],
  },
  {
    name: "CABZZ",
    bgColor: "bg-gray-400",
    alt: "Cab Booking System",
    image: cabzzz,
    link: "https://taxi-booking-f-3mrk.vercel.app/",
    tags: ["CAB BOOKING", "LOCATION TRACKING"],
  },
  {
    name: "MultiStore Management System",
    bgColor: "bg-amber-700",
    image: work,
    link: "https://microposindia.vercel.app",
    alt: "Multi store pos system",
    tags: ["BRAND IDENTITY", "PITCH DECK"],
  },
];

export default function PortfolioShowcase() {
  return (
    <div className="min-h-screen bg-[#f1f1f1] py-16 px-6 flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-12 max-sm:flex-col max-sm:items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = imgRef.current?.parentElement; // the <a> element
    const image = imgRef.current;

    if (!card || !image) return;

    const handleMouseEnter = () => {
      gsap.to(image, {
        filter: "blur(6px)",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        filter: "blur(0px)",
        duration: 0.6,
        ease: "expo.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition w-[35rem] h-[34rem] max-sm:w-[20rem] max-sm:h-[26rem]"
    >
      {/* Background Image */}
      <img
        ref={imgRef}
        src={project.image}
        alt={project.alt}
        className="w-full h-full object-cover transition-all"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-200 text-sm mb-4">{project.alt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md border border-white/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-md border border-white/30 hover:bg-white/30 transition cursor-pointer">
          View Project
        </button>
      </div>
    </a>
  );
}

