import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header >
            {/* Menu para telas maiores */}
            <div className="hidden bg-gray-100 sm:flex justify-around items-center py-5 font-semibold text-lg z-10  top-0 w-full border-b-2 border-orange-500 ">
                <div>
                    <code className='text-orange-500 text-3xl'>
                        &lt;LeoBatista/&gt;
                    </code>
                </div>
                
                <nav className="hidden md:flex space-x-8">
                    <a href="#Projetos" className="text-gray-600 hover:text-orange-500 font-medium pb-1">Projetos</a>
                    <a href="#Sobre" className="text-gray-600 hover:text-orange-500 font-medium pb-1">Sobre</a>
                    <a href="#Contato" className="py-0.5 px-3 bg-orange-500 text-white font-medium pb-1 rounded-lg shadow-md hover:bg-orange-600 transition">Contato</a>
                </nav>
            </div>

            {/* Menu para telas menores */}
            <div className="sm:hidden flex justify-between font-semibold items-center p-4 z-10 top-0 w-full ">
                <a href="#" className="text-orange-500 text-3xl">&lt;LeoBatista/&gt;</a>

                {/* Botão do menu */}
                <button 
                    className="p-2 bg-orange-500 rounded focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex flex-col gap-1">
                        <span className="block w-6 h-1 bg-white"></span>
                        <span className="block w-6 h-1 bg-white"></span>
                        <span className="block w-6 h-1 bg-white"></span>
                    </div>
                </button>
            </div>

            {/* Overlay para fechar o menu ao clicar fora */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Menu lateral mobile */}
            <nav className={`fixed font-semibold top-0 right-0 h-full w-2/3 bg-orange-500 text-white flex flex-col items-center pt-16 space-y-6 z-50 shadow-lg transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button 
                    className="absolute top-4 right-4 text-2xl font-bold"
                    onClick={() => setIsOpen(false)}
                >
                    ✖
                </button>
                <a href="#Sobre" onClick={() => setIsOpen(false)}>Sobre</a>
                <a href="#Projetos" onClick={() => setIsOpen(false)}>Projetos</a>
                <a href="#Contato" onClick={() => setIsOpen(false)}>Contato</a>
            </nav>
        </header>
    );
}
