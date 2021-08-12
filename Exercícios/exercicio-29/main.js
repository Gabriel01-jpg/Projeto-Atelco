/* 29. Escrever um algoritmo que lê o número de identificação, as 3 notas obtidas por um 
aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a 
média de aproveitamento, usando a fórmula:
MA = (Nota1 + Nota2 x 2 + Nota3 x 3 + ME )/7
A atribuição de conceitos obedece a tabela abaixo:
Média de 
Aproveitamento
Conce
ito
9,0 A
7,5 e < 9,0 B
6,0 e < 7,5 C
4,0 e < 6,0 D
< 4,0 E
O algoritmo deve escrever o número do aluno, suas notas, a média dos exercícios, a média 
de aproveitamento, o conceito correspondente e a mensagem: APROVADO se o conceito 
for A,B ou C e REPROVADO se o conceito for D ou E */

const aluno = {
    numID: 545121,
    notas: [10, 8, 7],
    mediaExercicios: 10
}

let MA = ((aluno.notas[0] + aluno.notas[1] * 2) + (aluno.notas[2] * 3) + aluno.mediaExercicios) / 7
const conceito = MA >= 9 ? 'A' : MA < 9 && MA >= 7.5 ? 'B' : MA < 7.5 && MA >= 6 ? 'C' : MA < 6 && MA >= 4 ? 'D' : 'E'
console.log(`ID: ${aluno.numID}, notas: ${aluno.notas[0]}, ${aluno.notas[1]}, ${aluno.notas[2]}, com media de exercícios: ${aluno.mediaExercicios} e aproveitamento: ${MA.toFixed(2)}, conceito: ${conceito}`)
if(conceito == 'D' || conceito == 'E'){
    console.log('Você foi reprovado');
} else {
    console.log('Você foi aprovado!')
}
