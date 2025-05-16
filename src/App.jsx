import { Header } from "./sections/Header";
import { Capa } from "./sections/Capa";
import { Sobre } from "./sections/Sobre"
import { Projetos } from "./sections/Projetos"
import { Contato } from "./sections/Contato"


function App() {
  return (
    <>
      <Header/>
      <Capa/>
      <Sobre/>
      <Projetos/>
      <Contato/>
    </>
  );
}

export default App;
