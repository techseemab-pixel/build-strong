import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { MapPin } from "lucide-react";

import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";

const projects = [
  {
    id: 1,
    image: projectCommercial,
    title: "Corporate Business Tower",
    category: "Commercial",
    status: "Completed",
    location: "Blue Area, Islamabad",
    year: "2023",
    description: "A 15-story modern commercial tower featuring state-of-the-art office spaces, conference facilities, and underground parking.",
  },
  {
    id: 2,
    image: projectResidential,
    title: "Bahria Heights Residency",
    category: "Residential",
    status: "Completed",
    location: "Bahria Town, Lahore",
    year: "2022",
    description: "Luxury residential complex with 200+ apartments, modern amenities, landscaped gardens, and 24/7 security.",
  },
  {
    id: 3,
    image: projectInfrastructure,
    title: "Margalla Highway Interchange",
    category: "Infrastructure",
    status: "Ongoing",
    location: "Islamabad",
    year: "2024",
    description: "Major infrastructure project connecting key arterial roads with modern traffic management systems.",
  },
  {
    id: 4,
    image: projectRenovation,
    title: "Pearl Continental Renovation",
    category: "Renovation",
    status: "Completed",
    location: "Rawalpindi",
    year: "2023",
    description: "Complete renovation of a luxury hotel including interior redesign, MEP upgrades, and facade enhancement.",
  },
  {
    id: 5,
    image: projectCommercial,
    title: "Tech Park Complex",
    category: "Commercial",
    status: "Completed",
    location: "DHA Phase 2, Karachi",
    year: "2022",
    description: "Modern IT park with multiple office blocks, co-working spaces, and smart building features.",
  },
  {
    id: 6,
    image: projectResidential,
    title: "Garden City Villas",
    category: "Residential",
    status: "Ongoing",
    location: "Gujranwala",
    year: "2024",
    description: "Premium villa community with 50+ units featuring contemporary design and sustainable features.",
  },
];

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Renovation"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="Our Projects"
        subtitle="Explore our portfolio of completed and ongoing construction projects"
        breadcrumb="Portfolio"
      />

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-slate-light text-foreground hover:bg-accent/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-slate-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-background rounded-xl overflow-hidden shadow-md hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === "Ongoing"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {project.location} • {project.year}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "350+", label: "Projects Completed" },
              { value: "50+", label: "Ongoing Projects" },
              { value: "15M+", label: "Sq. Ft. Built" },
              { value: "200+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
