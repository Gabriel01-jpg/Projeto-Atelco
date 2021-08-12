/*'''Um vendedor precisa de um algoritmo que calcule o preço total devido por um cliente. O 
algoritmo deve receber o código de um produto e a quantidade comprada e calcular o preço 
total, usando a tabela abaixo. Mostre uma mensagem no caso de código inválido.
Código Preço 
unitário
'ABCD' R$ 5,30
'XYPK' R$ 6,00
'KLMP' R$ 3,20
'QRST' R$ 2,50*/


let codigoProduto = 'ABCD'
let quantidade = 10;
let preco;

switch(codigoProduto){
case 'ABCD':
    preco = 5.30;
    console.log(`O seu valor deu ${preco * quantidade}`)
    break
case 'XYPK':
    preco = 6.0
    console.log(`O seu valor deu ${preco * quantidade}`)
    break
case 'KLMP':
    preco = 3.20
    console.log(`O seu valor deu ${preco * quantidade}`)
    break
case 'QRST':
    preco = 2.50
    console.log(`O seu valor deu ${preco * quantidade}`)
    break
default:
    console.log('Valor inválido')
    break
}



