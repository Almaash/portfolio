
import typescript from "../../assets/images/typescript.png";
import tailwind from "../../assets/images/tailwind.png";
import react from "../../assets/images/reactjs.png";
import prisma from "../../assets/images/prisma.png";
import express from "../../assets/images/express-js.png";
import next from "../../assets/images/next.png";
import js from "../../assets/images/JS.png";
import figma from "../../assets/images/figma.png";
import node from "../../assets/images/node.png";
import graphql from "../../assets/images/graphql.png";
import mongo from "../../assets/images/mongo.png";
import pg from "../../assets/images/pg.png";
import aws from "../../assets/images/aws.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";

export default function TechStack() {
  const categories = {
    Frontend: [
      { name: "Next.js", icon: next },
      { name: "React", icon: react },
      { name: "TypeScript", icon: typescript },
      { name: "JavaScript", icon: js },
      { name: "Tailwind", icon: tailwind },
      { name: "Figma", icon: figma },
    ],
    Backend: [
      { name: "Node.js", icon: node },
      { name: "GraphQL", icon: graphql },
      { name: "Exprsess", icon: express },
    ],
    Databases: [
      { name: "MongoDB", icon: mongo },
      { name: "Postgres", icon: pg },
      { name: "Prisma", icon: prisma },
      { name: "Drizzle", icon: typescript },
      { name: "AWS", icon: aws },
    ],

    Tools: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
    ],
  };

  return (
    <>
      <div className="min-h-screen  bg-[#004D43] p-8 rounded-t-4xl">
        <h1 className="text-5xl px-20 py-15 max-sm:px-0 max-sm:py-5 leading-[1.2] text-white">
          Tech Stack
        </h1>
        <div className="min-h-screen flex flex-col items-center justify-center p-8 max-sm:px-2">
          <div className="max-w-6xl w-full">
            {Object.entries(categories).map(([category, techs]) => (
              <div key={category} className="mb-8">
                <div className="flex justify-center items-center gap-4">
                  <h2 className="text-2xl mb-4 text-white">{category}</h2>
                  <div className="flex-1 border-b-2 border-gray-300"></div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 pl-10 max-sm:mt-2">
                  {techs.map((tech, index) => (
                    <div
                      key={index}
                      className="relative flex max-sm:flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
                    >
                      {/* Vertical Line */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-6 w-0.5 bg-gray-300"></div>

                      <div className="text-4xl text-[#4a5568] transition-transform duration-300 hover:scale-110">
                        <img src={tech.icon} className="h-12 w-12 rounded-xl max-sm:h-5 max-sm:w-5" />
                      </div>
                      <span className="text-lg font-semibold text-[#2d3748] max-sm:text-sm">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
