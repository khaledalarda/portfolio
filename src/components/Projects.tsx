import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  company?: string;
  role?: string;
  github?: string;
  demo?: string;
  website?: string;
}

const projects: Project[] = [
  {
    title: 'Upwork Outcomes Platform',
    description: 'Building core pages for Upwork Outcomes, a new results-driven service offering. Collaborating with global cross-functional teams to deliver features aligned with business outcomes. Maintained strong test coverage with unit tests (Vitest) and E2E tests (Cypress).',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Nuxt 3', 'Vue.js', 'Vitest', 'Cypress', 'CI/CD', 'Figma'],
    company: 'Upwork',
    role: 'Senior Frontend Engineer',
    website: 'https://www.upwork.com/',
  },
  {
    title: 'StoryMe Platform',
    description: 'Leading the development of a platform for building responsive, story-driven websites. Engineered advanced DOM manipulation with JSON-to-DOM and DOM-to-JSON conversions.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Redux', 'Redux Saga', 'MUI', 'TypeScript'],
    company: 'StoryMe LTD',
    role: 'Frontend Team Lead',
    website: 'https://storyme.design/',
  },
  {
    title: 'Ninja Van Internal Projects',
    description: 'Led 5+ internal projects from requirements to delivery, including design system development and cross-functional collaboration.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Next.js', 'Go', 'Design System'],
    company: 'Ninja Van',
    role: 'Senior Software Engineer',
    website: 'https://www.ninjavan.co/',
  },
  {
    title: 'Extra Cash App',
    description: 'Personal project: Cash back mobile application with 5,000+ active users. Successfully deployed on both Google Play Store and Apple App Store.',
    image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Mobile', 'iOS', 'Android'],
    demo: 'https://apps.apple.com/app/extra-cash',
  },
  {
    title: 'Apple Internal Employee System',
    description: 'Spearheaded frontend development of an internal system managing inventories and labs, integral to Apple\'s supply chain process.',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Angular', 'Spring Boot', 'TypeScript'],
    company: 'Apple Inc.',
    role: 'Frontend Engineer',
    website: 'https://www.apple.com/',
  },
  {
    title: 'IOHealth Platform',
    description: 'Healthcare platform streamlining doctor-patient interactions through appointments, chat, and calls. Freelance project for UAE-based startup.',
    image: 'https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Healthcare', 'WebRTC'],
    role: 'Freelance',
    website: 'https://iohealth.com/',
  },
  {
    title: 'Restaurant365 Platform',
    description: 'Built React components for real-time data transfer using WebSockets, migrated legacy codebase to React, and developed reusable component library.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'WebSockets', 'Scrum'],
    company: 'Restaurant365',
    role: 'Frontend Engineer',
    website: 'https://www.restaurant365.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            A selection of projects showcasing my experience in frontend development, team leadership, and building scalable applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors flex-1">
                      {project.title}
                    </h3>
                  </div>

                  {project.company && (
                    <p className="text-sm text-blue-400 mb-2">
                      {project.role} • {project.company}
                    </p>
                  )}
                  {!project.company && project.role && (
                    <p className="text-sm text-blue-400 mb-2">
                      {project.role}
                    </p>
                  )}

                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-full border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm">Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
