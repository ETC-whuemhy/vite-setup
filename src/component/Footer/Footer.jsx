import "./Footer.css"

import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer>

      <div className="footerCon">

        <h1>Cohort 5.0</h1>

       <div className="f-1">
        <h2>About</h2>
        <p>about us</p>
       </div>

       <div className="f-2">
        <h2>Contact</h2>
        <p>contact us</p>
       </div>

       <div className="f-3">
        <h2>Pages</h2>
        <p>our pages</p>
       </div>

    

      </div>

      <p>&copy; {currentYear} copyright all rights reserved</p>

    </footer>
  )
}

export default Footer