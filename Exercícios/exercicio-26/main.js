/* 26. Escrever um algoritmo que lê um valor em reais e calcula qual o menor número possível
de notas de 100, 50, 10, 5 e 1 em que o valor lido pode ser decomposto. Escrever o valor
lido e a relação de notas necessárias */

let valor = 591;

let notas100 = Math.floor(valor / 100);
valor = valor - (notas100 * 100);
let notas50 = Math.floor(valor / 50);
valor = valor - (notas50 * 50);
let notas10 = Math.floor(valor / 10);
valor = valor - (notas10 * 10);
let notas5 = Math.floor(valor / 5);
valor = valor - (notas5 * 5);
let notas1 = Math.floor(valor / 1);
valor = valor - (notas1 * 1);

console.log(`${notas100} notas de 100, ${notas50} notas de 50, ${notas10} notas de 10, ${notas5} notas de 5, ${notas1} notas de 1`)
