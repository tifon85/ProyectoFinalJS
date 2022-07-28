
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');

mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){
    contenedorProductos.innerHTML= ""
    
   array.forEach(item => {

       let div = document.createElement('div')
       div.classList.add('producto')
        div.innerHTML += `
                            <div>
                                <img src=${item.imagen} class="imagenProducto">
                            </div>
                            <div>
                                <span>${item.nombre}</span>
                                <p>${item.descripcion}</p>
                                <p> $${item.precio}</p>
                                <button id="agregar${item.id}">Agregar al Carrito</button>
                            </div>
        `
        contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`agregar${item.id}`)

        btnAgregar.addEventListener('click',()=>{
           agregarAlCarrito(item.id)
        })

   })
}

function agregarAlCarrito(id) {
    let productoAgregar = stockProductos.find(elemento => elemento.id == id)
    
    productoAgregar.cantidad = 1
        
    carritoDeCompras.push(productoAgregar)

    console.log(carritoDeCompras)
}