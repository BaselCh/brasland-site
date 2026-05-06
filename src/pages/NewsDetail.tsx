import { ArrowLeft, Share2, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  console.log("Viewing article:", id);

  return (
    <div className="bg-brand-light">
      {/* Hero Header */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
          alt="Article Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 text-white">
          <div className="container mx-auto">
            <Link to="/insights" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-12 font-bold transition-colors group">
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-brand-orange transition-all">
                <ArrowLeft size={16} />
              </div>
              VOLTAR PARA INSIGHTS
            </Link>
            <span className="bg-brand-orange text-white px-6 py-1.5 rounded-full text-xs font-black tracking-widest mb-8 inline-block">EFICIÊNCIA</span>
            <h1 className="text-4xl md:text-7xl font-black mb-10 max-w-5xl leading-tight uppercase italic tracking-tighter">
              Maximizando a economia de combustível em escavações de alta altitude
            </h1>
            <div className="flex flex-wrap items-center gap-12 text-white/60 font-black text-xs uppercase">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-brand-orange" /> 15 MAI, 2026</span>
              <span className="flex items-center gap-2"><User size={16} className="text-brand-orange" /> ENG. RICARDO SILVA</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-brand-orange" /> 8 MIN DE LEITURA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Article */}
          <article className="lg:col-span-8">
            <div className="prose prose-xl max-w-none prose-headings:text-brand-blue prose-headings:font-black prose-headings:uppercase prose-p:text-brand-gray prose-p:font-medium prose-p:leading-relaxed">
              <p className="text-2xl font-bold text-brand-blue mb-12 leading-relaxed italic border-l-4 border-brand-orange pl-8">
                "A tecnologia HIOS III não é apenas sobre potência; é sobre a harmonia perfeita entre o fluxo hidráulico e a demanda do motor, especialmente onde o ar é rarefeito."
              </p>
              
              <p>
                As operações em altitudes elevadas apresentam desafios únicos para motores de combustão interna e sistemas hidráulicos. Com a diminuição da densidade do ar, a eficiência da combustão cai e o risco de superaquecimento aumenta. Na Brasiland, entendemos que o tempo de inatividade nessas condições não é apenas caro, mas perigoso.
              </p>

              <h2 className="text-3xl font-black mt-16 mb-8">A CIÊNCIA DO HIOS III</h2>
              <p>
                O sistema HIOS III (Human Intelligent Operation System) desenvolvido pela Hitachi utiliza uma válvula regenerativa para acelerar o retorno do óleo hidráulico. Isso reduz a carga no motor e, consequentemente, o consumo de combustível em até 15% em comparação com modelos da geração anterior.
              </p>

              <div className="my-16 rounded-[40px] overflow-hidden shadow-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1579412623025-38ef40409951?auto=format&fit=crop&q=80&w=1200" 
                  alt="Internal Tech" 
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-3xl font-black mt-16 mb-8">ADAPTAÇÃO AO TERRENO BRASILEIRO</h2>
              <p>
                Muitas das nossas maiores minas estão localizadas em regiões com topografias complexas. Através do monitoramento remoto ConSite, nossos engenheiros podem ajustar finamente os parâmetros de cada máquina para garantir que o torque máximo esteja disponível exatamente quando o balde penetra no solo rochoso.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-20 pt-12 border-t border-gray-100">
              <div className="flex flex-wrap gap-4">
                {['Hitachi', 'Mineração', 'Tecnologia', 'Sustentabilidade', 'HIOS III'].map(tag => (
                  <span key={tag} className="bg-gray-50 text-brand-blue px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-brand-orange hover:text-white transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-40">
              <div className="bg-brand-blue rounded-[50px] p-12 text-white shadow-3xl mb-12">
                <h4 className="text-2xl font-black mb-8 leading-tight italic uppercase">COMPARTILHE ESTE INSIGHT</h4>
                <div className="flex gap-4 mb-12">
                  {[Share2, User, Clock].map((Icon, i) => (
                    <button key={i} className="bg-white/10 p-4 rounded-2xl hover:bg-brand-orange transition-all border border-white/10">
                      <Icon size={24} />
                    </button>
                  ))}
                </div>
                <div className="p-8 bg-white/5 rounded-[40px] border border-white/10">
                  <h5 className="text-brand-orange font-black text-xs uppercase tracking-widest mb-4">Newsletter Tech</h5>
                  <p className="text-sm font-medium text-white/70 mb-8 leading-relaxed">Fique por dentro das últimas inovações em infraestrutura.</p>
                  <input type="email" placeholder="Seu melhor e-mail" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-4 focus:outline-none focus:border-brand-orange font-bold text-sm" />
                  <button className="w-full bg-brand-orange text-white py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl">ASSINAR AGORA</button>
                </div>
              </div>

              {/* Related */}
              <div className="pl-4">
                <h4 className="text-brand-blue font-black text-sm uppercase tracking-widest mb-10 border-l-4 border-brand-orange pl-6">ARTIGOS RELACIONADOS</h4>
                <div className="space-y-10">
                  {[
                    "O futuro da manutenção remota via satélite",
                    "Novas escavadeiras Landcros chegam ao mercado brasileiro",
                    "Redução de emissões em grandes projetos de infra"
                  ].map((title, i) => (
                    <Link key={i} to="#" className="group block">
                      <h5 className="text-brand-blue font-black text-lg mb-3 leading-tight group-hover:text-brand-orange transition-colors uppercase italic italic tracking-tight">{title}</h5>
                      <div className="flex items-center gap-2 text-brand-orange text-xs font-black">
                        LER MAIS <ChevronRight size={14} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
