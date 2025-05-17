import imgSection2 from "../assets/imgSection2.jpg";
import firebird from "../assets/firebird.png";



export function Sobre() {
  return (
    <section id="Sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4 ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-20">
                {/* Imagem */}
                <div className="md:w-1/3 mb-10 md:mb-0 overflow-hidden border-4 border-orange-500 shadow-2xl rounded-lg">
                    <img
                        src={imgSection2}
                        alt="Designer working on laptop"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
                
                {/* Texto */}
                <div className="md:w-1/2">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-orange-400 mb-4">Sobre Mim</h2>
                        <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
                    </div>

                    <p className="text-gray-600 mt-4 text-lg">
                        Sou consultor de suporte e tenho conhecimento em desenvolvimento Web atuando com criação e hospedagem de sites,
                        incluindo migração e gerenciamento em plataformas como cPanel e HostGator. Participo ativamente de eventos de tecnologia, sempre em busca de
                        aprender novas ferramentas assim transformo ideias em soluções web funcionais e
                        responsivas.
                    </p>
                    
                    <h2 className="mt-9 text-3xl font-semibold text-orange-400">
                        Certificações
                    </h2>
                    <p className="flex flex-wrap gap-2 mt-4 text-lg items-center">
                        <img src="https://www.e-tp.uk/wp-content/uploads/2019/01/ITIL-f-v3.jpg" className="h-16" alt="ITIL v3 logo" />
                        <img src="https://centercursos.com.br/wp-content/uploads/2020/03/Remote-worker-professional-certificate-certiprof.png" className="h-28" alt="RWVCPC CertProf logo" />
                        <img src="https://www.izmirsadigov.com/wp-content/uploads/2021/02/CertiProf-Badge-SFPC.png" className="h-28" alt="RWVCPC CertProf logo" />
                        <img src="https://www.insoftservices.uk/wp-content/uploads/2022/01/NSE1-Certification.png" className="h-28" alt="RWVCPC CertProf logo" />
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
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" className="h-10" alt="bulma logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="h-10" alt="sass logo"  />
                        <img src="https://cdn.simpleicons.org/babel/F9DC3E" className="h-10" alt="babel logo"  />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" className="h-10" alt="webpack logo"  />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-10" alt="git logo"  />
                        <img src="https://skillicons.dev/icons?i=github" className="h-10" alt="github logo"  />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-10" alt="postgresql logo"  />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" className="h-10" alt="microsoftsqlserver logo"  />
                        <img src={firebird} className="h-10" alt="firebird logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="h-10" alt="firebase logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-10" alt="nodejs logo"  />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-10" alt="react logo"  />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="h-10" alt="express logo"  />
                        <img src="https://cdn.simpleicons.org/zod/3178C6" className="h-10" alt="zod logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" class="h-10" alt="electron logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-10" alt="figma logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="h-10" alt="docker logo" />
                    </p>

                    <a href="https://docs.google.com/document/d/1RC1nj4_KHZKpE8c9zlwvZ9dIJplbxS71/export?format=pdf" target="_blank">
                        <button className="mt-10 px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    </section>
  );
}
