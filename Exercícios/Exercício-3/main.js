/* 3. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e 
mostre-a expressa apenas em dias */


const valoresIdade = { // valores da idade 
    ano: 25,
    meses: 5,
    dias: 10
};

const anoBissexto = Math.floor(valoresIdade.ano / 4) // pega os anos e divide por quatro pra ver quantos anos são bissextos e adiciona uma váriavel para que seja somado ao final os dias a mais que possuem anos bissextos...

const valoresemDias = ((valoresIdade.ano * 365) + anoBissexto) + (valoresIdade.meses * 30) + valoresIdade.dias

console.log(valoresemDias)