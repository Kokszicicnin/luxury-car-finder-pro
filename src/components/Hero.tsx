const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80')",
        }}
      >
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