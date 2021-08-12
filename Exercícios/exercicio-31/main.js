/* 31. Escrever um algoritmo que calcule os sucessivos valores de E usando a série abaixo e 
considerando primeiro 3 termos, depois 4 termos e, por fim, 5 termos: 
E = 1 + 1 / 1! + 1 / 2! + 1 / 3! + 1 / 4! */

let E = 4;
console.log(E)
console.log('3 termos')
for(i = 1; i < 4; i++){
    E = E + 1
    E = (E * i) + 1;
    console.log(E)
}
/* E = 10
console.log('4 termos')
for(i = 1; i < 5; i++){
    E = E * i;
    console.log(E)
}
E = 10
console.log('5 termos')
for(i = 1; i < 6; i++){
    E = E * i;
    console.log(E)
} */