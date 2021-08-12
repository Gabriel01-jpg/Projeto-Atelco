""" /* 39. Contagem de alturas – Crie um programa que leia continuamente a altura e o
sexo de uma lista de pessoas, até que uma altura negativa seja fornecida. Ao final,
sabendo que a média de altura para as mulheres brasileiras é de 1.60 m e a dos
homens brasileiros é de 1.73 m, escreva as seguintes informações:
a) quantas mulheres da lista estão acima da média nacional de altura para
mulheres, e quantas estão abaixo; */ """

numeroFornecido = 0
contAlturaMulherB = 0
contAlturaMulherA = 0
contAlturaHomenB = 0
contAlturaHomenA = 0
sexo = 0

while(True):
    numeroFornecido = float(input('Digite a altura: '))
    if(numeroFornecido <= 0): break
    sexo = input('Digite o sexo: (M) e (F): ')
    if(sexo.upper() == 'M'):
        if(numeroFornecido < 1.73 and numeroFornecido > 0):
            contAlturaHomenB += 1
        elif(numeroFornecido >= 1.73):
            contAlturaHomenA += 1
    if(sexo.upper() == 'F'):
        if(numeroFornecido < 1.60 and numeroFornecido > 0):
            contAlturaMulherB += 1
        elif(numeroFornecido >= 1.60):
            contAlturaMulherA += 1
print(f'{contAlturaMulherB} mulher(es) esta(ão) abaixo da média e {contAlturaMulherA} está(ão) acima.')
print(f'{contAlturaHomenB} homen(s) está(ão) abaixo da média e {contAlturaHomenA} está(ão) acima.')