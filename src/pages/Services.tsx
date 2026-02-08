import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { 
  Building2, 
  ClipboardList, 
  PenTool, 
  Wrench, 
  Paintbrush,
  FileSearch,
  Home,
  Factory,
  Building,
  Key,
  Calendar,
  DollarSign,
  HardHat,
  Shield,
  Ruler,
  Hammer,
  Palette,
  Lightbulb,
  Droplets,
  Wind,
  Truck,
  FileText,
  Briefcase,
  RefreshCw
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
      { icon: Key, name: "Turnkey Construction Solutions" },
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
      { icon: Shield, name: "Quality & Safety Management" },
    ],
  },
  {
    icon: PenTool,
    title: "Architectural & Structural Works",
    description: "Creative design and robust structural solutions for every project.",
    services: [
      { icon: Ruler, name: "Architectural Planning" },
      { icon: Building2, name: "Structural Design Coordination" },
      { icon: Hammer, name: "Renovation & Remodeling" },
      { icon: Palette, name: "Interior & Exterior Works" },
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
      { icon: Truck, name: "Infrastructure Development" },
    ],
  },
  {
    icon: FileSearch,
    title: "Specialized Services",
    description: "Technical consultancy and specialized construction services.",
    services: [
      { icon: FileText, name: "Feasibility Studies" },
      { icon: Briefcase, name: "Technical Consultancy" },
      { icon: ClipboardList, name: "Construction Documentation" },
      { icon: RefreshCw, name: "Renovation & Upgrade Projects" },
    ],
  },
  {
    icon: Paintbrush,
    title: "Renovation & Interior Works",
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

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="heading-tertiary text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-body mb-8">{category.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.services.map((service, sIndex) => (
                      <div
                        key={sIndex}
                        className="flex items-center gap-3 p-4 bg-slate-light rounded-lg hover:bg-accent/10 transition-colors duration-300"
                      >
                        <service.icon className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-medium text-foreground">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Card */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-primary to-navy-dark p-12 rounded-2xl text-center">
                    <category.icon className="w-24 h-24 text-accent mx-auto mb-6" />
                    <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-primary-foreground/80">
                      Professional services backed by years of experience and expertise.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="heading-secondary text-foreground mt-3 mb-4">
              How We Work
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements and vision" },
              { step: "02", title: "Planning", desc: "Detailed project planning and design" },
              { step: "03", title: "Execution", desc: "Quality construction with regular updates" },
              { step: "04", title: "Delivery", desc: "On-time handover with complete documentation" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl font-bold">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-accent/30" />
                )}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
