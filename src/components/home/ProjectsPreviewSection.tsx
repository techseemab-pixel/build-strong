import { useState } from "react";
import { Link } from "react-router-dom";

import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";
import heroImage from "@/assets/hero-construction.jpg";
import aboutImage from "@/assets/about-building.jpg";

const projects = [
  {
    image: projectCommercial,
    code: "PROJECT P.01",
    title: "Best Kitchen Design",
    category: "completed",
  },
  {
    image: projectResidential,
    code: "PROJECT P.02", 
    title: "Farm House Bedroom",
    category: "completed",
  },
  {
    image: projectInfrastructure,
    code: "PROJECT P.03",
    title: "Intermediate Hall",
    category: "ongoing",
  },
  {
    image: projectRenovation,
    code: "PROJECT P.04",
    title: "Lighting At Home",
    category: "completed",
  },
  {
    image: heroImage,
    code: "PROJECT P.05",
    title: "Modern Loft Kitchen",
    category: "ongoing",
  },
  {
    image: aboutImage,
    code: "PROJECT P.06",
    title: "Unique Stair Designs",
    category: "completed",
  },
];

const filters = ["All", "Completed Projects", "Ongoing Projects"];

const ProjectsPreviewSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Completed Projects") return project.category === "completed";
    if (activeFilter === "Ongoing Projects") return project.category === "ongoing";
    return true;
  });

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            DISCOVER
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6">
            CREATIVE PROJECTS
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Architecture viverra tristique justo duis vitae diaminte neque nivamus 
            aestan ateuene artines ariianu the ateliten finibus viverra nec lacus 
            in the nedana mis erodino. Design nila iman the finise viverra nec a 
            lacus miss viventa in the setlien suscipe no curabit tristue the 
            seneoice misuscipit non sagie the fermen.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-8 mb-12">
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
            <Link
              key={index}
              to="/projects"
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-background/70 text-xs tracking-[0.2em] uppercase">
                  {project.code}
                </span>
                <h3 className="text-xl font-serif text-background mt-2">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;
