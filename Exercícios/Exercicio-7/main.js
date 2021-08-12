/* 7. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a 
percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a
percentagem do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo que 
leia o custo de fábrica de um carro e escreva o custo ao consumidor. */



let custoCarroNovo, custoFabrica, porcentagem, impostos;

custoFabrica = 15000

porcentagem = custoFabrica * 0.28; // 0.28 pois 100/28, que seria a porcentagem do distribuidor
impostos = custoFabrica * 0.45; // 0.45 pois 100/45, que seria a porcentagem dos impostos

custoCarroNovo = custoFabrica + porcentagem + impostos; // soma de todos os valores ao custo do carro novo
console.log(custoCarroNovo)

