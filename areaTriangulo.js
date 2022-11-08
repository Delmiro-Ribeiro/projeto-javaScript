import entradaDados from 'readline-sync';

console.log("Área do Triângulo \n");

let base = entradaDados.question("Informe a Base: ");
let altura = entradaDados.question("Informe a Altura: ");

let Area = (base * altura) / 2;

console.log("A área do triângulo é: " + Area);