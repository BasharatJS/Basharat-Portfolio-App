import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'
import AnimatedBackground from '../animated-bg/AnimatedBackground'
import FloatingShapes from '../floating/FloatingShaps'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React Native CLI',
        'Expo CLI',
        'React JS',
        'Next JS',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        'Node JS',
        'Express JS',
        'MongoDB',
        'Convex',
        'Clerk',
        'Firebase',
      ],
    },
    {
      title: 'State Management',
      skills: [
        'Redux',
        'Redux toolkit',
        'Zustand',
        'React Query',
        'Context API',
        'MobX',
      ],
    },
    {
      title: 'Tools & Services',
      skills: [
        'GitHub Desktop',
        'Git',
        'GitLab',
        'Postman',
        'Slack',
        'Android Studio',
        'VS Code',
      ],
    },
  ]

  return (
    <section id="skills" className="section skills">
      <AnimatedBackground variant="skills" />
      <FloatingShapes />
      <div className="container">
        <motion.h2
          className="section-title gradient-title"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          viewport={{ once: false }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                    viewport={{ once: false }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
