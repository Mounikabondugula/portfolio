import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Skills.css'

const skillGroups = [
  {
    label: 'Frontend',
    icon: '⚡',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design'],
  },
  {
    label: 'Backend',
    icon: '🔧',
    skills: ['Node.js', 'Express.js', 'REST API Integration', 'JWT Authentication', 'Java', 'JDBC'],
  },
  {
    label: 'Databases',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'Supabase'],
  },
  {
    label: 'UI/UX Design',
    icon: '🎨',
    skills: ['Figma', 'Wireframing', 'UI Design', 'UX Design', 'Figma-to-Code', 'Pixel-Perfect Implementation'],
  },
  {
    label: 'Deployment & Hosting',
    icon: '🚀',
    skills: ['Hostinger VPS', 'Hostinger Cloud', 'Domain Configuration', 'DNS Management', 'SSL Configuration', 'Production Deployment'],
  },
  {
    label: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Eclipse'],
  },
  {
    label: 'AI & Productivity',
    icon: '🤖',
    skills: ['ChatGPT', 'Cursor AI', 'AI-Assisted Development', 'Prompt Engineering'],
  },
]

export default function Skills() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.from('.section-label, .section-title, .section-line', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })

    gsap.from('.skill-group', {
      scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' },
      scale: 0.95, y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <section className="section" id="skills" ref={container}>
      <div className="container">
        <p className="section-label">Technical Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-line" />

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={group.label}>
              <div className="skill-group-header">
                <span className="skill-icon">{group.icon}</span>
                <span className="skill-group-label">{group.label}</span>
              </div>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
