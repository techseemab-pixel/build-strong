import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-building.jpg";

const services = [
  {
    icon: "/icons/architecture.svg",
    title: "Architecture",
  },
  {
    icon: "/icons/interior.svg", 
    title: "Interior",
  },
  {
    icon: "/icons/planning.svg",
    title: "Planning",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Modern architecture"
              className="w-full h-[550px] object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Who are we?
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-8">
              About SIDCO
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Architecture viverra tristique justo duis vitae diaminte neque nivamus 
              aestan ateuene artines aringianu the ateliten finibus viverra nec in 
              the nedana. Design nila iman the finise viverra nec a lacus themo the 
              seneoice misuscipit drana miss non sagie the fermen.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-10">
              Planner inilla duiman at elit finibus viverra a lacus themo the drudea 
              seneoice misuscipit nonie the fermen miverration tristique jusio the 
              ivite dianne onen nivami acsestion augue artine.
            </p>

            {/* Service Icons */}
            <div className="flex gap-12">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-4 group-hover:border-accent transition-colors duration-300">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                  </svg>
                </div>
                <h5 className="text-sm font-medium tracking-wide text-foreground">Architecture</h5>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-4 group-hover:border-accent transition-colors duration-300">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 20h16M4 20V8l3-3h10l3 3v12M8 12h8M8 16h8" />
                  </svg>
                </div>
                <h5 className="text-sm font-medium tracking-wide text-foreground">Interior</h5>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-4 group-hover:border-accent transition-colors duration-300">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4M12 17v4M8 21h8" />
                  </svg>
                </div>
                <h5 className="text-sm font-medium tracking-wide text-foreground">Planning</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
