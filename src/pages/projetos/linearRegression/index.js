import React from 'react'
import { BlockMath, InlineMath } from 'react-katex'

import Header from '../../../components/header'
import entradasEA from '../../../assets/images/linear-regression/EntradasEA_640x480.png'
import entradasIndicador from '../../../assets/images/linear-regression/entradasIndicador.png'
import linhasAnimadas from '../../../assets/images/linear-regression/linhas.gif'
import linhasExemplo from '../../../assets/images/linear-regression/linhas+entradas.png'

import '../styles.css'
import 'katex/dist/katex.min.css';

export default function CandleCountdown(){
  return(
    <div>
      <Header/>
      <div className="content-container container">
        <h1>Linear Regression</h1>
          <a target = "_blank" rel="noopener noreferrer" 
            href="https://www.mql5.com/pt/market/product/49702#">MQL market - Indicador</a><br/>
          <a target = "_blank" rel="noopener noreferrer" 
            href="https://www.mql5.com/pt/market/product/50016#">MQL market - Expert Advisor</a><br/>
          <h2>Fundamentação teórica</h2>
            <h3>Regressão Linear Simples</h3>
              <p>Trata-se de um método de aproximação de um conjunto de dados a 
                uma reta, ou seja, dado um conjunto de dados organizados em duas 
                dimensões como pontos, o método traça uma reta com a menor 
                distância possível entre todos os pontos. É utilizado para 
                modelar uma aproximação a fim de visualizar a tendência de um 
                grupo de dados e até mesmo para projeções de tendências futuras. </p>
              <p>A regressão linear recebe este nome por relacionar os dados em 
                uma função linear:</p>
                <p><BlockMath math="Y = \alpha + \beta X + e"/></p>
              <p>Considerando o conjunto de <InlineMath math="n"/> dados: </p>
                <p><BlockMath math="y_i = \alpha + \beta x_i + e_i, i = 1, ..., n"/></p>
              <p>Serão geradas <InlineMath math="n"/> equações e <InlineMath math="n+2"/>.
               Com essas equações será necessário 
               encontrar <InlineMath math="\alpha"/> e <InlineMath math="\beta"/> que 
               minimizam a soma dos quadrados dos erros, tal que:</p>
                <p><BlockMath math="e_i = y_i - (\alpha + \beta x_i), i = 1, ..., n"/></p>
              <p>Obtemos então a soma dos quadrados dos erros:</p>
                <p><BlockMath math="SQ(\alpha, \beta) = \sum^{n}_{i = 1} e^2_i = 
                \sum^{n}_{i = 1} {y_i - (\alpha + \beta x_i)}^2"/></p>  
              <p>Derivando em relação a <InlineMath math="\alpha"/> e <InlineMath math="\beta"/>: </p>
                <p> <BlockMath math=
                      "\begin{cases}
                        \frac{\partial SQ(\alpha, \beta)}{\partial \alpha} = 0\\
                        \frac{\partial SQ(\alpha, \beta)}{\partial \beta} = 0
                      \end{cases}
                      \iff
                      \begin{cases}
                        \alpha = \bar{y} - \beta \bar{x} \\
                        \beta = \frac{\sum^{n}_{i=1}x_iy_i - n \bar{x} \bar{y}}
                          {\sum^{n}_{i=1} x_i^2 - n \bar{x}^2}
                      \end{cases}"
                    />
                </p>
              <p>Onde <InlineMath math="\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}"/> e <InlineMath math="\bar{y} = \frac{\sum_{i=1}^{n} y_i}{n}"/></p>
          <h3>Estratégia</h3>
            <p>A linha de regressão traçada aproxima os preços de fechamento dos 
              candles do gráfico corrente indicando a tendência, as máximas acima 
              e mínimas abaixo da linha de regressão indicam os pontos de compra 
              e de venda respectivamente [2].</p>
            <p>As linhas de offset superior e 
              inferior é uma estratégia para aproximar e facilitar a visualização 
              das máximas e mínimas.</p>    
              <img src={linhasExemplo} alt="Exemplificação das entradas"/>


          <h2>Metodologia</h2>
            <h3>Indicador</h3>
              <p>O usuário deve configurar alguns parâmetros para a execução do indicador:</p>
              <p><ul>
                  <li>Tamanho da janela: número de candles que serão considerados 
                    para o cálculo da regressão linear;</li>
                  <li>Cor das linhas superior, de regressão e inferior;</li>
                  <li>Estilo da linha superior, de regressão e inferior;</li>
                  <li>Espessura da linha superior, de regressão e inferior;</li>
                  <li>Distância da linha superior à linha de regressão;</li>
                  <li>Distância da linha inferior à linha de regressão.</li>
                </ul></p>
              <img src={entradasIndicador} alt="Inputs do indicador"/>
              <p>Este indicador traça três linhas paralelas, a central é uma 
                linha de regressão com n definido pelo tamanho da janela configurada 
                pelo usuário, as linhas superior e inferior são cópias da linha 
                de regressão com um offset configurado pelo usuário.</p>
              <img src={linhasAnimadas} alt="Exemplificação do funcionamento do indicador"/>
            <h3>Expert Advisor</h3>
              <p>O expert advisor (EA) é baseado no indicador supracitado, 
                entretanto não desenha o indicador no gráfico, apenas executa uma 
                estratégia com base na linha de regressão traçada. </p> 
              <p>O usuário deve inserir:</p>
              <p><ul>
                <li>Tamanho da janela: número de candles que serão considerados 
                  para o cálculo da regressão linear;</li>
                <li>A quantidade de candles a serem considerados no cálculo da regressão linear;</li>
                <li>A distância para a linha superior;</li>
                <li>A distância para a linha inferior;</li>
                <li>Stop Loss. </li>
              </ul></p> 
              <img src={entradasEA} alt="Inputs EA"/>
              <p>O EA executa ordens de compra e de venda a mercado quando o valor 
                de uma das linhas, superior ou inferior, é atingida pelo preço 
                corrente, sendo que quando a linha inferior é atingida é executada 
                uma ordem de compra e quando a linha superior é atingida uma ordem 
                de venda é executada.</p>
        <h2>Resultados</h2>
          <p>Foram executadas otimizações genéticas utilizando o testador de estratégias do 
            Metatrader 5 na versão 5.00 build 2470, para otimizar o saldo máximo.</p>
          <h3>Teste 1</h3>
            <p>Parâmetros:</p>
            <p><ul>
              <li>Ativo: WINM20</li>
              <li>Período gráfico: 5 minutos;</li>
              <li>Data: 01/05/2020 a 01/06/2020;</li>
              <li>Modelagem: OHLC por 1 minuto;</li>
              <li>Depósito inicial demonstrativo: R$10000,00;</li>
              <li>Volume de negociação fixado em 1 contrato.</li>
            </ul></p> 
            <p>Melhor retorno:</p>
            <p><ul>
              <li>Lucro: R$2739,00;</li>
              <li>Lucro bruto: R$4889,00;</li>
              <li>Perda máxima: -R$2160,00;</li>
              <li>Número de operações: 186;</li>
              <li>Tamanho da janela otimizado: 40 candles;</li>
              <li>Limite superior otimizado: 26 pontos;</li>
              <li>Limite inferior otimizado: 100 pontos;</li>
              <li>Stop loss otimizado: 100.</li>
            </ul></p> 
          <h3>Teste 2</h3>  
            <p>Parâmetros:</p>
            <p><ul>
              <li>Ativo: WINM20</li>
              <li>Período gráfico: 5 minutos;</li>
              <li>Data: 01/05/2020 a 01/06/2020;</li>
              <li>Modelagem: OHLC por 1 minuto;</li>
              <li>Depósito inicial demonstrativo: R$10000,00;</li>
              <li>Volume de negociação fixado em 1 contrato;</li>
              <li>Stop loss fixado em 200 pontos.</li>
            </ul></p> 
            <p>Melhor retorno:</p>
            <p><ul>
              <li>Lucro: R$3141,00;</li>
              <li>Lucro bruto: R$4781,00;</li>
              <li>Perda máxima: -R$1640,00;</li>
              <li>Número de operações: 83;</li>
              <li>Tamanho da janela otimizado: 110 candles;</li>
              <li>Limite superior otimizado: 136 pontos;</li>
              <li>Limite inferior otimizado: 114 pontos;</li>
            </ul></p> 
        <h2>Referências</h2>
          <p>Regressão Linear Simples. In: MORETTIN, Pedro; BUSSAB, Wilton. 
            Estatística Básica. 6. ed. São Paulo - SP: Saraiva, 2010. cap. 16, p. 449-453.</p>
          <p>Regressão Linear. In: LEMOS, Flávio. Análise Técnica dos Mercados 
            Financeiros: Um Guia Completo e Definitivo dos Mercados de Negociação 
            de Ativos. São Paulo - SP: Saraiva, 2016. cap. 8.4, p. 215-217.</p>
              {/* <img src={entradas} alt="Exemplificação do tipo de exibição v1.02"/> */}


      </div>
    </div>
  )
}
