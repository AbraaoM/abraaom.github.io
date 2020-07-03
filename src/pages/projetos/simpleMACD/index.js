import React from 'react'
//import { BlockMath, InlineMath } from 'react-katex'

import Header from '../../../components/header'

import '../styles.css'
//import 'katex/dist/katex.min.css';

export default function SimpleMACD(){
  return(
    <div>
      <Header/>
      <div className="content-container container">
        <h1>Simple MACD</h1>
          <a target = "_blank" rel="noopener noreferrer" 
              href="https://www.mql5.com/pt/market/product/51685">
            MQL market
          </a><br/>
          <h2>Fundamentação teórica</h2>
            <p>
            O MACD utiliza duas médias móveis, subtraindo a média móvel maior da menor, é 
            traçada uma linha de referência em zero, o MACD oscila acima e abaixo da linha 
            de zero sendo que:
            </p>
            <p><ul>
              <li>Maior que zero: médias convergem;</li>  
              <li>Igual a zero: médias atravessando;</li>
              <li>Menor que zero: médias divergem.</li>
            </ul></p>
            <p>
              No indicador clássico são utilizadas médias móveis de 12 e 26 períodos, como 
              médias maior e menor para o cálculo do indicador, e uma média de 9 períodos 
              é utilizada junto com o MACD como uma linha de sinal que indica viradas de 
              tendência. Todas as médias são calculadas com base em preços de fechamento de 
              candles. Podem ser utilizadas médias móveis diferentes a depender da situação.
            </p>
            <p>
              Quando o MACD cruzar a linha de zero para cima, há um sinal de compra, quando 
              o MACD cruzar a linha de zero para baixo , há um sinal de venda.  [1]
            </p>
          <h2>Metodologia</h2>
            <h3>Indicador MACD</h3>
              <p>
                O robô de negociação, ou Expert Advisor (EA), foi escrito na linguagem mql5 
                tem como base o indicador MACD disponibilizado na biblioteca nativa da linguagem, 
                esse indicador utiliza três médias aritméticas com a quantidade períodos 
                programáveis pelo usuário, utilizando sempre os preços de fechamento do período 
                (candles) para a os cálculos, a duração de cada período é sempre igual a corrente 
                no gráfico onde o EA está aplicado. 
              </p>
            <h3>Estratégia de negociação MACD</h3>
              <p>
                O cálculo do MACD é executado uma vez a cada tick, e são considerados para fim 
                de cálculo os três últimos resultados, para analisar o cruzamento da linha de 
                zero, ou seja quando o último resultado for maior que 0 e o antepenúltimo não 
                então há um cruzamento para cima e analogamente para baixo, quando um cruzamento 
                é constatado o estado de uma variável de controle é alterado de "false" para 
                "true", permitindo o abertura de uma posição caso a média de sinal também cruze 
                a linha de zero, a medida do cruzamento é feita pelo mesmo método do cruzamento 
                do MACD.
              </p>
            <h3>Limitadores</h3>
              <h4>Stop Loss (SL) e Take Profit (TP)</h4>
                <p>
                  Todas as posições abertas são configuradas com SL e TP caso ele seja configurado 
                  diferente de zero ao iniciar o EA. A base para a operação, e consequentemente 
                  para a colocação dos stops, são os níveis de ask para as compras e bid para as 
                  vendas.
                </p>
              <h4>Volume</h4>
                <p>
                  Caso o volume de contratos a serem negociados configurado pelo usuário não 
                  esteja de acordo com o necessário para o ativo do gráfico, uma mensagem de 
                  advertência é exibida informando o erro e como corrigi-lo. Será executado ao 
                  inserir o EA no gráfico e tentar realizar uma negociação, que será impedida.
                </p>
              <h4>Intervalo de tempo</h4>
                <p>
                  É possível configurar os horários de início e fim da possibilidade de abertura 
                  de posições pelo EA, caso o controle esteja habilitado ao se inserir o EA no 
                  gráfico fora do horário definido uma mensagem de advertência é exibida informando 
                  o horário configurado. 
                </p>
              <h4>Limite de ganhos e perdas diário</h4>
                <p>
                  Caso o limite de ganhos ou perdas financeiros diários configurado pelo usuário 
                  seja atingido, uma mensagem é exibida informando o limite atingido, todas as 
                  posições abertas são finalizadas e não serão abertas novas posições no dia. 
                </p>
          <h2>Resultados</h2>
            <p>
              [1] Moving Average Convergence/Divergence (MACD). In: LEMOS, Flávio. Análise 
              Técnica dos Mercados Financeiros: Um Guia Completo e Definitivo dos Mercados 
              de Negociação de Ativos. São Paulo - SP: Saraiva, 2016. cap. 9.3.2, p. 245-249.
            </p>

      </div>
    </div>
  )
}
