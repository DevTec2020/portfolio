export function Header() {
    return (
        <nav className="flex justify-around pt-10 font-semibold text-lg">
            <div>
                <code>&lt;LeoBatista/&gt;</code>
            </div>
            <div>
                <ul className="flex space-x-10 ">
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    )
}