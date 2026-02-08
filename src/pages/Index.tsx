import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ProjectsPreviewSection from "@/components/home/ProjectsPreviewSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
