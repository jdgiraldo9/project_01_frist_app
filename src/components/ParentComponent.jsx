import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const [message]= useState("De ParentComponent");
    const[response,setResponce] = useState();

    const handleChildReponse =(ChildMessage) =>{
        setResponce(ChildMessage);
    }

  return (
  
    <div className="parent">
        <h2>Parent Component</h2>
        <ChildComponent message={message} onResponse={handleChildReponse}/>
        {response}
    </div>
    
   
  )
}

export default ParentComponent
