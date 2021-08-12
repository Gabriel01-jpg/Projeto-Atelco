""" 38. Somatório e média de uma lista de números – Construa um programa que
permita a um usuário informar uma série de números, até que um número negativo
seja fornecido. Ao final, imprima o somatório desses números, a média, o valor
máximo e o mínimo. Desconsidere o último número informado pelo usuário. """

numeroFornecido = 0
soma = 0
contador = 0
maior = 0
menor = 999999999999999999999

while(numeroFornecido >= 0):
    contador += 1
    soma += numeroFornecido
    numeroFornecido = float(input('Digite um número: '))
    if(numeroFornecido > maior):
        maior = numeroFornecido
    if(numeroFornecido < menor and numeroFornecido >= 0):
        menor = numeroFornecido
    
    

print(f'A soma é {soma}, média: {soma / contador}, maior valor fornecido foi: {maior} e o menor {menor} ')