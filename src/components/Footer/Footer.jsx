import React from 'react'
import "./Footer.css"

const Footer = () => {
    const currentDate = new Date().getFullYear();

  return (
    <div className='footer'>
        <p>Copyright @ {currentDate}, Andorka Dominik - All Right Reserved.</p>
    </div>
  )
}

export default Footer