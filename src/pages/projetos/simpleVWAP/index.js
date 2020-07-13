import React from 'react'
import { BlockMath } from 'react-katex'

import Header from '../../../components/header'
import exemplo from '../../../assets/images/simple-vwap/exemplo.png'

import '../styles.css'
import 'katex/dist/katex.min.css';

export default function SimpleVWAP(){
  return(
    <div>
      <Header/>
      <div className="content-container container">
        <h1>Simple MACD</h1>
          <a target = "_blank" rel="noopener noreferrer" 
              href="https://www.mql5.com/pt/market/product/52170">
            MQL market
          </a><br/>
          <a target = "_blank" rel="noopener noreferrer" 
              href="https://www.mql5.com/pt/code/30136">
            MQL CodeBase
          </a>
          <img src = {exemplo} style={{ width: "120%" }} alt = "Exemplificação indicador"/>
          <h2>Fundamentação teórica</h2>
            <p>
              A VWAP é uma média móvel ajustada pelo volume, ou seja o peso de cada preço 
              corresponde ao volume de ações negociadas no período, dando mais importância 
              ao período em que se tenha mais negociações. [1] 
            </p>
            <p>
              <BlockMath math="VWAP = \frac{\sum_{i=0}^n P(i) * V(i)}{\sum_{i=0}^n V(i)}"/>
            </p>
          <h2>Metodologia</h2>
            <p>
              É possível configurar o período que será utilizado para o calculo da VWAP, a 
              cor, a espessura e o estilo da linha.<br/> 
              A linha é desenhada desde a o começo da série disponível apenas uma vez para 
              economizar recursos computacionais, a atualização do indicador pelos dados 
              novos recebidos é feita sem alterar os dados já calculados.
            </p>
          <h2>Referências</h2>
            <p>
              [1] Média móvel ajustada pelo volume (MMVOL). In: LEMOS, Flávio. Análise 
              Técnica dos Mercados Financeiros: Um Guia Completo e Definitivo dos Mercados 
              de Negociação de Ativos. São Paulo - SP: Saraiva, 2016. cap. 8.2.5, p. 185-186.
            </p>

      </div>
    </div>
  )
}
