import { ExternalLink, Github } from "lucide-react";
import BoraCortar from "../assets/img/img-projects/BoraCortar.png";
import SaasCardAppio from "../assets/img/img-projects/SaasCardAppio.png";
import Landinpage from "../assets/img/img-projects/Landinpage.png";
import Ecomerce from "../assets/img/img-projects/E-Comerce.png";
import Site from "../assets/img/img-projects/Site-adv.png";
import CardapioSopa from "../assets/img/img-projects/CardapioDigitalSopas.png";
import PrevisaoDoTempo from "../assets/img/img-projects/PrevisaoDoTempo.png";
import CardProfissional from "../assets/img/img-projects/CardProfissional.png";
const Projects = () => {
  const projects = [
    {
      title: "Bora Cortar",
      description:
        "Sistema web para agendamento de cortes de cabelo e barba, permitindo selecionar horários, serviços e confirmar online de forma prática.",
      image: BoraCortar,
      technologies: ["Next.js", "React", "TypeScript", "SupaBase", "Tailwind CSS"],
      live: "https://agendacorte.vercel.app/",
    },

    {
      title: "Site institucional para advogados",
      description:
        "Página de apresentação de escritório de advocacia, destacando áreas de atuação e informações de contato.",
      image: Site,
      technologies: ["React", "Tailwind CSS", "JavaScript"],

      live: "https://adv-institucional.netlify.app/",
    },

    {
      title: "Landing Page Pessoal",
      description:
        "Página de apresentação de Personal Trainer, destacando serviços, planos e informações de contato.",
      image: Landinpage,
      technologies: ["HTML", "JavaScript", "CSS"],

      live: "https://melhoresuasaude.netlify.app/",
    },
    {
      title: "E-Comerce de moda",
      description:
        "Loja online de moda feminina, com produtos, carrinho e checkout integrados.",
      image: Ecomerce,
      technologies: ["HTML", "CSS", "JavaScript"],

      live: "https://eleganzamodas.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-nav py-20">
      <div className="container mx-auto p-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-5xl font-light tracking-tight">
            Meus <span className="font-medium text-white">Projetos</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-light">
            Soluções que desenvolvi para resolver problemas reais com código limpo e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-transparent border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-1 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48 border-b border-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6 font-light text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-gray-800 text-gray-400 text-[10px] uppercase tracking-wider rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-cyan-400 flex items-center gap-2 transition-colors font-medium"
                  >
                    <span>Ver Projeto</span>
                    <ExternalLink size={14} />
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
