const productos = [
    
    { id: '1', nombre: 'Buzo Deportivo', precio: 5000, categoria: 'Buzos', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwae3386f7/products/AD_HA6609/AD_HA6609-1.JPG?sw=400&sh=400', stock: 30, descripcion:'Corre con todo el estilo posible con el Buzo Adidas Swoosh Dri-Fit; la tecnología Dri-FIT te mantiene fresca durante más tiempo ya que absorbe el sudor de la piel y lo expulsa. El cierre en el frente te permite regular el flujo del aire y el logo de la espalda es reflectante para que puedas entrenar y correr en cualquier momento del día, sin limitaciones.'},
    { id: '2', nombre: 'Buzo Under Armour Rival Flc Sport Palm', precio: 1299, categoria: 'Buzos', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw298a06d1/products/UA_1370347-001/UA_1370347-001-1.JPG?sw=400&sh=400', stock: 12, descripcion:'Abrigate sin relegar tu estilo! Conocé el Buzo Under Armour Rival Flc Sport Palm, diseñado para vos que te gusta el deporte, pero sos amante de la moda. Confeccionado en algodón, su interior super suave te da toda la comodidad que te gusta. Además su capucha y bolsillo tipo canguro te protege del frío.'},
    { id: '3', nombre: 'Remera Under Armour Tech 2.0 SS', precio: 1100, categoria: 'Remeras', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw7b742d28/products/UA_1354529-002/UA_1354529-002-1.JPG?sw=400&sh=400', stock: 50, descripcion:'La remera Under Armour Tech 2.0 SS posee tecnología UA Tech para un secado más rápido, siendo ultra suave y con una sensación más natural para prevenir el crecimiento de microbios que causan el mal olor. Posee un ajuste aerodinámico que acompaña tus movimientos sin distracciones. Una excusa menos para dar el máximo.'},
    { id: '4', nombre: 'Remera Under Armour Tech 2.0 Circuit Latam', precio: 900, categoria: 'Remeras', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw33653604/products/UA_1371214-001/UA_1371214-001-1.JPG?sw=400&sh=400', stock: 110, descripcion:'La Remera Under Armour Tech 2.0 Circuit Latam es perfecta para acompañarte en todos tus entrenamientos y rutinas; cuenta con mayor frescura que otras prendas gracias a su cuello redondo, mangas cortas y composición el poliéster liviano y el calce clásico te permite moverte libremente para mejorar tu rendimiento día a día con total comodidad.'},
    { id: '5', nombre: 'Zapatillas Nike Air Max Intrlk', precio: 12000, categoria: 'Zapatillas', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw9f42f033/products/NI_DC5421-003/NI_DC5421-003-1.JPG?sw=400&sh=400', stock: 550, descripcion:'Las Zapatillas Nike Air Max Intrlk brindan soporte y estabilidad a tus pisadas, para que disfrutes a pleno de cada carrera y mejores tu rendimiento en cada entrenamiento. La capellada de tela y cuero sintético aporta transpirabilidad y es sumamente duradera. La tecnología Air Max ofrece una cámara de aire que amortigua y absorbe el impacto de cada paso que des para que tu andar sea más ligero y confortable.'},
    { id: '6', nombre: 'Zapatillas Nike Downshifter 11', precio: 13599, categoria: 'Zapatillas', img:'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwcafcbff7/products/NI_DM1187-103/NI_DM1187-103-1.JPG?sw=400&sh=400', stock: 124, descripcion:'Las Zapatillas Nike Downshifter 11 son perfectas para tus días de running, la malla superior te brinda comodidad transpirable, con ranuras flexibles en la suela te da mejor tracción, reacción, y amortiguación en cada pisada, además el logotipo swoosh metálico le añade un toque deportivo y original.'},
    
]

export const recuperarProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 600)
    })
}

export const recuperarProductosfiltrados = (idCategorias) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === idCategorias))
        }, 600)
    })
}

export const recuperarProductosxID = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === id))
        },600)

    })
}