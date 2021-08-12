""" /* 37. Crie um programa que fique lendo repetidamente alguns números fornecidos pelo
usuário. Se o usuário digitar um valor especial definido por você (digamos, zero,
-1 ou 999), o computador deve imprimir a somatória dos números já fornecidos.
Definição: Esse valor especial que sinaliza o fim de um laço é chamado de valor
sentinela. Como esse valor se destina simplesmente a forçar a condição de saída
do laço, em geral ele não é aproveitado na lógica do programa.
 */ """

numeroFornecido = None
soma = 0

while(numeroFornecido != 0 and numeroFornecido != -1 and numeroFornecido != 999):
    numeroFornecido = int(input('Digite um número: '))
    soma += numeroFornecido


print(f'A somatório dos números fornecidos é: {soma}')