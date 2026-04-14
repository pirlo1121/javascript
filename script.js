const animales = [
    { nombre: "León", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg", tipo: "terrestre" },
    { nombre: "Elefante", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg", tipo: "terrestre" },
    { nombre: "Caballo", imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Horse_in_Kentucky.jpg", tipo: "terrestre" },
    { nombre: "Perro", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg", tipo: "terrestre" },
    { nombre: "Gato", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg", tipo: "terrestre" },
    { nombre: "Oso", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Brown_bear_close_up.jpg", tipo: "terrestre" },

    { nombre: "Delfín", imagen: "https://upload.wikimedia.org/wikipedia/commons/5/56/Common_dolphin.jpg", tipo: "acuatico" },
    { nombre: "Tiburón", imagen: "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg", tipo: "acuatico" },
    { nombre: "Ballena", imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Humpback_Whale_underwater.jpg", tipo: "acuatico" },
    { nombre: "Pulpo", imagen: "https://upload.wikimedia.org/wikipedia/commons/5/56/Octopus2.jpg", tipo: "acuatico" },
    { nombre: "Medusa", imagen: "https://upload.wikimedia.org/wikipedia/commons/1/10/Jellyfish.jpg", tipo: "acuatico" },
    { nombre: "Caballito de mar", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Seahorse.jpg", tipo: "acuatico" },
    { nombre: "Águila", imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bald_Eagle_Portrait.jpg", tipo: "aereo" },
    { nombre: "Loro", imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Parrot.jpg", tipo: "aereo" },
    { nombre: "Paloma", imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Feral_pigeon.jpg", tipo: "aereo" },
    { nombre: "Búho", imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Owl.jpg", tipo: "aereo" },
    { nombre: "Colibrí", imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Hummingbird.jpg", tipo: "aereo" },
    { nombre: "Murciélago", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Bat.jpg", tipo: "aereo" }
];

let title = document.querySelector('h1');
let container = document.querySelector('section');
let btnAgua = document.getElementById('agua');
let btnTierra = document.getElementById('tierra');
let btnAire = document.getElementById('aire');

title.textContent = 'ANIMALES';

function filtro(category){
        container.innerHTML = ''
    for (let i = 0; i < animales.length; i++) {
        let nombre = animales[i].nombre;
        let imagen = animales[i].imagen

        if(animales[i].tipo === category){
              container.innerHTML += `
            <div class="card">

            <div class="img">
                <img src="${imagen}" alt="">
            </div>

                <p> ${nombre} </p>
            </div>
    
    `
        }

      
    }
}

btnAgua.addEventListener('click', () => filtro('acuatico'))
btnTierra.addEventListener('click', () => filtro('terrestre'))
btnAire.addEventListener('click', () => filtro('aereo'))




