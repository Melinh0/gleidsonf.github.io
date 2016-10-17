---
layout: post
title:  "Javascript: O caminho"
date:   2016-10-17
excerpt: "Primeiro conteúdo sobre os caminhos javascript!"
imagem: comics/javascript-java.jpg
tag:
- javascript
- programacao
- estudo
- fullstack
comments: true
---


![Javascript comic]({{ site.url }}/comics/javascript-java.jpg)

# Sumário

* Introdução
* Histórico
* Características
* <strong>Parte 1: Javascript básico </strong>
	* Estrutura lexical <i>(ainda nesse post)</i>
	* Tipos, valores e variáveis
	* Expressões e operadores
	* Declarações
	* Objetos
	* Arrays
	* Funções
	* Classes e módulos
	* Comparação de padrões com expressões regulares
	* Subconjuntos e extensões de javascript
	* Javascript do lado do servidor
* <strong>Parte 2: Javascript do lado do cliente </strong>
	* Javascript em navegadores web
	* O objeto Windows
	* Escrevendo script de documentos
	* escrevendo script de CSS
	* Tratando eventos
	* Scripts HTTP
	* A biblioteca jQuery
	* Armazenamento no lado do cliente
	* Mídia e gráficos em scripts
	* APIs de HTML5


# Introdução

Olá! Essa é mais uma postagem sobre meus estudos, dessa vez falando sobre JavaScript. Por ser um assunto muito abrangente, vou dividir em diversas postagens. Cada subitem das partes 1 e 2 será uma postagem diferente, o que talvez gere pouco conteúdo por postagem, ou não. Acredito que com essa separação por tópicos consigo explicar e detalhar melhor o assunto do que tratar num apanhado geral de apenas uma postagem. Estou utilizando o livro <i>JavaScript: The Definition Guide, 6th Edition</i>.

# Histórico

Javascript foi desenvolvido por <i>Brendan Eich</i> quando trabalhou na Netscape sob o nome de <i>Mocha</i>, posteriormente teve seu nome alterado para <i>LiveScript</i> e por fim <i>JavaScript</i>. Lançada oficialmente na versão beta do navegador Netscape 2.0, em setembro de 1995 como LiveScript, mas teve seu nome alterado em um anúncio conjunto com a Sun Microsystems em dezembro de 1995 quando foi implementado no navegador Nescape versão 2.0B3.

Em novembro de 1996 a Netscape anunciou que tinha submetido JavasScript para Ecma International, como candidato a padrão industrial e o trabalho subsequente resultou na versão padronizada chamada <strong>ECMAScript</strong>.


# Características


* <strong>Interpretada</strong>: Não há necessidade de compilação do código, a linguagem é interpretada diretamente pelo navegador.
* <strong>Case-sensitive</strong>: Em JavaScript se deve respeitar as maiúsculas e minúsculas. Ex: <i>Nome</i> é diferente de <i>nome</i>
* <strong>Client-side</strong>: O próprio navegador do cliente é o encarregado de interpretar as instruções JavaScript e executá-las para realizar as operações programadas.
* <strong>Tipagem Fraca</strong>: JavaScript não diferencia operações de tipos diferentes. 
* <strong>Tipagem Dinâmica</strong>: É permitido que o tipo da variável possa ser alterado durante a execução do programa.
* <strong>Orientada a Objetos</strong>.


# Estrutura Lexical

A estrutura lexical de uma linguagem de programação diz respeito ao conjunto de regras que especifíca com você deve escrever o código. Especifica, por exemplo, as regras de denominação de variáveis, caracteres delimitadores para comentários e separação de instruções.


## Comentários

JavaScript suporta dois estilos de comentários. Texto precedido de // ou texto entre os caracteres /* e */

{% gist 24fb7d42b5ef2b1033eadcb6f85da4b0 %}

{% gist beaff09b3f165abb1dfb23eef143e1a9 %}


## Literais

Literais representam valores fixados, não variáveis, que você <i>literalmente</i> insere em seu código.

{% gist 483e2189e8cdcfd34ad5047b0834ba39 %}

## Identificadores e Palavras reservadas

Identificadores são usados para nomear variáveis, funções e etiquetas para certos loops no código. Deve começar com uma letra, um underscore ou cifrão, estes dois últimos devem ter letras como caracteres subsequentes. Exemplos:

* _idade
* idade
* $idade
* idade_aluno
* motor6

Por uma questão de portabilidade e facilidade na edição, é comum usar apenas caracteres do padrão ASCII e dígitos. Entretanto, o JavaScript permite que usemos também caracteres do padrão Unicode, nas categorias <i>Mn</i>, <i>Mc</i> e <i>Pc</i>, desde que seja usado após o primeiro caractere. Isso permite que programadores usem caracteres diferentes da linguagem inglesa e símbolos matemáticos. Ex:
`var sí = true;` ou `var π = 3.14;`.

## Palavras reservadas

Como qualquer outra linguagem, JavaScript reserva certos identificadores para fins específicos da linguagem. Essas palavras não podem ser usadas como identificadores regulares. Vejamos algumas:



| 										 			|
|:-------:|:-------:|:--------:|:--------:|:-------:|
| break   | delete  | function | return	  |	typeof	|
|----
| case    | do  	| if       | switch	  | void	|
|----
| catch   | else    | in       | this 	  | while	|
|----
| continue| false   | var 	   |  throw   | with	|
|----
| debugger| finally | new  	   | true     | instanceof|
|=====
| default | for   	| null     | try      | 		|
{: rules="groups"}

Há algumas palavras que não são usadas na atual versão, mas podem ser utilizadas no futuro. ECMAScript 5 reserva as seguintes:

| 										 								 |
|:-------:|:-------:|:--------:|:--------:|:-------:|:--------:|:-------:|
| class   | const   | enum	   | export	  |	extends	| import   | super	 |
|:-------:|:-------:|:--------:|:--------:|:-------:|:--------:|:-------:|
{: rules="groups"}


## Ponto e vírgula Opcional

Tal como algumas linguagens de programação, JavaScript usa ponto e vírgula (;) para separar declarações. Isso é necessário para deixar o código mais 'limpo' pois sem um separador o final de uma instrução pode ser o começo de outra, ou vice-versa. Em JavaScript podemos omitir o ponto e vírgula entre duas declarações, desde que estas estejam em linhas separadas. Da mesma forma podemos omitir o ponto e vírgula da linha que antecede uma chave '}'. Apesar de poder ser omitido em diversas ocasiões, é comumente usado o ponto e vírgula nas extremidades. 

