import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-playfair font-bold">
            LuxuryCars
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/showroom" className="hover:text-luxury-gold transition-colors">
              Showroom
            </a>
            <a href="/addons" className="hover:text-luxury-gold transition-colors">
              Luxury Add-Ons
            </a>
            <button className="luxury-button-primary">
              Contact Sales
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <a href="/showroom" className="block py-2 hover:text-luxury-gold transition-colors">
              Showroom
            </a>
            <a href="/addons" className="block py-2 hover:text-luxury-gold transition-colors">
              Luxury Add-Ons
            </a>
            <button className="luxury-button-primary w-full mt-4">
              Contact Sales
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;