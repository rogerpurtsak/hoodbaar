import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-padding'>
        <div className='footer-left'>
            <a href="https://www.instagram.com/hoodbaar" target="_blank">
                <img src="realinsta.png" alt="Instagram Logo" class="clickable-img"/>
                </a>
            </div>
            <div className='footer-right'>
                <h1>HoodBaar</h1>
                <p>Supeluse 14, Pärnu, Estonia</p>
            </div>
        </div>
    </div>
  )
}

export default Footer