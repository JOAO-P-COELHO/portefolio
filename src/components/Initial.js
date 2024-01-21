import {Link} from 'react-scroll';
import myImg from '../external/teste.jpg';

let stack = ["JavaScript", "Bootstrap", "HTML", "React", "jQuery", "CSS", "Python", "Sass"]
export default function Initial() {
  console.log("Componente Initial")
 
  
  return (
    <div id="div1" className="content">
      
      <div id="topbar">
        <h1><a href="#div1">Home</a></h1>
        <h1><a href="#div2">myProjects</a></h1>
        <h1><a href="#div3">About Me</a></h1>
        <h1><a href="#div4">Contacts</a></h1>
      </div>
    
      <div id="central">
        <img src={myImg} alt="My Image" id="my_img"/>

        <div id="mystack">
          <h1>I work with: </h1>
          <p>{stack}</p>
        </div>

      </div>

    <Link to="3">Clicking will go to ID=3</Link>

    </div>
  );
}

