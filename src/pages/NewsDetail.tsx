import { useEffect, useRef } from 'react';
import { Search, ChevronRight, Calendar, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import heroBg from '../assets/ttr1q.png';
import featuredImg from '../assets/featured-insight.png';
import efficiencyImg from '../assets/efficiency-insight.png';
import maintenanceImg from '../assets/maintenance-insight.png';
import sideBannerImg from '../assets/side-banner-final.png';

gsap.registerPlugin(ScrollTrigger);

const NewsDetail = () => {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP Reveal Animations
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section.querySelectorAll('.reveal-item'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [id]);

  const relatedArticles = [
    {
      id: 1,
      title: "Maximizando a economia de combustível em escavações de alta altitude",
      category: "EFICIÊNCIA",
      image: featuredImg,
      excerpt: "Descubra as configurações e modos de operação que economizam até 15% nos custos de combustível."
    },
    {
      id: 2,
      title: "Preditiva vs. Reativa: O verdadeiro custo da máquina parada",
      category: "MANUTENÇÃO",
      image: maintenanceImg,
      excerpt: "Análise de como o monitoramento em tempo real pode dobrar a vida útil dos componentes hidráulicos."
    },
    {
      id: 3,
      title: "Landcros: A próxima geração de maquinário autônomo",
      category: "FUTURO",
      image: efficiencyImg,
      excerpt: "Uma visão detalhada sobre como a automação está transformando a produtividade nos canteiros."
    }
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[45vh] flex items-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 bg-[#133365]">
          <img 
            src={heroBg} 
            alt="Excavator" 
            className="w-full h-full object-cover mix-blend-overlay opacity-40 grayscale"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-16">
          <div className="reveal-section">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-4 reveal-item uppercase tracking-tighter italic scale-x-110 origin-left">
              INSIGHTS
            </h1>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-gray/60">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/insights" className="hover:text-brand-orange transition-colors">Insights</Link>
            <ChevronRight size={12} />
            <span className="text-brand-blue truncate max-w-[300px]">Maximizando a economia de combustível em escavações de alta altitude</span>
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* ARTICLE CONTENT */}
          <article className="lg:col-span-8 reveal-section">
            <div className="reveal-item">
              <span className="text-brand-orange font-black text-xs tracking-[0.2em] uppercase mb-6 block">EFICIÊNCIA</span>
              <h1 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 leading-tight uppercase italic tracking-tight">
                Maximizando a economia de combustível em escavações de alta altitude
              </h1>
              
              <div className="flex items-center gap-8 text-brand-gray font-bold text-xs uppercase tracking-widest mb-12 border-b border-gray-100 pb-8">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-brand-orange" /> 15 de Março, 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-brand-orange" /> 5min de leitura</span>
              </div>

              <div className="rounded-[50px] overflow-hidden mb-12 shadow-2xl">
                <img 
                  src={featuredImg} 
                  alt="Featured machinery" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none prose-p:text-brand-gray prose-p:font-medium prose-p:leading-relaxed prose-strong:text-brand-blue">
                <p className="text-xl font-bold text-brand-blue mb-8 leading-relaxed italic">
                  Descubra as configurações e modos de operação que economizam até 15% nos custos de combustível sem perda de potência.
                </p>
                
                <p>
                  Empresas do setor de construção pesada estão adotando novas tecnologias para enfrentar um dos maiores desafios das operações em regiões montanhosas: o alto consumo de combustível.
                </p>

                <p>
                  Em altitudes elevadas, a menor concentração de oxigênio compromete a eficiência dos motores, exigindo maior esforço das máquinas e elevando os custos operacionais.
                </p>

                <p>
                  Uma solução inovadora, apresentada recentemente por fabricantes do setor, combina ajustes inteligentes no sistema de injeção de combustível com modos de operação adaptativos.
                </p>

                <p>
                  Esses sistemas utilizam sensores avançados para monitorar variáveis como altitude, temperatura e carga de trabalho, ajustando automaticamente o desempenho do motor em tempo real.
                </p>

                <p>
                  De acordo com especialistas, essa abordagem pode gerar uma economia de até 15% no consumo de combustível, sem perda significativa de potência — um avanço relevante para obras em regiões remotas, onde o abastecimento pode ser caro e logisticamente complexo.
                </p>

                <p>
                  Além da redução de custos, a tecnologia também contribui para a diminuição das emissões de carbono, alinhando-se às metas de sustentabilidade cada vez mais exigidas pelo setor. Operadores relatam ainda maior estabilidade no desempenho das máquinas, mesmo em condições extremas.
                </p>

                <p>
                  A expectativa é que, nos próximos anos, essas soluções se tornem padrão em equipamentos voltados para mineração, construção de rodovias em áreas montanhosas e grandes projetos de infraestrutura em altitudes elevadas.
                </p>

                <p>
                  Combinando eficiência, sustentabilidade e inovação, a nova geração de máquinas promete transformar a forma como obras em alta altitude são planejadas e executadas.
                </p>

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <p className="font-black text-brand-blue italic uppercase tracking-tighter">Por Equipe Brasland.</p>
                </div>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-12 reveal-section">
            {/* Search */}
            <div className="reveal-item">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Pesquisar" 
                  className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] py-4 pl-14 pr-6 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm"
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-blue/30 group-focus-within:text-brand-orange transition-colors" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div className="reveal-item">
              <h4 className="text-brand-blue font-black text-sm uppercase tracking-[0.2em] mb-8 border-l-4 border-brand-orange pl-6">Categorias</h4>
              <ul className="space-y-4">
                {["EFICIÊNCIA", "MANUTENÇÃO", "FUTURO", "ECONOMIA"].map((cat) => (
                  <li key={cat}>
                    <Link to="/insights" className="flex items-center justify-between group py-2">
                      <span className="text-brand-gray font-bold text-xs uppercase tracking-widest group-hover:text-brand-orange transition-colors">{cat}</span>
                      <ChevronRight size={14} className="text-brand-orange opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature Banner - Image Only */}
            <div className="reveal-item shadow-2xl rounded-[40px] overflow-hidden">
              <img 
                src={sideBannerImg} 
                alt="Banner Art" 
                className="w-full h-auto block"
              />
            </div>
          </aside>

        </div>
      </div>

      {/* RELATED ARTICLES SECTION */}
      <section className="bg-gray-50 py-24 reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-16 reveal-item">
            <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase italic">Artigos Relacionados</h2>
            <div className="h-px flex-1 bg-brand-blue/10 mx-10 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedArticles.map((article) => (
              <div key={article.id} className="reveal-item group">
                <Link to={`/insights/${article.id}`}>
                  <div className="rounded-[40px] overflow-hidden aspect-video mb-8 shadow-xl relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-brand-blue px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm">
                      {article.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-brand-blue mb-4 leading-tight group-hover:text-brand-orange transition-colors uppercase italic line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-brand-orange font-black text-xs group/link uppercase tracking-widest">
                    Saiba mais <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;

