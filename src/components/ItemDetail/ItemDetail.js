import Counter from "../Counter/Counter"
import { useState } from 'react'
import { Link } from "react-router-dom"




const ItemDetail = ({ nombre, img, precio, descripcion, stock }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    console.log(cantidadAgregada)

    const paraAgregar = (quantity) => {
        console.log(`Se agrego: ${quantity}`)
        setCantidadAgregada(quantity)
    }




    return (
        <>

            <li class="tarjetita">
                <h3>{nombre}</h3>
                <img src={img} alt={nombre} />
                <p>Precio: ${precio}</p>
                <p>Cantidad: {stock} </p>
                <p>Descripcion: {descripcion}</p>
                
                 {

                        cantidadAgregada === 0 ? (

                            <Counter cantidad={stock} agregar={paraAgregar} />
                        ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )


                    }
            


            </li>



        </>
    )
}

export default ItemDetail