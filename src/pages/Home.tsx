import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Settings, Shield, Activity, Leaf, ArrowRight } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { Link } from 'react-router-dom';

import product1 from '../assets/products/product-1.png';
import product2 from '../assets/products/product-2.png';
import diferencialImg from '../assets/diferencial.png';
import parallaxBg from '../assets/parallax-bg.png';
import evolucaoImg from '../assets/evolucao.png';
import insight1 from '../assets/insights/insight-1.png';
import insight2 from '../assets/insights/insight-2.png';
import insight3 from '../assets/insights/insight-3.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling
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

    // 2. Reveal animations for all sections with stagger
    const revealSections = document.querySelectorAll('.reveal-section');
    revealSections.forEach((section) => {
      const items = section.querySelectorAll('.reveal-item');
      
      gsap.fromTo(items, 
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, y: 0, scale: 1,
          duration: 1, 
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
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

    // 4. Parallax effect for Background
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // 5. Image scale animation on scroll
    const images = document.querySelectorAll('.scroll-image');
    images.forEach((img) => {
      gsap.fromTo(img, 
        { scale: 1.15, filter: 'blur(10px)' },
        { 
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "center center",
            scrub: 1
          }
        }
      );
    });

    // Clean up
    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
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
      <HeroSlider />

      {/* NOSSA FROTA */}
      <section className="py-32 container mx-auto px-4 md:px-8 reveal-section">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 reveal-item">
          <div>
            <h2 className="text-sm font-black text-brand-orange mb-4 uppercase tracking-[0.3em]">Brasland Excellence</h2>
            <h3 className="text-5xl md:text-6xl font-black text-brand-blue mb-4">NOSSA FROTA</h3>
            <p className="text-brand-gray text-xl max-w-xl font-medium">Projetada para durabilidade e máxima eficiência nos terrenos mais hostis.</p>
          </div>
          <button className="mt-8 md:mt-0 btn-outline btn-magnetic hover:scale-105 transform transition-transform">
            Solicitar orçamento
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fleet.map((item, idx) => (
            <div key={idx} className="reveal-item group cursor-pointer">
              <div className="aspect-[4/3] rounded-[30px] overflow-hidden mb-8 shadow-2xl relative bg-white flex items-center justify-center p-4">
                <img src={item.img} alt={item.name} className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-white text-brand-blue px-6 py-2 rounded-full font-bold shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Ver Detalhes</span>
                </div>
              </div>
              <p className="text-xs font-black text-brand-orange mb-2 uppercase tracking-widest">{item.type}</p>
              <h4 className="text-2xl font-black text-brand-blue mb-3">{item.name}</h4>
              <p className="text-brand-gray text-sm font-medium leading-relaxed line-clamp-2">Otimizada para produtividade em grandes projetos de mineração e infraestrutura global.</p>
            </div>
          ))}
        </div>
      </section>

      {/* O DIFERENCIAL HITACHI */}
      <section className="py-32 bg-gray-50 reveal-section">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-item relative rounded-[60px] overflow-hidden aspect-square lg:h-[700px] shadow-3xl bg-white flex items-center justify-center">
            <img 
              src={diferencialImg} 
              alt="Diferencial" 
              className="w-full h-full object-contain scroll-image"
            />
          </div>
          <div className="reveal-item">
            <h2 className="text-sm font-black text-brand-orange mb-6 uppercase tracking-[0.3em]">Inovação</h2>
            <h3 className="text-5xl md:text-6xl font-black text-brand-blue mb-8 leading-tight uppercase">O DIFERENCIAL<br/>HITACHI</h3>
            <p className="text-brand-gray text-xl mb-16 leading-relaxed font-medium">
              Engenharia japonesa, aperfeiçoada para operações brasileiras. Nossa tecnologia foca na economia de combustível sem perda de desempenho.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
              {[
                { icon: <Settings className="text-brand-orange" size={40} />, title: "Sistema HIOS III", desc: "Fluxo hidráulico regenerativo para ciclos mais rápidos e menor consumo." },
                { icon: <Shield className="text-brand-orange" size={40} />, title: "Estruturas Reforçadas", desc: "Lança e braço fortalecidos com peças de aço fundido maciço." },
                { icon: <Activity className="text-brand-orange" size={40} />, title: "Monitoramento ConSite", desc: "Telemetria via satélite para manutenção preditiva e dados operacionais." },
                { icon: <Leaf className="text-brand-orange" size={40} />, title: "Energia Eco-Friendly", desc: "Motores Tier 3 que equilibram torque e redução de emissões de carbono." },
              ].map((feature, idx) => (
                <div key={idx} className="group hover:translate-x-2 transition-transform duration-500">
                  <div className="mb-6">{feature.icon}</div>
                  <h4 className="text-lg font-black text-brand-blue mb-3">{feature.title}</h4>
                  <p className="text-brand-gray text-sm leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>

            <Link to="#" className="inline-flex items-center gap-4 text-brand-blue font-black group btn-magnetic">
              Saiba mais
              <div className="bg-brand-orange p-3 rounded-full text-white group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* PARALLAX SECTION: BRASLAND */}
      <section className="relative py-72 overflow-hidden min-h-[85vh] flex items-center justify-center reveal-section">
        <div 
          ref={parallaxRef}
          className="absolute top-0 left-0 w-full h-[130%] z-0"
          style={{ 
            backgroundImage: `url(${parallaxBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            top: '-15%',
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 bg-brand-blue/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
          <div className="space-y-8">
            <h2 className="text-sm font-black text-brand-orange uppercase tracking-[0.5em] reveal-item">Liderança Nacional</h2>
            <h3 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter reveal-item uppercase">
              BRASLAND
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-4xl mx-auto reveal-item">
              Construindo a Infraestrutura do Brasil com Precisão
            </p>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto font-medium reveal-item">
              Desde nossa fundação, a BRASLAND focou em um único objetivo: fornecer o maquinário pesado necessário para construir o futuro de nossa nação. Com filiais especializadas por todo o país, somos seu parceiro local para tecnologia global.
            </p>
            <div className="reveal-item pt-8">
              <button className="bg-white text-brand-blue px-16 py-5 rounded-full font-black btn-magnetic hover:bg-brand-orange hover:text-white transition-all shadow-3xl hover:scale-105 transform">
                Quem somos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* A EVOLUÇÃO */}
      <section className="py-32 container mx-auto px-4 md:px-8 reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-item order-2 lg:order-1">
            <p className="text-sm font-black text-brand-orange mb-6 uppercase tracking-[0.3em]">Uma Nova Era Começa</p>
            <h2 className="text-5xl md:text-6xl font-black text-brand-blue mb-10 leading-tight uppercase">
              A EVOLUÇÃO:<br/><span className="text-brand-orange">HITACHI</span> PARA <span className="text-brand-orange">LANDCROS</span>
            </h2>
            <p className="text-brand-gray text-xl mb-12 leading-relaxed font-medium">
              Um reposicionamento estratégico para a excelência global. Estamos entusiastas em anunciar nossa transição para a marca Landcros, trazendo ainda mais inovação, suporte e equipamentos especializados para nossos clientes na América do Sul.
            </p>
            <Link to="#" className="inline-flex items-center gap-4 text-brand-blue font-black group btn-magnetic">
              Saiba mais sobre Landcros 
              <div className="bg-brand-orange p-3 rounded-full text-white group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
          <div className="reveal-item order-1 lg:order-2 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-3xl aspect-[4/3] group cursor-pointer relative">
            <img 
              src={evolucaoImg} 
              alt="Evolução" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 scroll-image" 
            />
            <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </section>

      {/* INSIGHTS & TECNOLOGIA */}
      <section className="py-32 bg-brand-blue text-white reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 reveal-item">
            <div>
              <h2 className="text-sm font-black text-brand-orange mb-4 uppercase tracking-[0.3em]">Knowledge Base</h2>
              <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">INSIGHTS & TECNOLOGIA</h3>
            </div>
            <Link to="/insights" className="mt-8 md:mt-0 text-white font-black flex items-center gap-4 group btn-magnetic">
              Ler todos os Insights
              <div className="bg-brand-orange p-3 rounded-full group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: 1, title: "Maximizando a economia de combustível em escavações de alta altitude", tag: "EFICIÊNCIA", img: insight1 },
              { id: 2, title: "Preditiva vs. Reativa: O verdadeiro custo da máquina parada", tag: "MANUTENÇÃO", img: insight2 },
              { id: 3, title: "Landcros: A próxima geração de maquinário autônomo", tag: "FUTURO", img: insight3 },
            ].map((article) => (
              <div key={article.id} className="reveal-item group cursor-pointer bg-white/5 p-4 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="aspect-video rounded-[30px] overflow-hidden mb-8 shadow-2xl">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="px-4 pb-4">
                  <p className="text-xs font-black text-brand-orange mb-3 uppercase tracking-widest">{article.tag}</p>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-brand-orange transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <Link to={`/insights/${article.id}`} className="text-white/60 font-black text-sm flex items-center gap-2 group/btn hover:text-white">
                    SAIBA MAIS <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
