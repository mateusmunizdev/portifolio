import {
  Code2,
  Database,
  Globe,
  GitBranch,
  Layers,
  Terminal,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        { name: "React", level: "Avançado" },
        { name: "Next.js", level: "Intermediário" },
        { name: "JavaScript", level: "Intermediário" },
        { name: "TypeScript", level: "Intermediário" },
        { name: "HTML5", level: "Avançado" },
        { name: "CSS3", level: "Avançado" },
        { name: "Tailwind CSS", level: "Intermediário" },
      ],
    },
    {
      category: "Backend",
      icon: <Terminal className="w-6 h-6" />,
      technologies: [
        { name: "Node.js", level: "Básico" },
        { name: "Express", level: "Básico" },
        { name: "API REST", level: "Básico" },
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        { name: "SupaBase", level: "Básico" },
        { name: "FireBase", level: "Básico" },
      ],
    },
    {
      category: "Ferramentas",
      icon: <GitBranch className="w-6 h-6" />,
      technologies: [
        { name: "Git", level: "Intermediário" },
        { name: "GitHub", level: "Intermediário" },
        { name: "VS Code", level: "Avançado" },
        { name: "Vite", level: "Intermediário" },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Avançado":
        return "avancado";
      case "Intermediário":
        return "intermediario";
      case "Básico":
        return "iniciante";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="scroll-mt-nav py-8 fade-down">
      <div className="container mx-auto p-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-5xl font-light tracking-tight">
            Minhas <span className="font-medium text-white">Especialidades</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-light">
            Tecnologias e ferramentas que utilizo para criar aplicações de alto nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-transparent border border-gray-800 rounded-lg p-8 transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#15181e] animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
                <div className="text-cyan-500">{skill.icon}</div>
                <h3 className="text-lg font-medium text-white">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-300 font-light text-sm">{tech.name}</span>
                    <span className={`text-xs uppercase tracking-widest ${getLevelColor(tech.level)}`}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "Vite",
          ].map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
