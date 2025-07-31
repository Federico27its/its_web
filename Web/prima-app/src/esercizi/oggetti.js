function getDati() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ nome: "Rob", cognome: "Del" });
    }, 2000);
  });
}

function getProdotti() {
  return new Promise((resolve, reject) => {
    let prodotti=3
    if(prodotti>5){
 setTimeout(() => {
      resolve(30);
    }, 2000);
    }else{
        reject("Non ci sono prodotti")
    }
   
  });
}

console.log("Istruzione 1");
/*let dati = getDati();
//console.log(dati)
dati.then((ris) => {
    console.log(ris)
    getProdotti().then(ris=>console.log(ris))
});*/

Promise.all([getDati(),getProdotti()]).then(ris=>console.log(ris)).catch(err=>console.log(err))
console.log("Istruzione 3 ");