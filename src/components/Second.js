import { useEffect } from "react";

var div_n="2"

// function changer2(){
//   console.log(event.deltaY)
  
//   if(event.deltaY>0){
//     console.log("down")
//     document.getElementById('3').scrollIntoView();
//   }

//   if(event.deltaY<0){
//     console.log("up")
//     document.getElementById('2').scrollIntoView();
//   }
// } 


export default function Second() {


  // useEffect(() => {
  //   const handleWheel2 = (event) => {changer2(event.deltaY)} 
  //   window.addEventListener("wheel", handleWheel2);

  //   return () => {window.removeEventListener("wheel", handleWheel2);
  //   };
  // });

  return (
    // <div onScroll={changer2(event)} id={div_n} className="Second">ID2</div>
    <div id={div_n} className="Second">ID2</div>
  );
}
