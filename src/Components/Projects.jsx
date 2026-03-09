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
  },
  {
    title: 'E-Commerce Website UI',
    desc: 'A modern and responsive e-commerce website interface built with React, featuring product listings, category sections, and a clean shopping layout focused on user experience.',
    tags: ['React', 'CSS', 'Responsive'],
    code: 'https://github.com/k021104/ecommerceapp-react',
    live: 'https://ecommerceapp-react-rho.vercel.app/',
    num: '07',
    accent: 'yellow'
  },
  {
    title: 'Admin Dashboard with CRUD Operations',
    desc: 'A responsive admin dashboard interface that allows managing products, categories, and users with full CRUD functionality. Designed with a clean layout focused on efficient data management and usability.',
    tags: ['React', 'JavaScript', 'CRUD', 'Dashboard'],
    code: 'https://github.com/k021104/dummyjson-api-admin-panel',
    live: 'https://dummyjson-api-admin-panel.vercel.app/',
    num: '08',
    accent: 'teal'
  },
  {
    title: 'Admin Dashboard with CRUD Operations',
    desc: 'A responsive admin dashboard interface that allows managing products, categories, and users with full CRUD functionality. Designed with a clean layout focused on efficient data management and usability.',
    tags: ['React', 'JavaScript', 'CRUD', 'Dashboard'],
    code: 'https://github.com/k021104/dummyjson-api-admin-panel',
    live: 'https://dummyjson-api-admin-panel.vercel.app/',
    num: '08',
    accent: 'teal'
  },
  {
    title: 'Blog Application UI',
    desc: 'A modern blog interface built with React featuring structured blog posts, category sections, and a clean reading layout focused on user experience and responsive design.',
    tags: ['React', 'Firebase', 'CSS', 'UI'],
    code: 'https://github.com/k021104/Blog-app',
    live: 'https://blog-app-iota-one-78.vercel.app/',
    num: '09',
    accent: 'red'
  },
  {
    title: 'Bookstore Inventory Management Dashboard',
    desc: 'A dashboard interface for managing bookstore inventory, allowing administrators to view, add, update, and organize book records with a structured and user-friendly layout.',
    tags: ['React', 'JavaScript', 'Dashboard', 'UI'],
    code: 'https://github.com/k021104/bookstore-inventory-management',
    live: 'https://bookstore-inventory-management.vercel.app/',
    num: '10',
    accent: 'indigo'
  },
  {
    title: 'Recipe Finder Application',
    desc: 'A recipe discovery application that allows users to search and explore different recipes with a clean and responsive interface, making it easy to browse ingredients and meal ideas.',
    tags: ['React', 'API', 'JavaScript', 'Responsive'],
    code: 'PASTE_YOUR_GITHUB_LINK',
    live: 'PASTE_YOUR_LIVE_LINK',
    num: '11',
    accent: 'lime'
  },
  {
    title: 'Interactive Quiz Application',
    desc: 'An interactive quiz application where users can answer multiple-choice questions and view their score instantly, designed with a clean and responsive user interface.',
    tags: ['React', 'JavaScript', 'Quiz', 'Responsive'],
    code: 'https://github.com/k021104/Quiz-app',
    live: 'https://quiz-app-beta-eosin-39.vercel.app/',
    num: '12',
    accent: 'blue'
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
