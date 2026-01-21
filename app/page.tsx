'use client';
import Image from "next/image";

import  EuCapa from "@/app/assets/EuCapa.jpg"
import  EuSobre from "@/app/assets/EuSobre.webp"

import Link from "next/link";

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


import ProjetosCards from "./components/ProjetosCards";
import PROJETOSPREV from "./data/ProjetosPrev";
import CONTATOS from "./data/Contatos";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faChevronDown, faEnvelope, faBars, faXmark, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';



export default function Home(){
  const neonBlue = "#00d4ff"; // O Azul Neon

  return (
    <>
      {/* HERO */}
      <section className="pt-14 relative w-full min-h-[90vh] flex items-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
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
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400 uppercase tracking-widest px-10 md:px-0">Projetos desenvolvidos para</h3>
        <div className="flex flex-wrap justify-center gap-12 px-10">
            <Image src={gdr} alt="Logo GDR" width={100} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={fortes} alt="Logo Fortes" width={100} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={fusion} alt="Logo Fusion" width={120} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={kalita} alt="Logo kalita" width={90} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={flyjobs} alt="Logo Flyjobs" width={120} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={mvx} alt="Logo MVX" width={120} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={emive} alt="Logo Emive" width={120} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={Airtek} alt="Logo Airtek" width={120} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={Cascar} alt="Logo Cascar" width={190} className="grayscale hover:grayscale-0 object-contain"/>
            <Image src={Otica} alt="Logo Otica" width={170} className="grayscale hover:grayscale-0 object-contain"/>
        </div>
      </section>


      {/* SOBRE MIM */}
      <section id="sobre" className="py-20 px-10 md:px-32 flex flex-col lg:flex-row items-center gap-16">
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


          <a href="https://docs.google.com/document/d/1RC1nj4_KHZKpE8c9zlwvZ9dIJplbxS71/edit?usp=sharing&ouid=112884871102655330365&rtpof=true&sd=true" 
            target="_blank" rel="noopener noreferrer"
            className="px-6 py-4 rounded-lg text-cyan-400 font-bold border border-cyan-500/50 
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
        <div className="mx-6 md:mx-40 flex flex-wrap justify-center items-center gap-10">
          {/* Linguagens e Core */}
            <img src="/icons/html5.svg" alt="HTML5" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/css.svg" alt="CSS" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/javascript.svg" alt="javascript" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/tyscript.svg" alt="Tyscript" className="h-12 w-12 rounded-lg grayscale hover:grayscale-0 transition"/>
            <img src="/icons/python.svg" alt="python" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>

            {/* Frameworks Front-end */}
            <img src="/icons/react.svg" alt="react" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/next.svg" alt="next" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>

            {/* Estilização */}
            <img src="/icons/bootstrap.svg" alt="bootstrap" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/tailwindcss.svg" alt="tailwindcss" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/bulma.svg" alt="bulma" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/sass.svg" alt="sass" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>


            {/* Back-end e Ferramentas */}
            <img src="/icons/node.svg" alt="node" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/express.svg" alt="express" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/prisma.svg" alt="prisma" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/vite.svg" alt="vite" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/electron.svg" alt="electron" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/zod.svg" alt="zod" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/hook-form.svg" alt="hook-form" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>


            {/* Bancos de Dados */}
            <img src="/icons/postgresql.svg" alt="postgresql" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/sqlserver.svg" alt="sqlserver" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/firebird.svg" alt="firebird" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/firebase.svg" alt="firebase" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>

            {/* DevOps e Cloud */}
            <img src="/icons/docker.svg" alt="docker" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/git.svg" alt="git" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/aws.svg" alt="aws" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>

            
            {/* Design e Testes */}
            <img src="/icons/figma.svg" alt="figma" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>
            <img src="/icons/jest.svg" alt="jest" className="h-12 w-12 grayscale hover:grayscale-0 transition"/>

        </div>
      </section>

      {/* PROJETOS (Cards com Overlay Roxo no exemplo, agora Azul) */}
      <section id="projetos" className="py-14 px-10 md:px-32">
        <h3 className="text-3xl font-bold text-center mb-20 text-cyan-400 uppercase tracking-widest">Projetos</h3>
        <ProjetosCards dados={PROJETOSPREV}/>
        
        <div className="p-4 text-center">
          <Link href="/projetos">
              <button className="px-6 py-2 rounded-lg text-cyan-400 font-bold border border-cyan-500/50 
                                  bg-cyan-500/10 backdrop-blur-md 
                                  hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400
                                  transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.1)] 
                                  hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] cursor-pointer">
                  Ver Todos os Projetos
              </button>
          </Link>
        </div>
      </section>

      {/*CONTATO */}
      <section id="contato" className="py-14 px-10 md:px-32 bg-[#0f0f0f]">
          <h3 className="text-3xl font-bold text-center mb-20 text-cyan-400 uppercase tracking-widest">
            Contato
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {CONTATOS.map((contato, item) => (
                <a key={item} href={contato.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center p-5 rounded-xl bg-[#161616] border border-transparent hover:border-cyan-400/50 transition-all duration-300 group">
                      <div className="bg-cyan-400 p-3 rounded-lg mr-4">
                          <FontAwesomeIcon icon={contato.icon} className="text-xl" />
                      </div>
                      <div className="text-white min-w-0">
                          <h4 className="font-bold text-lg leading-tight">{contato.label}</h4>
                          <p className="text-md opacity-80 break-words">{contato.val}</p>
                      </div>
                  </div>
                </a>
              ))}
          </div>
      </section>
    </>
  );
};
