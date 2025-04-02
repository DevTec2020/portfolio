import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header >
            {/* Menu para telas maiores */}
            <nav className="hidden sm:flex justify-around items-center py-10 font-semibold text-lg z-10  top-0 w-full ">
                <div>
                    <code className='text-orange-500 text-3xl transition delay-75 duration-500 hover:text-white'>
                        &lt;LeoBatista/&gt;
                    </code>
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li className='transition delay-75 duration-500 hover:text-orange-500'>
                            <a href="#Sobre">Sobre</a>    
                        </li>
                        <li className='transition delay-75 duration-500 hover:text-orange-500'>
                            <a href="#Projetos">Projetos</a>
                        </li>
                        <li className=' py-0.5 px-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition'>
                            <a href="#Contato">Contato</a>
                        </li>

                    </ul>
                </div>
            </nav>

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
