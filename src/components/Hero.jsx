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
      className="relative min-h-screen flex items-center justify-center p-4 scroll-mt-nav bg-[#111317]"
    >
      <div className="container mx-auto mt-30 text-center fade-in ">
        <div className="container mx-auto">
          <div className="mx-auto w-40 h-40 md:w-48 md:h-48 relative flex items-center justify-center mb-8">
            <img
              src={fotoPerfil}
              alt="Foto de perfil"
              className="w-full h-full object-cover rounded-full border border-[#282c33] shadow-sm transition-all duration-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <h1 className="mb-4 md:text-5xl text-3xl font-light tracking-tight">
            Olá, eu sou{" "}
            <span className="text-white font-medium">
              Mateus Muniz
            </span>
          </h1>
          <p className="text-lg md:text-xl text-cyan-500 mb-6 font-medium tracking-wide">
            Desenvolvedor Front-end
          </p>
          <p className="text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed mb-8">
            Focado em criar interfaces web limpas, interativas e centradas na melhor experiência do usuário. 
            Acredito que menos é mais quando se trata de design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button
            onClick={handleContactClick}
            className="bg-transparent hover:bg-cyan-500/10 text-cyan-500 border border-cyan-500/30 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300"
          >
            Vamos Conversar
          </button>
          <Link
            to="/projects"
            className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
          >
            Explorar Projetos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://github.com/mateusmuniz-09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-mateus-de-oliveira-muniz-554333233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:mateus09muniz@gmail.com"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="WhatsApp"
            title="WhatsApp"
            href="https://wa.me/5588981252883?text=Ol%C3%A1%2C%20Mateus%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
