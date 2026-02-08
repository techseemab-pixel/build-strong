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
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="heading-secondary text-foreground mt-3 mb-6">
                Building Dreams Into Reality Since 2005
              </h2>
              <p className="text-body mb-6">
                ProConstruct was founded with a vision to transform the construction 
                industry in Pakistan through excellence, innovation, and integrity. 
                Over the past 18 years, we have grown from a small team of dedicated 
                professionals to a leading construction and engineering company.
              </p>
              <p className="text-body mb-6">
                We specialize in residential, commercial, and infrastructure projects, 
                providing integrated solutions from initial planning and design to final 
                construction and handover. Our multidisciplinary team of engineers, 
                architects, and project managers work collaboratively to deliver 
                projects that exceed client expectations.
              </p>
              <p className="text-body">
                Based in Islamabad, we serve clients across Pakistan, including both 
                public and private sector organizations. Our commitment to quality, 
                safety, and timely delivery has earned us a reputation as one of the 
                most trusted names in the industry.
              </p>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Modern architecture"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/20 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section-padding bg-slate-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-accent mb-6">"</div>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              At ProConstruct, we don't just build structures – we build trust, 
              relationships, and a legacy of excellence. Every project is an opportunity 
              to create something meaningful that will stand the test of time.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-xl">
                AK
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Ahmad Khan</p>
                <p className="text-muted-foreground">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase">
              Our Core Values
            </span>
            <h2 className="heading-secondary text-foreground mt-3 mb-4">
              What Drives Us Forward
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Registered Company", value: "PEC Certified" },
              { label: "Location", value: "Islamabad, Pakistan" },
              { label: "Sectors Served", value: "Public & Private" },
              { label: "Authority Approvals", value: "CDA, LDA, RDA" },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <p className="text-accent font-semibold mb-2">{item.label}</p>
                <p className="text-primary-foreground text-lg font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
