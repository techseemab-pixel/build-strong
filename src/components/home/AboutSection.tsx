import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-building.jpg";

const AboutSection = () => {
  const highlights = [
    "Registered with PEC & relevant authorities",
    "ISO certified quality management",
    "Expert team of engineers & architects",
    "18+ years of industry experience",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative z-10">
              <img
                src={aboutImage}
                alt="Modern building architecture"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-lg z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent rounded-lg z-0" />
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 right-8 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl z-20">
              <div className="text-4xl font-serif font-bold">18+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <span className="text-accent font-semibold tracking-wider uppercase">
              About Our Company
            </span>
            
            <h2 className="heading-secondary text-foreground mt-3 mb-6">
              Professional Construction & Engineering Solutions
            </h2>
            
            <p className="text-body mb-6">
              ProConstruct is a leading construction and engineering company based in 
              Pakistan, delivering integrated solutions from project planning to final 
              handover. We specialize in residential, commercial, and infrastructure 
              projects with a commitment to excellence.
            </p>
            
            <p className="text-body mb-8">
              Our team of experienced professionals combines innovative design with 
              cutting-edge technology to deliver projects that exceed expectations. 
              We take pride in our transparent approach, ensuring clients are involved 
              at every stage of the construction process.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
