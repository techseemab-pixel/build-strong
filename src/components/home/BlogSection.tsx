import { Link } from "react-router-dom";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectRenovation from "@/assets/project-renovation.jpg";

const posts = [
  {
    image: projectCommercial,
    title: "MODERNISM IN ARCHITECTURE",
    category: "Exterior Design",
    date: "January 4, 2023",
  },
  {
    image: projectResidential,
    title: "ULTRA HOUSE DESIGNS",
    category: "Graphic Design",
    date: "January 4, 2023",
  },
  {
    image: projectRenovation,
    title: "DECORATING INSPIRATION",
    category: "Architecture",
    date: "January 4, 2023",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4">
            Latest News
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              to="#"
              className="group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h4 className="text-lg font-serif text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h4>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
