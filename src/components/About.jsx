import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './About.css'

const stats = [
  { value: '2+', label: 'Companies Worked With' },
  { value: '3+', label: 'Projects Deployed' },
  { value: 'MERN', label: 'Core Stack' },
  { value: 'VPS', label: 'Deployment Experience' },
]

export default function About() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.from('.section-label, .section-title, .section-line', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })

    gsap.from('.about-text > *', {
      scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
      y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out'
    })

    gsap.from('.stat-card, .edu-card', {
      scrollTrigger: { trigger: '.about-right', start: 'top 80%' },
      scale: 0.95, y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <section className="section about-section" id="about" ref={container}>
      <div className="container">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>Full Stack Web Developer</strong> based in Hyderabad, Telangana, with
              hands-on experience building and deploying web applications from the ground up using
              the <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
              My workflow spans the full product lifecycle: starting from <strong>Figma wireframes</strong>,
              building out pixel-perfect responsive interfaces in React.js, engineering REST API
              backends with JWT authentication, and taking applications all the way to production
              on <strong>Hostinger VPS</strong> — including domain setup, DNS configuration, and SSL installation.
            </p>
            <p>
              I'm comfortable working with <strong>AI-assisted development tools</strong> like Cursor AI
              and ChatGPT to move faster without cutting corners. I write clean, maintainable code
              and enjoy solving problems across the entire stack.
            </p>
            <p>
              Currently open to <strong>Full Stack Developer</strong>, <strong>React.js Developer</strong>,
              <strong> MERN Stack</strong>, <strong>Frontend</strong>, and <strong>UI/UX Developer</strong> roles
              in product companies, startups, and service companies.
            </p>

            <div className="about-actions">
              <a href="https://github.com/Mounikabondugula" target="_blank" rel="noreferrer" className="about-link">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/mounika-gupta-3a8413285" target="_blank" rel="noreferrer" className="about-link">
                LinkedIn ↗
              </a>
              <a href="mailto:Mounika.bondugula66@gmail.com" className="about-link">
                Email ↗
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="stats-grid">
              {stats.map(s => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <p className="edu-degree">B.E. Computer Science</p>
                <p className="edu-school">Annamacharya Institute of Technology & Sciences</p>
                <p className="edu-meta">Hyderabad, TS &nbsp;·&nbsp; 2021–2025 &nbsp;·&nbsp; GPA: 7.4/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
