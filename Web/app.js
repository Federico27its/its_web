const arr1 = [1,2,3]
console.log(arr1, ...arr1)
arr1.push(4)
arr1.unshift(0)
const arr2 = arr1
console.log(arr2)
arr2 = [...arr1]
console.log(arr2)

r = "rob"
console.log(r)

const prof = 
{
    nome: "rob",
    cognome: "rob",
    eta: 48,
    indirizzo:
    {
        citta: "roma",
        via: "cesare pavese"
    }
}
console.log(prof)