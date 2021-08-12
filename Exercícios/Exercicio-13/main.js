/* 13. Escreva um algoritmo que leia 3 números inteiros e mostre o maior deles. */

let A = 105, B = 155, C = 175;


let maior =  A > B && A > C ? A : B > A && B > C ? B : C > A && C > B ? C : 0;

console.log(maior)