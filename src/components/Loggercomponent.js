import React, { useEffect } from 'react'
import { useState } from 'react';
const Loggercomponent = () => {
    const [Inc, setInc] = useState(0);
    useEffect(() => {
    alert(`The Value is updated : ${Inc}`);
      
        return () => {
          alert("The Component is unmounted")
        }
      }, [Inc])
      
  return (
 <>
 <div className="container">
    <h1>Increment Counter</h1>
    <div className="counter">
        {Inc}
    </div>
    <button onClick={()=>{setInc(Inc + 1)}}>Increment</button>
 </div>
 </>
  )
}

export default Loggercomponent