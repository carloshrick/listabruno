const entrada6 = require("readline-sync");

let time1: string = (entrada6.question("qual o primeiro time: "));
let time2: string = (entrada6.question("qual o segundo time: "));
let gol1: number = parseFloat(entrada6.question("quantos gols o primeiro time fez: "));
let gol2: number = parseFloat(entrada6.question("quantos gols o segundo time fez: "));

if(gol1>gol2){
    console.log(time1+ " ganhou de " +gol1 + " a " + gol2);
}
if(gol2>gol1){
    console.log(time2+ " ganhou de " +gol2 + " a " + gol1);
}
if(gol1==gol2){
    console.log("a partida ficou empatada")
}