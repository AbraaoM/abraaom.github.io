import React from 'react'
import { Link } from 'react-router-dom'
import { FaReact, FaPython } from 'react-icons/fa'


import mt5icon from '../../assets/images/mt5icon.png'

import './styles.css'
import '../../global.css'

export function PostModelMQL(props){
  return(
    <div>
      <Link to={props.end}>
        <div className="post-card">
          <div className="icon-container">
            <img className="icon" src={mt5icon} alt="icone"/>
          </div>
          <div className="descr-container">
            <h1>{props.titulo}</h1> <br/>
            [ {props.data} ]
          </div>
        </div>
      </Link>
    </div>
  )
}

export function PostModelPython(props){
  return(
    <div>
      <Link to={props.end}>
        <div className="post-card">
          <div className="icon-container">
            <FaPython className="icon"/>
          </div>
          <div className="descr-container">
            <h1>{props.titulo}</h1> <br/>
            [ {props.data} ]
          </div>
        </div>
      </Link>
    </div>
  )
}

export function PostModelReact(props){
  return(
    <div>
      <Link to={props.end}>
        <div className="post-card">
          <div className="icon-container">
            <FaReact className="icon"/>
          </div>
          <div className="descr-container">
            <h1>{props.titulo}</h1> <br/>
            [ {props.data} ]
          </div>
        </div>
      </Link>
    </div>
  )
}