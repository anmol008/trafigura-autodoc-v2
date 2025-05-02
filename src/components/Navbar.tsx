
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Jane<span className="text-navy-800">Doe</span></span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-navy-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-navy-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/projects" className="font-medium text-navy-700 hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="font-medium text-navy-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex">
            <Button asChild variant="outline">
              <Link to="/projects/manage" className="ml-8">
                Dashboard
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-navy-800 hover:bg-primary hover:text-white">
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-navy-800 hover:bg-primary hover:text-white">
              About
            </Link>
            <Link to="/projects" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-navy-800 hover:bg-primary hover:text-white">
              Projects
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-navy-800 hover:bg-primary hover:text-white">
              Contact
            </Link>
            <Link to="/projects/manage" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium bg-navy-100 text-navy-800 hover:bg-primary hover:text-white">
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
