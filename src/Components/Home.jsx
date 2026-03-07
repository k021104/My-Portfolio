import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import '../styles/Home.css'

export default function Home () {
  return (
    <section id='home' className='hero'>
      {/* Background orbs */}
      <div className='orb orb--1' />
      <div className='orb orb--2' />
      <div className='orb orb--3' />

      <div className='hero__inner'>
        {/* ── LEFT ── */}
        <div className='hero__left'>
          {/* Badge */}
          <motion.div
            className='badge'
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className='badge__dot' />
            Available for Opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            className='hero__greeting'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className='hero__name'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            Krishna
            <br />
            <span className='name--italic'>Chavda</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            className='hero__role'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className='role__line role__line--l' />
            <span className='role__text'>Aspiring Full Stack Developer</span>
            <span className='role__line role__line--r' />
          </motion.div>

          {/* Description */}
          <motion.p
            className='hero__desc'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            Passionate student crafting modern, responsive and scalable web
            applications using React and JavaScript.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className='hero__actions'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href='#projects' className='btn btn--primary'>
              View Projects <ArrowRight size={15} strokeWidth={2} />
            </a>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn--ghost'
            >
              <Download size={14} strokeWidth={2} /> Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className='hero__socials'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
          >
            <a
              href='https://github.com/k021104'
              target='_blank'
              rel='noopener noreferrer'
              className='social__btn'
              title='GitHub'
            >
              <Github size={17} />
            </a>
            <a
              href='https://www.linkedin.com/in/krishna-chavda-589b13313/'
              target='_blank'
              rel='noopener noreferrer'
              className='social__btn'
              title='LinkedIn'
            >
              <Linkedin size={17} />
            </a>
            <span className='social__sep' />
            <span className='social__label'>Find me on</span>
          </motion.div>
        </div>

        {/* ── RIGHT — Terminal Card ── */}
        <motion.div
          className='hero__right'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        >
          <div className='terminal'>
            {/* Top bar */}
            <div className='terminal__bar'>
              <span className='t-dot t-dot--red' />
              <span className='t-dot t-dot--yellow' />
              <span className='t-dot t-dot--green' />
              <span className='terminal__title'>~/krishna/portfolio.js</span>
            </div>

            {/* Code body */}
            <div className='terminal__body'>
              <div className='t-line'>
                <span className='t-prompt'>→</span>
                <span className='t-cmd'>
                  <span className='c-keyword'>const</span>{' '}
                  <span className='c-var'>developer</span>{' '}
                  <span className='c-op'>=</span> {'{'}
                </span>
              </div>
              <div className='t-line t-line--out'>
                <span className='c-key'>name</span>
                <span className='c-op'>:</span>
                {'     '}
                <span className='c-str'>"Krishna Chavda"</span>,
              </div>
              <div className='t-line t-line--out'>
                <span className='c-key'>role</span>
                <span className='c-op'>:</span>
                {'     '}
                <span className='c-str'>"Aspiring Dev"</span>,
              </div>
              <div className='t-line t-line--out'>
                <span className='c-key'>skills</span>
                <span className='c-op'>:</span>
                {'   '}
                <span className='c-arr'>[</span>
                <span className='c-str'>"React"</span>,{' '}
                <span className='c-str'>"JS"</span>
                <span className='c-arr'>]</span>,
              </div>
              <div className='t-line t-line--out'>
                <span className='c-key'>learning</span>
                <span className='c-op'>:</span>{' '}
                <span className='c-bool'>true</span>,
              </div>
              <div className='t-line t-line--out'>
                <span className='c-key'>openTo</span>
                <span className='c-op'>:</span>
                {'   '}
                <span className='c-str'>"opportunities"</span>,
              </div>
              <div className='t-line t-line--out'>
                <span className='c-key'>passion</span>
                <span className='c-op'>:</span>
                {'  '}
                <span className='c-num'>100</span>
              </div>
              <div className='t-line'>
                <span className='t-prompt'>→</span>
                <span className='t-cmd'>
                  {'}'}
                  <span className='t-cursor' />
                </span>
              </div>
            </div>

            {/* Stat strip */}
            <div className='terminal__stats'>
              <div className='t-stat'>
                <span className='t-stat__num'>10+</span>
                <span className='t-stat__label'>Projects</span>
              </div>
              <div className='t-stat__sep' />
              <div className='t-stat'>
                <span className='t-stat__num'>1+</span>
                <span className='t-stat__label'>Yrs Learning</span>
              </div>
              <div className='t-stat__sep' />
              <div className='t-stat'>
                <span className='t-stat__num'>∞</span>
                <span className='t-stat__label'>Curiosity</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className='scroll-hint'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden='true'
      >
        <div className='scroll-hint__track'>
          <div className='scroll-hint__thumb' />
        </div>
        <span className='scroll-hint__label'>scroll</span>
      </motion.div>
    </section>
  )
}
