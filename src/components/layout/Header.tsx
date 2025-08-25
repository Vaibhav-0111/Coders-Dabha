import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';
import anime from 'animejs';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate navigation items on route change
    anime({
      targets: '.nav-item',
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutExpo'
    });
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reserve', path: '/reserve' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-neon-cyan/20 shadow-neon' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <ChefHat className="w-8 h-8 text-neon-cyan group-hover:animate-pulse-neon transition-all" />
              <div className="absolute inset-0 blur-md bg-neon-cyan/30 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-heading font-bold text-foreground group-hover:text-neon-cyan transition-colors">
              Snartian Bistro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item relative px-4 py-2 font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-neon-cyan'
                    : 'text-foreground hover:text-neon-cyan'
                } group`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform transition-transform duration-300 ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/reserve"
              className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-neon-strong transition-all duration-300 hover:scale-105"
            >
              Reserve Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-neon-cyan transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-4 py-4 border-t border-neon-cyan/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-neon-cyan bg-neon-cyan/10'
                    : 'text-foreground hover:text-neon-cyan hover:bg-neon-cyan/5'
                } rounded-lg`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/reserve"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium text-center"
            >
              Reserve Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;