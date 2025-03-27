import React from 'react';
import { FaReact, FaLaravel, FaPhp, FaDatabase, FaJs, FaGitAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const TechStack: React.FC = () => {
  const technologies = [
    { 
      icon: FaReact, 
      name: 'React', 
      color: '#61DAFB',
      docs: 'https://reactjs.org'
    },
    { 
      icon: SiTypescript, 
      name: 'TypeScript', 
      color: '#3178C6',
      docs: 'https://www.typescriptlang.org'
    },
    { 
      icon: FaJs, 
      name: 'JavaScript', 
      color: '#F7DF1E',
      docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    { 
      icon: FaLaravel, 
      name: 'Laravel', 
      color: '#FF2D20',
      docs: 'https://laravel.com'
    },
    { 
      icon: FaPhp, 
      name: 'PHP', 
      color: '#777BB4',
      docs: 'https://www.php.net'
    },
    { 
      icon: FaDatabase, 
      name: 'SQL', 
      color: '#336791',
      docs: 'https://www.mysql.com/docs'
    },
    { 
      icon: SiTailwindcss, 
      name: 'Tailwind', 
      color: '#06B6D4',
      docs: 'https://tailwindcss.com'
    },
    { 
      icon: FaGitAlt, 
      name: 'Git', 
      color: '#F05032',
      docs: 'https://git-scm.com/doc'
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {technologies.map(({ icon: Icon, name, color, docs }) => (
          <a
            key={name}
            href={docs}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-700 
                    shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            <Icon className="text-4xl mb-2" style={{ color }} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
            <FaExternalLinkAlt className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity" 
                            style={{ color }} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
