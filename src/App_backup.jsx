import Initial from "./components/Initial";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import { useRef } from "react";
console.log("Função App(fora do componente)")



document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll(".content"); 
  console.log(divs) 
  let currentDivIndex = 0;
  let isScrolling = false;

  // Função para rolar para a próxima div
  function scrollToNextDiv() {
    if (currentDivIndex < divs.length - 1) {
      currentDivIndex++;
      divs[currentDivIndex].scrollIntoView({ behavior: 'smooth' });
    } 
  }

  // Função para rolar para a div anterior
  function scrollToPrevDiv() {
    if (currentDivIndex > 0) {
      currentDivIndex--;
      divs[currentDivIndex].scrollIntoView({ behavior: 'smooth' });
    } 
  }

  // Manipula o evento de rolagem do mouse
  function handleScroll(event) { // Porque é que tem ter event como parametro? Porque a seguir usa o event.deltaY (ou seja, o objeto event vai dar alguma coisa como input ao resto da função)
    console.log(event) 
    console.log(divs) 
    if (!isScrolling) {
      isScrolling = true;

      setTimeout(() => {
        if (event.deltaY > 0) {
          scrollToNextDiv();
        } else {
          scrollToPrevDiv();
        }

        isScrolling = false;
      }, 800); // Ajuste o tempo conforme necessário
    }
  }

  // Adiciona um ouvinte de rolagem ao corpo do documento
  document.body.addEventListener("wheel", handleScroll);
});
  






export default function App() {
  
  console.log("Componente App")

  return (
    <div className="App">
      <Initial teste="coiso"/>
      <Second />
      <Third/>
      <Fourth />
    </div>
  );
}
