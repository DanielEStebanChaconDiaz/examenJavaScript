
//listar camisetas del  json de la carpeta db
const camisetas = document.querySelector('#camisetas');
const carrito = document.querySelector('#carrito');
const hoodies = document.querySelector('#hoodie');
const pants = document.querySelector('#pants');
const car = document.querySelector('#car');
const shirts = await fetch('http://localhost:5311/camiseta');
const result = await shirts.json();
console.log(result);
try {
    for (let i = 0; i < 5; i++) {
        let nombre = result[i].nombre;
        let img = result[i].imagen;
        let price = result[i].precio;
        let div = document.createElement('div');
        div.classList.add('shirt');
        div.innerHTML = `
            <div class="shirt1">
            <img src="${img}" alt="" class = "imagen">
            </div>
                <div class="text">
                    <strong>${nombre}</strong>
                    <div class="p">
                        <small>${price}</small>
                        <button class="Comprar" >Comprar</button>
                    </div>
                </div>`;
        camisetas.append(div);
        div.querySelector('.Comprar').addEventListener('click', () => {
            comprar(nombre)
        });
    }
}
catch (error) {
    console.log(error);
}
//listar hoodies del json de la carpeta db
try {
    const hoodie = await fetch('http://localhost:5312/abrigo');
    const result2 = await hoodie.json();
    console.log(result2);
    for (let i = 0; i < 5; i++) {
        let nombre = result2[i].nombre;
        let img = result2[i].imagen;
        let price = result2[i].precio;
        let div = document.createElement('div');
        div.classList.add('hoodie');
        div.innerHTML = `
        <div class="hodie1">
        <img src="${img}" alt="" class = "imagen">
        </div>
            <div class="text">
                <strong>${nombre}</strong>
                <div class="p">
                    <small>${price}</small>
                    <button>Comprar</button>
                </div>
            </div>`;
        hoodies.append(div);
        //div.querySelector('.track_order').addEventListener('click', () => {
        //    const frame = document.querySelector("my-frame");
        //    frame.setAttribute("uri", uri);
        //});
    }
}
catch (error) {
    console.log(error);
}
//listar pants del json de la carpeta db
try{
    const pant = await fetch('http://localhost:5313/pantalon');
    const result3 = await pant.json();
    console.log(result3);
    for (let i = 0; i < 5; i++) {
        let nombre = result3[i].nombre;
        let img = result3[i].imagen;
        let price = result3[i].precio;
        let div = document.createElement('div');
        div.classList.add('pants');
        div.innerHTML = `
            <div class="pants1">
            <img src="${img}" alt="" class = "imagen">
            </div>
                <div class="text">
                    <strong>${nombre}</strong>
                    <div class="p">
                        <small>${price}</small>
                        <button>Comprar</button>
                    </div>
                </div>`;
        pants.append(div);
        //div.querySelector('.track_order').addEventListener('click', () => {
        //    const frame = document.querySelector("my-frame");
        //    frame.setAttribute("uri", uri);
        //});
    }
}
catch (error) {
    console.log(error);
}
async function comprar() {
    for (let i = 0; i < 5; i++) {
        let nombre = result[i].nombre;
        let img = result[i].imagen;
        let price = result[i].precio;
        let div = document.createElement('div');
        div.classList.add('shirt');
        div.innerHTML = `
        <div class="productos" data-id = "${nombre}">
        <img src="${img}" alt="">
        <div class="nombre">
            <Strong>${nombre}</Strong>
        </div>
        <div class="cantidad">
            <strong>Cantidad</strong>
            <div class="cant">
                <small>${i + 1}</small>
            </div>
        </div>
        <div class="precio">
            <strong>Precio</strong>
            <small>${price}</small>
        </div>
        <div class="subtotal">
            <strong>Subtotal</strong>
            <small>${price}</small>
        </div>
        <div class="borrar">
            <button class="borrar">
                <a href="/views/carritov1.html"><i class='bx bx-x'></i></a>
            </button>
        </div>
        </div>
        `;
        carrito.append(div);
    }

}