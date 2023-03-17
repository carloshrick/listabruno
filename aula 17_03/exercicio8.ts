const entrada8 = require("readline-sync");

let nome = entrada8.question("digite seu nome: ")
let salario: number = parseFloat(entrada8.question("digite seu salario atual: "));
let trabalho: number = parseFloat(entrada8.question("digite seus anos de trabalho na empresa: "));

if(trabalho<=3){
    let soma = salario*1.03;
    console.log("seu novo salario é: " + soma);
}


if(trabalho>3 && trabalho<10){
    let soma1 = salario*1.125;
    console.log("seu novo salario é: " + soma1);
}


if(trabalho>=10){
    let soma2 = salario*1.2;
    console.log("seu novo salario é: " +soma2);
}