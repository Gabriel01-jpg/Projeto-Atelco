# coding: utf-8
import random

""" 46. Aplicativo para avaliação de Filmes:
A Veja Bem é uma startup que vai começar a atuar no ramo de entretenimento,
publicando em seu site a percepção que o público tem dos filmes que estão sendo
exibidos nos cinemas da cidade. Para isso, instalarão quiosques nesses cinemas,
onde os expectadores poderão atribuir uma nota de 0 a 4 a cada filme exibido.
Para implementar esses quiosques, execute as atividades abaixo:
a) Faça um programa que permita aos expectadores de um cinema avaliarem
um determinado filme com essas notas, até que um valor de sentinela seja
incluído. Não permita que notas inválidas sejam atribuídas – se um usuário
não inserir uma nota válida, peça para ele repetir a votação;
b) Altere o programa para que o usuário possa errar na votação pôr no
máximo três vezes. Acima disso, o programa deve alertar o usuário sobre
o erro e pedir que o próximo expectador vote """

filmes = ['Vingadores', 'Capitão América', 'Banana de Pijamas', 'Batman']
filmeSelecionado = random.randint(0, len(filmes) - 1)
print(filmeSelecionado)
while(True):
    nota = int(input(f'De sua nota de 0 a 4 para {filmes[filmeSelecionado]:}: '))
    if(nota == -5):
        print('FIM!!!!!')
        break
    if(nota <= 0 or nota > 4):
        nota = int(input('Por favor, digite uma nota entre 0 e 4: '))
        if(nota <= 0 or nota > 4):
            nota = int(input('Segunda chance, digite uma nota entre 0 e 4: '))
            if(nota <= 0 or nota > 4):
                nota = int(input('Última chance, digite uma nota entre 0 e 4: '))
                print("Próximo usuário!!!!!")
        continue
    print("Próximo usuário!!!!!")

    


