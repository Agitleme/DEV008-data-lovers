//Crear un sobreescritura al html, se hace con for of;
//Manipulación dinamica del DOM 
//import { example } from './data.js';

import { allData, orderData, orderData2 } from './data.js';
const contenedorDePortadas = document.getElementById("animations");//para vincular el primer contenedor con el DOM
const arrayObjetos = allData();//vinculando toda la data a al primer contenedor 


function pintarPosters(listaDePeliculas) { //estoy pintando los posters para eso es la función
  for (let index = 0; index < listaDePeliculas.length; index++) {
    const pelis = listaDePeliculas[index];


    const caja = document.createElement("div");

    const posters = document.createElement("img");//caja para las imagenes 
    posters.src = pelis.poster; //src es como js identifica las imagenes // poster es por que asi estan las imagenes en la data de ghibli 
    posters.classList.add("soloPosters");  //vinculando con las clases, ejemplo class list //add para añadir

    const titulo = document.createElement("p")
    titulo.innerText = pelis.title;
    titulo.classList.add("soloTitulo")

    const año = document.createElement("p")
    año.innerText = pelis.release_date;
    año.classList.add("soloAño")

    caja.appendChild(posters);//appendChild hace la magia "interaccion con el DOM"
    caja.appendChild(titulo);
    caja.appendChild(año);
    document.getElementById("animations").appendChild(caja);
  }
  return

}

pintarPosters(arrayObjetos)

//Ordenar de la A-Z
const filtroaz = document.getElementById('filters__initial');
filtroaz.addEventListener('change', () => {
    document.getElementById("animations").innerHTML = '';
    switch (filtroaz.value) {
        case '0':
            const az = orderData(allTheMovies, 0)
            showMovies(masRecientes)
            break;
        case '1':
            const masAntiguas = orderData(allTheMovies, 1)
            showMovies(masAntiguas)
            break;

    }
})t = 









/*document.getElementById("filters__initial").addEventListener("click", function () {
  console.log(this.value) //magico this es el select, entonces me trae el elemento 



  if (this.value === 0) {
    const dataOrdenada = orderData(arrayObjetos)
    console.log(dataOrdenada)

  } else if (this.value === 1) {
    const dataOrdenada2 = orderData2(arrayObjetos)
    console.log(dataOrdenada2)

  }




});*/













