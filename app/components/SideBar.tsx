'use client'
import Link from "next/link";
import { motion } from "framer-motion";

interface SideBarProps {
  onClose: () => void;
}

export default function SideBar({ onClose } : SideBarProps) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black z-30"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar (entra e sai pela ESQUERDA) */}
      <motion.aside
        key="sidebar"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-64 bg-[#0a0a0a] text-white z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-center p-8 mb-2 border-b border-cyan-400">
          <a href="/" onClick={onClose}>
            <span className="text-cyan-400 font-bold text-2xl">&lt;LeoBatista/&gt;</span>
          </a>
        </div>

        <nav className="flex flex-col gap-1 text-sm uppercase tracking-widest font-medium">
          <Link href="/" onClick={onClose} className="p-3 border-b border-white/10 hover:bg-white/10">Home</Link>
          <Link href="/#sobre" onClick={onClose} className="p-3 border-b border-white/10 hover:bg-white/10">Sobre mim</Link>
          <Link href="/#habilidades" onClick={onClose} className="p-3 border-b border-white/10 hover:bg-white/10">Habilidades</Link>
          <Link href="/#projetos" onClick={onClose} className="p-3 border-b border-white/10 hover:bg-white/10">Projetos</Link>
          <Link href="/#contato" onClick={onClose} className="p-3 border-b border-white/10 hover:bg-white/10">Contato</Link>
          <Link
            href="https://wa.me/5585985646542?text=Olá%20Leonardo.%20Vi%20seu%20portifolio%20e%20quero%20conversar%20contigo%20sobre."
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="p-3 hover:bg-white/10"
          >
            Chamar no Whatsapp
          </Link>
        </nav>
      </motion.aside>
    </>
  );
}
