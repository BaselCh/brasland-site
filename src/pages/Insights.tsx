import { Search, ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Maximizando a economia de combustível em escavações de alta altitude",
    category: "EFICIÊNCIA",
    date: "15 Mai, 2026",
    author: "Eng. Ricardo Silva",
    excerpt: "Descubra como os novos sistemas HIOS III da Hitachi estão revolucionando o consumo de diesel em operações acima de 3000 metros.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Preditiva vs. Reativa: O verdadeiro custo da máquina parada",
    category: "MANUTENÇÃO",
    date: "12 Mai, 2026",
    author: "Equipe Técnica",
    excerpt: "Um guia completo sobre como o monitoramento remoto pode economizar até 30% nos custos anuais de manutenção.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Landcros: A próxima geração de maquinário autônomo",
    category: "FUTURO",
    date: "10 Mai, 2026",
    author: "Brasland News",
    excerpt: "Conheça os detalhes da transição tecnológica que está levando as escavadeiras para a era da inteligência artificial.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Segurança em mineração: Treinamento de operadores 4.0",
    category: "SEGURANÇA",
    date: "08 Mai, 2026",
    author: "Sarah Santos",
    excerpt: "Novos protocolos de segurança integrados diretamente no painel de controle das máquinas Landcros.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=800"
  }
];

const Insights = () => {
  return (
    <div className="bg-brand-light pt-40 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-brand-orange font-black text-sm uppercase tracking-[0.4em] mb-6">Knowledge Base</h2>
          <h1 className="text-6xl md:text-8xl font-black text-brand-blue mb-10 leading-tight uppercase italic">
            INSIGHTS <span className="text-brand-orange">&</span> TECH
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <p className="text-brand-gray text-xl max-w-2xl font-medium">
              Explorando o futuro da mineração e infraestrutura através de dados, engenharia e inovação constante.
            </p>
            <div className="relative w-full md:w-96 group">
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                className="w-full bg-white border-2 border-brand-blue/10 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:border-brand-orange transition-all font-bold"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-blue group-focus-within:text-brand-orange transition-colors" size={20} />
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="group cursor-pointer mb-24 reveal">
          <Link to={`/insights/${articles[0].id}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-50 rounded-[60px] overflow-hidden p-4 md:p-12 hover:shadow-3xl transition-all duration-700">
              <div className="lg:col-span-7 rounded-[40px] overflow-hidden aspect-video">
                <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="lg:col-span-5 pr-8">
                <span className="bg-brand-orange text-white px-6 py-1.5 rounded-full text-xs font-black tracking-widest mb-8 inline-block">DESTAQUE</span>
                <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 leading-tight group-hover:text-brand-orange transition-colors italic uppercase">
                  {articles[0].title}
                </h2>
                <p className="text-brand-gray text-lg mb-10 font-medium leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-8 text-brand-gray/60 font-black text-xs uppercase mb-12">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {articles[0].date}</span>
                  <span className="flex items-center gap-2"><User size={14} /> {articles[0].author}</span>
                </div>
                <div className="inline-flex items-center gap-4 text-brand-blue font-black group/btn">
                  LER ARTIGO COMPLETO
                  <div className="bg-brand-orange p-3 rounded-full text-white group-hover/btn:translate-x-2 transition-transform shadow-lg">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.slice(1).map((article) => (
            <div key={article.id} className="reveal group cursor-pointer">
              <Link to={`/insights/${article.id}`}>
                <div className="rounded-[40px] overflow-hidden aspect-[4/3] mb-8 shadow-2xl relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest">
                    {article.category}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-brand-blue mb-6 leading-tight group-hover:text-brand-orange transition-colors uppercase italic">
                  {article.title}
                </h3>
                <p className="text-brand-gray text-base mb-8 font-medium line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="inline-flex items-center gap-4 text-brand-blue font-black text-sm">
                  SAIBA MAIS
                  <div className="bg-brand-orange/10 p-2 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
