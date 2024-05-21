
//listar camisetas del  json de la carpeta db
const camisetas = document.querySelector('#camisetas');
const hoodie = document.querySelector('.hoodie');
const pants = document.querySelector('.pants');
const db = await fetch('http://localhost:5311/camiseta');
const result = await db.json();
for (let i = 0; i < 5; i++){
    let nombre = result.nombre;
    let img = result.imagen;
    let price = result.precio;
    let div = document.createElement('div');
    div.classList.add('shirt');
    div.innerHTML = `
        <div class="shirt1">
        <img src="${img}" alt="">
        </div>
            <div class="text">
                <strong>${nombre}</strong>
                <div class="p">
                    <small>${price}</small>
                    <button>Comprar</button>
                </div>
            </div>`;
    camisetas.append(div);
}