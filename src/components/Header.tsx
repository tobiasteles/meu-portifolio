import { useState } from "react";
// Update the import path below if your button component is located at src/components/ui/button.tsx
import { Button } from "./ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text ">
            Tobias Teles
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/tobiasteles" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/tobias-teles" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:tobias.teles@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
                <div className="flex flex-col space-y-4">
                    <button onClick={() => scrollToSection("inicio")} className="text-left hover:text-primary transition-colors">
                        Início
                    </button>
                    <button onClick={() => scrollToSection("sobre")} className="text-left hover:text-primary transition-colors">
                        Sobre
                    </button>
                    <button onClick={() => scrollToSection("habilidades")} className="text-left hover:text-primary transition-colors">
                        Habilidades
                    </button>
                    <button onClick={() => scrollToSection("projetos")} className="text-left hover:text-primary transition-colors">
                        Projetos
                    </button>
                    <button onClick={() => scrollToSection("contato")} className="text-left hover:text-primary transition-colors">
                        Contato
                    </button>

                    <div className="flex items-center space-x-4 pt-4">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://github.com/tobiasteles" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5"/>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://linkedin.com/in/tobias-teles" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5"/>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="mailto:tobias.teles@gmail.com">
                                <Mail className="h-5 w-5"/>
                            </a>
                        </Button>
                    </div>
                </div>
            </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
