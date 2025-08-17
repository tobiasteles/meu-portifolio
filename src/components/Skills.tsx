import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: "Avançado" },
        { name: "CSS3", level: "Avançado" },
        { name: "JavaScript", level: "Avançado" },
        { name: "React.js", level: "Intermediário" },
        { name: "Next.js", level: "Intermediário" },
        { name: "Tailwind CSS", level: "Intermediário" },
        { name: "Framer Motion", level: "Básico" },
        { name: "Chakra UI / shadcn/ui", level: "Básico" },
      ],
    },
    {
      title: "Ferramentas & Versionamento",
      skills: [
        { name: "Git", level: "Intermediário" },
        { name: "GitHub", level: "Intermediário" },
        { name: "VS Code", level: "Avançado" },
        { name: "Terminal / CLI", level: "Intermediário" },
        { name: "Firebase", level: "Intermediário" },
        { name: "Firestore", level: "Intermediário" },
        { name: "Prisma", level: "Básico" },
        { name: "Drizzle ORM", level: "Básico" },
      ],
    },
    {
      title: "Backend & Integrações",
      skills: [
        { name: "APIs RESTful", level: "Intermediário" },
        { name: "Supabase", level: "Básico" },
        { name: "NeonDB", level: "Básico" },
        { name: "Stripe", level: "Básico" },
        { name: "Autenticação JWT / OAuth", level: "Básico" },
        { name: "Env Variables / Config", level: "Intermediário" },
      ],
    },
    {
      title: "Conhecimentos Gerais",
      skills: [
        { name: "Interfaces Responsivas", level: "Avançado" },
        { name: "Performance Web", level: "Intermediário" },
        { name: "SEO", level: "Básico" },
        { name: "Acessibilidade (WCAG)", level: "Básico" },
        { name: "UX/UI Design Básico", level: "Básico" },
        { name: "PWA / Offline Mode", level: "Básico" },
        { name: "Real-time Updates", level: "Básico" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Avançado":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermediário":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Básico":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="habilidades" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Minhas{" "}
              <span className="bg-gradient-primary bg-clip-text">
                Habilidades
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto ">
              Tecnologias e ferramentas que domino para criar soluções web
              modernas e eficientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <Badge className={getLevelColor(skill.level)}>
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info adicionais */}
          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Sempre Aprendendo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Como desenvolvedor em constante evolução, estou sempre
                  estudando novas tecnologias e aprimorando minhas habilidades.
                  Atualmente focando em aprender mais sobre Node.js, TypeScript
                  e arquiteturas de software modernas para me tornar um
                  desenvolvedor full-stack completo.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                {["TypeScript", "Node.js", "Next.js", "React", "AWS"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-primary border border-primary">
                        {tech} (Estudando)
                    </Badge>
                ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
