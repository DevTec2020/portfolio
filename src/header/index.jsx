import Logo from '../assets/logo.png'

export function Header() {
    return (
        <nav className="flex justify-around pt-10 font-semibold text-lg">
            <div>
                <code className='text-orange-300 text-3xl'>
                    &lt;LeoBatista/&gt;
                </code>
            </div>
            <div>
                <ul className="flex space-x-10 ">
                    <li>
                        <a href="Sobre">Sobre</a>    
                    </li>
                    
                    <li>
                        <a href="Projetos">Projetos</a>
                    </li>
                    
                    <li>
                        <a href="Contato">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}