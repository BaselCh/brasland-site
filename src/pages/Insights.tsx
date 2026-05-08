import { useEffect, useRef, useState } from 'react';
import { Search, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import heroBg from '../assets/ttr1q.png';
import featuredImg from '../assets/featured-insight.png';
import efficiencyImg from '../assets/efficiency-insight.png';
import maintenanceImg from '../assets/maintenance-insight.png';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "Todas as notícias",
  "Tecnologia",
  "Eficiência",
  "Manutenção",
  "Sustentabilidade"
];

const articles = [
  {
    id: 1,
    title: "Maximizando a economia de combustível em escavações de alta altitude",
    category: "EFICIÊNCIA",
    date: "15 de Março, 2026",
    readTime: "5min de leitura",
    excerpt: "Descubra as configurações e modos de operação que economizam até 15% nos custos de combustível sem perda de potência.",
    image: featuredImg,
    featured: true
  },
  {
    id: 2,
    title: "Preditiva vs. Reativa: O verdadeiro custo da máquina parada",
    category: "MANUTENÇÃO",
    date: "12 de Março, 2026",
    readTime: "7min de leitura",
    excerpt: "Análise de como o monitoramento em tempo real pode dobrar a vida útil dos componentes hidráulicos.",
    image: maintenanceImg,
    featured: false
  },
  {
    id: 3,
    title: "Maximizando a economia de combustível em escavações de alta altitude",
    category: "EFICIÊNCIA",
    date: "15 de Março, 2026",
    readTime: "5min de leitura",
    excerpt: "Descubra as configurações e modos de operação que economizam até 15% nos custos de combustível sem perda de potência.",
    image: efficiencyImg,
    featured: false
  },
  {
    id: 4,
    title: "Preditiva vs. Reativa: O verdadeiro custo da máquina parada",
    category: "MANUTENÇÃO",
    date: "12 de Março, 2026",
    readTime: "7min de leitura",
    excerpt: "Análise de como o monitoramento em tempo real pode dobrar a vida útil dos componentes hidráulicos.",
    image: maintenanceImg,
    featured: false
  }
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("Todas as notícias");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section.querySelectorAll('.reveal-item'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

    // Magnetic Buttons Effect
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



  const efficiencyArticles = articles.filter(a => a.category === "EFICIÊNCIA");
  const maintenanceArticles = articles.filter(a => a.category === "MANUTENÇÃO");

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#133365]">
          <img 
            src={heroBg} 
            alt="Excavator" 
            className="w-full h-full object-cover mix-blend-overlay opacity-40 grayscale"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
          <div className="max-w-4xl reveal-section">
            <h1 className="text-6xl md:text-[10rem] font-black text-white leading-none mb-4 reveal-item uppercase tracking-tighter italic scale-x-110 origin-left">
              INSIGHTS
            </h1>
          </div>
        </div>
      </section>

      {/* FILTERS & SEARCH */}
      <section className="sticky top-[70px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-orange text-white shadow-lg' 
                    : 'bg-gray-100 text-brand-blue hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80 group">
            <input 
              type="text" 
              placeholder="Pesquisar" 
              className="w-full bg-gray-50 border-2 border-transparent rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-blue/30 group-focus-within:text-brand-orange transition-colors" size={18} />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-20">
        {/* FEATURED ARTICLE */}
        {activeCategory === "Todas as notícias" && (
          <section className="mb-32 reveal-section">
            <Link to={`/insights/${articles[0].id}`} className="group block">
              <div className="relative rounded-[60px] overflow-hidden aspect-[21/9] mb-12 shadow-3xl reveal-item">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-brand-blue/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-12 md:p-20 w-full max-w-4xl">
                  <span className="bg-brand-orange text-white px-6 py-2 rounded-full text-xs font-black tracking-widest mb-8 inline-block">DESTAQUE</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight italic uppercase drop-shadow-2xl">
                    {articles[0].title}
                  </h2>
                  <p className="text-white/70 text-lg font-medium leading-relaxed mb-10 max-w-2xl line-clamp-2">
                    {articles[0].excerpt}
                  </p>
                  <div className="inline-flex items-center gap-4 text-white font-black group/btn btn-magnetic cursor-pointer">
                    LER ARTIGO COMPLETO 
                    <div className="bg-white p-3 rounded-full text-brand-blue group-hover/btn:bg-brand-orange group-hover/btn:text-white transition-all shadow-xl">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* EFICIÊNCIA SECTION */}
        {(activeCategory === "Todas as notícias" || activeCategory === "Eficiência") && (
          <section className="mb-32 reveal-section">
            <div className="flex items-center justify-between mb-12 reveal-item">
              <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase italic">Eficiência</h2>
              <div className="h-px flex-1 bg-gray-100 mx-10 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[...efficiencyArticles, ...efficiencyArticles].slice(0, 3).map((article, idx) => (
                <Link 
                  key={`${article.id}-${idx}`} 
                  to={`/insights/${article.id}`}
                  className="reveal-item group block"
                >
                  <div className="rounded-[40px] overflow-hidden aspect-video mb-6 shadow-xl relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                      {article.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-brand-blue mb-4 leading-tight group-hover:text-brand-orange transition-colors uppercase italic line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-brand-orange font-black text-xs group/link">
                    SAIBA MAIS <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* MANUTENÇÃO SECTION */}
        {(activeCategory === "Todas as notícias" || activeCategory === "Manutenção") && (
          <section className="mb-32 reveal-section">
            <div className="flex items-center justify-between mb-12 reveal-item">
              <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase italic">Manutenção</h2>
              <div className="h-px flex-1 bg-gray-100 mx-10 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[...maintenanceArticles, ...maintenanceArticles].slice(0, 3).map((article, idx) => (
                <Link 
                  key={`${article.id}-${idx}`} 
                  to={`/insights/${article.id}`}
                  className="reveal-item group block"
                >
                  <div className="rounded-[40px] overflow-hidden aspect-video mb-6 shadow-xl relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                      {article.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-brand-blue mb-4 leading-tight group-hover:text-brand-orange transition-colors uppercase italic line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-brand-gray text-sm font-medium mb-6 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-brand-orange font-black text-xs group/link">
                    SAIBA MAIS <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Insights;
