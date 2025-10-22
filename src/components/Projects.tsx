import { ExternalLink, Github } from 'lucide-react';
import fallpomodoro from '../images/fallpomodoro.png';
import quizling from '../images/quizling.png';
import revize from '../images/revize.png';
import elevate from '../images/elevate.png';

const projects = [
  {
    title: 'Elevate',
    description: 'A full-stack running app that generates optimal low-elevation routes in real time, optimizing performance and reducing strain for runners anywhere.',
    image: elevate,
    tech: ['React', 'Node.js', 'JavaScript', 'Vercel', 'TailWind',],
    github: 'https://github.com/franollf/Elevate',
  },
  {
    title: 'QuizLing',
    description: 'The language learning application is designed to help users effectively learn new languages by blending modern technology with traditional learning methods',
    image: quizling,
    tech: ['JavaScript', 'GeminiAI', 'GoogleAPI', 'Tailwind'],
    github: 'https://github.com/gunmack/QuizLing',
    
  },
  {
    title: 'Revize',
    description: 'A modern flashcard web app that helps users efficiently study and retain information through spaced repetition, customizable decks, and intuitive progress tracking.',
    image: revize,
    tech: ['React', 'TypeScript', 'Tailwind'  ],
    github: 'https://github.com/franollf/Revise',
  },
  {
    title: 'Fall Pomodoro',
    description: 'A productivity timer app based on the Pomodoro Technique that helps users stay focused and manage time effectively with customizable work and break intervals. Made in 12 hours for the SFU Fall Hackathon',
    image: fallpomodoro,
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/franollf/Autumn-Pomodoro',

  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-800 text-cyan-400 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
