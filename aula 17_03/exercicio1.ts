const entrada1 = require("readline-sync");

let salario1: number = parseFloat(entrada1.question("digite seu salario por hora: "));
let s1: number = parseFloat(entrada1.question("digite as horas trabalhadas na semana 1: "));
let s2: number = parseFloat(entrada1.question("digite as horas trabalhadas na semana 2: "));
let s3: number = parseFloat(entrada1.question("digite as horas trabalhadas na semana 3: "));
let s4: number = parseFloat(entrada1.question("digite as horas trabalhadas na semana 4: "));

let menos1 = s1-40;
let menos2 = s2-40;
let menos3 = s3-40;
let menos4 = s4-40;

if(s1>40 || s2>40 || s3>40 || s4>40){
    let soma = (menos1+menos2+menos3+menos4)* (salario1*0.5);
    let acabou = soma+((salario1*40)*4);
    console.log("seu salario esse mes será: " +acabou);
    
}
else{
    console.log("seu salario esse mes sera: "+ (salario1*40)*4)
}