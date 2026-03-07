import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <div className="bg-black text-silver min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-amethyst/30 shadow-lg shadow-amethyst/10' 
          : 'bg-black/80 backdrop-blur-sm border-amethyst/20'
      }`}>
        {/* Progress Bar */}
        <div className="h-1 bg-gradient-to-r from-black via-amethyst/20 to-black">
          <div 
            className="h-full bg-gradient-to-r from-amethyst-dark via-amethyst to-amethyst-light transition-all duration-150" 
            style={{ 
              width: `${scrollProgress}%`,
              boxShadow: '0 0 10px rgba(153, 102, 204, 0.6)'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link
              to="hero"
              smooth={true}
              duration={700}
              className="cursor-pointer flex items-center gap-3 group"
              aria-label="Navigate to home section"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amethyst/40 group-hover:border-amethyst transition-all duration-300"
                style={{
                  boxShadow: '0 0 0 0 rgba(153, 102, 204, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(153, 102, 204, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(153, 102, 204, 0)';
                }}
              >
                <img 
                  src="/jenita-photo.jpg" 
                  alt="Jenita Reshma logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTExIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk5NjZDQyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPko8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              <span className="text-xl font-poppins font-semibold tracking-wide text-silver group-hover:text-amethyst-light transition-colors duration-300">
                Jenita
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  spy={true}
                  activeClass="nav-active"
                  className="nav-link relative px-5 py-2 text-base font-poppins font-medium text-silver/90 cursor-pointer transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-amethyst focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amethyst-dark via-amethyst to-amethyst-light group-hover:w-full transition-all duration-300 ease-out"
                    style={{
                      boxShadow: '0 0 8px rgba(153, 102, 204, 0.6)'
                    }}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden text-silver border-2 border-amethyst/40 rounded-lg px-4 py-2 hover:bg-amethyst/15 hover:border-amethyst transition-all duration-300 font-poppins font-medium focus:outline-none focus:ring-2 focus:ring-amethyst focus:ring-offset-2 focus:ring-offset-black"
              style={{
                boxShadow: '0 0 0 0 rgba(153, 102, 204, 0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 15px rgba(153, 102, 204, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 0 0 rgba(153, 102, 204, 0)';
              }}
            >
              {menuOpen ? '✕ Close' : '☰ Menu'}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 p-5 rounded-xl bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 border-2 border-amethyst/30 backdrop-blur-md space-y-3"
              style={{
                boxShadow: '0 0 30px rgba(153, 102, 204, 0.3), inset 0 0 20px rgba(153, 102, 204, 0.1)'
              }}
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  spy={true}
                  activeClass="mobile-nav-active"
                  className="mobile-nav-link block px-4 py-3 text-base font-poppins font-medium text-silver/85 hover:text-amethyst-light hover:bg-amethyst/10 rounded-lg cursor-pointer transition-all duration-300 border-l-4 border-transparent hover:border-amethyst"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
