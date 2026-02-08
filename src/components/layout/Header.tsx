import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className={cn(
            "w-10 h-10 rounded flex items-center justify-center font-serif font-bold text-lg transition-colors duration-300",
            isScrolled ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
          )}>
            PC
          </div>
          <span className={cn(
            "font-serif text-xl font-semibold transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-background"
          )}>
            ProConstruct
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "relative font-medium transition-colors duration-300 hover:text-accent",
                location.pathname === link.href 
                  ? "text-accent" 
                  : isScrolled ? "text-foreground" : "text-background",
                "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                location.pathname === link.href && "after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button 
            variant={isScrolled ? "gold" : "hero"} 
            size="lg" 
            className="hidden md:flex"
            asChild
          >
            <Link to="/contact">
              <Phone className="w-4 h-4" />
              Get a Free Consultation
            </Link>
          </Button>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-background")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-background")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] bg-background shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-lg font-medium py-2 border-b border-border transition-colors duration-300",
                location.pathname === link.href
                  ? "text-accent"
                  : "text-foreground hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="gold" size="lg" className="mt-4" asChild>
            <Link to="/contact">
              <Phone className="w-4 h-4" />
              Get a Free Consultation
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
