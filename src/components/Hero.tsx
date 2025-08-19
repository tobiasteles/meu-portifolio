import { ArrowDown, Download } from "lucide-react";
import profilePhoto from "../assets/profile-photo.png";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-secondary relative overflow-hidden"
    >
      {/* background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* conteúdo principal */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img
                src={profilePhoto}
                alt="Tobias Teles - Desenvolvedor Front-end"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500/20 shadow-lg object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-blue-500 bg-clip-text">
                Tobias Teles
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Desenvolvedor especializado em React, JavaScript e tecnologias
              modernas. Criando experiências digitais inovadoras e responsivas.
            </p>
          </div>

          {/* botões */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-blue-500 hover:shadow-lg transition-all duration-300"
              onClick={() => scrollToSection("projetos")}
            >
              Ver Projetos
            </Button>
            <a href="/cv-tobias.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-500-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            </a>
          </div>

          {/* métricas */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">+5</div>
              <div className="text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">2024</div>
              <div className="text-muted-foreground">Início da Jornada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-muted-foreground">Dedicação</div>
            </div>
          </div>
        </div>
      </div>

      {/* seta de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("sobre")}
          className="rounded-full"
        >
          <ArrowDown className="h-6 w-6 text-blue-500" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
