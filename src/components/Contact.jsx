import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Contact.css'

export default function Contact() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.from('.section-label, .section-title, .section-line', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })

    gsap.from('.contact-text > p', {
      scrollTrigger: { trigger: '.contact-text', start: 'top 80%' },
      y: 20, opacity: 0, duration: 0.5, ease: 'power3.out'
    })

    gsap.from('.contact-card', {
      scrollTrigger: { trigger: '.contact-links', start: 'top 85%' },
      y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out'
    })

    gsap.from('.cta-box', {
      scrollTrigger: { trigger: '.cta-box', start: 'top 80%' },
      scale: 0.95, opacity: 0, duration: 0.6, ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <section className="section contact-section" id="contact" ref={container}>
      <div className="container">
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line" />

        <div className="contact-grid">
          <div className="contact-text">
            <p>
              I'm currently open to <strong>Full Stack Developer</strong>, <strong>React.js Developer</strong>,
              <strong> MERN Stack</strong>, <strong>Frontend</strong>, and <strong>UI/UX Developer</strong> opportunities.
              Whether you have a role in mind, a project to discuss, or just want to connect — I'd love to hear from you.
            </p>
            <div className="contact-links">
              <a href="mailto:Mounika.bondugula66@gmail.com" className="contact-card">
                <span className="contact-card-icon">✉️</span>
                <div>
                  <p className="contact-card-label">Email</p>
                  <p className="contact-card-value">Mounika.bondugula66@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mounika-gupta-3a8413285" target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-card-icon">💼</span>
                <div>
                  <p className="contact-card-label">LinkedIn</p>
                  <p className="contact-card-value">linkedin.com/in/mounika-gupta-3a8413285</p>
                </div>
              </a>
              <a href="https://github.com/Mounikabondugula" target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-card-icon">🐙</span>
                <div>
                  <p className="contact-card-label">GitHub</p>
                  <p className="contact-card-value">github.com/Mounikabondugula</p>
                </div>
              </a>
              <div className="contact-card no-link">
                <span className="contact-card-icon">📍</span>
                <div>
                  <p className="contact-card-label">Location</p>
                  <p className="contact-card-value">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-box">
            <div className="cta-inner">
              <p className="cta-eyebrow">Available for opportunities</p>
              <h3 className="cta-heading">Open to Work</h3>
              <p className="cta-sub">Full Stack · React.js · MERN Stack · Frontend · UI/UX</p>
              <a href="mailto:Mounika.bondugula66@gmail.com" className="cta-btn">
                Say Hello →
              </a>
              <p className="cta-phone">📞 +91 9652905040</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
