import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../components/header'
import {PostModelMQL, PostModelReact} from '../../components/projPostModel'

export default function AboutMe(){
  return(
    <div>
      <Header/>
      <PostModelMQL 
        data="08/07/2020" 
        end="/coppock-curve" 
        titulo="Curva de Coppock" 
      />
      <PostModelMQL 
        data="03/07/2020" 
        end="/simple-macd" 
        titulo="Simple MACD" 
      />  
      <PostModelMQL 
        data="05/06/2020" 
        end="/linear-regression" 
        titulo="Linear Regression" 
      />  
      <PostModelReact 
        data="17/04/2020" 
        end="/site-pessoal" 
        titulo="Site Pessoal - abraaomoreira.com" 
      />  

      <PostModelMQL 
        data="09/04/2020" 
        end="/candle-countdown" 
        titulo="Candle Countdown" 
      />  
    </div>
  )
}