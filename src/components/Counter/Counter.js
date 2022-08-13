import './Counter.css'
import { useState } from 'react'

const Counter = ({cantidad, agregar}) => {

   
    
    const [count, setCount] = useState(1)

    const incrementar = () => {
        if(count < cantidad){
            
            setCount (count + 1)
        }
    }

    const decrementar = () => {
        if (count > 1){
            
            setCount (count - 1)
        }
    }

    return (
        <div >
            <div class="contadorcarrito">
            <button class="botonCarrito" onClick={decrementar}>-</button>
            <p>{count}</p>
            <button class="botonCarrito" onClick={incrementar}>+</button>
            </div>

            <button class="botonCarrito" onClick={() => agregar(count)}>Agregar al Carrito</button>
            
         </div>
    )
}

export default Counter