import Initial from "./components/Initial";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import { useEffect, useRef } from "react";
console.log("Função App(fora do componente)")

let currentDivIndex = 0;
let isScrolling = false;
let nr_divs = 4

  // Função para rolar para a próxima div
  function scrollToNextDiv(imgNode) {
    console.log("chamou") 

    if (currentDivIndex < nr_divs - 1) {
      currentDivIndex++;
      imgNode[currentDivIndex].scrollIntoView({ behavior: 'auto' });
    } // imgNode[1].scrollIntoView
  }

  // Função para rolar para a div anterior
  function scrollToPrevDiv(imgNode) {
    console.log("n chamou") 
    if (currentDivIndex > 0) {
      currentDivIndex--;
      imgNode[currentDivIndex].scrollIntoView({ behavior: 'smooth' });
    } 
  }

 
export default function App() {
  const listRef = useRef(null); 
  
  useEffect(() => {
  
    const listNode = listRef.current;   
    console.log("listNode", listNode)  
    const imgNode = listNode.querySelectorAll(".content"); // This line assumes a particular DOM structure:
    console.log("imgNode", imgNode)
    document.addEventListener("load", div_node(imgNode));        

 
    function div_node(imgNode) { // Porque é que tem ter event como parametro? Porque a seguir usa o event.deltaY (ou seja, o objeto event vai dar alguma coisa como input ao resto da função)
      console.log("aasdada", imgNode)

      document.addEventListener("wheel", handleScroll);

      function handleScroll(event) { 
        console.log("cecnas")
        console.log(event.deltaY)
        console.log("aasdada", imgNode)
        if (!isScrolling) {
          isScrolling = true; 
          console.log(event.deltaY)
      
          setTimeout(() => { 
            if (event.deltaY > 0) {
              scrollToNextDiv(imgNode);
            } else {
              scrollToPrevDiv(imgNode);
            }
      
            isScrolling = false;
          }, 800); // Ajuste o tempo conforme necessário
        }
      }

    }

  }, [currentDivIndex]);
   
  
  return (
    <div className="App" ref={listRef}>
      <Initial/>
      <Second />
      <Third/>
      <Fourth />
    </div>
  );
}
