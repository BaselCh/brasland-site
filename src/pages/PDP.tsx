import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ArrowRight, Download, MessageSquare, Shield, Zap, Settings, Activity } from 'lucide-react';

import heroImg from '../assets/products/cx130c-hero.png';
import sideImg from '../assets/products/cx130c-side.png';
import engineImg from '../assets/products/cx130c-engine.png';
import cabinImg from '../assets/products/cx130c-cabin.png';
import productDetailImg from '../assets/products/product-1.png';

gsap.registerPlugin(ScrollTrigger);

const PDP = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const specs = [
    { label: "Potência Líquida", value: "100 HP" },
    { label: "Peso Operacional", value: "13.300 kg" },
  ];

  const differentiators = [
    {
      title: "HIDRÁULICA AVANÇADA",
      text: "Ciclos mais rápidos e precisão milimétrica com o sistema hidráulico inteligente da CASE.",
      img: engineImg
    },
    {
      title: "CONFORTO PRO-OPERADOR",
      text: "Cabine pressurizada com baixo ruído e visibilidade 360º para máxima produtividade.",
      img: cabinImg
    },
    {
      title: "DURABILIDADE EXTREMA",
      text: "Estruturas reforçadas projetadas para resistir aos ambientes mais severos do Brasil.",
      img: heroImg
    }
  ];

  return (
    <div ref={containerRef} className="bg-white overflow-x-hidden">
      {/* HERO SECTION - CASE STYLE */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-blue">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="CASE Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply scale-110"
          />
          <div className="absolute inset-0 bg-brand-blue/60"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-section">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4 reveal-item">
                <div className="w-12 h-[2px] bg-[#FF772A]"></div>
                <span className="text-[#FF772A] font-bold text-sm tracking-[0.3em] uppercase">
                  ESCAVADEIRA HIDRÁULICA
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 reveal-item uppercase">
                CASE <span className="text-[#FF772A]">CX130C</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 reveal-item leading-relaxed">
                Engenharia de precisão encontra a potência industrial. Projetada para máxima eficiência e durabilidade nos terrenos mais difíceis.
              </p>
              
              <div className="flex flex-wrap gap-12 md:gap-20 mb-16 reveal-item">
                {specs.map((spec, i) => (
                  <div key={i}>
                    <p className="text-white/70 text-sm font-bold mb-2">{spec.label}</p>
                    <p className="text-3xl md:text-4xl font-black text-white">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 reveal-item">
                <button className="bg-[#FF772A] text-white px-12 py-5 rounded-full font-black uppercase tracking-tight text-sm hover:bg-white hover:text-[#FF772A] transition-all shadow-xl btn-magnetic">
                  Baixar catálogo
                </button>
                <button className="border-2 border-white text-white px-12 py-5 rounded-full font-black uppercase tracking-tight text-sm hover:bg-white hover:text-brand-blue transition-all btn-magnetic">
                  Peça uma cotação
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="reveal-item flex justify-end lg:-mr-32">
              <img 
                src={sideImg} 
                alt="CASE CX130C Unit" 
                className="w-full max-w-[1200px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS - INTERACTIVE IMAGE ACCORDION */}
      <section className="py-24 bg-white reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] gap-6">
            {differentiators.map((diff, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                className={`relative overflow-hidden rounded-[40px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer group shadow-2xl
                  ${activeIndex === i ? 'lg:flex-[5] flex-[1] h-[500px] lg:h-full' : 'lg:flex-[1] flex-[0.5] h-[100px] lg:h-full opacity-60 hover:opacity-100'}
                `}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={diff.img} 
                    alt={diff.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/30 to-transparent transition-opacity duration-700
                    ${activeIndex === i ? 'opacity-100' : 'opacity-60'}
                  `}></div>
                </div>
                
                {/* Expanded Content */}
                <div className={`absolute bottom-12 left-12 right-12 transition-all duration-700 delay-100
                  ${activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-brand-orange"></div>
                    <span className="text-brand-orange font-black text-xs tracking-[0.4em] uppercase">
                      {diff.title}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic leading-tight max-w-2xl mb-8">
                    {diff.text}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-white/60 font-black text-[10px] uppercase tracking-[0.2em]">
                    <span>Case Construction</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                    <span>Tecnologia Pura</span>
                  </div>
                </div>

                {/* Collapsed Label (Vertical on Desktop) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500
                  ${activeIndex === i ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                `}>
                  <div className="flex flex-col items-center gap-6">
                    <span className="text-white font-black uppercase tracking-[0.5em] text-sm whitespace-nowrap lg:-rotate-90">
                      {diff.title.split(' ')[0]}
                    </span>
                    <div className="w-1 h-12 bg-brand-orange/50 rounded-full hidden lg:block"></div>
                  </div>
                </div>

                {/* Number indicator */}
                <div className="absolute top-10 left-10">
                  <span className="text-white/20 font-black text-4xl italic">0{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE GRID */}
      <section className="py-32 bg-gray-50 reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal-item">
              <h2 className="text-sm font-black text-brand-orange mb-6 uppercase tracking-[0.3em]">Performance em campo</h2>
              <h3 className="text-5xl md:text-6xl font-black text-brand-blue mb-8 leading-tight uppercase italic">FORÇA QUE MOVE<br/>O PROGRESSO</h3>
              <p className="text-brand-gray text-xl mb-12 leading-relaxed font-medium">
                A CX130C entrega torque inigualável e precisão em cada movimento, otimizando seus projetos de infraestrutura.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: <Zap className="text-brand-orange" />, title: "Ciclos Rápidos", desc: "Aumento de 5% na velocidade de ciclo comparado à série anterior." },
                  { icon: <Shield className="text-brand-orange" />, title: "Chassi Reforçado", desc: "Longarinas mais espessas para suportar cargas de torção elevadas." },
                  { icon: <Settings className="text-brand-orange" />, title: "Manutenção Fácil", desc: "Pontos de serviço agrupados ao nível do solo para rapidez." },
                  { icon: <Activity className="text-brand-orange" />, title: "Telemetria", desc: "Controle total da sua frota em tempo real via satélite." },
                ].map((item, idx) => (
                  <div key={idx} className="group hover:translate-x-4 transition-all duration-500 cursor-default">
                    <div className="mb-4 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 origin-left">{item.icon}</div>
                    <h4 className="text-lg font-black text-brand-blue mb-2 uppercase transition-colors duration-500 group-hover:text-brand-orange">{item.title}</h4>
                    <p className="text-brand-gray text-sm font-bold opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-item relative">
              <div className="rounded-[60px] overflow-hidden shadow-3xl bg-white p-8">
                <img src={productDetailImg} alt="Technical Detail" className="w-full h-auto transform hover:scale-110 transition-transform duration-1000" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNERS */}
      <section className="py-20 reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/contato"
              className="reveal-item relative rounded-[50px] overflow-hidden p-12 bg-brand-orange group cursor-pointer h-[400px] flex flex-col justify-end shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,119,42,0.3)] hover:-translate-y-4"
            >
              <div className="absolute inset-0 bg-brand-orange transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-1000 group-hover:scale-150 group-hover:rotate-12">
                <Activity size={350} className="absolute -right-20 -bottom-20 text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-white uppercase italic mb-4 leading-tight">Solicitar <br/> orçamento</h3>
                <p className="text-white/80 font-bold mb-8 max-w-[280px]">Receba uma proposta comercial personalizada</p>
                <div className="btn-magnetic inline-block bg-white text-brand-orange px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-white/20">Solicitar agora</div>
              </div>
            </Link>
            
            <div className="reveal-item relative rounded-[50px] overflow-hidden p-12 bg-brand-blue group cursor-pointer h-[400px] flex flex-col justify-end shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,45,114,0.3)] hover:-translate-y-4">
              <div className="absolute inset-0 bg-brand-blue transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-1000 group-hover:scale-150 group-hover:rotate-12">
                <Download size={350} className="absolute -right-20 -bottom-20 text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-white uppercase italic mb-4 leading-tight">Catálogo <br/> Técnico</h3>
                <p className="text-white/80 font-bold mb-8 max-w-[280px]">Especificações técnicas completas (PDF, 4,2mb)</p>
                <button className="btn-magnetic bg-brand-orange text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-brand-orange/20">Baixar PDF</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-32 bg-white reveal-section border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="reveal-item">
              <h2 className="text-sm font-black text-brand-orange mb-6 uppercase tracking-[0.3em]">Pronto para</h2>
              <h3 className="text-5xl md:text-7xl font-black text-brand-blue mb-6 leading-none uppercase italic tracking-tighter">
                aumentar sua <br /> <span className="text-brand-orange">produtividade?</span>
              </h3>
              <p className="text-brand-gray text-lg font-medium mb-12 max-w-md">
                Entre em contato com nossos especialistas para saber como a CX130C pode transformar sua operação.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-gray-100 p-4 rounded-2xl"><MessageSquare className="text-brand-blue" /></div>
                  <div>
                    <p className="text-xs font-black text-brand-gray uppercase mb-1">E-mail</p>
                    <p className="text-xl font-bold text-brand-blue">contato@brasland.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-gray-100 p-4 rounded-2xl"><Shield className="text-brand-blue" /></div>
                  <div>
                    <p className="text-xs font-black text-brand-gray uppercase mb-1">Central de Atendimento</p>
                    <p className="text-xl font-bold text-brand-blue">0800 701 2500</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-item">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Nome completo" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-5 px-8 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm" />
                  <input type="email" placeholder="E-mail profissional" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-5 px-8 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Empresa" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-5 px-8 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm" />
                  <input type="tel" placeholder="Telefone" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-5 px-8 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm" />
                </div>
                <textarea rows={5} placeholder="Descreva sua necessidade..." className="w-full bg-gray-50 border-2 border-transparent rounded-3xl py-5 px-8 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm resize-none"></textarea>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="terms" className="w-5 h-5 rounded-md border-2 border-gray-200 text-brand-orange focus:ring-brand-orange" />
                  <label htmlFor="terms" className="text-sm font-bold text-brand-gray">Aceito os termos de privacidade da Brasland.</label>
                </div>

                <button className="bg-brand-blue text-white w-full py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-orange transition-all shadow-xl btn-magnetic flex items-center justify-center gap-4">
                  Enviar Solicitação
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PDP;
