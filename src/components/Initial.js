import { useRef } from 'react';
import {Link} from 'react-scroll';
// console.log("Função Initial(fora do componente)")

export default function Initial() {
  console.log("Componente Initial")
  
  const listRef = useRef("#div1");
  console.log(listRef.current.id)   
  
  return (
    <div id="div1" className="content" teste="coiso" ref={listRef}>. 

    <Link to="3">Clicking will go to ID=3</Link>

    </div>
  );
} 