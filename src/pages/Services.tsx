import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Link } from "react-router-dom";
import { 
  Building2, ClipboardList, PenTool, Wrench, Paintbrush, FileSearch,
  Home, Factory, Building, Key, Calendar, DollarSign, HardHat, Shield,
  Ruler, Hammer, Palette, Lightbulb, Droplets, Wind, Truck, FileText, 
  Briefcase, RefreshCw
} from "lucide-react";

const serviceCategories = [
  {
    icon: Building2,
    title: "Construction Services",
    description: "Complete construction solutions for all types of buildings and structures.",
    services: [
      { icon: Home, name: "Residential Construction" },
      { icon: Building, name: "Commercial Buildings" },
      { icon: Factory, name: "Industrial Structures" },
      { icon: Key, name: "Turnkey Solutions" },
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Expert project oversight from planning to successful completion.",
    services: [
      { icon: Calendar, name: "Planning & Scheduling" },
      { icon: DollarSign, name: "Cost Estimation" },
      { icon: HardHat, name: "Site Supervision" },
      { icon: Shield, name: "Quality & Safety" },
    ],
  },
  {
    icon: PenTool,
    title: "Architectural & Structural",
    description: "Creative design and robust structural solutions for every project.",
    services: [
      { icon: Ruler, name: "Architectural Planning" },
      { icon: Building2, name: "Structural Design" },
      { icon: Hammer, name: "Renovation & Remodeling" },
      { icon: Palette, name: "Interior & Exterior" },
    ],
  },
  {
    icon: Wrench,
    title: "MEP & Infrastructure",
    description: "Comprehensive mechanical, electrical, and plumbing solutions.",
    services: [
      { icon: Lightbulb, name: "Electrical Systems" },
      { icon: Droplets, name: "Plumbing Solutions" },
      { icon: Wind, name: "HVAC Systems" },
      { icon: Truck, name: "Infrastructure Dev." },
    ],
  },
  {
    icon: FileSearch,
    title: "Specialized Services",
    description: "Technical consultancy and specialized construction services.",
    services: [
      { icon: FileText, name: "Feasibility Studies" },
      { icon: Briefcase, name: "Technical Consultancy" },
      { icon: ClipboardList, name: "Documentation" },
      { icon: RefreshCw, name: "Renovation Projects" },
    ],
  },
  {
    icon: Paintbrush,
    title: "Renovation & Interior",
    description: "Transform spaces with our expert renovation and interior services.",
    services: [
      { icon: Home, name: "Residential Renovation" },
      { icon: Building, name: "Commercial Makeovers" },
      { icon: Palette, name: "Interior Design" },
      { icon: Hammer, name: "Restoration Projects" },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction and engineering solutions tailored to your needs"
        breadcrumb="What We Do"
      />

      {/* Services Grid - Archsan style */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-background p-10 group hover:bg-primary transition-all duration-500 cursor-pointer"
              >
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-6 group-hover:border-accent transition-colors duration-300">
                  <category.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-foreground group-hover:text-primary-foreground mb-4 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/70 mb-6 text-sm leading-relaxed transition-colors duration-300">
                  {category.description}
                </p>
                <ul className="space-y-3">
                  {category.services.map((service, sIndex) => (
                    <li key={sIndex} className="flex items-center gap-3">
                      <service.icon className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
                        {service.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-foreground/60 text-sm tracking-[0.2em] uppercase">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mt-4">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-px">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements and vision" },
              { step: "02", title: "Planning", desc: "Detailed project planning and design" },
              { step: "03", title: "Execution", desc: "Quality construction with regular updates" },
              { step: "04", title: "Delivery", desc: "On-time handover with complete documentation" },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 border border-primary-foreground/10">
                <span className="text-5xl font-serif text-accent mb-4 block">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl text-primary-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase hover:bg-accent/90 transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
