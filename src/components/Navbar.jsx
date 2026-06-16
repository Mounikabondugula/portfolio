import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-bracket">&lt;</span>MB<span className="logo-bracket">/&gt;</span>
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <button key={l} onClick={() => handleNav(l)} className="nav-link">{l}</button>
          ))}
          <a
            href="/Mounika_Bondugula_Resume.pdf"
            className="nav-resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
