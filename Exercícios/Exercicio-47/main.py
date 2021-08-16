""" Aplicativo para pesquisa de mercado da Lanchonete Café Saboroso – Quando um
pedido é feito por telefone, o atendente solicita o CEP e a idade do cliente, que
são anotados com a quantidade de itens do pedido. Construa um programa que
automatize esse processo, implementando as tarefas que seguem:
a) O programa opera continuamente até que o funcionário insira um 0 para
CEP no final do dia. Se o funcionário inserir um código postal inválido
(mais de 5 dígitos) ou uma idade inválida (definida como menos de 10 ou
mais de 110), o programa alerta o funcionário sobre esse erro, e pede que
os dados sejam inseridos novamente;
b) Quando o atendente informa uma quantidade de itens menor do que 1 ou
maior do que 12, o programa alerta sobre o erro duas vezes. Se o atendente

inserir um valor mais alto na terceira tentativa, o programa deve aceitá-
lo, mas se o atendente inserir um valor negativo na terceira tentativa, uma mensagem de

erro será exibida e o pedido não será contabilizado;

c) No final do programa, deve ser exibida quantos itens foram encomendados
por clientes que moram na mesma área da cafeteria (CEP 54984) e quantos
foram comprados por clientes de outras áreas. Também deve ser exibido a
idade média do cliente, e a quantidade de itens encomendados por clientes
com menos de 30 anos e por clientes com 30 anos ou mais. """

pedidosCEP = []
pedidosItens = []
pedidosIdades = []
contador = 0;
while(True):
    CEP = input('Digite o CEP: ')
    if(CEP == '0'): break
    idade = int(input('Qual a idade do cliente: '))
    if(len(CEP) > 5 or (idade < 10 or idade > 110)):
        print('Os dados inseridos estão incorretos.')
        print('Por favor, inserir os dados novamente!')
        continue
    qtdItens = int(input('Digite a quantidade: '))
    if(qtdItens < 1 or qtdItens > 12):
        print('Os dados estão corretos? ')
        qtdItens = int(input('Digite a quantidade: '))
        if(qtdItens < 1 or qtdItens > 12):
            print('Segunda tentativa, os dados estão corretos?')
            qtdItens = int(input('Digite a quantidade: '))
            if(qtdItens < 1):
                print('Pedido não foi contabilizado')
                continue
            
    pedidosCEP.append(CEP)
    pedidosItens.append(qtdItens)
    pedidosIdades.append(idade)

duplicados = [] 
soma = 0  
for CEP in pedidosCEP:
    if CEP in duplicados:
        duplicados.append(CEP)

for idades in pedidosIdades:
    soma = soma + idades

print(f'Pessoas do mesmo bairro: {len(duplicados)}')
print(f'Pessoa de outro bairro: {len(pedidosCEP) - len(duplicados)}')
print(f'A média de idade é {soma / len(pedidosIdades)}')
        

