import React from 'react'
import { FaMapMarkedAlt, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from 'react-icons/fa'

import './styles.css'
import '../../global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../components/header'
import Socials from '../../components/socialLinks'

import perfil from '../../assets/images/perfil3.png'
import mt5icon from '../../assets/images/mt5icon.png'

export default function AboutMe(){
  return(
    <div>
      <Header/>
      <div className="container">
        <div className="presentation-card-container">
          <img className="perfil" src={ perfil } alt="Imagem de perfil"/>
          <h1>Abraão Moreira</h1>
          <a href="mailto:abraaol.moreira@outlook.com">abraaol.moreira@outlook.com</a>
          <ul className="skill-list">
              <li className="skill">
                <FaReact className="skill-icon" color="#13161a"/><br/> REACT
              </li>
              <li className="skill">
                <FaHtml5 className="skill-icon" color="#13161a"/><br/> HTML 
              </li>
              <li className="skill">
                <FaCss3Alt className="skill-icon" color="#13161a"/><br/> CSS
              </li>
              <li className="skill">
                <FaJsSquare className="skill-icon" color="#13161a" /><br/> JAVASCRIPT
              </li>
              <li className="skill">
                <FaPython className="skill-icon" color="#13161a"/><br/> PYTHON
              </li>
              <li className="skill">
                <img className="skill-icon" src={mt5icon} alt="metaquotes"/> <br/> MQ5
              </li>
            </ul>
          <p>Estudante de Ciencia e Tecnologia (ICT-UNIFESP), desenvolvedor de software e entusiasta de tecnologia.</p>
          <h2><FaMapMarkedAlt className="map-icon" color="#13161a"/> Pindamonhangaba-SP </h2>
          <Socials/>
        </div>    
      </div>
    </div>
  )
}