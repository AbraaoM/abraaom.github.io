---
title: Contagem regressiva do candle
date: 2020-04-09
update: 2021-02-14 12:50:19
categories: 
    - [pt-br, projects]
tags:
    - mql5
---
# Introdução

Pessoas que realizam operações financeira em mercados financeiros muitas vezes utilizam gráficos de preços para visualizar o movimento do mercado e embasar suas decisões, um tipo de gráfico comum para este fim é o gráfico de candles, esse tipo de gráfico gera uma vela com indicações de preços de abertura, fechamento, máxima e mínima em um determinado período de tempo, terminado esse período uma nova vela começa a ser formada. O intuito deste trabalho é criar um cronômetro que indique a quantidade de tempo restante para o fechamento da vela corrente, oferecendo ao trader mais uma ferramenta que facilita a compreensão do gráfico.

<!--more-->

<a target = "_blank" rel="noopener noreferrer" href="https://www.mql5.com/pt/code/28175">Repositório MQL5 CodeBase</a><br/>
<a target = "_blank" rel="noopener noreferrer" href="https://github.com/AbraaoM/CandleCountdown">Repositório Github</a>

# Metodologia

A função padrão OnCalculate possui entradas padronizadas que possibilitam a obtenção de algumas informações do ativo negociado uma delas é a informação de hora de abertura do candle, utilizando essa informação juntamente com a do período corrente no gráfico e o horário atual a contagem regressiva é calculada seguindo a seguinte equação:

<div align = "center">
HR = HAb - HAt + P
</div>

HR = Horário instantâneo para a contagem regressiva;

HAb = Horário de abertura do candle corrente;

HAt = Horário atual (último recebido pelo servidor);

P = Período corrente no gráfico em que o indicador está aplicado.

# Resultados e discuções

## v1.00

<div align = "center">
<img src="{% asset_path cd-v100.gif %}" alt="Exemplificação do tipo de exibição v1.00"/>
</div>

Nesta versão a exibição é feita por meio da função Comment, ou seja, o contador aparecerá no canto superior esquerdo do gráfico.

Neste tipo de visualização o contador fica discreto e não interfere leitura do gráfico, embora seja de difícil leitura pelo tamanho da fonte padrão do método de exibição utilizado.

## v1.01

<div align = "center">
<img src="{% asset_path cd-v101.gif %}" alt="Exemplificação do tipo de exibição v1.01"/>
</div>

Adicionada exibição utilizando objetos. Foi criado um objeto do tipo label e ancorado no topo superior direito, é possível editar o tamanho da fonte e a cor.

Também foi adicionada a possibilidade de escolher entre os tipos de exibição, “comment” ou “Big Number”.

## v01.02

<div align = "center">
<img src="{% asset_path cd-v102.gif %}" alt="Exemplificação do tipo de exibição v1.02"/>
</div>

Adicionada a exibição ainda por meio de objetos, mas agora com um objeto do tipo text, que é criado e movido de forma a seguir o preço de fechamento do último tick.

É recomendável utilizar neste modo “On Price” uma fonte menor do que no modo “Big Number”.

Nas exibições "Big number" e "On price" o usuário pode escolher a melhor forma de visualização do contador em termos de tamanho, cor e estilo da fonte.

<div align = "center">
<img src="{% asset_path cd-entradas.png %}" alt="Exemplificação dos entradas"/>
</div>