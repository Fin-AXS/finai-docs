import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <div className="company">FinAI</div>
        <div className="copyright">© 2021</div>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="https://github.com/Fin-AXS">GitHub</Link>
        <Link to="/team">Team</Link>
      </div>
    </div>
  )
}
