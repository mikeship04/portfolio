import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, TypeScript, and Tailwind CSS.",
    image: "/images/Linkedin Banner1.png",
    link: "https://github.com/mikeship04/portfolio",
  },
  {
    title: "College Marketplace",
    description: "An applicatoin made during bootcamp to sell items when moving in/out of dorms. Link is to a video walkthrough.",
    image: "/images/lofi-chill-bedroom-wallpaper-2560x1600_7.jpg",
    link: "https://www.loom.com/share/07b8cc35f0454c73b93acf655d809edf",
  },
  {
    title: "LeetCode Solutions",
    description: "A link to solutions for leetcode problems I've completed in various languages.",
    image: "/images/Most water.png",
    link: "https://github.com/mikeship04/LeetCodes",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 px-4 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 transition-colors duration-300 mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
