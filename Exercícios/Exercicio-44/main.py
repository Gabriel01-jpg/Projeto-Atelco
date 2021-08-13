"""44. A Pense Longe é uma empresa que comercializa planos de previdência privada.
Ao adquirir um desses planos, o participante deve depositar periodicamente uma
certa quantidade em dinheiro numa conta especial que, depois de alguns anos, é
utilizada para financiar sua aposentadoria (imagine, para simplificar, que seja
apenas um depósito por ano). Baseado nessas informações, escreva programas
que executem conforme especificado abaixo:
a) Assuma que o plano de previdência ofereça uma rentabilidade de 9% ao
ano sobre o valor depositado na conta; ou seja, a cada ano, o valor
depositado pelo correntista em sua conta é somado ao valor ali existente e
esse total é acrescido de 9%. Seu programa deve permitir que o usuário
informe por quantos anos um certo participante imagina que ainda deve
trabalhar antes de se aposentar e qual é o valor que ele conseguirá depositar
anualmente em sua conta. Ao final, o programa deve escrever como o
saldo da conta evoluirá ao longo dos anos em que o participante fizer seus
depósitos;
b) Altere o programa para que, após escrever como o saldo evolui ao longo
dos anos na fase de depósitos, seja impressa também uma lista mostrando
como o saldo evoluirá anualmente na fase de benefício (ou seja, quando o
participante se aposenta e passa a sacar dinheiro de sua conta). Suponha
que o usuário saque um único valor anual de R$ 50.000,00 e que a
rentabilidade sobre o saldo seja a mesma do período de poupança (9%).
Encerre a listagem desse período após 40 anos ou quando o saldo ficar
zerado ou negativo. """


anosTrabalhados = int(input('Digite quantos anos você ainda vai trabalhar: '))
valor = float(input('Quanto você conseguira depositar anualmente: '))
valorFinal = valor

for i in range(1, anosTrabalhados):
    print(f'{valorFinal} = {valor} + {valorFinal} * 0.09')
    valorFinal += (valor + valorFinal) * 0.09

print(valorFinal)

"""Fórmula: valor = 40 + 40 * 0.09 = 43,6"""
"""Fórmula: valor = 40 + 43,6 * 0.09 = 43,6"""
