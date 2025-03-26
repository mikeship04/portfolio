import React from "react";

  const About: React.FC = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 dark:bg-gray-800 transition-colors duration-300">
        <img 
          src={import.meta.env.PROD
            ? '/portfolio/images/headshot.jpg'
            : '/images/headshot.jpg'}
          alt="Your Name" 
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-100 lg:h-100 rounded-full object-cover shadow-lg mb-4 border-4 border-gray-400 dark:border-gray-600"
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
          Hi, I'm Mike Shippy 👋
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 max-w-xl transition-colors duration-300">
          I'm a web developer passionate about building modern, responsive applications using 
          React, TypeScript, and Laravel.
        </p>  
        <div className="mt-6">
          <a 
            href={import.meta.env.PROD ? "/portfolio/projects" : "/projects"}
            className="bg-indigo-500 dark:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-800 dark:hover:bg-blue-500 transition"
          >
            See My Work
          </a>
        </div>
      </section>
    );
  };

  export default About;
