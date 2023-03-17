const entrada5 = require("readline-sync");

let n1: number = parseFloat(entrada5.question("digite um numero: "));
let n2: number = parseFloat(entrada5.question("digite outro numero: "));
let n3: number = parseFloat(entrada5.question("digite outro numero: "));

if(n1>n2 && n1>n3 && n2>n3){
    console.log("a ordem crescente é: " +n1,+n2,+n3);
}
if(n1>n2 && n1>n3 && n3>n2){
    console.log("a ordem crescente é: " +n1,+n3,+n2);
}


if(n2>n1 && n2>n3 && n1>n3){
    console.log("a ordem crescente é: " +n2,+n1,+n3);
}
if(n2>n1 && n2>n3 && n3>n1){
    console.log("a ordem crescente é: " +n2,+n3,+n1);
}


if(n3>n2 && n3>n1 && n2>n1){
    console.log("a ordem crescente é: " +n3,+n2,+n1);
}
if(n3>n2 && n3>n1 && n1>n2){
    console.log("a ordem crescente é: " +n3,+n1,+n2);
}