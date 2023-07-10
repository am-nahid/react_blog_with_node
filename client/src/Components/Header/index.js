import React from 'react';
import '../../App.css'

function Header({headerText}) {
  return (
    <div className='headerText'>
      

    <h1 className='genericHeader'>{headerText}</h1>
    <hr className='genericHeaderHr'/>
    </div>
  )
}

export default Header
