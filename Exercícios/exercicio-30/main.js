/* 30. O departamento que controla o índice de poluição do meio ambiente mantém 3 grupos 
de indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável 
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1o grupo são intimadas a 
suspenderem suas atividades, se o índice cresce para 0,4 as do 1o e 2o grupo são 
intimadas a suspenderem suas atividades e se o índice atingir 0,5 todos os 3 grupos devem 
ser notificados a paralisarem suas atividades. Escrever um algoritmo que lê o índice de 
poluição medido e emite a notificação adequada aos diferentes grupos de empresas. */

const indicePoluicao = 0.2

if(indicePoluicao >= 0.3 && indicePoluicao < 0.4){
    console.log('Alerta para o 1º grupo suspenderem suas atividades');
} else if (indicePoluicao >= 0.4 && indicePoluicao < 0.5){
    console.log('Alerta para o 1º e 2º grupo suspenderem suas atividades')
} else if (indicePoluicao >= 0.5){
    console.log('Alerta para todos os grupos e devem paralisar suas atividades')
} else {
    console.log('Índice nos conformes')
}