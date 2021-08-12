/* 36. Crie um programa para que retorne o somatório de todos os números entre 1 e um
valor fornecido pelo usuário. Por exemplo, se o usuário fornece o número 4, o
computador deverá calcular o somatório 1+ 2 + 3 + 4 = 10. */

const numFornecido = 10;
let soma = 0;
for(i = 1; i <= numFornecido; i++){
    console.log(`${soma} + ${i} = ${soma + i}` )
    soma += i;
    
}