import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ArrowRight } from 'lucide-react';

import product1 from '../assets/products/product-1.png';
import product2 from '../assets/products/product-2.png';
import engImg from '../assets/qqq1.png';
import heroBg from '../assets/ttr1q.png';
import ctaBg from '../assets/tim.png';

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

    // 3. Magnetic Buttons effect
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e: any) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = btn.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        
        gsap.to(btn, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.4,
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
    <div ref={containerRef} className="bg-brand-light">
      {/* HERO CAROUSEL (Simplified as a single powerful banner for now, expandable to carousel) */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            className="w-full h-full object-cover opacity-60 scale-105" 
            alt="Excavator background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/70 to-transparent"></div>
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
              <button className="btn-magnetic bg-brand-orange text-white px-10 py-5 rounded-full font-black hover:bg-white hover:text-brand-blue shadow-2xl flex items-center gap-3 group">
                Explorar Modelos <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="btn-magnetic border-2 border-white/20 text-white px-10 py-5 rounded-full font-black hover:bg-white/10">
                Download Catálogo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="py-32 container mx-auto px-4 md:px-8 reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-item">
            <h2 className="text-brand-orange font-black text-sm uppercase tracking-[0.3em] mb-6">Superioridade Técnica</h2>
            <h3 className="text-5xl md:text-6xl font-black text-brand-blue mb-10 leading-tight uppercase">
              Engenharia<br/><span className="text-brand-orange">Sem Compromissos.</span>
            </h3>
            <div className="space-y-12 mb-12">
              <div>
                <h4 className="text-xl font-bold text-brand-blue mb-3">Sistema Hidráulico Adaptativo</h4>
                <p className="text-brand-gray font-medium leading-relaxed">Sensores de carga inteligentes ajustam o fluxo de óleo em milisseگundos, garantindo ciclos rápidos e baixo consumo de combustível.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-blue mb-3">Chassi Reforçado Tectônico</h4>
                <p className="text-brand-gray font-medium leading-relaxed">Estrutura de aço de alta resistência soldada roboticamente para suportar as tensões torcionais mais severas em mineração e infraestrutura.</p>
              </div>
            </div>

            {/* Refined Technical Stats Block */}
            <div className="bg-white/40 backdrop-blur-md border border-gray-100 p-10 rounded-[50px] flex flex-col md:flex-row items-center gap-10 shadow-xl relative overflow-hidden group/stats mt-16">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl group-hover/stats:bg-brand-orange/10 transition-colors duration-700"></div>
              
              <div className="relative">
                <div className="text-7xl font-black text-brand-orange leading-none drop-shadow-[0_10px_20px_rgba(255,103,31,0.2)]">25%</div>
                <div className="absolute -top-4 -right-6 bg-brand-blue text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Power Up</div>
              </div>

              <div className="w-px h-16 bg-gray-200 hidden md:block"></div>

              <div className="relative z-10">
                <h4 className="text-2xl font-black text-brand-blue mb-2 uppercase italic">Maior Eficiência</h4>
                <p className="text-brand-gray font-medium text-sm leading-relaxed max-w-xs">
                  Em comparação com a geração anterior, otimizando o custo por tonelada movida em <span className="text-brand-blue font-bold">qualquer terreno.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-item relative">
            <div className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-3xl bg-white">
              <img src={engImg} alt="Engenharia Hitachi" className="w-full h-auto transform hover:scale-105 transition-transform duration-1000" />
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
          <div className="mt-20 flex justify-center reveal-item">
            <button className="btn-magnetic group bg-brand-orange text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:bg-brand-blue hover:scale-105 flex items-center gap-4">
              Solicitar orçamento 
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 container mx-auto px-4 md:px-8 reveal-section">
        <div className="bg-brand-blue rounded-[60px] p-16 md:p-24 text-center relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 z-0">
            <img src={ctaBg} className="w-full h-full object-cover opacity-30" alt="CTA Background" />
            <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase italic">
              Pronto para elevar sua<br/><span className="text-brand-orange">produtividade?</span>
            </h2>
            <p className="text-white/80 text-xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Solicite agora um orçamento personalizado ou agende uma demonstração técnica com nossos especialistas.
            </p>
            <button className="btn-magnetic bg-brand-orange text-white px-16 py-6 rounded-full font-black text-lg hover:bg-white hover:text-brand-blue shadow-3xl transform hover:scale-105 active:scale-95">
              Solicitar orçamento
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EscavadeirasHidraulicas;
