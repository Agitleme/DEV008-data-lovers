# Data-lovers - Fanpage Studio Ghibli

## ÍNDICE
- [1. Definición del Proyecto](#1-definición-del-proyecto)
- [2. Investigación](#2-investigación)
- [3. Diseño](#3-diseño)
- [4. Herramientas de Elaboración](#4-herramientas-de-elaboración-del-proyecto)


## 1. Definición del proyecto

Se tarta de una una fanpage con temática de Studio Ghibli, en la cual pueden ver las carátulas de las películas animadas, su información como descripción, director, año de lanzamiento. El objetivo es hacer un sitio donde el usuario se sienta cómodo al navegarla, que su interfaz sea amigable pero a la vez dinámica y con los datos nejcesarios.

## 2. Investigación:
 Se tomo en cuenta la informacion que esta en el README originarl, tomando en cuenta lo siguiente:
Para entender mejor qué información podrían necesitar nuestras usuarias, hicimos una rápida investigación (research) y estos son algunos de los hallazgos.

Studio Ghibli tiene varias animaciones, para nuestras usuarias es importante saber cuántas y cuáles son.
Las animaciones tienen directorxs y productorxs. Estxs son las mentes detrás de una gran animación. En Studio Ghibli hay directorxs y productorxs que han colaborado en la creación de más de una animación. Por ello, es importante para nuestra usuaria poder conocerlos y saber cuántas y cuáles son las animaciones a las que dieron "vida".
Las animaciones tienen información relevante para nuestras usuarias, como descripción, fecha de lanzamiento, peso, director, productor y personajes.
Cada animación tiene sus personajes, para nuestras usuarias es importante saber cuántos y cuáles son
Los personajes tienen características únicas que la usuaria quiere saber, como nombre, edad, género, especie, etc.
Las animaciones tienen locaciones y vehículos únicos en cada una. Para nuestras usuarias es importante saber cuáles son.
Adicionalmente a esta información, para nuestras usuarias es importante poder ver los tipos de especies que hay en cada animación.

### 2.1 ¿Quiénes son los principales usuarios de producto?
Son personas con un alto o pequeño interes en la animación japonesa, que puede haber visto sólo una película que lo hechizó y así quiere seguir viendo todas las otras películas de este estudio, o solo quiere saber de qué tratan las animaciones junto a su contenido. El publico objetivo seria mayoritariamente desde los 15 años a 40 años, ya que Ghibli tiene bastantes años encantando a la gente.

### 2.2 ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Conocer y saber más sobre sus fanatismos y así completar parte de sus intereses personales; ya que en la vida siempre nos gustará algo más que otra cosa, y para sentirnos felices querremos investigar todo en detalle de ese juego, artista, pelicula, serie, etc., para estar complacidos.

### 2.3 ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
Se espera visualizar todas las películas realizadas por el estudio y la información detallada de cada una, porque quisiera saber sobre su año de lanzamiento, quien la realizó.

### 2.4 ¿Cuándo utilizan o utilizarían el producto?
Mayormente se utilizaría en tiempos libres, de ocio y procrastinación, pero también existe una sección que la ocuparía para hacer trabajos o presentaciones que contengan esta temática y necesiten de esta información.

## 3. Diseño
### 3.1 Prototipo de baja fidelidad.

### 3.2 Testeo de Usabilidad

Según el testeo noteque:
- Podríamos mover los filtros arriba de las películas.
- Simplificar el cómo se muestran las peliculas (ej: de a 2 películas por línea).
- Hay que agregar un "boton delimpiar los filtros".


### 3.3 Prototipo de alta fidelidad.

### 3.4 Historias de Usuarios
#### Historia Uno
- Cómo: Nuevo fan de Studio Ghibli.
- Quiero: Saber cuántas y cuáles son las películas animadas.
- Para: Familiarizarme con sus creaciones y contenido.
- Criterios de Aceptación:
    - Darle una bienvenida al sitio.
    - Mostrarle las películas con su nombre y poster.
- Definición de Terminado:
    - Crear un `<header>` de resumen de que es Estudios Ghibli.
    - Traer la data al `main.js`
    - Mostrar esa data en el `index.html`
   
#### Historia Dos
- Cómo: Fan de la animación japonesa
- Quiero: Saber quienes son los directores y productores de las animaciones y saber cuántas y cuáles son las animaciones a las que dieron "vida".
- Para: Conocer nuevos directores y productores del área de la animación japonesa.
- Criterios de Aceptación:
    - Mostrarle los directores.
    - Mostrarle los productores
    - A través de un filtro separar las películas según el director/productor seleccionado.
    - Mostrarle el contador de películas según el director/productor seleccionado.
- Definición de Terminado:
    - Agregar a la data mostrada, la información del director.
    - Agregar a la data mostrada, la información del productor.
    - Crear selectores/filtros en el `<html>`
    - Generar un filtro general por director en el archivo `data.js` e importalo al `main.js`
    - Crear un `addEventListener` para que la data se filtre y se muestre en el `<html>` por director.
    - Generar un filtro general por productor en el archivo `data.js` e importarlo al `main.js`
    - Crear un `addEventListener` para que la data se filtre y se muestre en el `<html>` por productor.

#### Historia Tres
- Cómo: Super fan de Studio Ghibli
- Quiero: Saber la fecha de lanzamiento, director, productor y  descripción.
- Para: Ser une de les fans que sabe en detalle sobre el contenido de Ghibli.
- Criterios de Aceptación:
    - Mostrarle la fecha de lanzamiento de cada película
    - Mostrarle el director y productor
    - Mostrarle la descripción de cada película.
    
- Definición de Terminado:
    - Agregar a la data mostrada, la fecha de lanzamiento.
    - Agregar a la data mostrada, el puntaje de cada pelicula.
    - Crear un filtro para que pueda ordenarlos por año (ascendente y descendente).
    - Generar con html dinámico una nueva página con una pestaña de descripción de la película seleccionada.
    
## 4. Herramientas de elaboración del proyecto

HTML, CSS, JavaScript.