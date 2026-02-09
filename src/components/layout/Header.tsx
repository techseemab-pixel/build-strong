import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={cn(
            "relative w-8 h-8 flex items-center justify-center transition-colors duration-300"
          )}>
            {/* Triangle Logo like Archsan */}
            <svg 
              viewBox="0 0 40 40" 
              className={cn(
                "w-full h-full transition-colors duration-300",
                isScrolled ? "text-accent" : "text-accent"
              )}
              fill="currentColor"
            >
              <path d="M20 4L36 36H4L20 4Z" />
            </svg>
          </div>
          <span className={cn(
            "font-sans text-xl font-semibold tracking-[0.2em] uppercase transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-background"
          )}>
            SIDCO
          </span>
        </Link>

        {/* Desktop Navigation - Hidden, shown on menu open */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "relative text-sm font-medium tracking-wide uppercase transition-colors duration-300",
                location.pathname === link.href 
                  ? "text-accent" 
                  : isScrolled ? "text-foreground hover:text-accent" : "text-background hover:text-accent",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className={cn(
            "p-2 transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-background"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className={cn("block w-6 h-0.5 transition-colors", isScrolled ? "bg-foreground" : "bg-background")} />
              <span className={cn("block w-6 h-0.5 transition-colors", isScrolled ? "bg-foreground" : "bg-background")} />
              <span className={cn("block w-4 h-0.5 transition-colors", isScrolled ? "bg-foreground" : "bg-background")} />
            </div>
          )}
        </button>
      </div>

      {/* Fullscreen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-primary z-40 transition-all duration-500 flex items-center justify-center",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <button
          className="absolute top-6 right-6 text-background p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-4xl md:text-6xl font-serif text-background hover:text-accent transition-all duration-300",
                "opacity-0 translate-y-4",
                isMobileMenuOpen && "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
