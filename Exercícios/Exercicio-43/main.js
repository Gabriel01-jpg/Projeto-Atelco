/* 43. A empresa de leilões Arremate Certo disponibiliza seu site para que qualquer
pessoa possa vender seus produtos on line. Para que nenhum produto fique
encalhado, ele só pode ser anunciado durante 6 semanas. Nesse período, seu preço
cai 5% por semana, até que uma venda seja concretizada. Por exemplo, um
produto que esteja sendo vendido por R$ 100.00 na primeira semana passa a custar
R$ 100 x 0.95 = R$ 95.00 na segunda semana e R$ 95,00 x 0.95 = R$ 90.25 na
terceira semana. Construa um programa onde o usuário informe o valor do preço
de um item e o computador escreva a como esse valor evolui ao longo das 6
semanas. Depois, modifique esse programa para que ele continue fazendo

simulações com o preço de vários produtos, até que um valor sentinela
especificado por você seja fornecido como preço. */


const valorProdutoInicial = 100;
let descontoPreco = valorProdutoInicial * 0.05;
let valorProduto = valorProdutoInicial;
console.log(`Valor inicial do produto: ${valorProdutoInicial}`)
for(i = 1; i <= 6; i++){
    valorProduto -= descontoPreco;
    descontoPreco = valorProduto * 0.05;
    console.log(`${i}º semana = ${valorProduto.toFixed(2)}`)
}