/* 6. Faça um algoritmo que leia o tempo de duração de um evento em uma fábrica expressa 
em segundos e mostre-o expresso em horas, minutos e segundos.
 */

const segundos = 95467; // SEGUNDOS


const horas = Math.floor(segundos / 3600) // A CADA 3600 SEGUNDOS TEMOS UMA HORA

const minutos = Math.floor(segundos / 60) - (60 * horas) // Para manter apenas o minutos que não ultrapassam o 60, que formaria uma hora, pego os segundos e divido por 60 que daria um valor grande de minutos e subtraio pela quantidade de horas * 60.


restoSegundos = segundos % 60 // resto da divisão por 60, seriam os segundos que sobram


console.log(`${segundos} segundos são: ${horas} hora(s), ${minutos} minutos e ${restoSegundos} segundos`) 