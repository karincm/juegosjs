// asignamos a la constante "botonA" el control button con el id "boton1"
const botonA = document.querySelector("#boton1");
// escuchamos al botón asignándo al evento click una función anónima
botonA.addEventListener("click", function(){
    // evitamos que se refresque la página
    event.preventDefault();
    // llamamos a función "aleatorio" y guardamos en la constante "máquina"
    const maquina = aleatorio();

    // si la máquina elige tijeras, entonces...
    if("tijeras" === maquina)
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste piedra 🪨 y la máquina ${maquina} ✂️ ¡Ganáste! ✌️`;
}

    // si la máquina elige papel, entonces...
    else if("papel" === maquina)
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste piedra 🪨 y la máquina ${maquina} 📜 ¡Perdiste! 🤣 Intenta de nuevo.`;
}

    // si la máquina no elige tijeras, ni papel, entonces...
    else
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste piedra 🪨 y la máquina ${maquina} 🪨 ¡Empatamos! 🙂 Sigamos jugando.`;
}
});


// asignamos a la constante "botonB" el control button con el id "boton2"
const botonB = document.querySelector("#boton2");
// escuchamos al botón asignándo al evento click una función anónima
botonB.addEventListener("click", function(){
    // evitamos que se refresque la página
    event.preventDefault();
    // llamamos a función "aleatorio" y guardamos en la constante "máquina"
    const maquina = aleatorio();

    // si la máquina elige piedra, entonces...
    if("piedra" === maquina)
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste papel 📜 y la máquina ${maquina} 🪨 ¡Ganáste! ✌️`;
}

    // si la máquina elige tijeras, entonces...
    else if("tijeras" === maquina)
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste papel 📜 y la máquina ${maquina} ✂️ ¡Perdiste! 🤣 Intenta de nuevo.`;
}

    // si la máquina no elige piedra, ni tijeras, entonces...
    else
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste papel 📜 y la máquina ${maquina} 📜 ¡Empatamos! 🙂 Sigamos jugando.`;
}
});


// asignamos a la constante "botonC" el control button con el id "boton3"
const botonC = document.querySelector("#boton3");
// escuchamos al botón asignándo al evento click una función anónima
botonC.addEventListener("click", function(){
    // evitamos que se refresque la página
    event.preventDefault();
    // llamamos a función "aleatorio" y guardamos en la constante "máquina"
    const maquina = aleatorio();

    // si la máquina elige papel, entonces...
    if("papel" === maquina)
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste tijeras ✂️ y la máquina ${maquina} 📜 ¡Ganáste! ✌️`;
}

    // si la máquina elige piedra, entonces...
    else if("piedra" === maquina)
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste tijeras ✂️ y la máquina ${maquina} 🪨 ¡Perdiste! 🤣 Intenta de nuevo.`;
}

    // si la máquina no elige papel, ni piedra, entonces...
    else
{
// asignamos a la constante "parrafo" el elemento P con el id "alerta1"
const parrafo = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
parrafo.innerHTML = "";
// agregamos o remplasamos el texto a "parrafo"
parrafo.textContent = `Tú elegiste tijeras ✂️ y la máquina ${maquina} ✂️ ¡Empatamos! 🙂 Sigamos jugando.`;
}
});


function aleatorio()
{
// generamos un número aleatorio entre 0 y 0.99, lo multiplicamos por 3, le sumamos 1, le quitamos los decimales y lo guardamos en "azar"
const azar = Math.trunc(Math.random() * 3 +1);
// guardamos los tres valores en una matriz
const tresElementos = ["piedra", "papel", "tijeras"];
// retornamos el valor aleatorio recorriendo la matriz
return tresElementos[azar - 1];
}

