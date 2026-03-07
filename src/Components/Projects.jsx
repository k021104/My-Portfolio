import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import '../styles/Projects.css'

const projects = [
  {
    title: 'Personal Portfolio Website',
    desc: 'A modern personal portfolio website built with React and Material UI, showcasing my projects, skills, and UI-focused design approach.',
    tags: ['React', 'Material UI', 'Responsive'],
    code: 'https://github.com/k021104/My-Portfolio',
    live: 'https://my-portfolio-sand-tau-20.vercel.app/',
    num: '01',
    accent: 'blue'
  },
  {
    title: 'Travel Agency Website',
    desc: 'A responsive travel agency website built with Bootstrap, featuring destination highlights, package previews, and a booking section.',
    tags: ['Bootstrap', 'HTML', 'CSS'],
    code: 'https://github.com/k021104/bootstrap-travelagency-site',
    live: 'https://k021104.github.io/bootstrap-travelagency-site/',
    num: '02',
    accent: 'purple'
  },
  {
    title: 'Restaurant Website',
    desc: 'A restaurant website built with Bootstrap showcasing food categories, menu previews, and an illustrative reservation section.',
    tags: ['Bootstrap', 'HTML', 'CSS'],
    code: 'https://github.com/k021104/bootstrap-restaurant-site',
    live: 'https://k021104.github.io/bootstrap-restaurant-site/',
    num: '03',
    accent: 'green'
  },
  {
    title: 'E-Learning Website',
    desc: 'Designed a modern e-learning UI with React Router, implementing multi-page navigation and a user-friendly course layout.',
    tags: ['React', 'React Router', 'CSS'],
    code: 'https://github.com/k021104/react_router_app',
    live: 'https://reactrouterapp.vercel.app/',
    num: '04',
    accent: 'orange'
  },
  {
    title: 'Home Decoration Studio',
    desc: 'A visually appealing home decoration studio landing page using React Bootstrap, focusing on responsive design and clean UI.',
    tags: ['React', 'Bootstrap', 'Responsive'],
    code: 'https://github.com/k021104/React-Bootatrap-APP',
    live: 'https://reactbootstrapapp.vercel.app/',
    num: '05',
    accent: 'pink'
  },
  {
    title: 'Medical Hospital Website',
    desc: 'A healthcare website interface using Material UI with a clean, professional look suitable for hospital and medical services.',
    tags: ['React', 'Material UI', 'Healthcare'],
    code: 'https://github.com/k021104/MUI-APP',
    live: 'https://reactmuiapp-six.vercel.app/',
    num: '06',
    accent: 'cyan'
  }
]

export default function Projects () {
  return (
    <section id='projects' className='projects'>
      {/* Background orbs */}
      <div className='orb orb--1' />
      <div className='orb orb--2' />

      <div className='projects__inner'>
        {/* Section label */}
        <motion.div
          className='section-label'
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className='label__dot' />
          what i have built
        </motion.div>

        {/* Header */}
        <div className='projects__header'>
          <motion.h2
            className='projects__heading'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            My <span className='heading--italic'>Projects</span>
          </motion.h2>
          <motion.p
            className='projects__subtext'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Some of the projects I have built recently
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className='projects__grid'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`card card--${project.accent}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Top row — number + links */}
              <div className='card__top'>
                <span className='card__num'>{project.num}</span>
                <div className='card__links'>
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card__link'
                    title='View Code'
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card__link card__link--live'
                    title='Live Demo'
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className='card__title'>{project.title}</h3>

              {/* Desc */}
              <p className='card__desc'>{project.desc}</p>

              {/* Tags */}
              <div className='card__tags'>
                {project.tags.map((tag, i) => (
                  <span key={i} className='tag'>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
