let n = "50";

console.log(n);

console.log(typeof(n));

document.getElementById("primo").innerText = `Valore: ${n}, tipo: ${typeof(n)}`;

console.log(typeof(n) == Number);

document.getElementById("secondo").innerText = `Il tipo di ${n} è number? ${typeof(n) == Number}`;


n = Number(n);

console.log(n);

console.log(typeof(n));

document.getElementById("terzo").innerText = `Valore: ${n}, tipo: ${typeof(n)}`;
