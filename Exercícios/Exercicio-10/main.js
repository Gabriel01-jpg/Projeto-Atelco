/* 10. Elaborar um algoritmo que lê 3 valores a,b,c e os escreve. A seguir, encontre o maior 
dos 3 valores e o escreva com a mensagem: "É o maior ". */



let valores = {
    A: 35,
    B: 15,
    C: 20
} // UM ARRAY COM VÁRIOS VALORES 
let maior = 0;

for (valor in valores){
    console.log(valores[valor]) // PERCORRENDO O VETOR E ADICIONANDO O VALOR ATUAL SE FOR MAIOR QUE O ANTERIOR
    if(valores[valor] > maior){
        maior = valores[valor]
    }
}

console.log('\n O maior valor é ' + maior)