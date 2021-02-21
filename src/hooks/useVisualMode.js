import{ useState } from "react";
 
//helper function for transition
export default function useVisualMode(initial){
 const [mode,setMode] = useState(initial);
 const [history,setHistory] = useState([initial])
 
 function transition (mode,replace = false) {

  // hist = [1,2,3]
  // mode = 4

  if (replace) {
  
    setMode(mode);
    // hist = [1,2,4]
  
  } else { 
    
    //   hist = [1,2,3,4]    
    setMode(mode);
    setHistory([...history,mode]);
  
  }
  
 };
 
 function back(){

   if(history.length <= 1) {

    setMode(initial);
   
   } else {
      
    setMode(history[history.length - 2]);
    setHistory(history.slice(0,1));
    
  }
 }

 return {mode,transition,back}
 
}
