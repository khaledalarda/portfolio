import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a Frontend Team Lead and Senior Software Engineer with 7+ years of experience building
                exceptional web applications. Currently leading a team of 5 frontend engineers at StoryMe,
                where we build responsive, story-driven websites using Next.js, React, and modern frontend technologies.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                My expertise spans the full frontend ecosystem, from architecting scalable applications to
                mentoring teams and driving technical excellence. I've successfully led multiple projects from
                requirements gathering to delivery, with experience at companies like Ninja Van, Apple, and Restaurant365.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I hold a BSc in Computer Engineering from Al-Najah University and am passionate about clean code,
                agile methodologies, and building products that make a real impact.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Technical Leadership</h3>
                <p className="text-slate-400">
                  Leading teams, conducting code reviews, and establishing best practices for scalable frontend architectures.
                </p>
              </div>

              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Project Ownership</h3>
                <p className="text-slate-400">
                  Led 5+ projects as PIC from requirements to delivery, facilitating agile processes and sprint planning.
                </p>
              </div>

              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300 group">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <Users className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mentorship</h3>
                <p className="text-slate-400">
                  Providing guidance and support to foster professional growth and maintain high code quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
