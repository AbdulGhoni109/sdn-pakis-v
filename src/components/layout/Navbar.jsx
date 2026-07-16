import { useState, useEffect, useRef } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { navLinks, schoolInfo } from '../../data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('beranda');

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64; // 64px = h-16 navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const linkClass = (id) =>
    `relative text-sm font-semibold transition-colors duration-200 px-1 py-0.5 cursor-pointer
     after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent-500
     after:transition-all after:duration-300
     ${activeId === id
       ? 'text-accent-500 after:w-full'
       : 'text-gray-700 hover:text-primary-700 after:w-0 hover:after:w-full'}`;

  const mobileLinkClass = (id) =>
    `block px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer
     ${activeId === id
       ? 'bg-primary-700 text-white'
       : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('beranda')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary-700 flex items-center justify-center
                            group-hover:bg-primary-800 transition-colors duration-200">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight text-left">
              <span className="block text-sm font-bold text-primary-700">{schoolInfo.shortName}</span>
              <span className="block text-xs text-gray-400 font-medium">{schoolInfo.city}</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={linkClass(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            id="navbar-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left ${mobileLinkClass(link.id)}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
