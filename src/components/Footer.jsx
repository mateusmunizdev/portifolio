import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import ScrollToTopLink from "./ScrollToTopLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111317] border-t border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-tight text-white mb-4">
              Mateus Muniz
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm">
              Desenvolvedor Front-end dedicado a criar soluções web focadas em experiência do usuário e performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <ScrollToTopLink
                  to="/"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Início
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  to="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Sobre
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  to="/skills"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Especialidades
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  to="/projects"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Projetos
                </ScrollToTopLink>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-6">Conexões</h4>
            <div className="flex flex-col gap-4 mb-6">
              <a
                href="mailto:mateus09muniz@gmail.com"
                className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <Mail size={16} className="text-cyan-500" />
                mateus09muniz@gmail.com
              </a>
            </div>
            <div className="flex gap-5">
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
            <div className="mt-8">
              <a
                href="/curriculo-mateus-muniz.pdf"
                download
                className="inline-flex items-center justify-center gap-2 text-sm text-cyan-500 hover:text-cyan-400 font-medium transition-colors"
              >
                <Download size={16} />
                <span>Download Currículo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs font-light">
          <p>
            &copy; {currentYear} Mateus Muniz. Todos os direitos reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Desenvolvido com React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
