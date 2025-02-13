import Git from "../assets/ContatoIco/Git.svg"
import Email from "../assets/ContatoIco/Email.svg"
import Linkedin from "../assets/ContatoIco/Linkedin.svg"
import Whatsapp from "../assets/ContatoIco/Whatsapp.svg"

import imgSection4 from "../assets/Profile.jpg";


export function Contato(){
    return (
      <section id="Contato" className="flex items-center justify-center min-h-screen bg-white px-10">
        <div className="grid grid-cols-2 max-w-6xl gap-8 items-center">

            {/* Imagem */}
            <div className="flex justify-end">
                <img
                    src={imgSection4}
                    alt="Designer working on laptop"
                    className="rounded-lg shadow-lg max-w-full"
                />
            </div>

            {/* Texto */}
            <div className="">
                <h1 className="text-4xl  font-bold text-[#C4A484]">
                    Contato
                </h1>

                <div className="mt-10 space-y-4">
                  {[{
                    description: "/DevTec2020",
                    src: Git,
                    alt: "Git Ico",
                    href: "https://github.com/DevTec2020"
                  }, {
                    description: "leonardo.silva.inf@gmail.com",
                    src: Email,
                    alt: "Email Ico",
                    href: "mailto:leonardo.silva.inf@gmail.com"
                  }, {
                    description: "/devtec-leobatista",
                    src: Linkedin,
                    alt: "Linkedin Ico",
                    href: "https://www.linkedin.com/in/devtec-leobatista/"
                  }, {
                    description: "(85) 98564-6542",
                    src: Whatsapp,
                    alt: "Whatsapp Ico",
                    href: "https://wa.me/85985646542"
                  }].map((IconeContato, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <button type="button" >
                            <a href={IconeContato.href} target="_blank">
                                <img className="border rounded-lg border-[#C4A484] shadow-sm" src={IconeContato.src} alt={IconeContato.alt} />
                            </a>
                        </button>
                        <span className="text-[#C4A484] font-semibold">{IconeContato.description}</span>

                    </div>

                  ))}
                </div>
            </div>


        </div>
    </section>        
    )
}