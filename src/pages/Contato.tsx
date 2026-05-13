import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Wrench, Settings, DollarSign, Award, Check, Briefcase, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import heroBg from '../assets/33e3w.png';
import sideImg from '../assets/44r4.png';
import branch1 from '../assets/M123.png';
import branch2 from '../assets/Me123.png';
import careersBg from '../assets/rrt1.png';

gsap.registerPlugin(ScrollTrigger);

const Contato = () => {
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

    // Magnetic Button Effect
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

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
          <img 
            src={heroBg} 
            alt="Brasland Industrial" 
            className="w-full h-full object-cover mix-blend-overlay opacity-40 grayscale"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
          <div className="max-w-4xl reveal-section">
            <h1 className="text-6xl md:text-[10rem] font-black text-white leading-none mb-4 reveal-item uppercase tracking-tighter italic scale-x-110 origin-left">
              CONTATO
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl font-medium text-brand-blue mb-8 reveal-item leading-tight">
              Se você tem alguma dúvida, sugestão, reclamação ou comentário, entre em contato conosco.
            </p>
            <div className="h-1 w-20 bg-brand-orange mb-8 reveal-item"></div>
            <p className="text-brand-gray text-lg italic reveal-item">
              "A engenharia não é apenas sobre máquinas, é sobre o progresso humano através da precisão."
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="pb-32 reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* FORM */}
            <div className="reveal-item">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-blue">Nome completo</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] py-4 px-6 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm"
                      placeholder="Seu nome aqui"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-blue">E-mail profissional</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] py-4 px-6 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm"
                      placeholder="email@empresa.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-blue">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] py-4 px-6 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-blue">Telefone para contato</label>
                    <input 
                      type="tel" 
                      className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] py-4 px-6 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm"
                      placeholder="+55 (00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-blue">Mensagem</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-[30px] py-4 px-6 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-bold text-sm resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" id="privacy" className="peer hidden" />
                    <div className="w-6 h-6 border-2 border-gray-200 rounded-lg flex items-center justify-center peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all">
                      <Check size={14} className="text-white scale-0 peer-checked:scale-100 transition-transform" />
                    </div>
                  </div>
                  <label htmlFor="privacy" className="text-sm font-medium text-brand-gray cursor-pointer">
                    Concordo com a Política de Privacidade da Brasland.
                  </label>
                </div>

                <button className="bg-brand-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-brand-orange transition-all shadow-xl btn-magnetic">
                  Enviar mensagem
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* IMAGE */}
            <div className="reveal-item">
              <div className="relative rounded-[60px] overflow-hidden shadow-3xl aspect-square">
                <img 
                  src={sideImg} 
                  alt="Industrial Machinery" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-white">
                      <div className="bg-brand-orange p-3 rounded-2xl">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Fale conosco</p>
                        <p className="text-xl font-bold">+55 11 4004-8922</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                      <div className="bg-brand-orange p-3 rounded-2xl">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">E-mail</p>
                        <p className="text-xl font-bold">contato@brasland.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SUPPORT SECTION */}
      <section className="py-24 bg-[#f8f9fa] reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 reveal-item">
            <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs block mb-4">Suporte ao Cliente</span>
            <h2 className="text-5xl md:text-6xl font-black text-brand-blue uppercase italic mb-6 tracking-tighter">Suporte 24/7</h2>
            <p className="text-brand-gray/80 text-lg font-medium max-w-2xl mx-auto">
              Despacho técnico de emergência disponível para todos os clientes da frota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all reveal-item group border border-gray-100 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors shadow-inner">
                <Wrench className="text-brand-blue group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-black text-brand-blue uppercase mb-4 tracking-tight">Serviço Técnico</h3>
              <p className="text-brand-orange font-black text-lg mb-6">0800 895 8922</p>
              <p className="text-brand-gray text-sm font-bold leading-relaxed">
                Manutenção no local e diagnósticos para equipamentos pesados.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all reveal-item group border border-gray-100 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors shadow-inner">
                <Settings className="text-brand-blue group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-black text-brand-blue uppercase mb-4 tracking-tight">Peças Genuínas</h3>
              <p className="text-brand-orange font-black text-lg mb-6">pecas@brasland.com.br</p>
              <p className="text-brand-gray text-sm font-bold leading-relaxed">
                Disponibilidade para checagem e entrega rápida para todos os modelos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all reveal-item group border border-gray-100 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors shadow-inner">
                <DollarSign className="text-brand-blue group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-black text-brand-blue uppercase mb-4 tracking-tight">Vendas e Orçamentos</h3>
              <p className="text-brand-orange font-black text-lg mb-6">+55 11 5000-4050</p>
              <p className="text-brand-gray text-sm font-bold leading-relaxed">
                Encontre um representante autorizado Brasland na sua região.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all reveal-item group border border-gray-100 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors shadow-inner">
                <Award className="text-brand-blue group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-lg font-black text-brand-blue uppercase mb-4 tracking-tight">Certificação</h3>
              <p className="text-brand-orange font-black text-lg mb-6">treinamento@brasland.com.br</p>
              <p className="text-brand-gray text-sm font-bold leading-relaxed">
                Treinamento e certificação para operadores de maquinário Brasland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILIAIS SECTION */}
      <section className="py-24 bg-white reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          {/* Title Style from Reference */}
          <div className="mb-20 reveal-item">
            <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm block mb-4">
              Nossa Presença
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-blue uppercase italic leading-tight">
              Filiais e Pontos de Atendimento
            </h2>
          </div>

          <div className="space-y-24">
            {/* Matriz */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 reveal-item group">
              <div className="w-full lg:w-[45%] shrink-0 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] lg:h-[450px]">
                <img 
                  src={branch1} 
                  alt="Matriz LEM" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-brand-blue uppercase mb-8 italic leading-tight">
                  Matriz - Luís Eduardo Magalhães - BA
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <MapPin size={22} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-brand-gray leading-relaxed">
                        Av. Luís Eduardo Magalhães, 2241, Jardim das Acácias
                      </p>
                      <p className="text-lg font-bold text-brand-gray/60 uppercase">CEP: 47.850-000 - Luís Eduardo Magalhães / BA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <Phone size={22} className="text-brand-orange" />
                    </div>
                    <p className="text-xl font-black text-brand-blue">(77) 3628-9200</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filial */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 reveal-item group">
              <div className="w-full lg:w-[45%] shrink-0 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] lg:h-[450px]">
                <img 
                  src={branch2} 
                  alt="Filial São Desidério" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-brand-blue uppercase mb-8 italic leading-tight">
                  Filial - São Desidério - BA
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <MapPin size={22} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-brand-gray leading-relaxed">
                        Rod. BR 020, Qd. 03 Lt. 02A, CEP 47.827-000, 
                      </p>
                      <p className="text-lg font-bold text-brand-gray/60 uppercase">Roda Velha - Bahia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <Phone size={22} className="text-brand-orange" />
                    </div>
                    <p className="text-xl font-black text-brand-blue">(77) 3639-6616</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRABALHE CONOSCO SECTION */}
      <section className="py-24 reveal-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative rounded-[50px] p-10 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 min-h-[320px]">
            {/* Background Image with Blue Filter */}
            <div className="absolute inset-0 z-0">
              <img 
                src={careersBg} 
                alt="Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-transparent opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-6">Trabalhe Conosco</h2>
              <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
                Deseja trabalhar na Brasland Industrial? <br />
                Acesse o link e confira as vagas em aberto.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <a 
                href="https://brasifagro.gupy.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-orange text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-brand-blue transition-all shadow-2xl btn-magnetic flex items-center gap-4"
              >
                Candidatar-se
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
