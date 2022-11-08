import conversor from 'readline-sync';

console.log("Conversor de milhas para quilômetros: \n")

let milhas = conversor.question("Informe o valor das milhas: ");

let km = milhas / 0.62137;

console.log(milhas + "milhas equivalem á " + km + "Km`s");