/*  14. Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média 
ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas 
restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma 
mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média 
for menor que 5. */

const Aluno = {
    codAluno: 1030213012,
    nome: 'Gabriel',
    notas: [10, 9, 3] 
};

let maiorNota = 0;
let soma = 0;

for(nota of Aluno.notas){
    if(nota > maiorNota){
        maiorNota = nota
        soma += nota * 4;
    } else {
        soma += nota * 3;
    }
}
const media = soma / (4 + (3 * 2))
console.log(`Código ${Aluno.codAluno}, notas ${Aluno.notas[0]}, ${Aluno.notas[1]}, ${Aluno.notas[2]}, média ${media} foi ${media >= 5 ? "APROVADO" : "Reprovado"}`)