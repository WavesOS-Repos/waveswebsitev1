import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      }
    };

    if (isPlaying) {
      playAudio();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const attemptPlay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Initial autoplay prevented - user interaction required:", error);
          setIsPlaying(false);
        }
      };
      
      attemptPlay();
    }
  }, []);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop autoPlay>
        <source src="/sounds/bg_sound.mp3" type="audio/mpeg" />
      </audio>
      
      <Button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-purple-600/90 hover:bg-purple-700/90 backdrop-blur-sm border border-purple-500/50 shadow-lg shadow-purple-500/20"
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </Button>
    </>
  );
}
