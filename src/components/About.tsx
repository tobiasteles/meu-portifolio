import { Globe, GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre{" "}
              <span className="bg-gradient-primary bg-clip-text">Mim</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia, sempre em busca de
              aprender e criar soluções inovadoras.
            </p>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Quem sou eu?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sou Tobias, desenvolvedor em formação, com foco em criar
                  aplicações web modernas e responsivas. Atualmente cursando
                  Análise e Desenvolvimento de Sistemas, estou sempre em busca
                  de novos desafios e oportunidades para crescer
                  profissionalmente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sou movido pela paixão em transformar ideias em soluções
                  digitais robustas. Domino React.js, JavaScript, HTML5, CSS3 e
                  todo o ecossistema moderno de desenvolvimento front-end com
                  Next.js e Tailwind. No back-end, trabalho com Firebase,
                  Supabase, NeonDB, Prisma e Drizzle, além de integrações
                  seguras com Stripe para sistemas de pagamento. Minha
                  experiência prática inclui desde plataformas educacionais
                  inovadoras até e-commerces e sistemas administrativos
                  completos, sempre unindo técnica, visão de produto e foco na
                  experiência do usuário.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Brasília, DF - Brasil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-foreground">
                    Analise e Desenvolvimento de Sistemas - UNINTER
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Inglês Avançado</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    Objetivo Profissional
                  </h4>
                  <p>
                    Atuar como Desenvolvedor em projetos de e-commerce,
                    aplicando HTML, CSS, JavaScript e React para criar
                    experiências otimizadas para o usuário.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    Formação Acadêmica
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <p>Análise e Desenvolvimento de Sistemas</p>
                      <p>UNINTER • 2024 - 2026</p>
                    </div>
                    <div>
                      <p>Física (Licenciatura)</p>
                      <p>UnB • 2016 - 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    Cursos Complementares
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground">
                      • Responsive Web Design - FreeCodeCamp
                    </p>
                    <p className="text-sm text-foreground">
                      • JavaScript Algorithms and Data Structures - FreeCodeCamp
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
