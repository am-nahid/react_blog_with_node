import React from 'react'
import '../../App.css'
import './404.style.css'
import Logo from '../Logo'

function PageNotFound() {
  return (
    <div>
       <div className='LoginLogo'><Logo/></div>
       <div className='pageNotFound'>
      <h1 className='Error404'>Error 404 - Page not found</h1>
    </div>
    </div>
  )
}

export default PageNotFound
