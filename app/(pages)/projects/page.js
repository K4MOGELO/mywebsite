import Projects from "@/components/component/Projects";
import Link from "next/link";
import React from "react";

export default function page() {
  const projects = [
    {
      name: "Personalised Website",

      image: "/images/projects/website.png",
      description: "My portfolio,showcasing my skills,projects and experience",
      languages: ["NextJs"],
    },
    {
      name: "Proparty Navigator(ProNav)",
      image: "/images/projects/pronav.png",
      description:
        "Web apllication to help students find  accomodation at university of limpopo showing all the prices and images4",
      languages: ["NextJS", "Firebase", "Clerk"],
    },
    {
      name: "Campus Connect",
      image: "/images/projects/campusconnect.png",
      description:
        "All in one website to help freshers find their way around the campus and get access to all services ",
      languages: ["JavaScript", "Vue.js"],
    },
  ];
  return (
    <div className=" p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            languages={project.languages}
          />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ image, name, description, languages }) => {
  return (
    <Link href="#" className="shadow-md  rounded-md p-4 border border-gray-900">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{description.slice(0, 70)}...</p>
        </div>
        <div className="flex flex-wrap">
          {languages.map((language, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm mr-2 mb-2"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
