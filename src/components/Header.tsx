import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";

// Navigation link configuration for easier future updates
const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#" },
  { name: "Menu", href: "#" },
  { name: "Chefs", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll event to toggle background blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to the target section and close mobile menu
  const handleNavigation = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-width">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} width={200} height={200} className="p-2"/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-10 space-x-8">
            {NAV_ITEMS.map(({ name, href }) => (
              <button
                key={name}
                onClick={() => handleNavigation(href)}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2">
              {NAV_ITEMS.map(({ name, href }) => (
                <button
                  key={name}
                  onClick={() => handleNavigation(href)}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
