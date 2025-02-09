export function Header() {
    return (
        <nav className="flex justify-around pt-10 font-semibold text-lg">
            <div>
                <code>&lt;LeoBatista/&gt;</code>
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