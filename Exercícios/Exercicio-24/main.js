/* 24. Escrever um algoritmo que lê a hora de início de um jogo e a hora do final do jogo
(considerando apenas horas inteiras) e calcula a duração do jogo em horas, sabendo-se
que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia
e terminar no dia seguinte. */

 
let horaInicio = 23;

let horaFinal = 17;



let difHours = horaFinal - horaInicio;
if(difHours <= 0){
    difHours = difHours + 24;
}
console.log(`${difHours} horas`)