const turmas = ['A', 'B', 'C']

let mensalidade = 0;

for(i = 0; i <= 9; i++){
    for(turma of turmas){
        for(j = 0; j <= 9; j++){
            mensalidade = 160 * i;
            if(i == 0){
                console.log(`Série: Pré - Turma ${turma}, mês ${j + 3} valor: ${180}`)
            } else {
                console.log(`Série: ${i} - Turma ${turma}, mês ${j + 3} valor: ${mensalidade}`)
            }
        }
    }
}

/* Serie: Pré - Turma A - Mês 01: 180; 
Serie: Pré - Turma B - Mês 01: 180;  */