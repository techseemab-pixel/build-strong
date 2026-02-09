import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { CheckCircle, Award, Users, Building } from "lucide-react";
import aboutImage from "@/assets/about-building.jpg";

const values = [
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "We strive for perfection in every project, ensuring the highest standards of quality and craftsmanship.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver solutions tailored to your needs.",
  },
  {
    icon: CheckCircle,
    title: "Integrity & Ethics",
    description: "We conduct business with honesty, transparency, and respect for all stakeholders.",
  },
  {
    icon: Building,
    title: "Innovation & Growth",
    description: "We embrace new technologies and methodologies to deliver cutting-edge construction solutions.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey, values, and commitment to building excellence"
        breadcrumb="Who We Are"
      />

      {/* Who We Are Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Modern architecture"
                className="w-full h-[550px] object-cover"
              />
            </div>

            <div>
              <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-8">
                Building Dreams Into Reality Since 2005
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SIDCO was founded with a vision to transform the construction 
                industry in Pakistan through excellence, innovation, and integrity. 
                Over the past 18 years, we have grown from a small team of dedicated 
                professionals to a leading construction and engineering company.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in residential, commercial, and infrastructure projects, 
                providing integrated solutions from initial planning and design to final 
                construction and handover.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Islamabad, we serve clients across Pakistan, including both 
                public and private sector organizations. Our commitment to quality, 
                safety, and timely delivery has earned us a reputation as one of the 
                most trusted names in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-accent mx-auto mb-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 7.05V11a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9a7 7 0 0 1 7-7h1v1.5H8a5.5 5.5 0 0 0-5.5 5.5v.5h2A4.5 4.5 0 0 1 9 14v-.5a2.5 2.5 0 0 0-2.5-2.5H5V7.05a5 5 0 0 1 6 0zm12 0V11a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V9a7 7 0 0 1 7-7h1v1.5h-1a5.5 5.5 0 0 0-5.5 5.5v.5h2A4.5 4.5 0 0 1 21 14v-.5a2.5 2.5 0 0 0-2.5-2.5H17V7.05a5 5 0 0 1 6 0z"/>
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-10 italic">
              At SIDCO, we don't just build structures – we build trust, 
              relationships, and a legacy of excellence. Every project is an opportunity 
              to create something meaningful that will stand the test of time.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
                AK
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Ahmad Khan</p>
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Our Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 border border-border hover:border-accent transition-all duration-300 group"
              >
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mx-auto mb-6 group-hover:border-accent transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Registered Company", value: "PEC Certified" },
              { label: "Location", value: "Islamabad, Pakistan" },
              { label: "Sectors Served", value: "Public & Private" },
              { label: "Authority Approvals", value: "CDA, LDA, RDA" },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <p className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-2">{item.label}</p>
                <p className="text-primary-foreground text-lg font-serif">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
