import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoWhite from '../assets/LOGOTIPO-BRANCO-E-LARANJA.svg';
import logoBrand from '../assets/LOGOTIPO-BRASLAND.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Escavadeiras hidráulicas', 
      path: '/escavadeiras',
      dropdown: [
        { name: 'BR-X 500', path: '#' },
        { name: 'BR-X 220', path: '#' },
        { name: 'CASE CX130C', path: '#' },
      ]
    },
    { name: 'Peças', path: '#' },
    { name: 'Serviços', path: '#' },
    { name: 'Quem somos', path: '#' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contato', path: '#' },
  ];

  const isHomePage = location.pathname === '/';
  const isExcavatorsPage = location.pathname === '/escavadeiras';
  const isInsightsPage = location.pathname.startsWith('/insights');
  const shouldShowBg = isScrolled || (!isHomePage && !isExcavatorsPage && !isInsightsPage);
  const textColorClass = shouldShowBg ? 'text-brand-blue' : 'text-white';
  const currentLogo = shouldShowBg ? logoBrand : logoWhite;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        shouldShowBg ? 'bg-white/90 backdrop-blur-md shadow-xl py-3 md:py-4' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img 
            src={currentLogo} 
            alt="Brasland Logo" 
            className="h-3 md:h-3.5 lg:h-4 w-auto transition-all duration-500" 
          />
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-4 xl:space-x-8 px-4">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`text-[12px] xl:text-[13px] font-bold transition-all hover:text-brand-orange uppercase tracking-[0.1em] whitespace-nowrap flex items-center gap-1 ${textColorClass} ${
                  location.pathname === link.path ? 'text-brand-orange' : ''
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-4 w-48 bg-white shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 py-2">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-6 py-3 text-[12px] font-bold text-brand-blue hover:bg-gray-50 hover:text-brand-orange transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button - Right Aligned */}
        <div className="hidden lg:flex flex-shrink-0 justify-end items-center">
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-full text-[12px] font-black transition-all shadow-lg hover:shadow-brand-orange/30 uppercase tracking-tighter hover:translate-y-[-1px] whitespace-nowrap">
            Solicitar orçamento
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} className={textColorClass} /> : <Menu size={24} className={textColorClass} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-10 px-8 animate-in slide-in-from-top duration-300 border-t border-gray-100">
          <div className="flex flex-col space-y-7 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[14px] font-bold text-brand-blue hover:text-brand-orange transition-colors uppercase tracking-[0.2em]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-brand-orange text-white w-full py-5 rounded-full font-black shadow-xl uppercase tracking-widest mt-4">
              Solicitar orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
