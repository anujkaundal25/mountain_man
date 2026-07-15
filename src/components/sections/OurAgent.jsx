"use client";

import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark, FaExpand, FaCompress } from "react-icons/fa6";

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

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
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
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#EAEAEA]">
      {/* heading 1 & button 1 container */}
      <div className="grid grid-cols-[150px_1fr] max-w-5xl mx-auto gap-10 p-20 items-start">
        <p className="text-xl font-semibold text-gray-500">connect</p>
        <div className="flex flex-col gap-8 w-full">
          <h3 className="text-6xl font-semibold max-w-3xl w-full">
            What can we do for you?
          </h3>
          {/* button part */}
          <div className="flex justify-start items-center group cursor-pointer w-fit">
            {/* Left Arrow: Smooth expand & fade in */}
            <div className="h-15 w-0 opacity-0 bg-gray-800 text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-15 group-hover:opacity-100">
              <FaArrowRight />
            </div>

            {/* Main Button */}
            <div className="px-20 h-15 w-fit bg-gray-800 text-[#EAEAEA] flex justify-center items-center rounded-full z-10">
              <button className="pointer-events-none">Reach Out</button>
            </div>

            {/* Right Arrow: Smooth shrink & fade out */}
            <div className="h-15 w-15 opacity-100 bg-gray-800 text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-0 group-hover:opacity-0 group-hover:mx-0">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* heading 2 & button 2 container */}
      <div className="grid grid-cols-[150px_1fr] max-w-5xl mx-auto gap-10 p-20 items-start">
        <p className="text-xl font-semibold text-gray-500">Our Agents</p>
        <div className="flex flex-col gap-8 w-full">
          <h3 className="text-6xl font-semibold max-w-3xl w-full">
            Your always-on agents for last-mile intelligence — rapid, real, and
            powered by flow
          </h3>
          {/* button part */}
          <div className="flex justify-start items-center group cursor-pointer w-fit">
            {/* Left Arrow: Smooth expand & fade in */}
            <div className="h-10 w-0 opacity-0 bg-gray-800 text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-15 group-hover:opacity-100">
              <FaArrowRight />
            </div>

            {/* Main Button */}
            <div className="px-20 h-10 w-fit bg-gray-800 text-[#EAEAEA] flex justify-center items-center rounded-full z-10">
              <button className="pointer-events-none">Explore Flow</button>
            </div>

            {/* Right Arrow: Smooth shrink & fade out */}
            <div className="h-10 w-15 opacity-100 bg-gray-800 text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-0 group-hover:opacity-0 group-hover:mx-0">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Outer wrapper to center the video container on the screen */}
      <div className="flex justify-center items-center min-h-screen w-full">
        {/* Video container with relative positioning so controls overlay correctly */}
        <div ref={containerRef} className="relative max-w-5xl w-full p-4 md:p-8 flex flex-col justify-center items-center group overflow-hidden">
          
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onClick={togglePlay}
            className="w-full h-auto rounded-2xl object-contain shadow-2xl cursor-pointer"
          >
            <source src="https://res.cloudinary.com/vy0ccmly/video/upload/v1784107157/agent-video_1_q3kpr6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Center Custom Play/Pause Overlay */}
          <div 
            onClick={togglePlay}
            className="absolute inset-0 flex justify-center items-center bg-black/10 rounded-2xl opacity-0 transition-opacity duration-300 cursor-pointer"
          >
            <button
              className="w-16 h-16 bg-white text-black rounded-full flex justify-center items-center shadow-lg transform transition-transform duration-200 active:scale-95 hover:scale-105"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <FaPause className="text-xl text-black" />
              ) : (
                <FaPlay className="text-lg text-black ml-0.5" />
              )}
            </button>

            {/* Bottom Controls Dashboard Panel */}
            <div className="absolute bottom-6 md:bottom-12 left-8 right-8 flex flex-col gap-3 text-white pointer-events-auto">
              
              {/* Timeline Track Slider */}
              <div className="relative w-full group/timeline flex flex-col pl-5 pr-5">
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
                <div className="flex justify-between text-sm mt-1 font-medium tracking-wide pl-5 pr-5">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex justify-between items-center w-full mt-2 pl-5 pr-5">
                {/* Left Side: Playback Control */}
                <button 
                  onClick={togglePlay}
                  className="w-10 h-10 bg-white text-black rounded-full flex justify-center items-center shadow transition hover:scale-105 active:scale-95"
                >
                  {isPlaying ? <FaPause className="text-xs" /> : <FaPlay className="text-xs ml-0.5" />}
                </button>

                {/* Right Side: Volume & Fullscreen Controls */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={toggleMute}
                    className="w-10 h-10 bg-white text-black rounded-full flex justify-center items-center shadow transition hover:scale-105 active:scale-95"
                  >
                    {isMuted ? <FaVolumeXmark className="text-sm" /> : <FaVolumeHigh className="text-sm" />}
                  </button>
                  <button 
                    onClick={toggleFullscreen}
                    className="w-10 h-10 bg-white text-black rounded-full flex justify-center items-center shadow transition hover:scale-105 active:scale-95"
                  >
                    {isFullscreen ? <FaCompress className="text-sm" /> : <FaExpand className="text-sm" />}
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