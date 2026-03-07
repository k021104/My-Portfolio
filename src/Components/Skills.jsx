import { motion } from "framer-motion";
import { Code2, Palette, Wrench } from "lucide-react";
import "../styles/Skills.css";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 size={22} />,
    color: "blue",
    items: [
      { name: "HTML",       level: 95 },
      { name: "CSS",        level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js",   level: 80 },
    ],
  },
  {
    category: "UI / Styling",
    icon: <Palette size={22} />,
    color: "purple",
    items: [
      { name: "Bootstrap",         level: 85 },
      { name: "Material UI",       level: 80 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    category: "Tools",
    icon: <Wrench size={22} />,
    color: "green",
    items: [
      { name: "Git",    level: 90 },
      { name: "GitHub", level: 85 },
      { name: "Vercel", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">

      {/* Background orbs */}
      <div className="orb orb--1" />
      <div className="orb orb--2" />

      <div className="skills__inner">

        {/* Section label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="label__dot" />
          what i know
        </motion.div>

        {/* Header */}
        <div className="skills__header">
          <motion.h2
            className="skills__heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            My <span className="heading--italic">Skills</span>
          </motion.h2>

          <motion.p
            className="skills__subtext"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Technologies and tools I use while building modern frontend applications.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="skills__cards">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`card card--${skill.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Card header */}
              <div className="card__header">
                <div className={`card__icon icon--${skill.color}`}>
                  {skill.icon}
                </div>
                <p className="card__title">{skill.category}</p>
              </div>

              {/* Skill items */}
              <div className="skill__list">
                {skill.items.map((item, i) => (
                  <div key={i} className="skill__item">
                    <div className="skill__row">
                      <span className="skill__name">{item.name}</span>
                      <span className="skill__pct">{item.level}%</span>
                    </div>
                    <div className="bar__track">
                      <motion.div
                        className={`bar__fill bar--${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}