import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Experience.css'

const jobs = [
  {
    role: 'Full Stack Web Developer',
    company: 'Yoi Media',
    period: 'Sep 2025 – Present',
    type: 'Full-time',
    current: true,
    bullets: [
      'Build and maintain responsive web applications using React.js, Node.js, Express.js, and MongoDB, delivering production-ready features across the full stack.',
      'Convert Figma designs into pixel-perfect, cross-browser-compatible UI components, maintaining visual consistency across desktop and mobile screen sizes.',
      'Integrate RESTful APIs with JWT-based authentication into React.js frontend applications, improving application security and user session management.',
      'Deploy and manage web applications on Hostinger VPS, handling DNS configuration, SSL certificate setup, and production environment management.',
      'Use Cursor AI and ChatGPT to speed up development workflows, debug issues, and improve code quality during feature development.',
    ],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Taicoon Fashions Pvt Ltd',
    period: 'Jun 2025 – Aug 2025',
    type: 'Full-time',
    current: false,
    bullets: [
      'Developed dynamic, mobile-first web pages using React.js and JavaScript, improving UI responsiveness and consistency across multiple device types.',
      'Translated Figma design mockups into functional, production-ready frontend interfaces, ensuring pixel-accurate implementation of provided designs.',
      'Participated in full development cycle including local development, testing, debugging, and deployment of web application features.',
      'Managed code versioning using Git and GitHub, maintaining organized feature branches and commit histories.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Digiyoda Media Group',
    period: 'Sep 2020 – Nov 2020',
    type: 'Internship',
    current: false,
    bullets: [
      'Performed data analysis tasks to extract insights from business datasets and contributed to performance reporting for the media team.',
    ],
  },
]

export default function Experience() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.from('.section-label, .section-title, .section-line', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })

    gsap.from('.timeline-line', {
      scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
      scaleY: 0, transformOrigin: 'top', duration: 1.5, ease: 'power3.out'
    })

    gsap.from('.timeline-item', {
      scrollTrigger: { trigger: '.timeline', start: 'top 70%' },
      x: -30, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <section className="section exp-section" id="experience" ref={container}>
      <div className="container">
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Work Experience</h2>
        <div className="section-line" />

        <div className="timeline">
          {jobs.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" data-current={job.current} />
              <div className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <div className="job-meta">
                    <span className={`job-badge${job.current ? ' current' : ''}`}>
                      {job.current ? '● ' : ''}{job.type}
                    </span>
                    <span className="job-period">{job.period}</span>
                  </div>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  )
}
