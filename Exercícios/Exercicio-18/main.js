/* 18. Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio 
no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do 
crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e 
o valor do crédito. (use o comando caso-de e não faça repetições)  */

let saldoMedio = 701;

let creditoEspecial = saldoMedio >= 0 && saldoMedio <= 200 ? 0 : saldoMedio >= 201 && saldoMedio <= 400 ? saldoMedio * 0.20 : saldoMedio >= 401 && saldoMedio <= 600 ? saldoMedio * 0.30 : saldoMedio > 601 ? saldoMedio * 0.40 : undefined;

console.log(`O seu saldo médio foi ${saldoMedio} e seu valor de crédito é: ${creditoEspecial.toFixed(2)}`)