""" 41. Aplicativos para a Loja de Utilidades Brilho S.A.:
a) Da mesma forma como no caso das Lojas Conforto, as lojas Brilho
precisam um programa para simular compras parceladas, onde o
computador lê o nome do cliente, um código de cliente (fictício), o valor
total da compra e um número de prestações. Porém, o esquema de
financiamento é totalmente diferente: as Lojas Brilho cobram juros de 1%
aplicados todo mês ao saldo do valor financiado, e o cliente é obrigado a
pagar 10% desse valor quando vencem as prestações. Assim, uma compra
de R$ 100,00 seria reajustada para R$ 101,00 quando a primeira prestação
vencer, sendo que o cliente teria que pagar 10% desse valor, ou seja, R$

10.10, reduzindo o saldo para R$ 101.10 – R$ 10.10 = R$ 90.90. No mês
seguinte, esse saldo seria reajustado em 1%, sendo que o cliente teria
novamente que pagar uma parcela de 10% desse saldo. O processo continua
até que o cliente quite a dívida.
Baseado nessas regras, crie um programa para que escreva o valor de cada
prestação dos próximos 12 meses (independente de quantas prestações o
cliente escolheu).
b) Modifique o programa anterior para que ele continue rodando até que o
um valor sentinela qualquer seja fornecido para o código de cliente.

 """

nomeCliente = str(input('Digite o nome: '))
codigoCliente = int(input('Digite o código do cliente: '))
""" if(codigoCliente == 0): 
    print('Código sentinela!')
    break  """
valorTotal = float(input('Valor total da compra: '))
while(True):
    numeroPrestacoes = int(input('Quantas prestações: '))
    if(not(numeroPrestacoes < 2 or numeroPrestacoes > 36)):
        break
    print('Digite parcelas entre 2 e 36')

valorParcelas = None
for i in range(1, 13):
    valorParcelas = (valorTotal + (valorTotal * 0.01))
    valorTotal = valorParcelas - (valorParcelas * 0.1)
    print(f'{i} parcela: {valorTotal:.2f}')

""" Fórmula = (100 + 1%) - 10% - Primeira parcela
    Segunda parcela = (90.90 + 1%) - 10% """