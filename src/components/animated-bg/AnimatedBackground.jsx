import React from 'react'
import { motion } from 'framer-motion'
import './AnimatedBackground.css'

const AnimatedBackground = ({ variant = 'default' }) => {
  // Different background patterns for each section
  const patterns = {
    hero: [
      { size: 200, x: '10%', y: '20%', delay: 0, duration: 20 },
      { size: 150, x: '80%', y: '60%', delay: 5, duration: 25 },
      { size: 100, x: '20%', y: '80%', delay: 10, duration: 30 },
      { size: 120, x: '70%', y: '10%', delay: 15, duration: 18 },
    ],
    about: [
      { size: 180, x: '15%', y: '30%', delay: 2, duration: 22 },
      { size: 130, x: '75%', y: '70%', delay: 8, duration: 28 },
      { size: 90, x: '30%', y: '10%', delay: 12, duration: 24 },
    ],
    skills: [
      { size: 160, x: '20%', y: '40%', delay: 4, duration: 26 },
      { size: 110, x: '80%', y: '20%', delay: 9, duration: 32 },
      { size: 140, x: '10%', y: '75%', delay: 14, duration: 20 },
      { size: 80, x: '60%', y: '85%', delay: 18, duration: 35 },
    ],
    experience: [
      { size: 170, x: '25%', y: '15%', delay: 3, duration: 24 },
      { size: 120, x: '70%', y: '50%', delay: 11, duration: 29 },
      { size: 95, x: '40%', y: '90%', delay: 16, duration: 22 },
    ],
    projects: [
      { size: 190, x: '12%', y: '35%', delay: 6, duration: 27 },
      { size: 140, x: '85%', y: '15%', delay: 13, duration: 31 },
      { size: 105, x: '50%', y: '80%', delay: 19, duration: 25 },
      { size: 75, x: '30%', y: '60%', delay: 21, duration: 33 },
    ],
    footer: [
      { size: 155, x: '18%', y: '25%', delay: 7, duration: 23 },
      { size: 125, x: '75%', y: '65%', delay: 17, duration: 28 },
      { size: 85, x: '45%', y: '10%', delay: 20, duration: 30 },
    ],
  }

  const currentPattern = patterns[variant] || patterns.default || patterns.hero

  return (
    <div className="animated-background">
      {currentPattern.map((element, index) => (
        <motion.div
          key={`${variant}-${index}`}
          className="floating-element"
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Additional gradient orbs */}
      <motion.div
        className="gradient-orb orb-1"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="gradient-orb orb-2"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
      <motion.div
        className="gradient-orb orb-3"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 8,
        }}
      />
    </div>
  )
}

export default AnimatedBackground
