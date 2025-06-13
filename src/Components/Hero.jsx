import React, { useRef, useState } from "react";
import { featuredCollections } from "../assets/assets";
import { close, heroVid } from "../assets/Images";
// adjust path as needed

// Helper to get current season
function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

const NAVBAR_HEIGHT = "8vh"; // Should match Navbar height

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Option 1: Show featured collection if any, else by season
  const featured = featuredCollections.find((c) => c.featured);
  const season = getCurrentSeason();
  const seasonal = featuredCollections.find((c) => c.season === season);

  const hero = featured || seasonal || featuredCollections[0];

  // Update progress bar as video plays
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  // When video ends, hide video and reset progress
  const handleVideoEnd = () => {
    setShowVideo(false);
    setProgress(0);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  // Handle manual close (pause)
  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideo(false);
    setProgress(0);
  };

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        height: `calc(100vh - ${NAVBAR_HEIGHT})`,
        marginTop: NAVBAR_HEIGHT,
      }}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={hero.image}
        alt={hero.name}
      />
      {/* Hero Content */}
      {!showVideo && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40 z-10">
          <h1 className="text-8xl one text-white">{hero.name}</h1>
          <p className="text-orange one text-white w-[50%] text-center text-md">
            {hero.description}
          </p>
          <button
            className="!py-2 !px-[7rem] bg-black one text-white rounded-full !mt-[3rem] hover:bg-white hover:text-black cursor-pointer transition-all duration-700"
            onClick={() => setShowVideo(true)}
          >
            Watch Now
          </button>
        </div>
      )}
      {/* Video Overlay */}
      {showVideo && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20">
          {/* Close Button */}
          <button
            className="absolute top-11 right-8 text-white text-3xl z-30 bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/90 transition"
            onClick={handleCloseVideo}
            aria-label="Close video"
          >
            <img src={close} alt="" />
          </button>
          <video
            ref={videoRef}
            src={heroVid} // <-- Replace with your video path
            className="w-full h-full object-cover"
            autoPlay
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
            muted
          />
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-900 overflow-hidden">
            <div
              className="h-full bg-amber-100 transition-all duration-200"
              style={{
                width: `${progress}%`,
                transition: "width 0.2s linear", // Ensures smooth width change
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
