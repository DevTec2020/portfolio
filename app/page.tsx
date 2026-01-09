'use client';
import Image from "next/image";

import  EuCapa from "@/app/assets/EuCapa.jpg"
import  EuSobre from "@/app/assets/EuSobre.webp"
import SideBar from "@/app/components/SideBar";


import gdr from "@/app/assets/empresas/gdr.webp"
import fortes from "@/app/assets/empresas/fortes.webp"
import fusion from "@/app/assets/empresas/fusion.webp"
import flyjobs from "@/app/assets/empresas/flyjobs.webp"
import mvx from "@/app/assets/empresas/MVX.webp"
import emive from "@/app/assets/empresas/Emive.webp"
import Airtek from "@/app/assets/empresas/Air-tek.webp"
import Cascar from "@/app/assets/empresas/Cascar.webp"
import Otica from "@/app/assets/empresas/Logo_amarela.webp"
import kalita from "@/app/assets/empresas/kalita.webp"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faGitAlt, faPython, faReact, faNodeJs, faDocker, faFigma, faAws  } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faChevronDown, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";


export default function Home(){
  const neonBlue = "#00d4ff"; // O Azul Neon
  const [isOpen, setIsOpen] = useState(false);
  const icone = isOpen ? faXmark : faBars;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 flex justify-between items-center h-24">
          <span className="text-cyan-400 font-bold text-2xl tracking-tighter hover:scale-105 transition-transform cursor-default">
            &lt;LB/&gt;
          </span>

          {/* NAVBAR DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-cyan-400 transition">Home</a>
            <a href="#sobre" className="hover:text-cyan-400 transition">Sobre mim</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition">Habilidades</a>
            <a href="#projetos" className="hover:text-cyan-400 transition">Projetos</a>
            <a href="#contato" className="px-6 py-2 rounded-lg text-cyan-400 font-bold border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-md hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400
              transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.1)] hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]">
              
              Contato
            
            </a>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden focus:outline-none p-2"
            onClick={() => setIsOpen((s) => !s)}
          >
            <FontAwesomeIcon icon={icone} className="text-cyan-400 w-6 h-6 text-3xl " />
          </button>
        </div>
      </header>

      {/* NAVBAR MOBILE*/}
      <AnimatePresence>
        {isOpen && (
          <SideBar
            key="mobile-sidebar"
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
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
            
            <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
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
      <section className="py-20 bg-[#0f0f0f]">
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400 uppercase tracking-widest">Projetos desenvolvidos para</h3>
        <div className="flex flex-wrap justify-center gap-12">
            <Image src={gdr} alt="Logo GDR" width={120} height={120} className="grayscale hover:grayscale-0"/>
            <Image src={fortes} alt="Logo Fortes" width={120} height={120} className="grayscale hover:grayscale-0"/>
            <Image src={fusion} alt="Logo Fusion" width={120} height={120} className="grayscale hover:grayscale-0"/>
            <Image src={kalita} alt="Logo kalita" width={90} height={100} className="grayscale hover:grayscale-0"/>
            <Image src={flyjobs} alt="Logo Flyjobs" width={120} height={120} className="grayscale hover:grayscale-0"/>
            <Image src={mvx} alt="Logo MVX" width={120} height={120} className="grayscale hover:grayscale-0"/>
            <Image src={emive} alt="Logo Emive" width={120} height={120} className="grayscale hover:grayscale-0"/>
            <Image src={Airtek} alt="Logo Airtek" width={120} height={120} className="grayscale hover:grayscale-0"/>
            <Image src={Cascar} alt="Logo Cascar" width={190} height={100} className="grayscale hover:grayscale-0"/>
            <Image src={Otica} alt="Logo Otica" width={170} height={100} className="grayscale hover:grayscale-0"/>
        </div>
      </section>


      {/* SOBRE MIM */}
      <section id="sobre" className="py-20 px-10 md:px-32 flex flex-col md:flex-row items-center gap-16">
        <div className="w-64 h-64 md:w-96 md:h-96 shrink-0 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
            <Image
              src={EuSobre} 
              alt="Dev" 
              className="w-full h-full object-cover" 
            />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6 ">Sobre <span className="text-cyan-400">mim</span></h3>
          <p className="text-gray-300 text-lg mb-6">
            Desenvolvedor Web Front-end especializado em construir interfaces modernas e performáticas com React, Next e Tailwind CSS. Meu conhecimento une o design responsivo à eficiência do código, complementada por habilidade em automação com Python para otimizar fluxos de trabalho e reduzir tarefas repetitivas. 
            Gosto de desenvolver soluções simples e escaláveis que resolvem problemas complexos.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-cyan-400">Certificações</h3>
          <div className="mb-10 text-lg">
            <p>ITIL v3</p>
            <p>RWPC - Remote Worker</p>
            <p>Scrum Foundation</p>
            <p>NSE1</p>
          </div>


          <a href="SEU_LINK_DO_DOCS" className="px-6 py-4 rounded-lg text-cyan-400 font-bold border border-cyan-500/50 
             bg-cyan-500/10 backdrop-blur-md 
             hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400
             transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.1)] 
             hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]">
            <FontAwesomeIcon icon={faDownload} /> Baixar Currículo
          </a>
        </div>
      </section>

      {/* HABILIDADES (Ícones Centralizados) */}
      <section id="habilidades" className="py-20 bg-[#0f0f0f]">
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400 uppercase tracking-widest">Habilidades</h3>
        <div className="mx-40 flex flex-wrap justify-center gap-12 text-6xl text-gray-600">
          {/* Linguagens e Core */}
            <FontAwesomeIcon icon={faHtml5} className="hover:text-orange-500 transition" title="HTML5" />
            <FontAwesomeIcon icon={faCss3Alt} className="hover:text-blue-500 transition" title="CSS3" />
            <FontAwesomeIcon icon={faJsSquare} className="hover:text-yellow-400 transition" title="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-10" alt="typescript logo"  />
            <FontAwesomeIcon icon={faPython} className="hover:text-blue-400 transition" title="Python" />


            {/* Frameworks Front-end */}
            <FontAwesomeIcon icon={faReact} className="hover:text-cyan-400 transition" title="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-10" alt="nextjs logo" />

            {/* Estilização */}
            <img src="https://skillicons.dev/icons?i=bootstrap" className="h-10" alt="bootstrap logo"  />
            <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" className="h-10" alt="tailwindcss logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" className="h-10" alt="bulma logo" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="h-10" alt="sass logo"  />

            {/* Back-end e Ferramentas */}
            <FontAwesomeIcon icon={faNodeJs} className="hover:text-green-500 transition" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="h-10" alt="express logo"  />
            <img src="https://cdn.simpleicons.org/prisma/2D3748" className="h-10" alt="prisma logo" />
            <img src="https://vite.dev/logo.svg" className="h-10" alt="vite logo" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" className="h-10" alt="electron logo" />
            <img src="https://cdn.simpleicons.org/zod/3178C6" className="h-10" alt="zod logo" />
            <img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg" className="h-10" alt="hook form logo"/>

            {/* Bancos de Dados */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-10" alt="postgresql logo"  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" className="h-10" alt="microsoftsqlserver logo"  />
            {/* <img src={firebird} className="h-10" alt="firebird logo" /> */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="h-10" alt="firebase logo" />

            {/* DevOps e Cloud */}
            <FontAwesomeIcon icon={faDocker} className="hover:text-blue-500 transition" />
            <FontAwesomeIcon icon={faGitAlt} className="hover:text-red-500 transition" title="Git" />
            <FontAwesomeIcon icon={faAws} className="hover:text-orange-400 transition" />
            
            {/* Design e Testes */}
            <FontAwesomeIcon icon={faFigma} className="hover:text-purple-500 transition" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" className="h-10" alt="jest logo"/>

            
        </div>
      </section>

      {/* PROJETOS (Cards com Overlay Roxo no exemplo, agora Azul) */}
      <section id="projetos" className="py-20 px-10 md:px-32">
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400 uppercase tracking-widest">Projetos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#151515] p-1 rounded-xl group overflow-hidden border border-white/5 hover:border-cyan-500/50 transition">
              <div className="h-48 bg-neutral-800 rounded-t-lg mb-4 flex items-center justify-center italic text-gray-500">Preview Imagem</div>
              <div className="p-4 text-center">
                <p className="text-sm text-gray-400 mb-4 italic">Descrição breve do seu projeto fullstack ou automação personalizada.</p>
                <button className="px-6 py-2 rounded-lg text-cyan-400 font-bold border border-cyan-500/50 
             bg-cyan-500/10 backdrop-blur-md 
             hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400
             transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.1)] 
             hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                   Ver Projeto
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS (Box Centralizado) 
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

      CONTATO (Formulário igual ao da Lorrane) 
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
      </section>*/}

      <footer className="py-10 text-center text-xs text-gray-600 border-t border-white/5">
        Copyright © Leonardo Batista | Todos os direitos reservados.
      </footer>
    </div>
  );
};
