let who = ["Mi perro", "Mi pajaro", "Mi abuela", "Mi tortuga"];
let action = ["se comió", "pisó", "se trago", "rompio"];
let what = ["la tarea", "el proyecto", "las llaves"];
let when = [
  "ayer",
  "hoy en la mañana",
  "al terminar",
  "en la cena",
  "mientras dormia"
];

function arregloRandom(arreglo) {
  let max = arreglo.length;
  let random = Math.random() * max;
  random = Math.floor(random);
  return arreglo[random];
}

function generarExcusa() {
  return `${arregloRandom(who)} ${arregloRandom(action)} ${arregloRandom(
    what
  )} ${arregloRandom(when)}`;
}

console.log(excuse);

window.onload = function() {
  let excusa = document.querySelector("#excuse");
  excusa.innerHTML = generarExcusa();
  document.getElementById("boton").addEventListener("click", function() {
    excusa.innerHTML = `<h3>${generarExcusa()}</h3>`;
  });
};
