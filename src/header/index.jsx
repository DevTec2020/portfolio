

export function Header() {
    return (
        <nav className="flex justify-around pt-10 font-semibold text-lg">
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
    )
}