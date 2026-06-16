import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Projects.css'

const projects = [
  {
    title: 'Ops Tracker',
    subtitle: 'Full Stack Web Application',
    description:
      'A full-stack operations tracking platform enabling users to log, view, and manage tasks through an interactive React.js interface with a secure Node.js backend.',
    highlights: [
      'JWT-secured REST API with protected routes',
      'Responsive React.js UI with reusable components',
      'Deployed on Hostinger VPS with SSL & DNS setup',
      'MongoDB for persistent task and user data',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Hostinger VPS'],
    accent: '#6366F1',
    icon: '📋',
    github: 'https://github.com/Mounikabondugula',
  },
  {
    title: 'Credit Card Fraud Detection',
    subtitle: 'Machine Learning',
    description:
      'Applied AdaBoost ensemble learning to classify fraudulent versus legitimate credit card transactions with data preprocessing and feature engineering.',
    highlights: [
      'AdaBoost ensemble learning model',
      'Data preprocessing & feature engineering',
      'Reduced false positives in fraud classification',
      'Exploratory data analysis on transaction datasets',
    ],
    stack: ['Python', 'Machine Learning', 'AdaBoost', 'Data Analysis'],
    accent: '#8B5CF6',
    icon: '🔍',
    github: 'https://github.com/Mounikabondugula',
  },
  {
    title: 'Used Cars Price Prediction',
    subtitle: 'Machine Learning',
    description:
      'Built a supervised machine learning regression model to predict used car prices based on vehicle attributes and historical market data.',
    highlights: [
      'Supervised regression model for price prediction',
      'Feature engineering on vehicle attributes',
      'Exploratory data analysis & visualization',
      'Improved prediction accuracy iteratively',
    ],
    stack: ['Python', 'Machine Learning', 'Feature Engineering', 'EDA'],
    accent: '#EC4899',
    icon: '🚗',
    github: 'https://github.com/Mounikabondugula',
  },
]

export default function Projects() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.from('.section-label, .section-title, .section-line', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })

    gsap.from('.project-card', {
      scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' },
      y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <section className="section" id="projects" ref={container}>
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={p.title}>
              <div className="project-card-top">
                <span className="project-icon">{p.icon}</span>
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link-icon" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-desc">{p.description}</p>
              <ul className="project-highlights">
                {p.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <div className="project-stack">
                {p.stack.map(s => (
                  <span key={s} className="project-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
