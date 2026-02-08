import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu the ateliten finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabit tristique. Design nila iman the finise viverra nec a lacus themo the seneoice misuscipit non sagie the fermen.",
    name: "Emily White",
    role: "Armada Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu the ateliten finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabit tristique. Design nila iman the finise viverra nec a lacus themo the seneoice misuscipit non sagie the fermen.",
    name: "Jessica Smith",
    role: "Alsa Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu the ateliten finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabit tristique. Design nila iman the finise viverra nec a lacus themo the seneoice misuscipit non sagie the fermen.",
    name: "Jason Brown",
    role: "Crowne Plaza Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4">
            What Client's Say?
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    {/* Quote Icon */}
                    <div className="mb-8">
                      <svg 
                        className="w-12 h-12 text-accent mx-auto"
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M11 7.05V11a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9a7 7 0 0 1 7-7h1v1.5H8a5.5 5.5 0 0 0-5.5 5.5v.5h2A4.5 4.5 0 0 1 9 14v-.5a2.5 2.5 0 0 0-2.5-2.5H5V7.05a5 5 0 0 1 6 0zm12 0V11a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V9a7 7 0 0 1 7-7h1v1.5h-1a5.5 5.5 0 0 0-5.5 5.5v.5h2A4.5 4.5 0 0 1 21 14v-.5a2.5 2.5 0 0 0-2.5-2.5H17V7.05a5 5 0 0 1 6 0z"/>
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-10 italic">
                      {testimonial.quote}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <h6 className="font-medium text-foreground">
                          {testimonial.name}
                        </h6>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent w-6" : "bg-accent/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
