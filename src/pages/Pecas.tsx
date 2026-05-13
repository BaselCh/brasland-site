import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Shield, Zap, Settings, Activity, ArrowRight, Wrench, Database } from 'lucide-react';

import heroImg from '../assets/pecas/hero.png';
import filtersImg from '../assets/pecas/filters.png';
import lubricantsImg from '../assets/pecas/lubricants.png';
import wearPartsImg from '../assets/pecas/wear-parts.png';
import undercarriageImg from '../assets/pecas/undercarriage.png';
import electronicsImg from '../assets/pecas/electronics.png';
import performanceImg from '../assets/pecas/precision-hero.png';
import sideHeroImg from '../assets/pecas/side-hero.png';
import ctaBgImg from '../assets/pecas/cta-bg.png';

gsap.registerPlugin(ScrollTrigger);

const Pecas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Reveal Animations
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section.querySelectorAll('.reveal-item'),
        { y: 50, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });

    // Magnetic Buttons
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    magneticButtons.forEach((btn: any) => {
      btn.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
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

  const categories = [
    { name: 'FILTROS', img: filtersImg, icon: <Settings size={24} /> },
    { name: 'LUBRIFICANTES', img: lubricantsImg, icon: <Database size={24} /> },
    { name: 'ELETRÔNICOS', img: electronicsImg, icon: <Zap size={24} /> },
    { name: 'MATERIAL DE DESGASTE (GET)', img: wearPartsImg, icon: <Wrench size={24} /> },
    { name: 'MATERIAL RODANTE', img: undercarriageImg, icon: <Activity size={24} /> },
  ];

  return (
    <div ref={containerRef} className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-brand-blue">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Peças Genuínas Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-section">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6 reveal-item">
                <div className="w-12 h-[2px] bg-brand-orange"></div>
                <span className="text-brand-orange font-bold text-sm tracking-[0.3em] uppercase">
                  Projetado para Performance
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 reveal-item uppercase">
                PEÇAS <br />
                <span className="text-brand-orange">GENUÍNAS</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 reveal-item leading-relaxed">
                Mantenha sua frota operando com a mesma precisão e potência originais. Construído de acordo com as especificações exatas das suas máquinas.
              </p>
            </div>

            <div className="reveal-item flex justify-end lg:-mr-20">
              <img 
                src={sideHeroImg} 
                alt="Peças Genuínas Unit" 
                className="w-full max-w-[900px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-32 bg-white reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-black text-brand-orange mb-4 uppercase tracking-[0.4em] reveal-item">COMPONENTES DE</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-blue uppercase italic reveal-item">PRECISÃO</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className={`reveal-item group relative overflow-hidden rounded-[40px] h-[400px] shadow-2xl cursor-pointer ${i === 3 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-brand-orange/20 backdrop-blur-md p-3 rounded-2xl w-fit mb-4 text-brand-orange border border-brand-orange/30">
                    {cat.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase italic leading-tight">
                    {cat.name}
                  </h4>
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                    <ArrowRight className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE & PRECISION */}
      <section className="py-32 bg-gray-50 reveal-section overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal-item">
              <h2 className="text-sm font-black text-brand-orange mb-6 uppercase tracking-[0.3em]">O DESEMPENHO</h2>
              <h3 className="text-5xl md:text-7xl font-black text-brand-blue mb-8 leading-tight uppercase italic">DA PRECISÃO</h3>
              <p className="text-brand-gray text-xl mb-12 leading-relaxed font-medium">
                Peças genéricas são feitas para muitas máquinas; Peças Genuínas são feitas para a sua. Cada milímetro é projetado para entregar a durabilidade, eficiência e segurança das quais o seu negócio depende.
              </p>
              
              <div className="space-y-10">
                {[
                  { icon: Shield, title: "Compatibilidade OEM", desc: "Ajuste perfeito, todas as vezes. Sem necessidade de modificações para instalação." },
                  { icon: Activity, title: "Durabilidade Extrema", desc: "Testado nos ambientes mais severos para superar os padrões da indústria." },
                  { icon: Zap, title: "Garantia Total", desc: "Respaldado pela nossa garantia abrangente de peças para sua tranquilidade." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group cursor-pointer">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-brand-orange transition-all duration-500 border border-gray-100">
                      <item.icon className="text-brand-orange group-hover:text-white transition-colors duration-500" size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-brand-blue uppercase mb-2 group-hover:text-brand-orange transition-colors">{item.title}</h4>
                      <p className="text-brand-gray font-bold opacity-70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Precision Badge - Relocated below icons */}
              <div className="mt-16 reveal-item">
                <div className="bg-white/60 backdrop-blur-md border border-gray-100 p-8 md:p-10 rounded-[50px] flex flex-col md:flex-row items-center gap-10 shadow-xl relative overflow-hidden group/stats">
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl group-hover/stats:bg-brand-orange/10 transition-colors duration-700"></div>
                  
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-black text-brand-orange leading-none drop-shadow-[0_10px_20px_rgba(255,103,31,0.2)] italic">99,8%</div>
                    <div className="absolute -top-4 -right-8 bg-brand-blue text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Inventário</div>
                  </div>

                  <div className="w-px h-16 bg-brand-blue/10 hidden md:block"></div>

                  <div className="relative z-10 text-center md:text-left">
                    <h4 className="text-xl font-black text-brand-blue mb-2 uppercase italic leading-tight">Precisão de Inventário</h4>
                    <p className="text-brand-blue/60 font-bold text-xs leading-relaxed max-w-[200px] uppercase tracking-wider">
                      Para suporte crítico de frota e máxima disponibilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-item relative">
              <div className="rounded-[60px] overflow-hidden shadow-3xl bg-white relative group">
                <img 
                  src={performanceImg} 
                  alt="Excavator Performance" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative rounded-[60px] overflow-hidden bg-brand-blue p-16 md:p-24 shadow-3xl group min-h-[500px] flex items-center">
            {/* Background Image with Blue Filter */}
            <div className="absolute inset-0 z-0">
              <img 
                src={ctaBgImg} 
                alt="CTA Background" 
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/40 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight mb-8">
                  PRECISA DE AJUDA <br />
                  <span className="text-brand-orange">ESPECIALIZADA?</span>
                </h2>
                <p className="text-white/80 text-xl font-medium leading-relaxed">
                  Nossos especialistas em peças estão à disposição para ajudá-lo a identificar os componentes exatos que você precisa para minimizar o tempo de inatividade e maximizar a produtividade.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/contato">
                  <button className="btn-magnetic bg-brand-orange text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-brand-blue shadow-2xl transition-all duration-500 uppercase tracking-wider">
                    Solicitar Orçamento
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pecas;
