const entrada7 = require("readline-sync");

let h1:number = parseFloat(entrada7.question("digite sua idade: "));
let h2:number = parseFloat(entrada7.question("digite sua idade: "));
let m1:number = parseFloat(entrada7.question("digite sua idade: "));
let m2:number = parseFloat(entrada7.question("digite sua idade: "));

if(h1>h2 && m1>m2){
    let idadem = h1+m2;
    let idadex =h2*m1;
    console.log("a soma é: " +idadem + " e a multiplicação é: " +idadex);
}
if(h1>h2 && m2>m1){
    let idadem = h1+m1;
    let idadex = h2*m2;
    console.log("a soma é: " +idadem + " e a multiplicação é: " +idadex);
}


if(h2>h1 && m1>m2){
    let idadem = h2+m2;
    let idadex = h1*m1;
    console.log("a soma é: " +idadem + " e a multiplicação é: " +idadex);
}
if(h2>h1 && m2>m1){
    let idadem = h2+m1;
    let idadex = h1*m2;
    console.log("a soma é: " +idadem + " e a multiplicação é: " +idadex);
}