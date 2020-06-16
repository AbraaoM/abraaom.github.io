import React from 'react'
import {FaGithubSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'

import './styles.css'

export default function Socials(){
  return(
    <div>
      <a href="https://github.com/AbraaoM" className="social-link">
        <FaGithubSquare className="social-icon" color="#13161a"/>
      </a>
      <a href="https://linkedin.com/in/abraao-moreira" className="social-link">
        <FaLinkedin className="social-icon" color="#13161a"/>
      </a>   
      <a href="https://twitter.com/abraaolmoreira" className="social-link">
        <FaTwitterSquare className="social-icon" color="#13161a"/>
      </a>   
    </div>
  )
}