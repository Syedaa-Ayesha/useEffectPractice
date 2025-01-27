import React from 'react'
import { useState,useEffect } from 'react';
const WindowResize = () => {
    const [size, setSize] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
      const handleResize = ()=>{
        setSize(window.innerWidth);
        setHeight(window.innerHeight);
        console.log("listner add");
       
      }
      window.addEventListener('resize' , handleResize);
      return()=>{
        window.removeEventListener('resize', handleResize);
        console.log("listner remove");
      }
    }, [])
   
  return (
  <>
  
  <p><strong>Window Size : </strong>{size}px x {height}px</p>
  </>
  )
}

export default WindowResize