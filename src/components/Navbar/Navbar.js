import './Navbar.css'
import CardWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navi">
            <div class="titulo">
               <h2>Tienda de Ropa</h2> 
            </div>
            <div class="itemsnavbar">
                <Link to='/' class="itemnavbar" >Home</Link>
                <Link to='categorias/Buzos' class="itemnavbar" >Buzos</Link>
                <Link to='categorias/Remeras' class="itemnavbar">Remeras</Link>
                <Link to='categorias/Zapatillas'class="itemnavbar">Zapatillas</Link>
                  <CardWidget />  
            </div>
        </nav>    
        
    )
}

export default Navbar