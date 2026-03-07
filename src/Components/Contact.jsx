import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Github, Linkedin } from 'lucide-react'
import '../styles/Contact.css'

export default function Contact () {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Message was sent')
    console.log(formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const infoCards = [
    {
      icon: <Mail size={17} />,
      label: 'email',
      value: 'krishnachavda@email.com'
    },
    {
      icon: <Github size={17} />,
      label: 'github',
      value: 'github.com/k021104'
    },
    {
      icon: <Linkedin size={17} />,
      label: 'linkedin',
      value: 'linkedin.com/in/krishna-chavda'
    }
  ]

  return (
    <section id='contact' className='contact'>
      <div className='orb orb--1' />
      <div className='orb orb--2' />

      <div className='contact__inner'>
        <motion.div
          className='section-label'
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className='label__dot' />
          get in touch
        </motion.div>

        <div className='contact__header'>
          <motion.h2
            className='contact__heading'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Contact <span className='heading--italic'>Me</span>
          </motion.h2>
          <motion.p
            className='contact__subtext'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Feel free to reach out for collaborations or just say hi!
          </motion.p>
        </div>

        <motion.div
          className='info__row'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {infoCards.map((card, index) => (
            <div key={index} className='info__card'>
              <div className='info__icon'>{card.icon}</div>
              <div>
                <span className='info__label'>{card.label}</span>
                <span className='info__value'>{card.value}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className='form__wrap'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <form className='form' onSubmit={handleSubmit}>
            <div className='form__row'>
              <div className='field'>
                <label htmlFor='name'>// name</label>
                <input
                  id='name'
                  type='text'
                  name='name'
                  placeholder='Your name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='field'>
                <label htmlFor='email'>// email</label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  placeholder='your@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='field'>
              <label htmlFor='message'>// message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Write your message here...'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type='submit' className='btn__submit'>
              Send Message <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
