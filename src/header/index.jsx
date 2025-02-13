import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        {/* Nav para telas maiores */}
        <nav className="hidden sm:flex justify-around pt-10 font-semibold text-lg">
            <div>
                <code className='text-orange-300 text-3xl transition delay-75 duration-500 hover:text-white'>
                    &lt;LeoBatista/&gt;
                </code>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className='transition delay-75 duration-500 hover:text-orange-300'>
                        <a href="#Sobre">Sobre</a>    
                    </li>
                    
                    <li className='transition delay-75 duration-500 hover:text-orange-300'>
                        <a href="#Projetos">Projetos</a>
                    </li>
                    
                    <li className='transition delay-75 duration-500 hover:text-orange-300'>
                        <a href="#Contato">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>

        {/* Nav para telas menores */}
        <div className="sm:hidden">
            <button className="fixed top-4 left-4 p-2 text-white bg-[#C4A484] rounded" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex flex-col gap-1">
                    <span className="block w-6 h-1 bg-white"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                </div>
            </button>

            {isOpen &&(
                <nav className="fixed top-0 left-0 h-60 w-40 bg-[#C4A484] rounded text-white shadow-lg z-40">
                    <button className="fixed top-2 left-32 font-bold" onClick={() => setIsOpen(false)}>X</button>
                    <ul className="text-center font-semibold mt-10 space-y-5">
                        <li className='transition delay-75 duration-500 hover:text-orange-300'>
                            <a href="#Sobre">Sobre</a>    
                        </li>
                        
                        <li className='transition delay-75 duration-500 hover:text-orange-300'>
                            <a href="#Projetos">Projetos</a>
                        </li>
                        
                        <li className='transition delay-75 duration-500 hover:text-orange-300'>
                            <a href="#Contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
        </>
    )
}