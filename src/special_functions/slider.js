import { scroller } from 'react-scroll';

export default function slider (deltaY, div_n){ 
    console.log(deltaY)
    console.log(div_n-1) 
    if(event.deltaY < 0) { 
      console.log("-1.25")     
      scroller.scrollTo(parseInt(div_n)-1, {
      duration: 100,  
      delay: 0,
      smooth: true 
    })};

    if(event.deltaY > 0) {   
      console.log("1.25")   
      console.log(parseInt(div_n) + 1) 
      scroller.scrollTo(parseInt(div_n) + 1, {
      duration: 100,
      delay: 0,
      smooth: true
    })};
  };