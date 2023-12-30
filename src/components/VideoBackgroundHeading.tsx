import React from 'react';

const VideoBackgroundHeading: React.FC = () => {
  return (
    <div className="relative">
      <video
        className="w-full h-auto object-cover absolute inset-0 z-0"
        autoPlay
        loop
        muted
      >
        <source src="../assets/lp.mp4" type="video/mp4" />
        {/* Add additional sources for different video formats if needed */}
      </video>
      <div className="relative z-10">
        <h1 className="text-4xl text-white font-bold">Your Text Here</h1>
      </div>
    </div>
  );
};

export default VideoBackgroundHeading;