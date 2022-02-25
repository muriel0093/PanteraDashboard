import React from 'react'

import './cardDiario.css'

const cardDiario = props => {
  return (
    <div className='card-diario' style={{ 'background-color': `${props.cor}` }}>
      <div className="card-diario__icon">
        <i className={props.icon}></i>
      </div>
      <div className="card-diario__info">
        <h5>{props.count}</h5>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default cardDiario
