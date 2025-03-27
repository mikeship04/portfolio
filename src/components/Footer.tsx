import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/mikeship04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-shippy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-4 text-center text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Mike Shippy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
