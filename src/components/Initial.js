import {Link} from 'react-scroll';
// console.log("Função Initial(fora do componente)")

export default function Initial() {
  console.log("Componente Initial")
 
  
  return (
    <div id="div1" className="content">. 

    <Link to="3">Clicking will go to ID=3</Link>

    </div>
  );
} 