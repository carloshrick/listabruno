const entrada1 = require("readline-sync");

let semana = 40;
let mes = 4*semana;

let horas: number = parseFloat(entrada1.question("Quanto vale sua hora de trabalho: "));
let valor: number = parseFloat(entrada1.question("Quantas horas voce trabalha por mes: "));
let soma = horas + mes;

if(valor>mes){
let a = (((valor - mes)* horas)*1.5) + soma;
console.log("O salario desse mes e de:" + a);

}

else if(valor==mes){
    console.log("O seu salario desse mes e de: " + soma);
}