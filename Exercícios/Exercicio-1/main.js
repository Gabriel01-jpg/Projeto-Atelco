/* . Construa um algoritmo que, tendo como dados de entrada dois pontos quaisquer no 
plano, P(x1,y1) e P(x2,y2), escreva a distância entre eles. A fórmula que efetua tal cálculo é: */


// Defini dois objetos para atribuir seus valores de x e y no plano cartesiano. Sendo esses objetos o Ponto1 e Ponto2

let P1 = {
    x1: 5,
    y1: 7 
}

let P2 = {
    x2: 10,
    y2: -1
}

const distancia =  (Math.pow(P2.x2 - P1.x1, 2) + Math.pow(P2.y2 - P1.y1, 2)) ** 0.5 // Math.pow faz a elevação pegando os valores por argumento, sendo o primeiro a base e o segundo valor o expoente, defini entre paresentes para que o javascript faça esse cálculo primeiro e logo após fiz a potenciação por 0.5, que seria a raíz quadrada do valor.

console.log(distancia)