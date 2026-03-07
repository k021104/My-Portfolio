import { motion } from 'framer-motion'
import { Code2, GraduationCap, Palette, TrendingUp } from 'lucide-react'
import '../styles/About.css'

const cards = [
  {
    title: 'Frontend Development',
    desc: 'HTML · CSS · JavaScript · ReactJS',
    icon: <Code2 size={20} />,
    color: 'blue'
  },
  {
    title: 'Currently Learning',
    desc: 'Node.js · Express · Backend Basics',
    icon: <GraduationCap size={20} />,
    color: 'green'
  },
  {
    title: 'UI Design',
    desc: 'Clean UI · Responsive · User Friendly',
    icon: <Palette size={20} />,
    color: 'purple'
  },
  {
    title: 'Growth Mindset',
    desc: 'Daily Practice · Never Stop Learning',
    icon: <TrendingUp size={20} />,
    color: 'orange'
  }
]

export default function About () {
  return (
    <section id='about' className='about'>
      {/* Background orbs */}
      <div className='orb orb--1' />
      <div className='orb orb--2' />

      <div className='about__inner'>
        {/* Section label */}
        <motion.div
          className='section-label'
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className='label__dot' />
          get to know me
        </motion.div>

        {/* Heading */}
        <motion.h2
          className='about__heading'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          About <span className='heading--italic'>Me</span>
        </motion.h2>

        {/* Grid — text left, cards right */}
        <div className='about__grid'>
          {/* Left — Text */}
          <div className='about__text'>
            <motion.p
              className='text--primary'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              I am a passionate Full Stack Development student with a strong
              interest in building modern, scalable, and user-friendly web
              applications. I enjoy transforming ideas into real-world digital
              experiences.
            </motion.p>

            <motion.div
              className='text__divider'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
            />

            <motion.p
              className='text--secondary'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              Currently focused on React, JavaScript, and backend fundamentals,
              I continuously learn new technologies and improve my
              problem-solving skills through projects and practice.
            </motion.p>
          </div>

          {/* Right — Cards */}
          <div className='cards__grid'>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={`card card--${card.color}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className={`card__icon icon--${card.color}`}>
                  {card.icon}
                </div>
                <div className='card__content'>
                  <p className='card__title'>{card.title}</p>
                  <p className='card__desc'>{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
