import React from 'react'

import Header from '../../../components/header'
import v100 from '../../../assets/images/cd-v100.gif'
import v101 from '../../../assets/images/cd-v101.gif'
import v102 from '../../../assets/images/cd-v102.gif'
import entradas from '../../../assets/images/cd-entradas.png'


import '../styles.css'

export default function CandleCountdown(){
  return(
    <div>
      <Header/>
      <div className="content-container container">
        <h1>Candle Countdown</h1>
          <a target = "_blank" rel="noopener noreferrer" href="https://www.mql5.com/pt/code/28175">Repositório MQL5 CodeBase</a><br/>
          <a target = "_blank" rel="noopener noreferrer" href="https://github.com/AbraaoM/CandleCountdown">Repositório Github</a>
          <h2>Introdução</h2>
            <p>Pessoas que realizam operações financeira em mercados financeiros 
              muitas vezes utilizam gráficos de preços para visualizar o movimento 
              do mercado e embasar suas decisões, um tipo de gráfico comum para este 
              fim é o gráfico de candles, esse tipo de gráfico gera uma vela com 
              indicações de preços de abertura, fechamento, máxima e mínima em um 
              determinado período de tempo, terminado esse período uma nova vela 
              começa a ser formada. O intuito deste trabalho é criar um cronômetro 
              que indique a quantidade de tempo restante para o fechamento da vela 
              corrente, oferecendo ao trader mais uma ferramenta que facilita a 
              compreensão do gráfico.</p>
          <h2>Metodologia</h2>
            <p>A função padrão OnCalculate possui entradas padronizadas que 
              possibilitam a obtenção de algumas informações do ativo negociado 
              uma delas é a informação de hora de abertura do candle, utilizando 
              essa informação juntamente com a do período corrente no gráfico e 
              o horário atual a contagem regressiva é calculada seguindo a 
              seguinte equação:</p>
            <p className="equacao">HR = HAb - HAt + P</p>
            <p>HR = Horário instantâneo para a contagem regressiva;</p>
            <p>HAb = Horário de abertura do candle corrente;</p>
            <p>HAt = Horário atual (último recebido pelo servidor);</p>
            <p>P = Período corrente no gráfico em que o indicador está aplicado.</p>
          <h2>Resultados e discuções</h2>
            <h3>v1.00</h3>
              <img src={v100} alt="Exemplificação do tipo de exibição v1.00"/>
              <p>Nesta versão a exibição é feita por meio da função Comment, ou 
                seja, o contador aparecerá no canto superior esquerdo do gráfico.</p>
              <p>Neste tipo de visualização o contador fica discreto e não 
                interfere leitura do gráfico, embora seja de difícil leitura 
                pelo tamanho da fonte padrão do método de exibição utilizado.</p>
            <h3>v1.01</h3>
              <img style={{ width: "80%" }}  src={v101} alt="Exemplificação do tipo de exibição v1.01"/>
              <p>Adicionada exibição utilizando objetos. Foi criado um objeto do 
                tipo label e ancorado no topo superior direito, é possível editar 
                o tamanho da fonte e a cor.</p>
              <p>Também foi adicionada a possibilidade de escolher entre os 
                tipos de exibição, “comment”  ou “Big Number”.</p>
            <h3>v01.02</h3>
              <img style={{ width: "80%" }} src={v102} alt="Exemplificação do tipo de exibição v1.02"/>
              <p>Adicionada a exibição ainda por meio de objetos, mas agora com
                 um objeto do tipo text, que é criado e movido de forma a seguir 
                 o preço de fechamento do último tick.</p>
              <p>É recomendável utilizar neste modo “On Price” uma fonte menor 
                do que no modo “Big Number”.</p>
              <p>Nas exibições "Big number" e "On price" o usuário pode escolher 
                a melhor forma de visualização do contador em termos de tamanho, 
                cor e estilo da fonte.</p>

                <img src={entradas} alt="Exemplificação do tipo de exibição v1.02"/>


      </div>
    </div>
  )
}
