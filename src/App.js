import Initial from "./components/Initial";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";

import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';



export default function App() {
 
  // const [division, setDivison] = useState(1) 
  // const [value, setValue] = useState(0)  

  // function handleClick (event){  
    
  //   console.log(event) 
  //   console.log(division)  
  //   console.log(value)   
   
  //   if(event >0 ) {
  //     setValue(1)   
  //     setDivison(division + 1)
  //     console.log(division)    
  //     console.log(value) 

  //     scroller.scrollTo(division, {
  //     duration: 100,   
  //     delay: 0,
  //     smooth: true  
  //   }) 
  //     console.log(division)} 

  // };
  
  // useEffect(() => {
  //   const handleWheel = (event) => {handleClick(event.deltaY)} 
  //   window.addEventListener("wheel", handleWheel);

  //   return () => {window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [value]);

    
  return (
    <div className="App">
      <Initial/>
      <Second />
      <Third/>
      <Fourth />
    </div>
  );
}
