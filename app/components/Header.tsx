'use client';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faChevronDown, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import SideBar from "@/app/components/SideBar";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
      const icone = isOpen ? faXmark : faBars;
    return(
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
        </div>

    )
}