window.onload = function () {
  const who = [
    "El perro",
    "Mi abuela",
    "El cartero",
    "Mi loro",
    "El vecino",
    "Mi gato",
  ];
  const action = [
    "se comió", 
    "mojó", 
    "rompió", 
    "escondió", 
    "perdió", 
    "aplastó",
  ];
  const what = [
    "mi tarea",
    "mi teléfono",
    "el cuaderno",
    "mi mochila",
    "mi almuerzo",
    "mi informe",
  ];
  const when = [
    "antes de clase",
    "ayer por la noche",
    "mientras dormía",
    "en el bus",
    "durante la siesta",
    "antes del examen",
  ];
  function aleatorio(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function generarExcusa() {
    return (
      aleatorio(who) +
      " " +
      aleatorio(action) +
      " " +
      aleatorio(what) +
      " " +
      aleatorio(when) +
      "."
    );
  }
  const p = document.getElementById("excuse");
  if (p) {
    p.innerText = generarExcusa();
  }
};
