/* 9. Calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, 
uma mensagem de "Aprovado", caso a média seja igual ou superior a 6, ou a mensagem 
"reprovado", caso contrário.
 */

const notasAluno = {
    nota1: 9,
    nota2: 8,
    nota3: 6
};

let media =  (notasAluno.nota1 + notasAluno.nota2 + notasAluno.nota3) / 3 // Soma as notas e divido pela quantidade de notas
console.log(media.toFixed(2))
if (media >= 6){
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}