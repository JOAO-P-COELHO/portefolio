import Initial from "./components/Initial";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import { useRef } from "react";
// console.log("Função App(fora do componente)")


let currentDivIndex = 0;
let isScrolling = false;

document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll(".content"); 

  // Adiciona um ouvinte de rolagem ao corpo do documento
  
});
document.body.addEventListener("wheel", handleScroll);
  
// Manipula o evento de rolagem do mouse
function handleScroll(event) { // Porque é que tem ter event como parametro? Porque a seguir usa o event.deltaY (ou seja, o objeto event vai dar alguma coisa como input ao resto da função)
  console.log(event) 
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



export default function App() {

  const listRef = useRef(null);
  console.log(listRef) 

  return (
    <div className="App" ref={listRef}>
      <Initial teste="coiso"/>
      <Second />
      <Third/>
      <Fourth />
    </div>
  );
}
