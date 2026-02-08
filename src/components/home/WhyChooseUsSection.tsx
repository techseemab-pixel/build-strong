import { 
  Users, 
  Shield, 
  Clock, 
  Award, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our team comprises skilled engineers, architects, and project managers with decades of combined experience.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control systems ensure every project meets the highest industry standards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We pride ourselves on completing projects on schedule without compromising on quality.",
  },
  {
    icon: Award,
    title: "Industry Compliance",
    description: "Full compliance with building codes, safety regulations, and industry best practices.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Regular updates and open communication keep you informed at every project stage.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Solutions",
    description: "From concept to completion, we handle all aspects of your construction project.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase">
            Why Work With Us
          </span>
          <h2 className="heading-secondary text-primary-foreground mt-3 mb-4">
            Why Choose ProConstruct?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-primary-foreground/80">
            Discover the advantages of partnering with a company that puts 
            your project's success first.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8 rounded-xl hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
