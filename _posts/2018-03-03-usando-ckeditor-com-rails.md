---
layout: post
title:  "Usando CKEditor com Rails"
date:   2018-03-03
excerpt: "CKEditor é um editor de texto e você pode querer utilizá-lo em seu projeto com Rails"
imagem: comics/ruby-lang.png
tag:
- ruby
- programacao
- tecnologia
- ckeditor
comments: true
---


![Gems everywhere!]({{ site.url }}/comics/gems.jpg)


# Usando CKEditor com Rails

Você tem um blog escrito em rails mas não existe formatação nas postagens? o CKEditor pode te ajudar, ele cria uma barra de formatação.

# Começando

Vamos começar criando um novo projeto através do comando `rails new blog` no terminal.

Abra o arquivo `Gemfile` e insira 
{% highlight ruby %}
  ...
    gem 'ckeditor'
  ...
{% endhighlight %}

Execute o comando `bundle install` no terminal 

Adicione a linha abaixo dentro do arquivo `config/initializers/assets.rb`;:

{% highlight ruby %}
  Rails.application.config.assets.precompile += %w( ckeditor/*)
{% endhighlight %}

Dentro do arquivo `config/routes.rb` digite `mount Ckeditor::Engine => '/ckeditor'` O resultado deve ser esse:

{% highlight ruby %}
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount Ckeditor::Engine => '/ckeditor'
end
{% endhighlight %}

Em `app/assets/javascripts/application.js` faça a importação do arquivo:

{% highlight ruby %}
  ...
  //= require ckeditor/init
  //= require_tree .
{% endhighlight %}

Para exemplificar melhor iremos criar um modelo de postagem para utilizar o CKEditor

{% highlight ruby %}
  rails g scaffold Post title body:text
{% endhighlight %}

Não costumo usar o scaffold com frequência porque pode viciar e você deixa de aprender muitas coisas utilizando esses comandos automatizados. Então, se liga!

Execute o comando `rake db:migrate` para criar a tabela no banco de dados.

Até este ponto o nosso formulário para inserção da notícia está assim:

![Formulário padrão Rails]({{ site.url }}/comics/form1.png)


Para inserir a barra de formatação iremos editar o arquivo partial que está localizado em `app/views/posts/_form.html.erb`, alterando a linha que contém `form.text_area` para `form.cktext_area`.

{% highlight ruby %}
  <%= form.cktext_area :body, id: :post_body, ckeditor: { language: 'pt-BR'} %>
{% endhighlight %}

Logo, o formulário deverá se apresentar desta forma:

![Formulário padrão CKEditor]({{ site.url }}/comics/form2.png)

Mas ao salvar um texto com edição ele aparecerá da seguinte forma:

![Texto bugado :O]({{ site.url }}/comics/body1.png)

Para corrigir isso basta adicionar o método `raw` antes da chamada do atributo body. Podemos alterar essa opção em `app/views/posts/show.html.erb`
{% highlight ruby %}
  <%= raw @post.body %>
{% endhighlight %}

E em `app/views/posts/index.html.erb`

{% highlight ruby %}
  <td><%= raw post.body %></td>
{% endhighlight %}

O resultado final deve parecer com este:

![Texto funcionando!]({{ site.url }}/comics/body2.png)

Essa é a forma básica de integração do CKEditor com um projeto Ruby on Rails, se ficou alguma dúvida ou outra coisa mais, pode entrar em contato comigo.