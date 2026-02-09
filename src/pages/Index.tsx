import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsPreviewSection from "@/components/home/ProjectsPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsPreviewSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
