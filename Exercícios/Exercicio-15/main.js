/*  Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando se este 
número é par ou ímpar, e se é positivo ou negativo
*/

const numeroInt = -3;

const parorImpar = numeroInt % 2 == 0 ? 'par' : 'impar';
const negOuPos =  numeroInt < 0 ? 'negativo' : 'positivo'

console.log(`O número ${numeroInt} é ${parorImpar} e ${negOuPos}`)