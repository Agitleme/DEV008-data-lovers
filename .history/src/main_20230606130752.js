//Crear un sobreescritura al html, se hace con for of;
//Manipulación dinamica del DOM 
//import { example } from './data.js';
import { allData } from './data.js';
const contenedorDePortadas = document.getElementById ("animations");//para vincular el primer contenedor con el DOM
const contenedorDePeliculas = allData ();//vinculando toda la data a al primer contenedor 

function pintarPosters(listaDePeliculas){ //estoy pintando los posters para eso es la función
 for (let index = 0; index < listaDePeliculas.length; index++) {
    const pelis = listaDePeliculas[index];
    console.log(pelis)

    const posters = document.createElement ("img");//caja para las imagenes 


 }
}










