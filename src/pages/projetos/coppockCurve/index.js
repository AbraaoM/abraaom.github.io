import React from 'react'
import { BlockMath, InlineMath } from 'react-katex'

import Header from '../../../components/header'
import geral from '../../../assets/images/coppock-curve/geral_640x480.png'
import inputs from '../../../assets/images/coppock-curve/inputs_640x480.png'
import trend from '../../../assets/images/coppock-curve/trend_640x480.png'
import otimizationWIN from '../../../assets/images/coppock-curve/otimizationWIN.png'
import otimizationInputsWIN from '../../../assets/images/coppock-curve/otimizationInputsWIN.png'


import '../styles.css'
import 'katex/dist/katex.min.css';

export default function CoppockCurve(){
  return(
    <div>
      <Header/>
      <div className="content-container container">
        <h1>Coppock curve</h1>
          <a target = "_blank" rel="noopener noreferrer" 
            href="https://www.mql5.com/pt/market/product/51926">MQL market</a><br/>
          
          <h2>Fundamentação teórica</h2>
            <h3>Rate of Change - taxa de mudança (ROC)</h3>
              <p>
                O ROC é um oscilador que flutua acima e abaixo de uma linha de zero, medindo 
                a variação percentual de preços ao longo de determinado período. <br/>
                O ROC de 20 períodos mede a variação percentual de preços ao longo de 20 
                períodos, quanto maior a diferença entre o preço atual e o de 20 períodos atrás,
                maior o valor do ROC. Quando o indicador está acima de zero, a variação percentual 
                é positiva indicando tendência bullish, se o indicador está abaixo de zero, 
                analogamente, há indício de tendência bearish. [1]
              </p>
              <p><BlockMath math="ROC = \frac{C - C_n}{C_n} * 100"/></p>
              <p><InlineMath math="C"/> = Preço de fechamento atual;</p>
              <p><InlineMath math="C_n"/> = Preço de fechamento de n períodos atrás.</p>  
            <h3>Curva de Coppock</h3>
              <p>
                A Curva de Coppock é um método desenvolvido pelo economista Edwin Coppock, em 
                1965. O objetivo do indicador é identificar oportunidades de longo prazo de 
                compra no S&P500 e Dow Industrials. Coppock usava o método apenas para indicar 
                sinais de compra, mas também é possível aplicar a técnica de análise analogamente 
                para vendas, assim como muitos analista utilizam.<br/>
                Quando a linha do indicador cruza do território negativo para o positivo, há um 
                sinal de compra, analogamente, um sinal de venda. [2]
              </p>          
              <p>
                O indicador original, projetada para uso em escala mensal, utilizando duas ROC 
                de 14 e 11 meses, e uma média ponderada de 10 períodos:
              </p>
              <p><BlockMath math="MMP = \frac{\displaystyle\sum_{i=0}^n close(i)*i}{\displaystyle\sum_{i=0}^n n}"/></p>
              <p><BlockMath math="Coppock = MMP10 [ROC14 + ROC11]"/></p>
          <h2>Metodologia</h2>
            <h3>Indicador</h3>
              <img src={geral} alt="Exemplificação do indicador"/>
              <h4>Inputs:</h4>
                <p>
                  <ul>
                    <li>Número de períodos utilizados no cálculo da MMP, por padrão 10;</li>
                    <li>Número de períodos utilizados no cálculo da ROC "menor", por padrão 11;</li>
                    <li>Número de períodos utilizados no cálculo da ROC "maior", por padrão 14.</li>
                  </ul>
                </p>
                <p>
                  São utilizados os preços de fechamento para o cálculo das ROCs, percorrendo o 
                  array de preços do início ao fim, exibindo cálculos para todos os dados 
                  disponibilizados no gráfico.<br/>
                  O indicador é exibido em uma janela separada do gráfico em forma de histograma 
                  tal que, acima da linha de zero o indicador é colorido de verde e abaixo colorido 
                  de vermelho, facilitando a visualização.
                </p>
            <h3>Expert</h3>
              <img src={trend} alt="Exemplificação do expert"/>
              <p>
                O expert é baseado no indicador anteriormente descrito, é possível configurar o 
                volume envolvido nas negociações, os limitadores, que ainda serão detalhados, e 
                as configurações que serão aplicadas ao indicador.
              </p>
              <h4>Estratégia de negociação</h4>
                <p>
                Todas as vezes que a curva de Coppock cruza a linha de zero para cima, há um 
                sinal de compra, quando a curva cruza a linha de zero para baixo, há um sinal de 
                venda.
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
                  Todas as posições abertas são configuradas com SL e TP caso ele seja configurado 
                  diferente de zero ao iniciar o EA. A base para a operação, e consequentemente 
                  para a colocação dos stops, são os níveis de ask para as compras e bid para as 
                  vendas.
                </p>
              <h4>Intervalo de tempo</h4>
                <p>
                  Todas as posições abertas são configuradas com SL e TP caso ele seja configurado 
                  diferente de zero ao iniciar o EA. A base para a operação, e consequentemente 
                  para a colocação dos stops, são os níveis de ask para as compras e bid para as 
                  vendas.
                </p>
              <h4>Limite de ganhos e perdas diário</h4>
                <p>
                  Caso o limite de ganhos ou perdas financeiros diários configurado pelo usuário 
                  seja atingido, uma mensagem é exibida informando o limite atingido, todas as 
                  posições abertas são finalizadas e não serão abertas novas posições no dia.
                </p>
                <img src={inputs} alt="Exemplificação das entradas"/>
          <h2>Resultados</h2>
            <p>
              Os testes foram realizados utilizando a otimização genética disponível no Metatrader 5. 
              Os stops (SL e TP) foram exagerados para análise pura da estratégia em daytrade, com negociações
              seguindo o movimento do indicador e ao fim do dia. A otimização se dá nas três configurações
              possíveis para o indicador, sendo que o indicador não é exibido para poupar processamento
              desnecessário.
            </p>
            <img style={{ width: "90%" }} src={otimizationInputsWIN} alt="Entradas da otimização"/>
            <p>
              O melhor resultado em termos de retorno financeiro se dá com uma MMP de 52 períodos, 
              a ROC menor com 25 períodos e a ROC maior com 38 períodos como é possível ver na imagem 
              a seguir, que também trás alguns dos melhores resultados. 
            </p>
            <img style={{ width: "90%" }} src={otimizationWIN} alt="resultado da otimização"/>
            
          <h2>Referências</h2>
            <p>
              [1] Rate of Change - taxa de mudança (ROC). In: LEMOS, Flávio. Análise Técnica dos 
              Mercados Financeiros: Um Guia Completo e Definitivo dos Mercados de Negociação de 
              Ativos. São Paulo - SP: Saraiva, 2016. cap. 9.3.4, p. 251-252.
            </p>
            <p>
              [2] Curva de Coppock. In: LEMOS, Flávio. Análise Técnica dos Mercados Financeiros: 
              Um Guia Completo e Definitivo dos Mercados de Negociação de Ativos. São Paulo - SP: 
              Saraiva, 2016. cap. 9.4, p. 253-254.
            </p>
                {/* <img src={entradas} alt="Exemplificação do tipo de exibição v1.02"/> */}


      </div>
    </div>
  )
}
