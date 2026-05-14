import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Globe, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroImg from '../assets/quem-somos-hero-final.png';
import legacyImg from '../assets/quem-somos-legacy-final.png';
import propositoImg from '../assets/quem-somos-proposito-final.png';
import history1965 from '../assets/history-1965.png';

gsap.registerPlugin(ScrollTrigger);

const QuemSomos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  const historyData = [
    {
      year: "1965",
      title: "1965",
      image: history1965,
      desc: "A primeira empresa Brasif foi fundada em Belo Horizonte/MG, como distribuidora de produtos siderúrgicos."
    },
    {
      year: "2024",
      title: "2024",
      image: propositoImg,
      desc: "A Brasland inicia sua jornada como representante oficial da Hitachi Construction Machinery no Brasil, trazendo inovação e suporte de classe mundial."
    }
  ];

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Reveal animations for all sections
    const revealSections = document.querySelectorAll('.reveal-section');
    revealSections.forEach((section) => {
      const items = section.querySelectorAll('.reveal-item');
      
      gsap.fromTo(items, 
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, y: 0, scale: 1,
          duration: 1.2, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e: any) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = btn.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const nextHistory = () => setCurrentHistoryIndex((prev) => (prev + 1) % historyData.length);
  const prevHistory = () => setCurrentHistoryIndex((prev) => (prev - 1 + historyData.length) % historyData.length);

  return (
    <div ref={containerRef} className="bg-brand-light">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center overflow-hidden reveal-section bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Quem Somos Hero" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
          <div className="max-w-4xl">
            <h2 className="text-sm font-black text-brand-orange mb-6 uppercase tracking-[0.5em] reveal-item">Nosso Legado</h2>
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter reveal-item uppercase">
              Quem somos
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl reveal-item text-white/90">
              Unindo a excelência japonesa da Hitachi à agilidade operacional da Landcros para redefinir o mercado industrial brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* NOSSA FROTA (NOSSO LEGADO) */}
      <section className="py-32 container mx-auto px-4 md:px-8 reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-item">
            <p className="text-sm font-black text-brand-orange mb-6 uppercase tracking-[0.3em]">Nosso Legado</p>
            <h2 className="text-5xl md:text-6xl font-black text-brand-blue mb-10 leading-tight uppercase">
              NOSSA FROTA
            </h2>
            <div className="space-y-8 text-brand-gray text-xl font-medium leading-relaxed">
              <p>
                A Hitachi Construction Machinery é sinônimo de durabilidade e precisão técnica em escala global. Por décadas, as escavadeiras Hitachi estableceram o padrão ouro para operações de mineração e construção pesada, focando em confiabilidade mecânica e baixo custo operacional.
              </p>
              <p>
                Nossa história é construída sobre o compromisso com a eficiência. Cada componente é projetado para suportar os ambientes mais hostis do planeta, garantindo que a produtividade nunca seja comprometida.
              </p>
            </div>
            <div className="mt-16 p-8 border-l-4 border-brand-orange bg-gray-50 rounded-r-[30px] reveal-item">
              <p className="text-2xl font-bold text-brand-blue italic leading-relaxed">
                "A engenharia não é apenas sobre máquinas, é sobre o progresso humano através da precisão."
              </p>
            </div>
          </div>
          <div className="reveal-item rounded-[60px] overflow-hidden shadow-3xl">
            <img 
              src={legacyImg} 
              alt="Legado Hitachi" 
              className="w-full h-auto hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </section>

      {/* A NOVA ERA SECTION */}
      <section className="py-32 bg-brand-blue text-white reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mb-24 reveal-item">
            <p className="text-sm font-black text-brand-orange mb-6 uppercase tracking-[0.3em]">A NOVA ERA</p>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter">
              LANDCROS + HITACHI = BRASLAND
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white/80">
              Construindo a Infraestrutura do Brasil com Precisão
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Zap className="text-brand-orange" size={48} />, 
                title: "Agilidade Local", 
                desc: "Operação otimizada para a realidade do território brasileiro, com respostas rápidas e suporte dedicado." 
              },
              { 
                icon: <Globe className="text-brand-orange" size={48} />, 
                title: "Qualidade Global", 
                desc: "Mantendo o rigoroso padrão de qualidade Hitachi em cada peça, serviço e atendimento prestado." 
              },
              { 
                icon: <Share2 className="text-brand-orange" size={48} />, 
                title: "Conexão Estratégica", 
                desc: "Uma transição focada no cliente, unindo a tradição de uma gigante com a inovação de uma nova liderança." 
              }
            ].map((card, idx) => (
              <div key={idx} className="reveal-item bg-white/5 p-12 rounded-[50px] border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                <h4 className="text-2xl font-black mb-6">{card.title}</h4>
                <p className="text-white/60 text-lg leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONDE A POTÊNCIA ENCONTRA O PROPÓSITO */}
      <section className="py-32 container mx-auto px-4 md:px-8 reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <div className="reveal-item order-2 lg:order-1 rounded-[60px] overflow-hidden shadow-3xl h-full">
            <img 
              src={propositoImg} 
              alt="Potência e Propósito" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="reveal-item order-1 lg:order-2 flex flex-col">
            <div className="pt-2">
              <p className="text-sm font-black text-brand-orange mb-4 uppercase tracking-[0.4em]">Onde a Potência</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue mb-10 leading-tight uppercase tracking-tighter">
                ENCONTRA O PROPÓSITO.
              </h2>
              <p className="text-brand-gray text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-2xl">
                A BRASLAND nasce da necessidade de um parceiro industrial que entenda as profundezas do solo brasileiro e as exigências do mercado global. Não vendemos apenas máquinas; entregamos disponibilidade operacional.
              </p>
              
              <div className="space-y-12 mb-16">
                <div className="reveal-item">
                  <h4 className="text-brand-orange font-black italic text-2xl uppercase tracking-widest mb-4">Missão</h4>
                  <p className="text-lg md:text-xl font-medium text-brand-gray leading-relaxed max-w-2xl">
                    Prover soluções de infraestrutura com a mais alta tecnologia japonesa e eficiência brasileira.
                  </p>
                </div>

                <div className="reveal-item">
                  <h4 className="text-brand-orange font-black italic text-2xl uppercase tracking-widest mb-4">Visão</h4>
                  <p className="text-lg md:text-xl font-medium text-brand-gray leading-relaxed max-w-2xl">
                    Ser a referência absoluta em escavadeiras hidráulicas e suporte técnico no Brasil.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pb-2">
              <Link to="/escavadeiras" className="group inline-flex items-center gap-6 bg-brand-orange text-white px-8 py-4 rounded-full font-black text-base transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/40 btn-magnetic">
                Nossa linha de produtos
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <ArrowRight size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA HISTÓRIA (TIMELINE) */}
      <section className="py-32 bg-gray-50 reveal-section overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-24 reveal-item">
            <p className="text-sm font-black text-brand-orange mb-2 uppercase tracking-[0.5em]">Nossa</p>
            <h2 className="text-5xl md:text-7xl font-black text-brand-blue uppercase tracking-tighter">
              história
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto reveal-item">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white p-12 md:p-20 rounded-[60px] shadow-2xl relative overflow-hidden min-h-[600px]">
              <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-xl relative">
                {historyData.map((item, idx) => (
                  <img 
                    key={idx}
                    src={item.image} 
                    alt={item.title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${idx === currentHistoryIndex ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-full'}`}
                  />
                ))}
              </div>
              <div className="relative overflow-hidden h-full flex flex-col justify-center">
                {historyData.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`transition-all duration-1000 ease-in-out ${idx === currentHistoryIndex ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-20 absolute'}`}
                  >
                    <span className="text-8xl md:text-9xl font-black text-brand-orange/10 absolute -top-20 -left-10 select-none">{item.year}</span>
                    <h3 className="text-6xl md:text-8xl font-black text-brand-blue mb-8 relative z-10">{item.year}</h3>
                    <p className="text-brand-gray text-xl md:text-2xl leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
                
                <div className="flex gap-4 mt-16 relative z-20">
                  <button 
                    onClick={prevHistory}
                    className="p-4 rounded-full border-2 border-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white transition-all btn-magnetic"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    onClick={nextHistory}
                    className="p-4 rounded-full border-2 border-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white transition-all btn-magnetic"
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
