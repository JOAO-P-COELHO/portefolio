import { useEffect, useState } from 'react';
import ReactFreezeframe from 'react-freezeframe';

{/* <ReactFreezeframe  options={{
  trigger: "hover",
  overlay: "true",
}}  src={require(`../external/${images}.gif`)} /> */}



export default function ProjCompo(props) {
  let images = props.local
  const [gif, setGif] = useState(".jpg")
  let Hover = () => setGif(".gif")
  let Out = () => setGif(".jpg")
  console.log(images);  


    return(

        <div  className="project ">  
          
          <a href={props.site} target="_blank"><h1>{props.title}</h1></a>
          <p> - {props.tech}</p>
          <p> - {props.description} </p>
          
            <img  lazy="loading" 
                  src={require(`../external/projs/${images}${gif}`)} 
                  onMouseOver={Hover}
                  onMouseOut={Out}
                  id="  "
                  />
          
          <div id="acess">
            <a href={props.code} target="_blank" ><p className="icons_acess">Code <i className="fa-solid fa-code icons_acess"></i></p></a>
            <a href={props.site} target="_blank"><p className="icons_acess" >Live Demo <i className="fa-solid fa-arrow-up-right-from-square icons_acess"></i></p> </a>
          </div>
        </div> 

    )
}