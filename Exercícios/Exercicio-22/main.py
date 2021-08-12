''''/* 22. Uma empresa concederá um aumento de salário aos seus funcionários, variável de 
acordo com o cargo, conforme a tabela abaixo. Faça um algoritmo que leia o salário e o 
cargo de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver na 
tabela, ele deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário 
e a diferença. */'''

salario = float(input('Digite o salário do funcionário: '))
cargo = str(input('Digite o cargo: '))
if(cargo.upper() == 'GERENTE'):
    novoSalario = salario + (salario * 0.1)
elif(cargo.upper() == 'ENGENHEIRO'):
    novoSalario = salario + (salario * 0.2)
elif(cargo.upper() == 'TECNICO'):
    novoSalario = salario + (salario * 0.3)
else:
    novoSalario = salario + (salario * 0.4)


print(f'O salário era {salario} e aumentou para {novoSalario}, uma diferença de {novoSalario - salario}')