/* 32. Suponha que você precise criar um programa para imprimir uma lista de todos os
números inteiros de 1 a 100. Qual tipo de estrutura de repetição (Enquanto...
Faça..., repita... Até e Para... Faça...) você utilizaria para isso?
Crie um programa para fazer essa listagem utilizando todas as estruturas que
sejam adequadas para isso. Em sua visão, existe algo que impede o uso de algumas
dessas estruturas? Por quê? E se, ao invés de imprimir uma listagem com todos
esses números, seu programa tivessem que imprimir os números que estivessem
numa faixa especificada pelo usuário, quais seriam as estruturas de repetiçãoaplicáveis? Por quê? */

// Utilizaria o for, pois a sintaxe é melhor para estruturas de repetição entre valores pré-definidos...

for(i = 1; i <= 100; i++){
    console.log(i)
} // 

let index = 1;
while(index <= 100){
    console.log(index)
    index++
}
