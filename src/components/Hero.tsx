import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-br from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  KA
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Khaled Alarda
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up animation-delay-200">
            Frontend Team Lead & Senior Software Engineer
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-300">
            Leading teams and building exceptional digital experiences with React, Next.js, and modern web technologies.
            Specialized in scalable frontend architectures and team mentorship.
          </p>

          <div className="flex gap-4 justify-center mb-12 animate-slide-up animation-delay-400">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="px-8 py-3 border-2 border-slate-600 text-slate-300 rounded-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 justify-center animate-slide-up animation-delay-500">
            <a
              href="https://linkedin.com/in/khalid-ardah/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-slate-900 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:khalid.jamal.4002@gmail.com"
              className="p-3 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-slate-900 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </button>
    </section>
  );
}
