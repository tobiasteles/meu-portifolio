import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-clip-text">Tobias Teles</h3>
              <p className="text-muted-foreground">
                Desenvolvedor especializado em React e
                tecnologias modernas. Criando experiências digitais inovadoras.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/tobiasteles" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/tobias-teles" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:tobias.teles@gmail.com" target="_blank" rel="noopener noreferrer"><Mail className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navegação</h4>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth'})} className="text-muted-foreground hover:text-blue-500 transition-colors text-left">
                Início
              </button>
              <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth'})} className="text-muted-foreground hover:text-blue-500 transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth'})} className="text-muted-foreground hover:text-blue-500 transition-colors text-left">
                Habilidades
              </button>
              <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth'})} className="text-muted-foreground hover:text-blue-500 transition-colors text-left">
                Projetos
              </button>
              <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth'})} className="text-muted-foreground hover:text-blue-500 transition-colors text-left">
                Contato
              </button>
            </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contato
              </h4>
                <div className="space-y-2">
                <p className="text-muted-foreground">
                <strong>Email:</strong> tobias.teles@gmail.com
                </p>
                <p className="text-muted-foreground">
                <strong>Telefone:</strong> (61) 99172-3372
                </p>
                <p className="text-muted-foreground">
                <strong>Localização:</strong> Brasília, DF - Brasil
                </p>
                </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-muted-foreground">
            © {currentYear} Tobias Teles. Todos os direitos reservados.
          </p>
          </div>

          <Button onClick={scrollToTop} variant="outline" size="sm" className="border-blue-500 hover:text-blue-500">
            <ArrowUp className="mr-2 h-4 w-4" />
            Voltar ao Topo
          </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
