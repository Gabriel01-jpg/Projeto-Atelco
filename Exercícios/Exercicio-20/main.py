'''Um vendedor necessita de um algoritmo que calcule o preço total devido por um cliente. 
O algoritmo deve receber o código de um produto e a quantidade comprada e calcular o 
preço total, usando a tabela abaixo:
'''

codigoProduto = str(input('Digite o código do produto: '))
if(codigoProduto == '1001'):
    quantidade = int(input('Deseja comprar quantos? '))
    print(f'Sua compra deu {5.32 * quantidade}')
elif(codigoProduto == '1324'):
    quantidade = int(input('Deseja comprar quantos? '))
    print(f'Sua compra deu {6.45 * quantidade}')
elif(codigoProduto == '6548'):
    quantidade = int(input('Deseja comprar quantos? '))
    print(f'Sua compra deu {2.37 * quantidade}')
elif(codigoProduto == '0987'):
    quantidade = int(input('Deseja comprar quantos? '))
    print(f'Sua compra deu {5.32 * quantidade}')
elif(codigoProduto == '7623'):
    quantidade = int(input('Deseja comprar quantos? '))
    print(f'Sua compra deu {6.45 * quantidade}')
else:
    print('Informe um código de produto válido')
