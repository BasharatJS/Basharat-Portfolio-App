import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../theme/ThemeContext'
import './Header.css'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const navItems = ['about', 'skills', 'experience', 'projects']

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.a
        href="#"
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Basharat@SD
      </motion.a>

      <nav>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <motion.a
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? '☀️' : '🌙'}
      </motion.button>
    </motion.header>
  )
}

export default Header
