import { useEffect, useRef, useState } from "react"
import images from "./Images"
import "./style.css"
function App() {
  const [pressed, setPressed] = useState(false)
  const [index, updateIndex] = useState(0)

  const [x, setX] = useState();
  const [current,setCurrent]=useState(0)

  const mouseRef = useRef();
  const box=useRef();

  useEffect(() => {
    mouseRef.current.draggable = false;
    box.current.draggable=false;
    
  }, [])
  function mouseDown(e) {
    setPressed(true);
    mouseRef.current.style.cursor = "grabbing";
    setX(e.clientX)

  }
  function mouseUp() {

   
    mouseRef.current.style.cursor = "grab";
    setPressed(false)
  }
  function mouseEnter() {

    mouseRef.current.style.cursor = "grab";
  }
  function mouseMove(e) {
    if (!pressed)
      return
    else
      {
        
       
       
        let op=e.clientX%4===0;
        if(op &&  e.clientX<x)
        {
          console.log(op)
          if(index>0)
          {
            updateIndex(index-1)
          }
          if(index===0)
            updateIndex(15)
        }
        else if(op && e.clientX>x)
        {
          console.log(op)
          if(index<15)
          {
            updateIndex(index+1)
          }
          if(index===15)
            updateIndex(0)
        }

      }
    }
   
  
  return (
    <>
      <div className="bike-box" ref={box}>


        <img className="slide" src={images[index]} alt="" onMouseDown={(e)=>mouseDown(e)} ref={mouseRef} onMouseEnter={mouseEnter}
          onMouseUp={mouseUp} onMouseLeave={() => setPressed(false)} onMouseMove={(e) => mouseMove(e)} title="yezdi adventure"/>
        <p>Drag to rotate</p>


      </div>
    </>
  );
}

export default App;
