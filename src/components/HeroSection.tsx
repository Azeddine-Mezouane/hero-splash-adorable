import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-secondary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Mezouane
          </span>
          <br />
          <span className="text-foreground">
            Azeddine
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>
          Développeur Full-Stack passionné, créateur d'expériences digitales innovantes et architecte de solutions web modernes
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            Afficher mes projets
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-glow" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-glow" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;