import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ArrowRight, Zap, Target, Maximize, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import product1 from '../assets/products/product-1.png';
import product2 from '../assets/products/product-2.png';
import diferencialImg from '../assets/diferencial.png';

gsap.registerPlugin(ScrollTrigger);

const EscavadeirasHidraulicas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const revealSections = document.querySelectorAll('.reveal-section');
    revealSections.forEach((section) => {
      const items = section.querySelectorAll('.reveal-item');
      gsap.fromTo(items, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0,
          duration: 1, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const fleet = [
    { name: "ZX210LCH-5G", type: "Série Hidráulica", img: product1 },
    { name: "ZX250LC-5G", type: "Premium Heavy", img: product2 },
    { name: "ZX210LCH-5G", type: "Série Hidráulica", img: product1 },
    { name: "ZX250LC-5G", type: "Premium Heavy", img: product2 },
  ];

  return (
    <div ref={containerRef} className="bg-brand-light pt-20">
      {/* HERO CAROUSEL (Simplified as a single powerful banner for now, expandable to carousel) */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src={diferencialImg} 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Excavator background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl reveal-section">
            <h2 className="text-brand-orange font-black text-sm uppercase tracking-[0.4em] mb-6 reveal-item">Série Heavy Duty</h2>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 reveal-item uppercase tracking-tighter">
              DOMINE O TERRENO<br/>COM PRECISÃO
            </h1>
            <p className="text-white/70 text-xl md:text-2xl font-medium max-w-2xl mb-12 reveal-item leading-relaxed">
              Equipadas com tecnologia de fluxo inteligente, nossas escavadeiras entregam força máxima onde você mais precisa, com o menor consumo da categoria.
            </p>
            <div className="flex flex-wrap gap-6 reveal-item">
              <button className="bg-brand-orange text-white px-10 py-5 rounded-full font-black hover:bg-white hover:text-brand-blue transition-all shadow-2xl flex items-center gap-3 group">
                Explorar Modelos <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border-2 border-white/20 text-white px-10 py-5 rounded-full font-black hover:bg-white/10 transition-all">
                Download Catálogo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="py-32 container mx-auto px-4 md:px-8 reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-item">
            <h2 className="text-brand-orange font-black text-sm uppercase tracking-[0.3em] mb-6">Superioridade Técnica</h2>
            <h3 className="text-5xl md:text-6xl font-black text-brand-blue mb-10 leading-tight uppercase">
              ENGENHARIA SEM<br/>COMPROMISSOS
            </h3>
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-blue mb-2">Hidráulica Adaptativa</h4>
                  <p className="text-brand-gray font-medium">Sistema que ajusta automaticamente a pressão conforme a dureza do solo, reduzindo esforço desnecessário.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-blue mb-2">Chassi Reforçado</h4>
                  <p className="text-brand-gray font-medium">Estrutura em aço de alta resistência, projetada para durar 30% mais em ambientes corrosivos.</p>
                </div>
              </div>
            </div>
            <p className="text-brand-gray text-lg font-medium leading-relaxed italic border-l-4 border-brand-orange pl-6 py-2">
              "A Brasland redefine o que significa potência controlada. Não é apenas sobre força, é sobre como essa força é aplicada."
            </p>
          </div>

          <div className="reveal-item relative">
            <div className="rounded-[60px] overflow-hidden shadow-3xl bg-white p-8">
              <img src={diferencialImg} alt="Engenharia" className="w-full h-auto rounded-[40px] transform hover:scale-105 transition-transform duration-1000" />
            </div>
            {/* Badge */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-8 border-brand-light transform rotate-12">
              <span className="text-4xl font-black">25%</span>
              <span className="text-[10px] font-black uppercase text-center leading-none px-4">Maior Eficiência<br/>Energética</span>
            </div>
          </div>
        </div>
      </section>

      {/* MOSAIC (Fleet) */}
      <section className="py-32 bg-white reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 reveal-item">
            <h2 className="text-sm font-black text-brand-orange mb-4 uppercase tracking-[0.3em]">Portfólio Completo</h2>
            <h3 className="text-5xl md:text-6xl font-black text-brand-blue uppercase">NOSSAS ESCAVADEIRAS</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {fleet.map((item, idx) => (
              <div key={idx} className="reveal-item group cursor-pointer">
                <div className="aspect-[4/3] rounded-[30px] overflow-hidden mb-8 shadow-2xl relative bg-brand-light flex items-center justify-center p-4 border border-gray-100">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-brand-blue px-6 py-2 rounded-full font-bold shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Ver Detalhes</span>
                  </div>
                </div>
                <p className="text-xs font-black text-brand-orange mb-2 uppercase tracking-widest">{item.type}</p>
                <h4 className="text-2xl font-black text-brand-blue mb-3">{item.name}</h4>
                <p className="text-brand-gray text-sm font-medium leading-relaxed line-clamp-2">Performance superior em qualquer tipo de aplicação, da terraplenagem à mineração.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 container mx-auto px-4 md:px-8 reveal-section">
        <div className="bg-brand-blue rounded-[60px] p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src={diferencialImg} className="w-full h-full object-cover" alt="pattern" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight uppercase">
              PRONTO PARA ELEVAR SUA<br/><span className="text-brand-orange">PRODUTIVIDADE?</span>
            </h2>
            <p className="text-white/70 text-xl mb-12 font-medium">
              Nossa equipe técnica está pronta para configurar a solução ideal para seu projeto.
            </p>
            <button className="bg-brand-orange text-white px-16 py-6 rounded-full font-black text-lg hover:bg-white hover:text-brand-blue transition-all shadow-3xl transform hover:scale-105 active:scale-95">
              Peça agora uma cotação
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EscavadeirasHidraulicas;
