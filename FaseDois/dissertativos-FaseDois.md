#Aula 2
Tipos de dados | atribuição
Dissertativos
1.	Para cada informação abaixo, classifique segundo o tipo de dados.
a.	Quantidade de vendedores da loja - Inteiro
b.	Nome da rua, com número e complemento - Texto
c.	Preço do etanol comum - Real
d.	Estado de iluminação de uma lâmpada – Booleano
e.	CEP do endereço, com hífen - Texto
f.	Mostrador com um dígito dentro do elevador, indicando o andar do prédio onde ele está passando - Inteiro
g.	Led que indica o pressionamento do botão do elevador – Booleano
h.	Data de aniversário do professor - Data
i.	Peso do prato na balança do restaurante - Real
j.	Número de bois no curral da fazenda - Inteiro
k.	Dia completo da páscoa nesse ano - Data
l.	Quantidade de laranjas na caixa - Inteiro
m.	Uma vogal minúscula - Caractere
n.	Título de um livro - Texto
o.	Limite do cartão de crédito - Real
p.	Horário de transmissão do jogo - Data
q.	Altura de um prédio - Real
r.	Páginas do caderno - Inteiro
s.	Sala de reunião está disponível (ou ocupada) – Booleano
t.	Alternativas do enunciado da questão de múltipla escolha - Caractere
2.	O que são tipos de dados?
É algo do mundo real que pode ser representado computacionalmente, ou seja, a forma como o programa irá entender o conteúdo que será armazenado.
3.	Descreva os tipos de dados primitivos em programação, com o nome do tipo da informação e sua finalidade de armazenamento.
Tipo inteiro: define variáveis numéricas do tipo inteiro, ou seja, sem casas decimais.
Tipo real: define variáveis numéricas do tipo real, ou seja, com casas decimais.
Tipo caractere: define variáveis do tipo string, ou seja, cadeia de caracteres.
Tipo lógico: define variáveis do tipo booleano, ou seja, com valor VERDADEIRO ou FALSO.

4.	Qual a característica (ou conceito) dos números inteiros que é muito importante na programação?

Os números inteiros são sequenciais e ordinários.
5.	O que são as palavras reservadas da linguagem?
Palavras reservadas são componentes da própria linguagem e não podem ser redefinidas, ou seja, denominar elementos criados pelo programador.
6.	Em programação, o que são variáveis?
É um nome simbólico para representar um espaço de memória. Nesse espaço de memória vamos armazenar um valor. E esse valor pode ser livremente alterado, ou seja, o valor pode variar, é variável.
7.	Como são chamados os nomes de variáveis?
Identificador
8.	O que significa “declarar uma variável”?
Declarar uma variável significa dizer ao computador que precisa armazenar um valor em um espaço da memória com o nome escolhido do identificador.
9.	Posso criar duas variáveis como o mesmo “nome”, ou que, pelo menos para o programador, tenham o mesmo significado? Justifique.
Sim. Caso isto ocorra, as variáveis irão se comportar como variáveis diferentes, embora possuam o mesmo nome. Podemos dividir as variáveis quanto ao escopo em três tipos: variáveis locais, parâmetros formais e variáveis globais. Supondo que exista uma variável local e uma global com o mesmo nome, prevalece sempre a variável local. Porém por uma questão de clareza na escrita do código, a prática de nomear variáveis globais e locais com o mesmo nome não é recomendada.
10.	O que é uma atribuição?
A atribuição define ou redefine o valor armazenado no local de armazenamento indicado por um nome de variável (identificador).
11.	Qual palavra utilizamos como sinônimo do comando do sinal de atribuição?
Recebe.
12.	Quando atribuímos um novo valor a uma variável, o que acontece com o valor que ela já possui?
a.	O primeiro valor é somado com o segundo valor.
b.	O primeiro valor vai para a variável seguinte.
c.	O primeiro valor é perdido, pois uma atribuição é uma substituição.



13.	Qual a diferença do “ponto” e da “vírgula” no momento da escrita do código?
O ponto final, por exemplo, pode ser separador decimal, servir para chamar os métodos de uma classe, concatenar strings ou mesmo ser um operador/função inteiro em si só, dependendo da linguagem. Já a vírgula é um operador binário que serve para separar e avaliar expressões.
14.	O comando de escrita no console permite “misturar” vários tipos de dados? Em outras palavras: É possível escrever os valores de mais de uma variável, de tipos diferentes? Justifique.
Sim, permite. É possível escrever através do comando “console.log()” os valores de mais de uma variável independente do seu tipo, pois o comando é somente de escrita e não possui função de executar alterações nas variáveis a serem exibidas.
15.	Para quê usamos comentários na programação?
Comentários, como o próprio nome instiga, são notas que podem ser incluídas no código fonte para descrever o que se quiser. Assim, não modificam o programa executado e servem somente para ajudar o programador a melhor organizar os seus códigos.
16.	Quais os tipos de comentários existentes?
Existem 4 tipos de comentários:
/* para blocos de comentário */
// para linhas de comentário
/** para blocos de comentário de documentação */
/// para linhas de comentário de documentação

