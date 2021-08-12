/* 25. Escrever um algoritmo que lê um conjunto de 4 valores i, a, b, c, onde i é um valor
inteiro e positivo e a, b, c, são quaisquer valores reais e os escreva. A seguir:
a) Se i=1 escrever os três valores a, b, c em ordem crescente.
b) Se i=2 escrever os três valores a, b, c em ordem decrescente.
c) Se i=3 escrever os três valores a, b, c de forma que o maior entre a, b, c fique dentre os
dois. */ 

const i = 2;

let a = 55, b = 24, c = 11;

if(i == 2){
    if(a > b && b > c ){
        console.log(a, b, c)
    }else if(a > b && b < c){
        console.log(a, c, b)
    } else if(a < b && a > c){
        console.log(b, a, c)
    } else if(a < c && b > a){
        console.log(c, b, a)
    } else if(a < c && b < a){
        console.log(c, b, a )
    }
} else if( i == 1){
    if(a > b && b > c ){
        console.log(c, b, a)
    }else if(a > b && b < c){ 
        console.log(b, c, a)
    } else if(a < b && a > c){
        console.log(c, a, b)
    } else if(a < c && b > a){
        console.log(c, b, a)
    } else if(a < c && b < a){
        console.log(c, b, a )
    }
} else if(i == 3){
    if(a > b && a > c){
        console.log(b, a, c)
    } else if(b > a && b > c){
        console.log(a, b, c)
    } else if(c > a && c > b){
        console.log(a, c, b)
    }
}
