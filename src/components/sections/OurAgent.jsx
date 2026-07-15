"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaArrowRight,
  FaPlay,
  FaPause,
  FaVolumeHigh,
  FaVolumeXmark,
  FaExpand,
  FaCompress,
} from "react-icons/fa6";

function OurAgent() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync React state with video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent triggering play/pause overlay
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation(); // Prevent triggering play/pause overlay
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Format time utility (e.g., 73 seconds -> 01:13)
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="bg-[#EAEAEA]"
    >
      {/* SECTION 1: heading 1 & button 1 container */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] max-w-7xl mx-auto gap-6 md:gap-10 items-start px-6 py-12 md:p-20">
        {/* Left Column (Label + Button below it) */}
        <div className="flex flex-col gap-4 md:gap-10 items-start">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Connect
          </p>

          {/* Button Part */}
          <div className="flex justify-start items-center group cursor-pointer w-fit">
            {/* Left Arrow: Smooth expand & fade in */}
            <div className="h-11 w-0 opacity-0 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-11 group-hover:opacity-100">
              <FaArrowRight className="text-xs" />
            </div>

            {/* Main Button */}
            <div className="px-6 h-11 w-fit bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full z-10 transition-transform duration-300">
              <button className="pointer-events-none text-xs font-medium whitespace-nowrap">
                Reach out
              </button>
            </div>

            {/* Right Arrow: Smooth shrink & fade out */}
            <div className="h-11 w-11 opacity-100 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-0 group-hover:opacity-0">
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>

        {/* Right Column (Heading with hand-drawn circle) */}
        <div className="flex flex-col gap-8 w-full">
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight max-w-4xl leading-[1.1] text-black">
            What can we do for{" "}
            <span className="relative inline-block px-2 sm:px-4">
              you
              {/* Hand-drawn SVG Oval overlay */}
              <svg
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[150%] pointer-events-none stroke-[#1F1F1F] fill-none"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M5,20 C15,5 85,3 95,15 C102,25 75,37 45,38 C20,39 2,30 8,18"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                >
                </path>
              </svg>
            </span>
            ?
          </h3>
        </div>
      </div>

      {/* SECTION 2: Our Agents */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] max-w-7xl mx-auto gap-6 md:gap-10 items-start px-6 py-6 md:pt-10 md:px-20">
        {/* Left Column Label */}
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 md:pt-3">
          Our Agents
        </p>

        {/* Right Column Content */}
        <div className="flex flex-col gap-6 md:gap-12 w-full items-start">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.1] text-black">
            Your always-on agents for last-mile intelligence — rapid, real, and
            powered by monks.flow
          </h3>

          {/* Button Centered underneath heading as per reference */}
          <div className="flex justify-start items-center group cursor-pointer w-fit md:pl-10">
            {/* Left Arrow: Smooth expand & fade in */}
            <div className="h-9 w-0 opacity-0 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-9 group-hover:opacity-100">
              <FaArrowRight className="text-[10px]" />
            </div>

            {/* Main Button */}
            <div className="px-5 h-9 w-fit bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full z-10">
              <button className="pointer-events-none text-xs font-medium whitespace-nowrap">
                Explore Monks.Flow
              </button>
            </div>

            {/* Right Arrow: Smooth shrink & fade out */}
            <div className="h-9 w-9 opacity-100 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-0 group-hover:opacity-0">
              <FaArrowRight className="text-[10px]" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Video Player Wrapper */}
      <div className="flex justify-center items-center min-h-[50vh] md:min-h-screen w-full px-4 py-12">
        {/* Video container with relative positioning so controls overlay correctly */}
        <div
          ref={containerRef}
          className="relative max-w-5xl w-full flex flex-col justify-center items-center group overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onClick={togglePlay}
            className="w-full h-auto rounded-2xl object-contain shadow-2xl cursor-pointer"
          >
            <source
              src="https://res.cloudinary.com/vy0ccmly/video/upload/v1784107157/agent-video_1_q3kpr6.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Center Custom Play/Pause Overlay */}
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex justify-center items-center bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <button
              className="w-12 h-12 md:w-16 md:h-16 bg-white text-black rounded-full flex justify-center items-center shadow-lg transform transition-transform duration-200 active:scale-95 hover:scale-105"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <FaPause className="text-sm md:text-xl text-black" />
              ) : (
                <FaPlay className="text-xs md:text-lg text-black ml-0.5" />
              )}
            </button>

            {/* Bottom Controls Dashboard Panel */}
            <div className="absolute bottom-3 md:bottom-12 left-3 right-3 md:left-8 md:right-8 flex flex-col gap-2 md:gap-3 text-white pointer-events-auto">
              {/* Timeline Track Slider */}
              <div className="relative w-full group/timeline flex flex-col px-2 md:px-5">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white transition-all group-hover/timeline:h-1.5"
                />

                {/* Time stamps placed immediately below the timeline track bar */}
                <div className="flex justify-between text-xs md:text-sm mt-1 font-medium tracking-wide">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex justify-between items-center w-full mt-1 md:mt-2 px-2 md:px-5">
                {/* Left Side: Playback Control */}
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex justify-center items-center shadow transition hover:scale-105 active:scale-95"
                >
                  {isPlaying ? (
                    <FaPause className="text-[10px] md:text-xs" />
                  ) : (
                    <FaPlay className="text-[10px] md:text-xs ml-0.5" />
                  )}
                </button>

                {/* Right Side: Volume & Fullscreen Controls */}
                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex justify-center items-center shadow transition hover:scale-105 active:scale-95"
                  >
                    {isMuted ? (
                      <FaVolumeXmark className="text-xs md:text-sm" />
                    ) : (
                      <FaVolumeHigh className="text-xs md:text-sm" />
                    )}
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex justify-center items-center shadow transition hover:scale-105 active:scale-95"
                  >
                    {isFullscreen ? (
                      <FaCompress className="text-xs md:text-sm" />
                    ) : (
                      <FaExpand className="text-xs md:text-sm" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAgent;