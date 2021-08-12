'''/* 27. Escrever um algoritmo que lê:
- a percentagem do IPI a ser acrescido no valor das peças
- o código da peça 1, valor unitário da peça 1, quantidade de peças 1
- o código da peça 2, valor unitário da peça 2, quantidade de peças 2
O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
Fórmula: (valor1*quant1 + valor2*quant2)*(IPI/100 + 1) */'''

ipi = int(input('Digite o valor da porcentagem IPI'))
codigoPeça1 = input('Digite o código da peça 1')
valorPeça1 = float(input('Valor unitário da peça 1: '))
quantidadePecas1 = int(input('Quantidade de peças: '))
codigoPeça2 = input('Digite o código da peça 2')
valorPeça2 = float(input('Valor unitário da peça 2: '))
quantidadePecas2 = int(input('Quantidade de peças: '))

soma = ((valorPeça1 * quantidadePecas1) + (valorPeça2 + quantidadePecas2) * ((ipi / 100) + 1) )
print(soma)