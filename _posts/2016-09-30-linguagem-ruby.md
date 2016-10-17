---
layout: post
title:  "Ruby - Uma linguagem divertida"
date:   2016-09-30
excerpt: "Uma abordagem rápida sobre a linguagem de programação ruby com alguns exemplos!"
imagem: comics/ruby-lang.png
tag:
- ruby 
- programacao
- tecnologia
comments: true
---

![Moon Homepage]({{ site.url }}/comics/lang-ruby.jpg)
<center><i>Ruby</i></center>

# Sumário

* Histórico
* Principais características
* Palavras reservadas, variáveis e escopo
* Tipos de dados
* Estruturas de control
* Módulos
* Abstração
* Paradigmas

# Histórico

A linguagem teve sua criação iniciada em fevereiro de 1993 por Yukihiro Matsumoto, mais conhecido como Matz, que pretendia criar uma nova linguagem misturando programação funcional com programação imperativa e que fosse mais poderosa do que Perl e mais orientada a objetos do que Python. Assim, em 1995, <strong>Ruby</strong> foi apresentada ao público.

Após o lançamento da versão 1.9 em 1993, iniciou-se a primeira lista de discussão em inglês, chamada Ruby-Talk. E com a ajuda de Dave Thomas e Andy Hunt foi lançado em setembro de 2000 o primeiro livro em inglês, <i>programming ruby</i>, que foi impresso e posteriormente liberado gratuitamente para o público, ajudando a popularizar o ruby.

# Características

* <strong>Orientação a objetos</strong> - Tudo em Ruby é um objeto, não existindo tipos primitivos.
* <strong>Herança simples</strong> - Uma classe pode herdar estados e comportamentos apenas de uma única classe.
* <strong>Metaprogramação</strong> - É a capacidade de escrever ou manipular outros programas em tempo de execução.
* <strong>Interpretada</strong> - O código não necessita de compilação, é interpretado por uma máquina virtual.

# Palavras reservadas, variáveis e escopo

| 										 |
|:-------:|:-------:|:--------:|:--------:|
| BEGIN   | case    | if   	   | or 	  |
|----
| break   | else  	| not      | self	  |
|----
| do   	  | for    	| return   | unless   |
|----
| false   | nil    	| undef    |  begin   |
|----
| next    | retry  	| yield    | defined? |
|----
| rescue  | true   	| and      | ensure   | 
|----
| then    | while  	| def      | module   |
|----
| when    | alias  	| end      | redo     | 
|=====
| END 	  | class  	| in       | until 	  |
{: rules="groups"}


# Variáveis

### Variáveis locais começam com letra minúscula ou <i>underscore</i>:
* alpha
* _ident
* some_var

### Variáveis globais começam com $:
* $beta
* $B12Vitamin
* $NOT_CONST

### Variáveis de instância começam com @:
* @foobar
* @id
* @NOT_CONST

### Variáveis de classe começam com @@:
* @@my_var
* @@NOT_CONST
* @@name

### Constantes começam com letra maiúscula ou em <i>UpperCase</i>:
* K9chip
* MAX_VALUE
* VALUE

# Escopo

A delimitação do escopo se dá por meio das palavras reservadas "def" e "end", para começo e término do escopo respectivamente.
{% gist 2168014a6bc784a70599edce24763cbc %}

## Declaração em paralelo
{% gist 180e65f00947f9fb3be23a2ff4a4e6d5 %}

# Tipos de dados

Como dito antes, em ruby não exite tipo primitivo. Por isso, nesta seção veremos os tipos de dados existentes na linguagem e algumas peculiaridades.

## Tipagem Forte

* O interpretador ruby diferencia operações em variáveis de tipos diferentes, ondeo tipo é determinante para o sucesso da operação.
{% gist 725cf5ef9881a49a95e3a063d3536613 %}


## Tipagem Dinâmica

* A linguagem permite que o tipo da variável possa ser alterado durante a execução do programa.
{% gist f28b8fba02ae90e630a3bb7f392756e4 %}

# Fixnum

 * São números inteiros de 31 bits de comprimento, sendo 1 bit para armazenar o sinal e 1 bit para indicar que a referência corrente é um Fixnum.

 * Tipos Fixnum tem uma característica interessante que ajuda na manipulação mais rápida pela linguagem, que os define como <i>immetiate values</i>, que são tipos de dados apontados por variáveis que armazenam seus valores na própria referência e não em um objeto que teve memória alocada para ser utilizado agilizando bastante o uso.

 {% gist 546ab9c8c7f71a7ce5dccc2c45e634f1 %}

# Bignum

* São números que excedem o limite do Fixnum.

* Bignums alocam memória, diferente do tipo Fixnum e outros tipos que são <i>immediate values</i>.

> Podemos ver isso, criando algumas variáveis apontando para o mesmo valor de Bignum e observar que cada uma tem um object_id distinto.

{% gist f01a2c35f0557a7e3aa1bd0fa0f38f2c %}

# Ponto Flutuante

> Nas referências que encontrei, o Float não era um immediate values, porém nos testes feitos por mim ele se comportou como tal. Uso a versão 2.3 do Ruby, talvez nessa versão ele já possua tal característica.

{% gist 32087b72b8b2b8a7dfa768d08ce19273 %}


# Racionais

* Ao contrários dos outros tipos, declaramos números racionais usando a classe Rational.

{% gist 18fb16024170859fd3b9ae6513ef9d9d %}


# Booleanos

{% gist f3ef100bc8f3d3104ad72234e8a65056 %}

# String

* São uma cadeia de caracteres que podemos criar delimitando-os com aspas simples ou duplas: "Gleidson", 'gleidson'.

* Podemos criar strings com várias linhas, usando o conceito de <i>heredoc</i>.

{% gist fc0020b3927cfc50d5144a639e0bd014 %}

* Para cada string criada teremos espaço alocado em memória, tendo um object_id distinto para cada.

{% gist bd1f27fb2d8b3354fa376d4fd7d9d93b %}

## Substring

São pedaços de uma String. Podemos tratar a string com um array.

{% gist 6967ac1d615acc1d78ec91593676897b %}


# Array

Podemos definir como objetos que contém coleções de referências para outros objetos. E ainda, conter tipos de dados diferentes.

{% gist 14a5e53c3d9b253c31b9a3a7e10d3a37 %}

Existe um atalho que nos permite economizar digitação com as aspas.

{% gist 7f040ea82442f18642d3ffd102493127 %}

É possível criar arrays com tamanho inicial pré-definido utilizando o tamanho na criação do objeto.

{% gist eda0ba11e980e4c0bff5d70fe757a8f3 %}


# Hashes

{% gist b86be4d64ab5204f592400a62969e681 %}


# Estruturas de controle


## Condicionais


* ## if

{% gist f92753814f188e81fd26a899f3de9e5c %}

Caso o interesse seja apenas o resultado verdadeiro do if, podemos usar a sintaxe que permite uma 'leitura' do código.

{% gist 2d3773c65d44f5225588fa287d804692 %}


* ## unless (a menos que)

Forma negativa do if

{% gist 0ec792646de01c3263ef9652e3fe1ba8 %}


## Loops


* ## while

{% gist 5e8bd2c607c9969b22d9307ba8dcca7d %}

* ## for

{% gist 6627a461a665ceb71ed95fe34e04c890 %}


Temos algumas maneiras de interagir dentro de um loop:

* <strong>break</strong> - Sai do loop;
{% gist 4765830f5ef6fbdbbe0c79bcda836220 %}

* <strong>next</strong> - vai para a próxima iteração;
{% gist 281a41fd65331a080e62b47ab31f1495 %}

* <strong>return</strong> - sai do loop e do método onde o loop está contido;
{% gist 31f017f1b84bc669bd0f30577f5e1360 %}


* ## lambda

Blocos de códigos que podem ser associados à uma variável.

{% gist 30f2424d816f479fa8640699277e493c %}


# Módulos

Ruby possui herança simples, mas conta com o conceito de módulos, mais conhecidos como <strong><i>Mixins</i></strong>. Dessa forma podemos mixar várias características de módulos em uma classe.

Mídia, que representa a classe 'mãe'.
{% gist 57b83807461168dae38dbe29923d40de %}

Módulo <i>FormatadorMoeda</i>, que possui um método de interesse da classe livro.
{% gist f391ace7250ae56f92d86d723fab86b8 %}

A classe livro, 'filha' de Mídia. Herda o comportamento da classe mídia e inclui o módulo <i>FormatadorMoeda</i> para ter acesso às suas características.
{% gist 06797286cb7b2f76290f8f86f3f5c739 %}

# Abstração

É uma visualização ou representação de uma entidade que inclui somente atributos de importância em um contexto particular.

* Varia de acordo com o contexto.
* É uma vantagem conta a complexidade da programação.
* Simplifica o desenvolvimento.
* É necessário na realização de uma modelagem conceitual.

## Tipos de abstração

* <strong>Abstração de processos</strong> - São referentes ao fluxo de controle.
* <strong>Abstração de dados</string> - São referentes às estruturas de dados.

## Tipos abstratos de dados

* <strong>Nativos</strong> -  Ponto flutuante, Fixnum, Bignum, etc.
* <strong>Definidos pelo usuário</strong> - Estruturas de dados propriamente ditas. <i>Pilhas, Filas, Árvores, etc.</i>

Implementação de uma pilha
{% gist fa9ce00d2a2cb2209d1e9ec019cea3df %}

Implementação de uma fila
{% gist 8773b2474f5ccfefbdcb86c13aba17d4 %}

Implementação de uma Árvore
{% gist e223dcdc06a4daa02f40dee1e368fe9b %}


# Paradigma

É um modelo que o programador possui para estruturar e executar um programa. Tal modelo determina uma forma de abordar os problemas e de formular respectivas soluções.

Ruby obedece vários paradigmas diferentes, como orientação a objetos, concorrência  e funcional.

## Paradigma concorrente

* Dois ou mais fluxos de execução sequenciais podem ser executados concorrentemente.
* Existe a necessidade de comunicação entre os fluxos, em virtude da troca de informações e sincronização.
* O sincronismo serve para evitar a condição de disputa, tornando a computação um pouco mais determinística.

Existem dois tipos de concorrência: Programas separados, a nível de programas e Threads, a nível de subprogramas.

Implementação de uma Thread

{% gist 93b9fa919cd57b0dbedbdb98eb20e45f %}

## Paradigma de orientação a objetos

Os objetos se comunicam através de mensagem. A mensagem é uma chamada de um método e podemos caracterizá-la por:

* <strong>Receptor</strong> - estados
* <strong>Método</strong> - add, remove
* <strong>Argumentos</strong> - est1, id, name

Os principais conceitos de orientação objetos são <strong>Classes, Objetos, Herança</strong>

### Classes

Uma coletânea ou coleção de objetos que tenham algo comum entre si. O critério de similaridade é definido previamente pelo programador durante a modelagem.

É necessário a definição de atributos e métodos para formatação do "perfil" do objeto (estado e comportamento).

* <strong>Atributo</strong> - Referente às características do objeto.

* <strong>Métodos</strong> - Referente ao comportamento do objeto.

> Classes funcionam como um modelo para gerar objetos.

### Herança

É um mecanismo existente em programação orientada a objetos que permite o reuso de uma estrutura e do comportamento de uma classe, ao definir novas classes. Pode ocorrer a nível de atributo/método e relacionamento.

Classe a ser herdada.
{% gist 0ccf5301441cd422249efde3ac27376c %}

Observe que o método to_s, já existente na classe Carro, foi sobrescrito com uma pequena alteração. 
{% gist 88cdbb731648a43b97b0a2244a0ce646 %}

O objeto <i>carro1</i> é do tipo <i>Carro</i>, enquanto o objeto <i>novo_carro</i> é do tipo <i>CarroNovo</i>, que também é um carro. Mas possui o método to_s diferente do tipo Carro. Podemos verificar isso executando o método de ambos os objetos e vendo o resultado impresso.
{% gist d715729d026395529d31d098bbe9f16b %}


## Paradigma funcional

* O Objetivo principal é imitar funções matemáticas, recebendo um argumento como entrada e retornando um valor.	
* Os mesmos parâmetros sempre produzem o mesmo resultado.
* Não utiliza variáveis ou instruções de atribuição, sendo assim, o programador se abstrai do gerenciamento de memória.
* Simplifica a semântica da linguagem funcional.
* Não existe estado do programa em termos operacionais.

### each

A forma mais simples de iterar sobre um array, ou vários objetos. No entanto ele faz uso de funções como parâmetros, o que pode deixar o nosso código mais interessante.

{% gist fd28c23defc43f4e42b44efd9ffbdfe6 %}

### inject

Ainda temos uma variável temporária no nosso código que mantém o total da soma dos elementos array. Podemos usar o inject para nos livrarmos dela.

{% gist fa3d9a859bc81f3c3ba8d8b4eb1cf55b %}

O inject, assim como outras funções que aceitam funções como parâmetro, pode ser simplificado utilizando um recurso do ruby que transforma um símbolo em uma função.

{% gist 71d9b98e1911ca171a8da43acdfd58e8 %}

### select/reject

Ruby provê duas funções bem interessantes chamadas <i>select</i> e <i>reject</i>. Como o nome diz, elas vão selecionar ou rejeitas os elementos do conjunto baseado em um determinado critério.


O código abaixo retorna um novo array contendo apenas os elementos em que a chamada do método <i>even?</i> retorna verdadeiro.
{% gist febb525290dd046530df97f3e155184c %}

Mas, podemos reduzir esse código utilizando a mesma técnica.
{% gist cf2608c1d63a0e340536ce785ad52f8c %}

Com o reject seria a mesma coias. Para obeter apenas os números pares, podemos rejeitar os números ímpares.
{% gist 4c0ec53a594058fcc547566020f009b3 %}


# Bibliografia


* [Conhecendo Ruby](https://leanpub.com/conhecendo-ruby), Eustáquio Rangel
* [The Ruby Way 3ª edição](http://therubyway.io), Hal Fulton
* [Ruby - Aprenda a programar na linguagem mais divertida](https://www.casadocodigo.com.br/products/livro-ruby), Casa do Código

<i>O arquivo em PDF desta apresentação se encontra [aqui](https://github.com/gleidsonf/ruby-cc/raw/master/clp_ruby_apresentacao.pdf).</i>
