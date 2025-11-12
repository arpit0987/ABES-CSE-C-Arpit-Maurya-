import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div id="arp">
        <img src="src/assets/cartoon.jpg" alt="" />
        <h1>{props.name}</h1>
        <h2>{props.edu}</h2>
    </div>
  )
}

export default Card