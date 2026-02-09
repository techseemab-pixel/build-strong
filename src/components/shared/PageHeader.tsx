import heroImage from "@/assets/hero-construction.jpg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container-custom relative z-10">
        {breadcrumb && (
          <span className="text-primary-foreground/60 text-sm tracking-[0.2em] uppercase mb-4 block">
            {breadcrumb}
          </span>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            {subtitle}
          </p>
        )}
        <div className="w-20 h-0.5 bg-accent mt-6" />
      </div>
    </section>
  );
};

export default PageHeader;
