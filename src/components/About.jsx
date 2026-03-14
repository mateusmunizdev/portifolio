const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-nav mb-8 py-20 fade-in"
    >
      <div className="container mx-auto p-4 ">
        <div className="max-w-3xl mx-auto text-center p-2 ">
          <h2 className="mb-12 text-3xl md:text-5xl font-light tracking-tight">
            Quem <span className="text-white font-medium">Sou Eu</span>
          </h2>
          <div className="flex">
            <div className="space-y-8 text-base md:text-lg text-gray-400 animate-slide-up text-left font-light leading-relaxed">
              <p>
                Sou <strong className="text-white font-medium">desenvolvedor front-end</strong> dedicado a criar
                aplicações web que unem design inteligente e excelente performance. Minha transição
                para a tecnologia começou pela curiosidade em entender como ferramentas digitais
                poderiam resolver problemas reais de forma elegante e escalável.
              </p>
              <p>
                Com uma base anterior sólida no setor de <strong className="text-white font-medium">telecomunicações</strong>, 
                trouxe comigo habilidades essenciais: visão sistêmica, rápida resolução de
                incidentes críticos e comunicação alinhada com as necessidades dos clientes e das equipes.
              </p>
              <p>
                Atualmente, meu foco principal se baseia no ecossistema moderno: <strong className="text-cyan-500 font-medium tracking-wide">React, Next.js, TypeScript e Tailwind CSS</strong>.
                Priorizo arquiteturas maduras e código limpo, sempre atento à acessibilidade e responsividade.
              </p>
              <p>
                Busco desafios onde eu possa arquitetar soluções front-end de impacto,
                ajudando empresas a entregar interfaces impecáveis para seus usuários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
