const entrada3 = require("readline-sync");

let numero: number = parseFloat(entrada3.question("qual o numero da conta: "))
let saldo: number = parseFloat( entrada3.question("qual o saldo da sua conta: "))
let debito: number = parseFloat( entrada3.question("qual o valor do debito: "))
let credito: number = parseFloat( entrada3.question("qual o valor do credito: "))

let total = saldo+credito-debito
if(total>0){
    console.log("saldo positivo de: " +total)
}
else{
    console.log("saldo negativo de: " +total)
}