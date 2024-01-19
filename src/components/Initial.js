import { useEffect } from 'react';
import {Link} from 'react-scroll';


var div_n="1"

 

function changer(event){
   console.log(event)

  if(event>0){
    console.log("down direction")
    document.getElementById('2').scrollIntoView();
  }

  if(event<0){
    console.log("up direction")
    document.getElementById('1').scrollIntoView();
  }
}

export default function Initial() {

  useEffect(() => {
    const handleWheel1 = (event) => {changer(event.deltaY)} 
    window.addEventListener("wheel", handleWheel1);

    return () => {window.removeEventListener("wheel", handleWheel1);
    };
  });

  return (
    <div onScroll={changer(event)} id={div_n} className="Initial">.

    <Link to="3">Clicking will go to ID=3</Link>
    </div>
  );
} 