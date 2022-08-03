
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

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

    let yaEsta = carritoDeCompras.find(elemento=> elemento.id == id)
    if(yaEsta){
        yaEsta.cantidad = yaEsta.cantidad + 1
        document.getElementById(`und${yaEsta.id}`).innerHTML =` <p id=und${yaEsta.id}>Und:${yaEsta.cantidad}</p>`
    }else{
       let productoAgregar = stockProductos.find(elemento => elemento.id == id)
    
        productoAgregar.cantidad = 1
        
        carritoDeCompras.push(productoAgregar)

        mostrarCarrito(productoAgregar) 
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    
}

function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML=`
                    <p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <p id="und${productoAgregar.id}">Und:${productoAgregar.cantidad}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt">Quitar</i></button>
    `
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
           btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item=> item.id != productoAgregar.id)
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
            document.getElementById(`und${productoAgregar.id}`).innerHTML =` <p id=und${productoAgregar.id}>Und:${productoAgregar.cantidad}</p>`
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
            }
        

    })
}

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    
    if(recuperarLS){
        recuperarLS.forEach(el=> {
            mostrarCarrito(el)
            carritoDeCompras.push(el)
        })
    }   
}
   
   
recuperar()