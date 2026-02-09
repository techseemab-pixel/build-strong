import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";
import heroImage from "@/assets/hero-construction.jpg";
import aboutImage from "@/assets/about-building.jpg";

const projects = [
  { image: projectCommercial, code: "PROJECT P.01", title: "Corporate Business Tower", category: "commercial" },
  { image: projectResidential, code: "PROJECT P.02", title: "Bahria Heights Residency", category: "residential" },
  { image: projectInfrastructure, code: "PROJECT P.03", title: "Margalla Highway Interchange", category: "infrastructure" },
  { image: projectRenovation, code: "PROJECT P.04", title: "Pearl Continental Renovation", category: "renovation" },
  { image: heroImage, code: "PROJECT P.05", title: "Tech Park Complex", category: "commercial" },
  { image: aboutImage, code: "PROJECT P.06", title: "Garden City Villas", category: "residential" },
];

const filters = ["All", "Commercial", "Residential", "Infrastructure", "Renovation"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter.toLowerCase());

  return (
    <Layout>
      <PageHeader
        title="Our Projects"
        subtitle="Explore our portfolio of completed and ongoing construction projects"
        breadcrumb="Portfolio"
      />

      {/* Filter + Grid */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex justify-center gap-8 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm tracking-wide transition-colors duration-300 pb-2 border-b-2 ${
                  activeFilter === filter
                    ? "text-foreground border-accent"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary-foreground/70 text-xs tracking-[0.2em] uppercase">
                    {project.code}
                  </span>
                  <h3 className="text-xl font-serif text-primary-foreground mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "350+", label: "Projects Completed" },
              { value: "50+", label: "Ongoing Projects" },
              { value: "15M+", label: "Sq. Ft. Built" },
              { value: "200+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
