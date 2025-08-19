import { useState } from "react";
import { supabase } from "../integrations/supabase/client";
import { toast } from "sonner";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Primeiro salva no banco
      const { error: dbError } = await supabase
        .from("contact_messages")
        .insert([formData]);

      if (dbError) throw dbError;

      // Chama a função edge sem autenticação
      const { error: emailError } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: formData, // Já é automaticamente convertido para JSON
        }
      );

      if (emailError) throw emailError;

      toast.success("Mensagem enviada com sucesso!");
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Erro ao enviar mensagem");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tobias.teles@gmail.com",
      link: "mailto:tobias.teles@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(61) 99172-3372",
      link: "tel:+5561991723372",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Brasília, DF",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/tobiasteles",
      link: "https://github.com/tobiasteles",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/tobias-teles",
      link: "https://www.linkedin.com/in/tobias-teles/",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre oportunidades, projetos ou apenas trocar uma
              ideia sobre tecnologia!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envie uma mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <Input
                          name="whatsapp"
                          placeholder="Seu WhatsApp (opcional)"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="transition-all duration-300 focus:shadow-soft"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Assunto"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Sua mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="transition-all duration-300 focus:shadow-soft resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-blue-500 hover:shadow-medium transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/*  */}

            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>Informações de Contato</CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {info.title}
                        </h4>
                        {info.link !== "#" ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-blue-500 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Redes Sociais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {socialLinks.map((social) => (
                    <div
                      key={social.title}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <social.icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {social.title}
                        </h4>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-blue-500 transition-colors"
                        >
                          {social.link}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-gradient-blue-500 text-blue-500-foreground">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">
                    Disponível para Trabalho
                  </h4>
                  <p className="mb-4 opacity-90">
                    Estou atualmente em busca de oportunidades como
                    Desenvolvedor. Vamos construir algo incrível juntos!
                  </p>
                  <div className="text-sm opacity-75">
                    Resposta em até 24 horas
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

export default Contact;
