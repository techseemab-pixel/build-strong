import { Target, Eye } from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase">
            Our Purpose
          </span>
          <h2 className="heading-secondary text-foreground mt-3 mb-4">
            Mission & Vision
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="group relative bg-gradient-to-br from-primary to-navy-dark p-10 rounded-2xl overflow-hidden hover-lift">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-4">
                Our Mission
              </h3>
              
              <p className="text-primary-foreground/90 leading-relaxed">
                To deliver exceptional construction and engineering solutions that exceed 
                client expectations through innovative design, quality craftsmanship, and 
                unwavering commitment to safety. We aim to build lasting relationships 
                with our clients by providing transparent communication, timely delivery, 
                and value-driven services that contribute to the sustainable development 
                of communities.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-accent p-10 rounded-2xl overflow-hidden hover-lift">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-accent-foreground mb-4">
                Our Vision
              </h3>
              
              <p className="text-accent-foreground/90 leading-relaxed">
                To be recognized as Pakistan's most trusted and innovative construction 
                and engineering company, setting industry benchmarks for excellence in 
                project delivery. We aspire to transform the built environment through 
                sustainable practices, cutting-edge technology, and a dedicated team of 
                professionals who take pride in creating structures that stand the test 
                of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
