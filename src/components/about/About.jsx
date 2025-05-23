import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
import AnimatedBackground from '../animated-bg/AnimatedBackground'
import FloatingShapes from '../floating/FloatingShaps'

const About = () => {
  return (
    <section id="about" className="section about">
      <AnimatedBackground variant="about" />
      <FloatingShapes />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="about-content"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="about-text">
              Experienced in JavaScript, React Native mobile app development for
              iOS and Android, ReactJS, and Next.js for web development. Strong
              design abilities have significantly improved UI development
              expertise.
            </p>
            <p className="about-text">
              Seeking opportunities to leverage skills and drive organizational
              growth. Passionate about creating innovative solutions that
              enhance user experiences and drive business success.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
