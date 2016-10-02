---
layout: post
title:  "Dados abertos"
date:   2016-06-25
excerpt: "Que tal falarmos sobre dados abertos?! Nunca ouviu falar? Chega mais!"
thumbnail: http://ap.imagensbrasil.org/images/thumbnail_opendata.jpg
tag:
- jekyll 
- blog
- dados
- informacao
- tecnologia
comments: true
---
 
![Moon Homepage](https://upload.wikimedia.org/wikipedia/commons/c/cc/Open_Data_stickers.jpg)    
    
<center><i>O conhecimento é aberto se qualquer pessoa está livre para acessá-lo, utilizá-lo, modificá-lo, e compartilhá‑lo — restrito, no máximo, a medidas que preservam a proveniência e abertura.</i></center>


Dados abertos correspondem à ideia de que alguns dados devem ser disponibilizados para que todos usem e publiquem, sem restrições de direitos autorais ou outros mecanismos de controle. Sujeitos, no máximo, à exigência de creditar a sua autoria e compartilhar a mesma licença.

Em 7-8 de dezembro de 2007, trinta pessoas se reuniram em Sebastopol, Califórnia, e definiram <b>oito princícpios básicos dos dados abertos governamentais:</b>

* <strong>Completos</strong>

Todos os dados públicos são disponibilizados. Há de se considerar <i>dados</i>,  informações eletronicamente gravadas, incluindo documentos, banco de dados, transcrições e gravações audiovisuais, mas sem limitar-se a estes. São ainda dados não sujeitos a limitações válidas de privacidade, segurança ou controle de acesso, regulamentadas por estatutos.

* <strong>Primários</strong>

Os dados são publicados tal como foram recolhidos da fonte, com o mais alto nível possível de granularidade, sem modificações.

* <strong>Oportunos</strong>

Os dados são disponibilizados tão rapidamente quanto necessário para preservar seu respectivo valor.

* <strong>Acessíveis</strong>

Os dados estão disponíveis para a mais ampla gama de usuários, para a mais ampla gama de propósitos.

* <strong>Processáveis por máquina</strong>

Os dados são razoavelmente estruturados para permitir o processamento automatizado.

* <strong>Não discriminatório</strong>

Os dados estão disponíveis para qualquer pessoa, sem necessidade de registro.

* <strong>Não proprietários</strong>

Os dados estão disponíveis em um formato sobre o qual nenhuma entidade tem controle exclusivo.

* <strong>Livre de licença</strong>

Os dados não estão sujeitos a qualquer regulações de direitos autorais ou outros mecanismos de controle. Restrições razoáveis de privacidade, segurança e controle de acesso podem ser permitidas na forma regulada por estatutos.


Foi afirmado ainda que a conformidade com esses princípios deve ser verificável e uma pessoa deve ser designada para responder às pessoas que tentam usar os dados e reclamações sobre violações dos princípios.
Apesar de tais princípios terem sido pensados para dados governamentais, pode-se aplicá-los, também, a dados abertos de modo geral (com a possibilidade de exceção do primeiro, já que este trata de dados do poder público).

## 5 motivos para abertura dos dados

Elaborado pelo [Tribunal de Contas da União](http://portal.tcu.gov.br/), a cartilha [5 motivos para a abertura de dados na Administração Pública](http://portal3.tcu.gov.br/portal/pls/portal/docs/2689107.PDF) apresenta razões para que as organizações públicas federais invistam em iniciativas de abertura de dados governamentais. 

* Transparência na gestão pública;
* Contribuição da sociedade com serviços inovadores ao cidadão;
* Aprimoramento na qualidade dos dados governamentais;
* Viabilidade de novos negócios;
* Obrigadoriedade por lei;

## Minha experiência com dados abertos

Recentemente, e de forma um tanto quanto amadora, eu pude experimentar o uso de dados abertos. De início foi um pouco complicado de entender o funcionamento e até me perguntei se seria útil a informação com a qual desejei trabalhar, <strong>dados sobre os bens tombados de Fortaleza</strong>. 
Mas à medida que fui atingindo minha solução percebi o quanto é interessante esse tema.


No portal [Fortaleza dados abertos](http://dados.fortaleza.ce.gov.br/portal/) eu baixei o geoJson com os dados sobre tombamentos na cidade de Fortaleza e criei um mapa no qual o usuário pode verificar a localidade dos bens tombados ou em processo de tombamento, bem como escolher uma rota de um determinado ponto definido por ele, a um dos pontos de tombamento.

Considero a aplicação simples, claro. Porém foi uma experiência que ampliou minha vontade contribuir para a sociedade de alguma forma positiva. Passamos diariamente por esses locais e muitas vezes desconhecemos sua história. Existem pontos que eu não sabia se eram tombados ou estavam em processo de tombamento. Pretendo seguir com mais projetos usando dados abertos.

Se você quiser conferir a aplicação, pode acessá-la pelo <b> [link]({{ site.url }}/projects/bens-tombados) </b>.

## Preview

{% capture images %}
    http://ap.imagensbrasil.org/images/tela_1.png
    http://ap.imagensbrasil.org/images/tela_2.png
    http://ap.imagensbrasil.org/images/tela_3.png
    
{% endcapture %}
{% include gallery images=images caption="Screenshots da aplicação" cols=3 %}

---

## Referências

* [Tribunal de contas da união](http://tcu.gov.br) - [Dados Abertos](http://portal.tcu.gov.br/comunidades/fiscalizacao-de-tecnologia-da-informacao/atuacao/destaques/dados-abertos.htm)

* [Open Government Data](https://opengovdata.org/) - [Original 8 principles](https://public.resource.org/8_principles.html)

* [Portal Brasileiro de dados abertos](http://dados.gov.br/dados-abertos/)
