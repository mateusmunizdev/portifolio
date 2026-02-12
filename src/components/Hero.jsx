import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const fotoPerfil = new URL("../assets/img/perfil.png", import.meta.url).href;

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center p-4 scroll-mt-nav"
    >
      <img
        src="https://imgs.search.brave.com/7on62KozCsU4R5nEjEvpMKTzZSKZTTZDksGI4HozzHA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L2NvbGFnZW0tZGUt/ZnVuZG8tZGUtcHJv/Z3JhbWFjYW9fMjMt/MjE0OTkwMTc4OS5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA"
        alt="Fundo Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-10 "
      />
      <div className="container mx-auto mt-30 text-center fade-in ">
        <div className="container mx-auto">
          <div className="md:w-[280px] md:h-[280px] w-[220px] h-[220px] mx-auto relative flex items-center justify-center">
            <div className="md:w-[270px] md:h-[270px] w-[205px] h-[205px] relative flex items-center rounded-3xl rotate-6 justify-center bg-gray-700/40">
              <div className=" md:w-[270px] md:h-[270px] w-[205px] h-[205px] flex items-center rounded-3xl -rotate-6 justify-center bg-gray-700/40">
                <img
                  src={fotoPerfil}
                  alt="Foto de perfil"
                  className="relative md:w-[250px] md:h-[250px] w-[180px] h-[180px] object-contain rounded-3xl shadow-lg  z-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 mt-10">
          <h1 className="mb-4 md:text-5xl text-3xl">
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 bg-clip-text text-transparent text-nowrap font-bold">
              Mateus Muniz
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desenvolvedor Web
          </p>
          <p className="text-sm text-[#98a6b3] max-w-2xl mx-auto  italic mb-8">
            Transformo ideias em experiências web modernas e funcionais, com
            código limpo e eficiente.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={handleContactClick}
            className="bg-cyan-500 hover:bg-cyan-500/90 text-[#1a1d23]  px-6 py-4 rounded-xl text-lg group flex justify-center  items-center trasition-all duration-300 "
          >
            <span>Entre em Contato</span>
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={25}
            />
          </button>
          <Link
            to="/projects"
            className="border border-gray-600 hover:bg-cyan-500 hover:text-[#1a1d23] px-6 py-4 text-lg rounded-xl trasition-all duration-300"
          >
            Ver Projetos
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/mateusmuniz-09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 hover:text-cyan-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-mateus-de-oliveira-muniz-554333233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 hover:text-cyan-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:mateus09muniz@gmail.com"
            className="text-cyan-700 hover:text-cyan-500  transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#98a6b3] hover:text-cyan-500 transition-colors"
            aria-label="WhatsApp"
            title="WhatsApp"
            value="+55 (88) 98125-2883"
            href="https://wa.me/5588981252883"
          >
            <FaWhatsapp
              className="text-cyan-700 hover:text-cyan-500  transition-colors"
              size={24}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
