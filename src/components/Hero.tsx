const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/373839510.sd.mp4?s=8c14fe0b52e02a8a8ac6635a973082de5b8b5466&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Find Your Dream Luxury Car Today
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Experience unparalleled luxury and performance
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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