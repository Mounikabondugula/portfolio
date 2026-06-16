import { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Hero.css'

const roles = [
  'Full Stack Developer',
  'React.js Developer',
  'MERN Stack Developer',
  'UI/UX Designer',
  'Frontend Developer',
]

export default function Hero() {
  const container = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.hero-greeting', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.hero-name', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-role-line', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-bio', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-actions > *', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
      .from('.hero-card', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1')
  }, { scope: container })

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false) }, 1800)
      return () => clearTimeout(t)
    }
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
        return () => clearTimeout(t)
      } else {
        setPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      }
    }
  }, [displayed, deleting, paused, roleIndex])

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero" ref={container}>
      <div className="hero-bg-orb orb1" />
      <div className="hero-bg-orb orb2" />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="mono-tag">{'>'}</span> Hello, I'm
          </p>
          <h1 className="hero-name">Mounika Bondugula</h1>
          <div className="hero-role-line">
            <span className="hero-role-prefix">I build as a </span>
            <span className="hero-role-typed">{displayed}<span className="cursor">|</span></span>
          </div>
          <p className="hero-bio">
            I design, build, and deploy full-stack web applications — from Figma wireframes to
            production on Hostinger VPS. Passionate about clean UI, solid backend architecture,
            and shipping things that actually work.
          </p>
          <div className="hero-actions">
            <a 
              href="/Mounika_Bondugula_Resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
            >
              View Resume
            </a>
            <a 
              href="/Mounika_Bondugula_Resume.pdf" 
              download
              className="btn-secondary"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/mounika-gupta-3a8413285"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Mounikabondugula"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="code-card">
            <div className="code-card-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-filename">mounika.js</span>
            </div>
            <pre className="code-body"><code>{`const developer = {
  name: "Mounika Bondugula",
  stack: ["React", "Node", "MongoDB"],
  design: "Figma → Pixel Perfect",
  deploy: "Hostinger VPS + SSL",
  ai_tools: ["Cursor AI", "ChatGPT"],
  status: "Open to Opportunities 🚀"
}`}</code></pre>
          </div>
        </div>
      </div>
      <button className="scroll-down" onClick={scrollToAbout} aria-label="Scroll down">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </button>
    </section>
  )
}
