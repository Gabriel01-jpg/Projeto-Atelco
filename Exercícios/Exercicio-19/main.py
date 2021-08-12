'''/* 19. Um usuário deseja um algoritmo onde possa escolher que tipo de média deseja calcular 
a partir de 3 notas. Faça um algoritmo que leia as notas, a opção escolhida pelo usuário e 
calcule a média. '''
from statistics import *
tipoMedia = int(input('Digite qual tipo de média deseja calcular: '))
soma = 0
index = 0
if(tipoMedia == 1):
    for i in range(1, 4):
        nota = int(input(f'Digite sua nota #{i}: '))
        soma += nota
        index += 1
    print(f' A média aritmética das notas é: {soma / index}')
elif(tipoMedia == 2):
    for i in range(1, 4):
        nota = int(input(f'Digite sua nota #{i}: '))
        if(i == 1 or i == 2):
            soma += nota * 3
        else: 
            soma += nota * 4
    print(f' A média ponderada é {soma / (3 + 3 + 4)}')
elif(tipoMedia == 3):
    arrayNotas = []
    for i in range(1, 4):
        nota = int(input(f'Digite sua nota #{i}: '))
        arrayNotas.append(nota)
    print(harmonic_mean(arrayNotas))

 