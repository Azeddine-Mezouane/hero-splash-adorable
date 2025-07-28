import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce complète avec gestion des paiements, authentification et dashboard admin",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    id: 2,
    title: "Application de Gestion de Tâches",
    description: "Application collaborative de gestion de projets avec temps réel et notifications",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "TypeScript"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Dashboard interactif avec visualisations de données et rapports personnalisables",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false
  },
  {
    id: 4,
    title: "API REST Microservices",
    description: "Architecture microservices avec authentification JWT et documentation Swagger",
    technologies: ["Node.js", "Docker", "Redis", "JWT", "Swagger"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false
  },
  {
    id: 5,
    title: "Application Mobile",
    description: "Application mobile cross-platform avec géolocalisation et notifications push",
    technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false
  },
  {
    id: 6,
    title: "Blog CMS",
    description: "Système de gestion de contenu avec éditeur riche et optimisation SEO",
    technologies: ["Next.js", "Prisma", "MySQL", "TinyMCE", "Vercel"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, alliant innovation technique et expérience utilisateur exceptionnelle
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Projets Phares</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <Card key={project.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="aspect-video bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {project.title}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="default" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Démo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Autres Réalisations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <Card key={project.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card/30 backdrop-blur-sm border-border/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                      <ExternalLink className="w-3 h-3" />
                      Démo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Intéressé par une collaboration ? Parlons de votre projet !
          </p>
          <Button variant="hero" size="lg">
            Me Contacter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
