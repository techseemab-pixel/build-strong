import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";

const projects = [
  {
    image: projectCommercial,
    title: "Corporate Tower",
    category: "Commercial",
    status: "Completed",
    location: "Islamabad",
  },
  {
    image: projectResidential,
    title: "Luxury Apartments",
    category: "Residential",
    status: "Completed",
    location: "Lahore",
  },
  {
    image: projectInfrastructure,
    title: "Highway Interchange",
    category: "Infrastructure",
    status: "Ongoing",
    location: "Karachi",
  },
  {
    image: projectRenovation,
    title: "Modern Villa Renovation",
    category: "Renovation",
    status: "Completed",
    location: "Rawalpindi",
  },
];

const ProjectsPreviewSection = () => {
  return (
    <section className="section-padding bg-slate-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase">
              Our Portfolio
            </span>
            <h2 className="heading-secondary text-foreground mt-3">
              Featured Projects
            </h2>
          </div>
          <Button variant="navy-outline" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/projects"
              className="group relative overflow-hidden rounded-xl hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === "Ongoing" 
                      ? "bg-primary-foreground/20 text-primary-foreground" 
                      : "bg-primary-foreground/20 text-primary-foreground"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;
