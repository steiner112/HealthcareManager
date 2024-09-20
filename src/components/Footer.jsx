import React from 'react'
import "../components/Footer.css"

export default function Footer() {
    return (
        <>
<footer className="footer">
  <div className="footer__container container grid">
    <ul className="footer__links">
      <li>
        <a href="#home" className="footer__link">Home</a>
      </li>
      <li>
        <a href="#about" className="footer__link">About</a>
      </li>
    </ul>
    <span className="footer__copy">
      © All Rights Reserved By
      <a href="#123123"> ANURAG VERMA</a>
    </span>
  </div>
</footer>

        </>
    )
}
