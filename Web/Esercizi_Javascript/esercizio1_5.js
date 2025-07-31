let s = "Lunedì, Martedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica";

console.log(s);

document.getElementById("primo").innerText = s

s=s.replaceAll(", ", "\n");

document.getElementById("secondo").innerText = s


console.log(s);