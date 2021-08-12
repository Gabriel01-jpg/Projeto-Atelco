sexo = str(input('Informe seu sexo: '))

if(sexo.upper() == 'M'):
    altura = float(input('Informe sua altura: '))
    print(f'Seu peso ideal seria {(72.7 * altura) - 58}')
elif(sexo.upper() == 'F'):
    altura = float(input('Informe sua altura: '))
    print(f'Seu peso ideal seria: {(62.1 * altura) - 44.7}')
else:
    print('Informe um valor válido')