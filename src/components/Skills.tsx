const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 93 },
      { name: 'Angular', level: 88 },
      { name: 'React Native', level: 90 },
    ],
  },
  {
    title: 'State & UI',
    skills: [
      { name: 'Redux & Saga', level: 92 },
      { name: 'NgRx', level: 85 },
      { name: 'Material-UI', level: 90 },
      { name: 'Ant Design', level: 88 },
      { name: 'Kendo UI', level: 82 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Go', level: 80 },
      { name: 'Spring Boot', level: 75 },
      { name: 'Git', level: 95 },
      { name: 'Cypress', level: 85 },
      { name: 'Jest & Vitest', level: 88 },
    ],
  },
];

const technologies = [
  'Next.js',
  'React',
  'Angular',
  'TypeScript',
  'Redux',
  'React Native',
  'Go',
  'Material-UI',
  'Cypress',
  'Jest',
  'Git',
  'Agile/Scrum',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-white">Skills & </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Technologies and tools I use to build exceptional frontend applications and lead development teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20 mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-slate-800 text-slate-200 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-750 transition-all duration-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Leadership & Methodology</h3>
              <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Experienced in leading frontend teams, conducting code reviews, and mentoring developers.
                Strong advocate for Agile and Scrum methodologies, with proven success in facilitating sprint
                planning, retrospectives, and delivering projects on time. Passionate about establishing best
                practices and fostering a culture of continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
