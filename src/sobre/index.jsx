import imgSection2 from "../assets/imgSection2.jpg";
import firebird from "../assets/firebird.png";
import curriculo from "../../public/Leonardo_Batista_Currículo.docx.pdf"


export function Sobre() {
  return (
    <section id="Sobre" className="flex items-center justify-center min-h-screen bg-white px-8">
        <div className="sm:grid grid-cols-2 max-w-6xl gap-8 items-center">
            {/* Texto */}
            <div>
                <h1 className="text-4xl font-semibold text-orange-400">
                    Sobre
                </h1>
                <p className="text-gray-600 mt-4 text-lg">
                    Desenvolvedor web apaixonado por tecnologia, com conhecimento em
                    front-end e back-end. Trabalho com React, Tailwind, Node.js, e outras
                    ferramentas modernas do ecossistema JavaScript. Comecei minha
                    trajetória na área de TI aos 16 anos, acumulando experiência em
                    suporte técnico e metodologias ágeis, como Scrum e ITIL. Participo
                    ativamente de eventos e comunidades tech, sempre em busca de
                    aprendizado e inovação, transformando ideias em soluções funcionais e
                    responsivas.
                </p>

                <h2 className="mt-9 text-3xl font-semibold text-orange-400">
                    Skills
                </h2>
                <p className="flex flex-wrap gap-2 mt-4 text-lg">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-10" alt="html5 logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-10" alt="css3 logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-10" alt="javascript logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-10" alt="typescript logo"  />
                    <img src="https://skillicons.dev/icons?i=bootstrap" className="h-10" alt="bootstrap logo"  />
                    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" className="h-10" alt="tailwindcss logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="h-10" alt="sass logo"  />
                    <img src="https://cdn.simpleicons.org/babel/F9DC3E" className="h-10" alt="babel logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" className="h-10" alt="webpack logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-10" alt="git logo"  />
                    <img src="https://skillicons.dev/icons?i=github" className="h-10" alt="github logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className="h-10" alt="npm logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-10" alt="postgresql logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" className="h-10" alt="microsoftsqlserver logo"  />
                    <img src={firebird} className="h-10" alt="firebird logo" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-10" alt="nodejs logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-10" alt="react logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="h-10" alt="express logo"  />
                    <img src="https://cdn.simpleicons.org/zod/3178C6" className="h-10" alt="zod logo" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-10" alt="figma logo" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="h-10" alt="docker logo" />
                </p>
                <button className="mt-10 px-6 py-3 bg-[#C4A484] text-white font-semibold rounded-lg shadow-md hover:bg-[#a88d6b] transition">
                    <a href={curriculo} target="_blank">
                        Download CV
                    </a>
                </button>
            </div>

            {/* Imagem */}
            <div className="hidden sm:flex justify-end">
                <img
                    src={imgSection2}
                    alt="Designer working on laptop"
                    className="rounded-lg shadow-lg max-w-full"
                />
            </div>
        </div>
    </section>
  );
}
