import { lazy, useState } from 'react';
import { useEffect, useRef } from "react";
import { pdfjs } from 'react-pdf';
import Initial from './components/Initial2';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


// const Initial = lazy(() => import("./components/Initial2"))
// const Second = lazy(() => import("./components/Second"))
// const Third  = lazy(() => import("./components/Third"))
// const Fourth = lazy(() => import("./components/Fourth"))


let nr_divs = 4 
 
export default function App() {

  // var [currentDivIndex, setCurrentDivIndex] = useState(0);
  // console.log(currentDivIndex)
  // let isScrolling = false;

  
  //   // Função para rolar para a próxima div
  //   function scrollToNextDiv(imgNode) {
  //     console.log("chamou") 

  //           if (currentDivIndex ===  nr_divs - 1) {
  //       setCurrentDivIndex(currentDivIndex);
  //     }

  
  //     if (currentDivIndex < nr_divs - 1) {
  //       setCurrentDivIndex(currentDivIndex++);
  //       imgNode[currentDivIndex].scrollIntoView({ behavior: 'smooth' });
  //     } // imgNode[1].scrollIntoView
  //   }
  
  //   // Função para rolar para a div anterior
  //   function scrollToPrevDiv(imgNode) {
  //     console.log("n chamou") 

  //     if (currentDivIndex > 0) {
  //       setCurrentDivIndex(currentDivIndex--);
  //       imgNode[currentDivIndex].scrollIntoView({ behavior: 'smooth' });
  //     } 
  //   }
  



  const listRef = useRef(null);  
 
  // useEffect(() => {
  
  //   const listNode = listRef.current;   
  //   // console.log("listNode", listNode)  
  //   const imgNode = listNode.querySelectorAll(".content"); // This line assumes a particular DOM structure:
  //   // console.log("imgNode", imgNode)
  //   document.addEventListener("load", div_node(imgNode));        

 
  //   function div_node(imgNode) { // Porque é que tem ter event como parametro? Porque a seguir usa o event.deltaY (ou seja, o objeto event vai dar alguma coisa como input ao resto da função)
  //     // console.log("aasdada", imgNode)

  //     document.addEventListener("wheel", handleScroll);

  //     function handleScroll(event) { 
  //       // console.log("cecnas")
  //       // console.log(event.deltaY)
  //       // console.log("aasdada", imgNode)
  //       if (!isScrolling) {
  //         isScrolling = true; 
  //         // console.log(event.deltaY)
      
  //         setTimeout(() => { 
  //           if (event.deltaY > 0) {
  //             scrollToNextDiv(imgNode);
  //           } else {
  //             scrollToPrevDiv(imgNode);
  //           }
      
  //           isScrolling = false;
  //         }, 800); // Ajuste o tempo conforme necessário
  //       }
  //     }

  //   }

  // }, [currentDivIndex]);
   
  // const div1 = () => {
  //   setCurrentDivIndex(0) }

  // const div2 = () => {
  //   setCurrentDivIndex(1)
  // }

  // const div3 = () => {
  //   setCurrentDivIndex(2)
  // }

  // const div4 = () => {
  //   setCurrentDivIndex(3)
  // }

  return (
    <div  className="App" ref={listRef}>

        
      {/* <nav  className="special navbar-expand-lg d-flex justify-content-center ">
          <div className="d-flex justify-content-center">

            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <svg id="icon_nav" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li onClick={div1}   id="home" className="nav-item">
                  <a   className="nav-link" aria-current="page" href="#div1">Home</a>
                </li>
                <li onClick={div2} className="nav-item">
                  <a className="nav-link" href="#div2">.myProjects</a>
                </li>
                <li onClick={div3} className="nav-item">
                  <a className="nav-link" href="#div3">About</a>
                </li>
                <li onClick={div4} className="nav-item">
                  <a className="nav-link" href="#div4">Contact</a>
                </li>

              </ul>
            </div>
          </div>
      </nav> */}


      <Initial/>
      <Second />
      <Third/>
      <Fourth />
    </div>
  );
}
