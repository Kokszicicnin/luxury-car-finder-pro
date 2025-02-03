const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          <source 
            src="https://player.vimeo.com/external/492834071.sd.mp4?s=1445a53fd7d3ad7b973fa51bd5e614d69f46e789&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-10 animate-[fade-in_1s_ease-out_forwards]">
          Find Your Dream Luxury Car Today
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-0 translate-y-10 animate-[fade-in_1s_ease-out_0.2s_forwards]">
          Experience unparalleled luxury and performance
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 opacity-0 translate-y-10 animate-[fade-in_1s_ease-out_0.4s_forwards]">
          <button className="luxury-button-primary bg-white text-black hover:bg-luxury-gold hover:text-white">
            Start Your Search
          </button>
          <button className="luxury-button-secondary border-white text-white hover:bg-white hover:text-black">
            Explore Showroom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;