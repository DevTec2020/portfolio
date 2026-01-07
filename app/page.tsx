import Image from "next/image";

import  EuCapa from "@/app/assets/EuCapa.webp"
import gdr from "@/app/assets/empresas/gdr.webp"
import fortes from "@/app/assets/empresas/fortes.webp"
import fusion from "@/app/assets/empresas/fusion.webp"
import flyjobs from "@/app/assets/empresas/flyjobs.webp"
import mvx from "@/app/assets/empresas/MVX.webp"
import emive from "@/app/assets/empresas/Emive.webp"
import Airtek from "@/app/assets/empresas/Air-tek.webp"
import Cascar from "@/app/assets/empresas/Cascar.webp"
import Otica from "@/app/assets/empresas/Logo_amarela.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faGitAlt, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home(){
  const neonBlue = "#00d4ff"; // O Azul Neon

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* NAVBAR DESKTOP*/}
      <nav className="flex justify-center items-center py-6 gap-8 text-sm uppercase tracking-widest font-medium">
        <a href="#" className="hover:text-cyan-400 transition">Home</a>
        <a href="#sobre" className="hover:text-cyan-400 transition">Sobre mim</a>
        <a href="#habilidades" className="hover:text-cyan-400 transition">Habilidades</a>
        <a href="#projetos" className="hover:text-cyan-400 transition">Projetos</a>
        <a href="#contato" className="bg-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-500 transition">Contato</a>
      </nav>

      {/* HERO */}
      <section className="relative w-full min-h-[80vh] flex items-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Lado Esquerdo */}
          <div className="max-w-2xl z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-light">
              Olá, meu nome é 
              <span className="text-cyan-400 font-bold"> Leonardo</span>
            </h2>

            <h1 className="text-3xl md:text-4xl mt-2 font-medium">
              Sou 
              <span className="text-cyan-400 decoration-2 "> Desenvolvedor Web.</span>
            </h1>
            <p className="text-gray-400 mt-6 text-lg italic">
              Transformo ideias em soluções web, responsivas e de alto desempenho.
            </p>

            <div className="flex justify-center md:justify-start gap-6 mt-8 text-3xl text-cyan-400">
              <a href="https://github.com/DevTec2020" className="hover:scale-110 transition"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/devtec-leobatista/" className="hover:scale-110 transition"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="mailto:leonardo.silva.inf@gmail.com" className="hover:scale-110 transition"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
          
          {/* Lado Direito */}
          <div className="hidden lg:block relative">
            {/* Círculo de brilho atrás da foto para dar o efeito Neon */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-[60px] rounded-full"></div>
            
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
              <Image
                src={EuCapa}
                alt="Leonardo Batista" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>


        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400">
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </div>
      </section>


      {/* CLIENTES */}
      <section id="habilidades" className="py-20 bg-[#0f0f0f]">
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400 uppercase tracking-widest">Projetos desenvolvidos para</h3>
        <div className="flex flex-wrap justify-center gap-12">
            <Image src={gdr} alt="Logo GDR" width={120} height={120}/>
            <Image src={fortes} alt="Logo Fortes" width={120} height={120}/>
            <Image src={fusion} alt="Logo Fusion" width={120} height={120}/>
            <Image src={flyjobs} alt="Logo Flyjobs" width={120} height={120}/>
            <Image src={mvx} alt="Logo MVX" width={120} height={120}/>
            <Image src={emive} alt="Logo Emive" width={120} height={120}/>
            <Image src={Airtek} alt="Logo Airtek" width={120} height={120}/>
            <Image src={Cascar} alt="Logo Cascar" width={190} height={100}/>
            <Image src={Otica} alt="Logo Otica" width={170} height={100}/>
        </div>
      </section>


      {/* SOBRE MIM */}
      <section id="sobre" className="py-20 px-10 md:px-32 flex flex-col md:flex-row items-center gap-16">
        <div className="w-64 h-64 md:w-96 md:h-96 shrink-0 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
            <Image
              src={EuCapa} 
              alt="Dev" 
              className="w-full h-full object-cover" 
            />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">Sobre <span className="text-cyan-400">mim</span></h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Sou desenvolvedor Web Front-end com experiência prática em React, Tailwind CSS e JavaScript, atuando no desenvolvimento, migração e gerenciamento de sites em ambientes como cPanel e HostGator. 
            Tenho conhecimento em automações com Python, voltadas à otimização de rotinas e aumento de produtividade. Participação ativa em eventos e comunidades de tecnologia, sempre em busca das melhores práticas e tendências do setor.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-cyan-400">Certificações</h3>
          <div className="mb-6">
            <p>ITIL v3</p>
            <p>RWPC - Remote Worker</p>
            <p>Scrum Foundation</p>
            <p>NSE1</p>
          </div>


          <a href="SEU_LINK_DO_DOCS" className="bg-cyan-600 text-black font-bold px-8 py-3 rounded hover:bg-cyan-400 transition flex items-center w-fit gap-2">
            <FontAwesomeIcon icon={faDownload} /> Baixar Currículo
          </a>
        </div>
      </section>

      {/* HABILIDADES (Ícones Centralizados) */}
      <section id="habilidades" className="py-20 bg-[#0f0f0f]">
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400 uppercase tracking-widest">Habilidades</h3>
        <div className="flex flex-wrap justify-center gap-12 text-6xl text-gray-600">
            <FontAwesomeIcon icon={faHtml5} className="hover:text-orange-500 transition cursor-help" title="HTML5" />
            <FontAwesomeIcon icon={faCss3Alt} className="hover:text-blue-500 transition cursor-help" title="CSS3" />
            <FontAwesomeIcon icon={faJsSquare} className="hover:text-yellow-400 transition cursor-help" title="JavaScript" />
            <FontAwesomeIcon icon={faReact} className="hover:text-cyan-400 transition cursor-help" title="React" />
            <FontAwesomeIcon icon={faPython} className="hover:text-blue-400 transition cursor-help" title="Python" />
            <FontAwesomeIcon icon={faGitAlt} className="hover:text-red-500 transition cursor-help" title="Git" />
        </div>
      </section>

      {/* PROJETOS (Cards com Overlay Roxo no exemplo, agora Azul) */}
      <section id="projetos" className="py-20 px-10 md:px-32">
        <h3 className="text-3xl font-bold text-center mb-16 uppercase">Projetos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#151515] p-1 rounded-xl group overflow-hidden border border-white/5 hover:border-cyan-500/50 transition">
              <div className="h-48 bg-neutral-800 rounded-t-lg mb-4 flex items-center justify-center italic text-gray-500">Preview Imagem</div>
              <div className="p-4 text-center">
                <p className="text-sm text-gray-400 mb-4 italic">Descrição breve do seu projeto fullstack ou automação personalizada.</p>
                <button className="bg-cyan-700 w-full py-2 rounded font-bold group-hover:bg-cyan-500 transition flex items-center justify-center gap-2">
                   Ver Projeto
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS (Box Centralizado) */}
      <section className="py-20 px-10 flex justify-center">
        <div className="bg-[#111] p-10 rounded-3xl border border-white/5 max-w-4xl w-full text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 uppercase">Soft Skills</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-left">
            <li className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">✔</span> Resolução de Problemas Complexos
            </li>
            <li className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">✔</span> Comunicação Técnica Assertiva
            </li>
            <li className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">✔</span> Mentalidade Ágil (Scrum/Kanban)
            </li>
            <li className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">✔</span> Adaptabilidade Tecnológica
            </li>
          </ul>
        </div>
      </section>

      {/* CONTATO (Formulário igual ao da Lorrane) */}
      <section id="contato" className="py-20 px-10 md:px-32">
        <h3 className="text-3xl font-bold text-center mb-12 uppercase tracking-tighter">Entre em <span className="text-cyan-400">Contato</span></h3>
        <div className="max-w-xl mx-auto flex flex-col gap-6">
           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold ml-1 italic">Nome:</label>
             <input type="text" className="bg-white text-black p-3 rounded outline-none focus:ring-2 ring-cyan-500 transition" />
           </div>
           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold ml-1 italic">E-mail:</label>
             <input type="email" className="bg-white text-black p-3 rounded outline-none focus:ring-2 ring-cyan-500 transition" />
           </div>
           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold ml-1 italic">Mensagem:</label>
             <textarea className="bg-white text-black p-3 rounded h-32 outline-none focus:ring-2 ring-cyan-500 transition"></textarea>
           </div>
           
           <div className="flex flex-col gap-4">
               <button className="bg-cyan-600 text-black font-black py-4 rounded hover:bg-cyan-400 transition uppercase">Enviar Mensagem</button>
               <a href="https://wa.me/SEU_NUMERO" className="bg-green-600 text-white font-black py-4 rounded hover:bg-green-500 transition uppercase text-center flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faWhatsapp} /> Chamar no WhatsApp
               </a>
           </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-gray-600 border-t border-white/5">
        Copyright © Leonardo Batista | Todos os direitos reservados.
      </footer>
    </div>
  );
};
