import { Link } from "react-router-dom";
import { 
  Building2, 
  ClipboardList, 
  PenTool, 
  Wrench, 
  Paintbrush,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Construction Services",
    description: "Complete residential, commercial, and industrial construction with turnkey solutions.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Expert planning, scheduling, cost estimation, and site supervision services.",
  },
  {
    icon: PenTool,
    title: "Structural & Architectural",
    description: "Comprehensive architectural planning, structural design, and coordination.",
  },
  {
    icon: Wrench,
    title: "MEP & Infrastructure",
    description: "Electrical, plumbing, HVAC, and complete infrastructure development.",
  },
  {
    icon: Paintbrush,
    title: "Renovation & Interiors",
    description: "Modern renovation, remodeling, and interior transformation services.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-slate-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="heading-secondary text-foreground mt-3 mb-4">
            Core Services We Provide
          </h2>
          <div className="section-divider" />
          <p className="text-body">
            We offer comprehensive construction and engineering services tailored 
            to meet the unique needs of each project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background p-8 rounded-lg shadow-md hover-lift border border-transparent hover:border-accent transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="heading-tertiary text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-body mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-primary p-8 rounded-lg flex flex-col justify-center text-center md:text-left">
            <h3 className="heading-tertiary text-primary-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Let's discuss your project requirements and create a tailored plan.
            </p>
            <Button variant="gold" size="lg" asChild className="w-fit mx-auto md:mx-0">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="navy-outline" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
