interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container-custom relative z-10">
        {breadcrumb && (
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            {breadcrumb}
          </p>
        )}
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl">
            {subtitle}
          </p>
        )}
        
        <div className="w-20 h-1 bg-accent mt-6" />
      </div>
    </section>
  );
};

export default PageHeader;
