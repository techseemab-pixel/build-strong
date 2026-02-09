import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-construction.jpg";

const contactInfo = [
  { icon: MapPin, title: "Office Address", details: ["Office 401, Business Plaza,", "Blue Area, Islamabad"] },
  { icon: Phone, title: "Phone Number", details: ["+92 51 987 6543", "+92 300 1234567"] },
  { icon: Mail, title: "Email Address", details: ["info@sidco.pk", "sales@sidco.pk"] },
  { icon: Clock, title: "Business Hours", details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"] },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, consultations, or project discussions"
        breadcrumb="Get In Touch"
      />

      {/* Contact Info Cards */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-24">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-background p-8 text-center group hover:bg-primary transition-all duration-500">
                <div className="w-14 h-14 border border-accent/30 flex items-center justify-center mx-auto mb-4 group-hover:border-accent transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-300">
                  {item.title}
                </h3>
                {item.details.map((d, i) => (
                  <p key={i} className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-300">
                    {d}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with BG */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Contact background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-foreground/60 text-sm tracking-[0.2em] uppercase">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground mt-4 mb-6">
                Let's discuss your project
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                Fill out the form and our team will contact you for a free consultation.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-14 focus:border-accent"
                />
                <Input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-14 focus:border-accent"
                />
              </div>
              <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 h-14 focus:border-accent"
              />
              <Textarea
                placeholder="Message *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 resize-none focus:border-accent"
              />
              <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
