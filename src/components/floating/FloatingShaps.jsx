import React from 'react'
import { motion } from 'framer-motion'

const FloatingShapes = () => {
  const shapes = [
    {
      size: 100,
      gradient: 'linear-gradient(45deg, #667eea, #764ba2)',
      borderRadius: '50%',
      top: '20%',
      left: '10%',
      duration: 6,
      delay: 0,
    },
    {
      size: 80,
      gradient: 'linear-gradient(45deg, #f093fb, #f5576c)',
      borderRadius: '30%',
      top: '60%',
      right: '10%',
      duration: 8,
      delay: 2,
    },
    {
      size: 120,
      gradient: 'linear-gradient(45deg, #4facfe, #00f2fe)',
      borderRadius: '20%',
      bottom: '20%',
      left: '20%',
      duration: 7,
      delay: 4,
    },
  ]

  return (
    <div className="floating-shapes">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="shape"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: shape.gradient,
            borderRadius: shape.borderRadius,
            position: 'absolute',
            opacity: 0.1,
            ...Object.fromEntries(
              Object.entries(shape).filter(([key]) =>
                ['top', 'left', 'right', 'bottom'].includes(key)
              )
            ),
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes
