/* 28. Escrever um algoritmo que lê a hora de início e hora de término de um jogo, ambas
subdivididas em dois valores distintos: horas e minutos. Calcular e escrever a duração do 
jogo, também em horas e minutos, considerando que o tempo máximo de duração de um
jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. */
 
let horaInicio = 19;
let minutoInicio = 25;

let horaFinal = 19;
let minutoFinal = 24;


let calculo = ((horaFinal * 60) + minutoFinal) - ((horaInicio * 60) + minutoInicio);
let hours = Math.floor(calculo / 60)
let minutes = calculo % 60
if(hours < 0){ // SE O NÚMERO DER ALGO NEGATIVO, SIGNIFICA QUE A HORA FINAL É MAIOR QUE A INICIA, POR ISSO SE PASSOU UM DIA.
    hours = hours + 24 
}
if(minutes < 0){
    minutes = minutes + 60 
}
console.log(`${hours} hora(s) e ${minutes} minuto(s)`)