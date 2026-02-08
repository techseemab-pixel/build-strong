import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-3xl">
          <span className="inline-block text-accent font-semibold tracking-wider uppercase mb-4 animate-fade-up">
            Building Excellence Since 2005
          </span>
          
          <h1 className="heading-primary text-background mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Building the Future with{" "}
            <span className="text-accent">Precision</span> & Trust
          </h1>
          
          <p className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We are a premier construction and engineering firm delivering exceptional 
            residential, commercial, and infrastructure projects. Our commitment to 
            quality, innovation, and timely delivery sets us apart.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/projects">
                <Play className="w-5 h-5" />
                View Our Projects
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-background/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "18+", label: "Years Experience" },
              { value: "350+", label: "Projects Completed" },
              { value: "120+", label: "Expert Team" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-background/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
