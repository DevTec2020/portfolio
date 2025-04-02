import { Header } from "./header";
import { Capa } from "./sections/Capa";
import { Sobre } from "./sobre"
import { Projetos } from "./projetos"
import { Contato } from "./contato"


function App() {


  return (
    <>
      <section className="relative h-screen  text-black">
        <Header/>
        <Capa/>
      </section>
      
      <Sobre/>
      <Projetos/>
      <Contato/>
    </>
  );
}

export default App;
