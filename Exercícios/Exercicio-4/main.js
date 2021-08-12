/* . Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a 
expressa em anos, meses e dias. */

const idadeEmDias = 7328; 

const anos = Math.floor(idadeEmDias / 365) // DIVIDI OS DIAS EM 365 PARA TER A QUANTIDADE DE ANOS E COMO NÃO VAI DAR UMA CONTA EXATA, PEGA O ARRENDODAMENTO COM MATH.FLOOR


const meses = Math.floor((idadeEmDias % 365) / 30) // PEGUEI O RESTO DA DIVISÃO POR 365 QUE SERIAM OS MESES QUE NÃO COMPLETAM UM ANO E DIVIDI POR 30, QUE SERIA OS MESES RESTANTES 

const dias = ((idadeEmDias % 365) % 30)// FIZ A MESMA LÓGICA ACIMA SÓ QUE PEGUEI O RESTO DO QUE SERIA A DIVISÃO DOS MESES.


console.log(`${anos} anos, ${meses} meses e ${dias} dias`)
