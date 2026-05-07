import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import heroExcavator from '../assets/hero-excavator.jpg';
import hero2 from '../assets/hero2.png';

const slides = [
  {
    titleLine1: ["A", "FORÇA", "POR", "TRÁS"],
    titleLine2: ["DO", "PROJETO."],
    subtitle: "Liderando a indústria com escavadeiras hidráulicas de alto desempenho e suporte técnico especializado para os terrenos mais exigentes do Brasil.",
    image: heroExcavator,
    tag: "INDUSTRIAL EXCELLENCE",
    highlightWords: ["FORÇA"]
  },
  {
    titleLine1: ["ENGENHARIA", "QUE"],
    titleLine2: ["MOVE O BRASIL."],
    subtitle: "Soluções em Máquinas Pesadas para Mineração e Infraestrutura.",
    image: hero2,
    tag: "POWER & PRECISION",
    highlightWords: ["QUE"]
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(contentRef.current.querySelectorAll('.animate-text'),
        { y: 60, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" }
      );
    }
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/60 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.tag}
            className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-linear ${
              index === current ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Vertical Side Text */}
      <div className="absolute right-0 top-0 h-full w-24 md:w-32 z-20 flex items-center justify-center pointer-events-none">
        <span className="text-[100px] md:text-[180px] font-black text-white/[0.03] whitespace-nowrap uppercase tracking-tighter transform -rotate-90 select-none origin-center">
          BRASLAND INDUSTRIAL
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-20 lg:px-32">
        <div ref={contentRef} className="max-w-5xl">
          <div className="animate-text flex items-center gap-4 mb-10">
            <div className="h-[2px] w-8 bg-brand-orange"></div>
            <p className="text-brand-orange font-bold tracking-[0.3em] uppercase text-[11px]">
              {slides[current].tag}
            </p>
          </div>
          
          <h1 className="animate-text text-[44px] md:text-[96px] font-black text-white mb-8 leading-[0.95] tracking-tight uppercase">
            <div className="mb-2">
              {slides[current].titleLine1.map((word, i) => (
                <span key={i} className={`mr-4 ${slides[current].highlightWords.includes(word) ? 'text-brand-orange italic-none' : 'italic font-black'}`}>
                  {word}{' '}
                </span>
              ))}
            </div>
            <div>
              {slides[current].titleLine2.map((word, i) => (
                <span key={i} className="italic font-black">
                  {word}{' '}
                </span>
              ))}
            </div>
          </h1>

          <p className="animate-text text-lg md:text-xl text-white/70 mb-14 max-w-xl font-medium leading-relaxed">
            {slides[current].subtitle}
          </p>

          <div className="animate-text flex flex-wrap gap-6">
            <button className="btn-magnetic group bg-brand-orange text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-white hover:text-brand-blue transition-all duration-500 flex items-center gap-3">
              Conhecer os equipamentos <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="btn-magnetic bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all duration-500">
              Quem somos
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Bottom Right */}
      <div className="absolute bottom-16 right-6 md:right-20 lg:right-32 z-30 flex items-center gap-10">
        {/* Indicators */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setCurrent(i)}
              className="group cursor-pointer py-4 flex items-center"
            >
              <div className={`h-1 transition-all duration-500 rounded-full ${
                i === current ? 'w-10 bg-brand-orange' : 'w-4 bg-white/20 group-hover:bg-white/40'
              }`} />
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group bg-black/20 backdrop-blur-sm"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group bg-black/20 backdrop-blur-sm"
          >
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
