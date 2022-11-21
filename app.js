function productos(id,nombre,precio,categoria,logo,cantidad){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.logo = logo;
    this.cantidad = cantidad;
}

let cantidad1 = 1;

const globosCristal = new productos(2,"globos Cristal",580,"globos","./../imagenes/globos/globos-feliz-cumpleaños-2.jfif",cantidad1);
const velas = new productos(4,"vela estrella",320,"velas","./../imagenes/Velas/vela-forma-1.avif",cantidad1);
const nieveLoca = new productos(8,"nieve loca", 1500, "carioca","./../imagenes/Carioca/nieve-loca-3.jpg",cantidad1);
const globosPerlados = new productos(1,"globo perlado",1400,"globos","./../imagenes/globos/globos-feliz-cumpleaños-1.jpg",cantidad1);
const setGlobos = new productos(3,"set de globos",1100,"globos","./../imagenes/globos/globos-Feliz-Cumpleaños-9.jfif",cantidad1);
const banioReposteroAguila = new productos(5,"baño repostero",300,"reposteria comestible","./../imagenes/Reposteria-comestible/Chocolate-2.jpg",cantidad1);
const disfrazPolicia = new productos(6,"disfraz de polica",6000,"disfraces","./../imagenes/Disfrases/disfras-clasico-2.jfif",cantidad1);
const adornoDePlimPlim = new productos(7,"adorno de plim plim",500,"adornos","./../imagenes/Adornos/adorno-pelicula-3.jfif",cantidad1);
const mangaDeReposteria = new productos(9,"manga de reposteria",1600,"reposteria","./../imagenes/Reposteria/accesorio-2.jfif",cantidad1);

//array con los productos
const listaDeProductos=[globosCristal,velas,nieveLoca,globosPerlados,setGlobos,banioReposteroAguila,disfrazPolicia,adornoDePlimPlim,mangaDeReposteria];


const itemName = document.querySelector('#itemName');
const itemImg = document.querySelector('#itemImg');
const itemCantidad = document.querySelector('#itemCantidad');
const itemPrice = document.querySelector('#itemPrice');
const carrito1 = document.querySelector('#carrito1');
const itemConteinerid = document.querySelector('#itemConteinerid');


//crear los item en el carrito

carrito.forEach((item) =>{
    const nuevoItem = document.createElement('div');
    nuevoItem.className = 'carrito';
    nuevoItem.innerHTML = `
    <div class="item-img"><img src="${item.logo}"></div>
    <div class="item-descrition">
        <h2 class="item-name">${item.nombre}</h2>
        <h3 class="item-cantidad">${item.cantidad}</h3>
    </div>
    <div class="conteiner-item-price">
        <h3 class="item-price">$ ${item.precio}</h3>
    </div>`

    itemConteinerid.append(nuevoItem)
}) 


//poner los datos en localstorage


