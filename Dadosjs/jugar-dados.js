// asignamos el formulario con el name "jugar1", a la constante "formulario"
const formulario = document.jugar1;
// asignamos a la constante "boton" el control button con el id "boton1"
const boton = document.querySelector("#boton1");
// escuchamos al botón asignándo al evento click una función anónima
boton.addEventListener("click", function(){
    // evitamos que se refresque la página
    event.preventDefault();

    // si el input del formulario "numero1" es válido, entonces...
    if(formulario.numero1.validity.valid)
    {
        // llamamos a la función "adivina"
        adivina(formulario);
    }

    // si hay algún error en la validación, entonces...
    else
    {
        // asignamos a la constante "parrafo" el elemento P con el id "alerta1"
        const parrafo = document.querySelector("#alerta1");
        // agregamos o remplasamos el texto a "parrafo"
        parrafo.textContent = "😳 Los valores son obligatorios (solo ingresa números por favor).";
        // seleccionamos el div con id "respuestas1" y lo asignamos a "respuestas"
        const respuestas = document.querySelector("#respuestas1");
        // limpiamos cualquier contenido anterior dentro del div "respuestas1"
        respuestas.innerHTML = "";
    }
});

// nombramos nuestra función
function adivina()
    {
    // extraemos el valor, lo convertimos a número entero y lo guardamos en "datoEntrada"
    let datoEntrada = parseInt(numero1.value);
    // generamos un número aleatorio entre 0 y 0.99, lo multiplicamos por 6, le sumamos 1, lo redondeamos un número hacia abajo al entero más cercano y lo guardamos en "aleatorio"
let aleatorio = Math.floor(Math.random() * 6 +1);

// si el número ingresado es igual que el número aleatorio, entonces...
if(datoEntrada == aleatorio)
{
    // seleccionamos el div con id "respuestas1" y lo asignamos a "respuestas"
const respuestas = document.querySelector("#respuestas1");
// limpiamos cualquier contenido anterior dentro del div "respuestas1"
respuestas.innerHTML = "";
// creamos una etiqueta P y la guardamos en la constante "parrafo"
const parrafo = document.createElement("p");
// formamos una cadena de texto con el valor ingresado y el resultado obtenido en la operación, y lo asignamos a "parrafo"
parrafo.textContent = `⌨️ El número que tu ingresaste fue ${datoEntrada} y en el dado salió ${aleatorio} 🎲 ¡Felicidades, adivinaste! ✌️`;
// insertamos el "parrafo" después del último hijo dentro del DIV "respuestas"
respuestas.appendChild(parrafo);
// seleccionamos el P con id "alerta1" y lo asignamos a "alerta"
const alerta = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
alerta.innerHTML = "";
}

// si el número ingresado no es igual que el número aleatorio, entonces...
else
{
    // seleccionamos el div con id "respuestas1" y lo asignamos a "respuestas"
const respuestas = document.querySelector("#respuestas1");
// limpiamos cualquier contenido anterior dentro del div "respuestas1"
respuestas.innerHTML = "";
// creamos una etiqueta P y la guardamos en la constante "parrafo"
const parrafo = document.createElement("p");
// formamos una cadena de texto con el valor ingresado y el resultado obtenido en la operación, y lo asignamos a "parrafo"
parrafo.textContent = `⌨️ El número que tu ingresaste fue ${datoEntrada} y en el dado 🎲 salió ${aleatorio}. Lo siento, 🥹 no has adivinado. Intenta de nuevo por favor.`;
// insertamos el "parrafo" después del último hijo dentro del DIV "respuestas"
respuestas.appendChild(parrafo);
// seleccionamos el P con id "alerta1" y lo asignamos a "alerta"
const alerta = document.querySelector("#alerta1");
// limpiamos cualquier contenido anterior dentro del P "alerta1"
alerta.innerHTML = "";
}
    }

