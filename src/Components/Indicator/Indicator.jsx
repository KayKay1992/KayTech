import React from 'react'
import './Indicator.css'

function Indicator({items, counter}) {
  return (
    <div className='indicators'>
        {items && items.map((t, index) => (
          <div key={index}>
            <div className={`indicator ${counter === index ? 'active' : ''}`}></div>
          </div>
        ))}
    </div>
  )
}

export default Indicator