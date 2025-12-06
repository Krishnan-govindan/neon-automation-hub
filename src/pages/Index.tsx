import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        
        <div className="section-divider" />
        <AboutSection />
        
        <div className="section-divider" />
        <SkillsSection />
        
        <div className="section-divider" />
        <ExperienceSection />
        
        <div className="section-divider" />
        <ProjectsSection />
        
        <div className="section-divider" />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
