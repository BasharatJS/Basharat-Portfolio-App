import React from 'react'
import { motion } from 'framer-motion'

import './Experience.css'
import FloatingShapes from '../floating/FloatingShaps'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Freelancer',
      location: 'Pune, India (Remote)',
      duration: '06/2022 to Current',
      points: [
        '2.5 Years of experience as a Freelancer Consultant in React Native(Mobile App)',
        'Built responsive user interfaces utilizing modern front-end technologies like React JS, Next JS or Tailwind CSS',
        'Created interactive UI components utilizing React JS, enhancing overall usability and user engagement',
      ],
    },
    {
      title: 'React Native Developer',
      company: 'Appventurez Mobitech Pvt Ltd',
      location: 'Noida, India',
      duration: '07/2022 to 06/2023',
      points: [
        '1 Years of experience as a Software Developer in Appventurez Mobitech Pvt Ltd',
        'Served as a Frontend Developer specializing in React Native CLI and Expo CLI',
        'Enhanced app performance by optimizing React Native components and implementing best practices',
      ],
    },
  ]

  return (
    <section id="experience" className="section experience">
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
          Work Experience
        </motion.h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 * index, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: false }}
            >
              <motion.div
                className="experience-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index + 0.2, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="location">{exp.location}</p>
                <p className="duration">{exp.duration}</p>
              </motion.div>

              <div className="experience-points">
                {exp.points.map((point, pointIndex) => (
                  <motion.p
                    key={pointIndex}
                    className="experience-point"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 * index + 0.4 + 0.1 * pointIndex,
                      duration: 0.5,
                    }}
                    viewport={{ once: false }}
                  >
                    • {point}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
