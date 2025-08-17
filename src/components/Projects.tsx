import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Edukhanzinho",
      description:
        "Plataforma de alfabetização infantil gamificada com painel administrativo, cadastro de questões e sistema de gamificação. Interface otimizada para experiência infantil e gestão de conteúdo.",
      image: "/edukhanzinho.png",
      technologies: [
        "Next.js 15",
        "React",
        "Drizzle",
        "Tailwind CSS",
        "Stripe",
        "Clerk",
      ],
      liveUrl: "https://edukhanzinho.vercel.app/",
      githubUrl: "https://github.com/tobiasteles/edukhanzinho",
      featured: true,
    },
    {
      title: "Miqueias Psicólogo",
      description:
        "Website profissional para psicólogo com seções informativas sobre especialidades, serviços oferecidos, depoimentos de clientes e formulário de contato integrado.",
      image: "/miqueias.png",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Firebase",
        "Firestore",
      ],
      liveUrl: "https://miqueiaspsicologo.netlify.app/",
      githubUrl: "https://github.com/tobiasteles",
      featured: true,
    },
    {
      title: "Banco de Pontos Edukhan",
      description:
        "Plataforma para gerenciamento de pontos dos alunos do Edukhan, permitindo que troquem os pontos ganhos em atividades por prêmios. O sistema oferece controle completo para professores sobre saldos, recompensas e regras de troca, facilitando a gamificação da aprendizagem.",
      image: "/bancodepontos.png",
      technologies: [
        "Next.js",
        "React",
        "Firebase",
        "Firestore",
        "Stripe",
        "Tailwind CSS",
      ],
      liveUrl: "https://bancodepontosedukhan.netlify.app/",
      githubUrl: "https://github.com/tobiasteles",
      featured: true,
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meus{" "}
              <span className="bg-gradient-primary bg-clip-text">Projetos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando minhas
              habilidades e técnicas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group shadow-soft hover:shadow-large transition-all duration-300 animate-fade-in ${
                  project.featured ? "lg:col-span-2 xl:col-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg aspect-video">
                    <img src={project.image} alt={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>

                  <p className="text-muted-foreground mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Site
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Ver Código
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Interessado no meu trabalho? Vamos conversar!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estou sempre aberto a novos desafios e oportunidades. Vamos
                  conversar sobre como posso contribuir para o seu projeto!
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById("contato");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Entre em Contato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
