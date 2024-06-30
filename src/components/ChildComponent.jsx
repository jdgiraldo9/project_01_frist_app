import React from 'react'

const ChildComponent = ({message, onResponse}) => {

const handClick = () => {
    onResponse("Soy la respuesta del Hijo!");
}

  return (
    <div className='child'>
        <h1>ChildComponent</h1>
         <p>Hola soy el hijo! </p>
         <p>{message}</p>
         <button onClick={handClick}>Enviar respuesta al padre </button>
    </div>
  )
}

export default ChildComponent
