//var
var carrito = []

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    carrito = []
}

console.log('carrito:', carrito);

//funciones

const agregarProductoAlCarrito = (e) => {
    const idProductoElegido = e.target.getAttribute('data-id')
    const productoElegido = listaDeProductos.find((producto) => producto.id == idProductoElegido)
    carrito.push(productoElegido)
    console.log(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito))
}



//selector
const buttonCompra = document.querySelectorAll('.buttonCompra')

    buttonCompra.forEach((button) => {
        button.addEventListener('click', agregarProductoAlCarrito)
    })


// vaciar el carrito
const vaciarCarrito = () =>{
    carrito.length = 0;
    localStorage.clear(carrito)
}

const refrescarPagina = () =>{
    location.reload();
}
const buttonClear = document.querySelector("#buttonClear")

buttonClear.addEventListener('click', vaciarCarrito )
buttonClear.addEventListener('click', refrescarPagina)




// finalizar compra

const buttonFinalizarCompra = document.querySelector('#buttonFinalizarCompra');

//funcion finalizar compra

const finalizarCompra = () =>{
    
    alert("gracias por la compra")// para la entrega final lo voy a cambiar por las alertas de sweetalert2
    vaciarCarrito()
    refrescarPagina()
    
    
}
buttonFinalizarCompra.addEventListener('click',finalizarCompra)