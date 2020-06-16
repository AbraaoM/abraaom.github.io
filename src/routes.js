import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Apresentacao from './pages/apresentacao'
import SobreMim from './pages/sobreMim'
import Projetos from './pages/projetos'
import CandleCountdown from './pages/projetos/candleCountdown'
import SitePessoal from './pages/projetos/sitePessoal'
import LinearRegression from './pages/projetos/linearRegression'

export default function Routes(){
  return(
    <HashRouter>
      <Switch>
        <Route path = "/" exact component = {Apresentacao} />
        <Route path = "/sobre-mim" component = {SobreMim} />
        <Route path = "/projetos" component = {Projetos} />
        <Route path = "/candle-countdown" component = {CandleCountdown} />
        <Route path = "/site-pessoal" component = {SitePessoal} />
        <Route path = "/linear-regression" component = {LinearRegression} />
      </Switch>
    </HashRouter>
  )
}