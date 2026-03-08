import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const onScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    setScrollProgress(currentProgress);
    setIsScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

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
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
      <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/85 backdrop-blur-xl border-b border-amethyst/25 shadow-lg shadow-amethyst/5' 
          : 'bg-transparent backdrop-blur-sm border-b border-transparent'
      }`}>
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
          <motion.div 
            className="h-full bg-gradient-to-r from-amethyst-dark via-amethyst to-amethyst-light"
            style={{ 
              width: `${scrollProgress}%`,
              boxShadow: '0 0 12px rgba(153, 102, 204, 0.7)'
            }}
          />
        </div>

        <div className={`container mx-auto px-6 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link
              to="hero"
              smooth={true}
              duration={700}
              className="cursor-pointer flex items-center gap-3 group"
              aria-label="Navigate to home section"
            >
              <div className={`rounded-full overflow-hidden border-2 transition-all duration-500 ${
                isScrolled 
                  ? 'w-9 h-9 border-amethyst/50' 
                  : 'w-10 h-10 border-amethyst/40'
              } group-hover:border-amethyst group-hover:shadow-[0_0_18px_rgba(153,102,204,0.6)]`}>
                <img 
                  src="/jenita-photo.jpg" 
                  alt="Jenita Reshma logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTExIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk5NjZDQyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPko8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-poppins font-bold tracking-wide text-silver group-hover:text-amethyst-light transition-colors duration-300">
                  Jenita
                </span>
                <span className="text-[10px] font-inter text-amethyst/70 tracking-widest uppercase -mt-0.5">
                  Portfolio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full px-1.5 py-1.5 gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  spy={true}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`nav-pill relative px-4 py-1.5 text-sm font-poppins font-medium cursor-pointer transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amethyst/50 ${
                    activeSection === item.to
                      ? 'text-white bg-amethyst/20 shadow-[0_0_12px_rgba(153,102,204,0.3)]'
                      : 'text-silver/70 hover:text-silver hover:bg-white/[0.06]'
                  }`}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full border border-amethyst/40 bg-amethyst/10"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className="px-5 py-2 text-sm font-poppins font-semibold text-white bg-gradient-to-r from-amethyst-dark to-amethyst rounded-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(153,102,204,0.5)] hover:scale-105 active:scale-95"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Menu Button — animated hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-amethyst/30 hover:border-amethyst hover:bg-amethyst/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amethyst/50"
            >
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <span className={`block w-5 h-[2px] bg-amethyst rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-5 h-[2px] bg-amethyst rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block w-5 h-[2px] bg-amethyst rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="mt-3 p-4 rounded-xl bg-black/90 border border-amethyst/25 backdrop-blur-xl space-y-1"
                  style={{ boxShadow: '0 8px 32px rgba(153, 102, 204, 0.15)' }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.3 }}
                    >
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={800}
                        offset={-80}
                        onClick={() => setMenuOpen(false)}
                        spy={true}
                        onSetActive={() => setActiveSection(item.to)}
                        className={`block px-4 py-2.5 text-sm font-poppins font-medium rounded-lg cursor-pointer transition-all duration-300 ${
                          activeSection === item.to
                            ? 'text-amethyst-light bg-amethyst/15 border-l-[3px] border-amethyst'
                            : 'text-silver/75 hover:text-amethyst-light hover:bg-amethyst/8 border-l-[3px] border-transparent'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    className="pt-2"
                  >
                    <Link
                      to="contact"
                      smooth={true}
                      duration={800}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full text-center px-4 py-2.5 text-sm font-poppins font-semibold text-white bg-gradient-to-r from-amethyst-dark to-amethyst rounded-lg cursor-pointer transition-all duration-300 hover:shadow-[0_0_16px_rgba(153,102,204,0.4)]"
                    >
                      Hire Me
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
      </>
      )}
    </div>
  );
}

export default App;
