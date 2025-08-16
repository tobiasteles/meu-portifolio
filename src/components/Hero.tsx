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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float "></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <img
                src={profilePhoto}
                alt=" Tobias Teles - Desenvolvedor Front-end"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 shadow-medium object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text">
                Tobias Teles
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Desenvolvedor especializado em React, JavaScript
              e tecnologias modernas. Criando experiências digitais inovadoras e
              responsivas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-medium transition-all duration-300" onClick={() => scrollToSection("projetos")}>
                Ver Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
