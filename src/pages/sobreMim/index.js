import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'

import './styles.css'
import '../../global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../components/header'
import Socials from '../../components/socialLinks'

import perfil from '../../assets/images/perfil3.png'

export default function AboutMe(){
  return(
    <div>
      <Header/>
      <div className="container">
        <div className="sobre-mim-container">
          <img className="perfil" src={ perfil } alt="Imagem de perfil"/>
          <h1>Abraão Moreira</h1>
          <a href="mailto:abraaol.moreira@outlook.com">abraaol.moreira@outlook.com</a>
          <h3>Formação acadêmica</h3>
          <p>- UNIVERSIDADE FEDERAL DE SÃO PAULO (UNIFESP) - São José dos Campos/SP <br/>
            Bacharelado em ciência e tecnologia ---------- Em curso  
          </p><br/>
          <p>- ESCOLA TÉCNICA ESTADUAL JOÃO GOMES DE ARAÚJO - Pindamonhangaba/SP <br/>
            Técnico em informática ---------- Término: DEZ/2014  
          </p>
          <h2><FaMapMarkedAlt className="map-icon" color="#13161a"/> Pindamonhangaba-SP </h2>
          <Socials/>
        </div>    
      </div>
    </div>
  )
}