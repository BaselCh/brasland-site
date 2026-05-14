import { Link } from 'react-router-dom';
import { Play, Camera, MessageSquare, Mail, Phone, MapPin, Clock } from 'lucide-react';
import logoBrand from '../assets/LOGOTIPO-BRANCO-E-LARANJA.svg';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Social */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <img src={logoBrand} alt="Brasland" className="h-8" />
            </div>
            <p className="text-white/60 mb-10 max-w-sm font-medium leading-relaxed">
              Precisão global, expertise local. Provendo o Brasil com as soluções em máquinas pesadas mais confiáveis do mundo.
            </p>
            <div className="flex space-x-4">
              {[Play, Camera, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-brand-orange transition-all border border-white/10 group">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links: NAVEGAÇÃO */}
          <div className="lg:col-span-2">
            <h4 className="text-brand-orange font-black text-sm uppercase tracking-widest mb-8">NAVEGAÇÃO</h4>
            <ul className="space-y-4 text-white/60 font-bold">
              {[
                { name: 'Home', path: '/' },
                { name: 'Quem somos', path: '/quem-somos' },
                { name: 'Escavadeiras', path: '/escavadeiras' },
                { name: 'Insights', path: '/insights' },
                { name: 'Peças', path: '/pecas' },
                { name: 'Serviços', path: '#' },
                { name: 'Contato', path: '/contato' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-brand-orange transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: RECURSOS */}
          <div className="lg:col-span-3">
            <h4 className="text-brand-orange font-black text-sm uppercase tracking-widest mb-8">RECURSOS</h4>
            <ul className="space-y-4 text-white/60 font-bold">
              {['Manuais de Segurança', 'Registro de Manutenção', 'Termos de Serviço', 'Política de Privacidade'].map((item) => (
                <li key={item}><a href="#" className="hover:text-brand-orange transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact & Support Box */}
          <div className="lg:col-span-3">
            <h4 className="text-brand-orange font-black text-sm uppercase tracking-widest mb-8">CONTATO</h4>
            <div className="space-y-4 text-white/60 font-bold mb-10">
              <p className="flex items-center gap-3"><MapPin size={18} className="text-brand-orange" /> São Paulo, SP - Brasil</p>
              <p className="flex items-center gap-3"><Phone size={18} className="text-brand-orange" /> +55 11 4004-8922</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-brand-orange" /> contato@brasland.com</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-[30px] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Clock size={60} />
              </div>
              <h5 className="text-white font-black text-sm uppercase mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                SUPORTE 24/7
              </h5>
              <p className="text-white/50 text-xs font-medium leading-relaxed">
                Despacho técnico de emergência disponível para todos os clientes da frota.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] md:text-[11px] text-white/20 font-medium max-w-2xl text-center md:text-left">
            Criação e Desenvolvimento Agência Chleba | Plataforma Add Suite - Tecnologia e Comunicação para Transformação Digital
          </p>
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-tighter text-white/40">
            <a href="#" className="hover:text-white transition-colors">Unidades Globais</a>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
