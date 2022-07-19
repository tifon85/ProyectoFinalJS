




const contenedorProductos = document.getElementById('contenedor-productos');

mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){
    contenedorProductos.innerHTML= ""
    
   array.forEach(item => {

       let div = document.createElement('div')
       div.classList.add('producto')
    //    div.setAttribute('class', 'producto')
    //    div.className = 'producto'
    div.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${item.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.nombre}</h5>
                            <p class="card-text">${item.descripcion}</p>
                            <p class="card-text">$${item.precio}</p>
                        </div>
                    </div>
    `
    contenedorProductos.appendChild(div)

   })
}