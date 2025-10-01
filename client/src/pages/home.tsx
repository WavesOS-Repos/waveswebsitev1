import Navigation from "@/components/navigation";
import ParticlesBackground from "@/components/particles-background";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DownloadsSection from "@/components/downloads-section";
import RequirementsSection from "@/components/requirements-section";
import InstallationSection from "@/components/installation-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 font-inter overflow-x-hidden">
      <ParticlesBackground />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DownloadsSection />
      <RequirementsSection />
      <InstallationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
