'''O cardápio de uma lancheria é o seguinte:
Especificação Código Preço
Cachorro quente 100 || 1,20
Bauru simples 101 || 1,30
Bauru com ovo 102 || 1,50
Hambúrger 103 || 1,20
Cheeseburguer 104 || 1,30
Refrigerante 105 || 1,00
 
Escrever um algoritmo que leia o código do item pedido, a quantidade e calcule o valor a ser 
pago por aquele lanche. Considere que a cada execução somente será calculado um item. '''

itemPedido = str(input('Digite o código do pedido: '))
quantidade = int(input('Quantos você quer? '))
valorCalculado = 0  

if(itemPedido == '100'):
    valorCalculado = 1.20 * quantidade
    print(f'O seu pedido deu: {valorCalculado}')
elif(itemPedido == '101'):
    valorCalculado = 1.30 * quantidade
    print(f'O seu pedido deu: {valorCalculado}')
elif(itemPedido == '102'):
    valorCalculado = 1.50 * quantidade
    print(f'O seu pedido deu: {valorCalculado}')
elif(itemPedido == '103'):
    valorCalculado = 1.20 * quantidade
    print(f'O seu pedido deu: {valorCalculado}')
elif(itemPedido == '104'):
    valorCalculado = 1.30 * quantidade
    print(f'O seu pedido deu: {valorCalculado}')
elif(itemPedido == '105'):
    valorCalculado = 1 * quantidade
    print(f'O seu pedido deu: {valorCalculado}')
else: 
    print('Informe um código entre 100 e 105')


