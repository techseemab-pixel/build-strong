import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const slides = [
  {
    id: 1,
    image: heroImage,
    project: "PROJECT P.01",
    title: "ULTRA-MODERN HOUSE DESIGN",
    description: "Architecture viverra tristique justo duis vitae diaminte neque nivamus aestan ateuene artine aringianu the miss finibus viverra lacus fermen.",
  },
  {
    id: 2,
    image: projectResidential,
    project: "PROJECT P.02",
    title: "LUXURY RESIDENTIAL COMPLEX",
    description: "Creating exceptional living spaces with modern architecture, premium materials, and attention to every detail for ultimate comfort.",
  },
  {
    id: 3,
    image: projectCommercial,
    project: "PROJECT P.03",
    title: "COMMERCIAL EXCELLENCE",
    description: "Designing innovative commercial spaces that inspire productivity and reflect the modern business landscape.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="container-custom relative z-10 h-full flex items-center">
            <div className="max-w-2xl">
              <span 
                className={`inline-flex items-center gap-2 text-background/80 text-sm tracking-[0.3em] uppercase mb-6 ${
                  index === currentSlide ? "animate-fade-up" : ""
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-accent" />
                {slide.project}
              </span>
              
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-serif text-background mb-6 leading-tight ${
                  index === currentSlide ? "animate-fade-up" : ""
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                {slide.title}
              </h1>
              
              <p 
                className={`text-background/80 text-lg mb-8 leading-relaxed max-w-lg ${
                  index === currentSlide ? "animate-fade-up" : ""
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                {slide.description}
              </p>
              
              <div 
                className={`${index === currentSlide ? "animate-fade-up" : ""}`}
                style={{ animationDelay: "0.3s" }}
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/projects">
                    View Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Counter - Bottom Left */}
      <div className="absolute bottom-12 left-8 md:left-16 z-20 flex items-center gap-4">
        <span className="text-background text-sm font-medium">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <div className="w-24 h-0.5 bg-background/30 relative">
          <div 
            className="absolute top-0 left-0 h-full bg-background transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="text-background/50 text-sm">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Navigation Arrows - Bottom Right */}
      <div className="absolute bottom-12 right-8 md:right-16 z-20 flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-background/30 flex items-center justify-center text-background hover:bg-background hover:text-primary transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-background/30 flex items-center justify-center text-background hover:bg-background hover:text-primary transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Vertical Side Controls - Left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1 h-8 transition-all duration-300 ${
              index === currentSlide ? "bg-background" : "bg-background/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
