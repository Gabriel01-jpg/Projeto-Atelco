/* 34. Projete um algoritmo que imprima uma lista de todos os números ímpares entre 0
e 30. Cada número deve ser impresso ao lado do seu dobro e do seu triplo. */

for(i = 0; i <= 30; i++){
    if(i % 2 != 0){
        console.log(`${i}, dobro: ${i*2}, triplo: ${i*3}`)
    }
}