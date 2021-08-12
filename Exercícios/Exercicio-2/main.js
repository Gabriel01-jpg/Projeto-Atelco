/* Escreva um algoritmo que leia três números inteiros e positivos (A, B, C) e calcule a 
seguinte expressão */

// Atribui valores estáticos as váriaveis, sendo 
let A = 1,
    B = 3,
    C = 4;

const R = ( A + B ) ** 2; // Faço a soma dos valores A + B, já que são valores positivo, o "chuveirinho" seria somente a soma dos valores internos
const S = ( B + C ) ** 2; 

const D = (R + S) / 2

console.log(D)