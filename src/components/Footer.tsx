import { Heart, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KA</span>
                </div>
                <span className="text-xl font-bold text-white">Khaled Alarda</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Frontend Team Lead crafting exceptional digital experiences with modern technologies.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/khalid-ardah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="mailto:khalid.jamal.4002@gmail.com"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                {currentYear} Khaled Alarda. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
