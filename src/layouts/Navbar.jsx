import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "../utils/cn";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Products", to: "products" },
  { name: "Gallery", to: "gallery" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-sm py-3" : "bg-white py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link to="home" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-medical-darkBlue tracking-tight">
              Jijau Medical
            </span>
            <span className="text-[10px] md:text-xs text-medical-green font-bold uppercase tracking-widest mt-0.5">
              And General Store
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-600 font-medium hover:text-medical-blue cursor-pointer transition-colors"
                activeClass="text-medical-blue font-bold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center space-x-5">
            <a href="tel:+919623303616" className="flex items-center text-gray-700 font-semibold hover:text-medical-blue transition-colors">
              <Phone className="w-4 h-4 mr-2 text-medical-blue" />
              +91 9623303616
            </a>
            <a 
              href="https://maps.app.goo.gl/7VARwTvqpk7CZfoZ7" 
              target="_blank" 
              rel="noreferrer"
              className="bg-medical-blue text-white px-5 py-2.5 rounded-lg font-medium hover:bg-medical-darkBlue transition-colors flex items-center shadow-sm"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Directions
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[400px] border-t border-gray-100" : "max-h-0"
      )}>
        <div className="flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium text-lg hover:text-medical-blue"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
             <a href="tel:+919623303616" className="flex items-center text-gray-700 font-semibold">
              <Phone className="w-5 h-5 mr-3 text-medical-blue" />
              +91 9623303616
            </a>
            <a 
              href="https://maps.app.goo.gl/7VARwTvqpk7CZfoZ7" 
              target="_blank" 
              rel="noreferrer"
              className="bg-medical-blue text-white px-5 py-3 rounded-lg font-medium text-center flex justify-center items-center"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
