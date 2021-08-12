/* 5. Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente. */

const notasAluno = {
    nota1: 9,
    nota2: 8,
    nota3: 6
};


let mediaPonderada =  ((notasAluno.nota1 * 2.3) + (notasAluno.nota2 * 5) + notasAluno.nota3) / (2.3 + 5 + 1) // Média ponderada seria as notas * o peso da nota, depois divide a soma desses valores pela soma dos pesos

console.log(mediaPonderada)
