/* 2. Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das 
seguintes categorias:
infantil A = 5 - 7 anos
infantil B = 8-10 anos
juvenil A = 11-13 anos
juvenil B = 14-17 anos
adulto = maiores de 18 anos */

const idade = 10;

const categoria = idade >= 5 && idade <= 7 ? 'Infantil A' : idade >= 8 && idade <=10 ? 'Infantil B' : idade >= 11 && idade <= 13 ? 'Juvenil A' : idade >= 14 && idade <= 17 ? 'Juvenil B' : idade > 18 ? 'Adulto' : 'Não se encaixa em nenhuma categoria'
// Operação ternária para tentar todas as possibilidades


console.log(categoria)