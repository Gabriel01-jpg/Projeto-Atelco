/* 23. Elaborar um algoritmo que lê 3 valores a,b,c e verifica se eles formam ou não um 
triângulo. Supor que os valores lidos são inteiros e positivos. Caso os valores formem um 
triângulo, calcular e escrever a área deste triângulo. Se não formam triângulo escrever os 
valores lidos. ( se a > b + c não formam triângulo algum, se a é o maior) */

const A = 8;
const B = 10;
const C = 10;
let triangulo = 0;

for(i = 1; i <= 1; i++){
    if(Math.trunc(B - C) < A && A < B + C){
        triangulo = triangulo + 1;
    } else {
        triangulo = 'Não forma'
        break
    }
    if(Math.trunc(A - C) < B && B < A + C){
        triangulo = triangulo + 1;
    } else {
        triangulo = 'Não forma'
        break
    }
    if(Math.trunc(A - B) < C && C < A + B){
        triangulo = triangulo + 1;
    } else {
        triangulo = 'Não forma'
        break
    }
}

let area;
let base;
let altura;
let lado;

if(triangulo == 'Não forma'){
    console.log(`${A}, ${B}, ${C}, não formam um triângulo`)
} else{
    if(A == B && B == C){
        
        area = ((A ** 2) * 1.7320508075688772 ) / 4
        console.log(area.toFixed(2))
    } else if((A == B && B != C) || (B == C && C != A) || (A == C && C != B)){
        console.log('Entrou')
        if(A > B && B == C){
            base = A;
            lado =  B
        } else if(B > A && A == C){
            base = B;
            lado = C;
        } else {
            base = C
            lado = A
        }
        altura = ((lado ** 2) - ((base / 2) ** 2) );
        area = (base * Math.sqrt(altura)) / 2;
        console.log(area)
        /* console.log(area) */
    } else {
        
    }
}
