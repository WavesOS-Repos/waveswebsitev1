import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleDownloadClick = () => {
    const downloadsSection = document.getElementById("downloads");
    if (downloadsSection) {
      downloadsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 grid-overlay opacity-30"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-float">
          <div className="flex flex-col items-center mb-6">
            <img 
              src="/logo.png" 
              alt="WavesOS Logo" 
              className="w-64 h-64 md:w-96 md:h-96 object-contain mb-4"
            />
            <h1 className="font-orbitron font-black text-6xl md:text-8xl gradient-text" data-testid="hero-title">
              WavesOS
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto" data-testid="hero-description">
            Experience the future of computing with our custom Arch-based Linux distribution. 
            Engineered for performance, designed for the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleDownloadClick}
              className="cyber-glow bg-cyber-purple/20 border border-purple-500 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-purple/30 transition-all duration-300 text-white"
              data-testid="hero-download-button"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Now
            </Button>
            <Button 
              variant="outline"
              className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300 bg-transparent"
              data-testid="hero-demo-button"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}