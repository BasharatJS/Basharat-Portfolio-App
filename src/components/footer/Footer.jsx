import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './Footer.css'
import FloatingShapes from '../floating/FloatingShaps'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      info: 'Pune, India 411028',
      link: 'https://maps.google.com/?q=Pune,India',
    },
    {
      icon: '📞',
      title: 'Phone',
      info: '9492976113',
      link: 'tel:+919492976113',
    },
    {
      icon: '✉️',
      title: 'Email',
      info: 'tutortaquee123@gmail.com',
      link: 'mailto:tutortaquee123@gmail.com',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      info: 'Connect with me',
      link: 'https://www.linkedin.com/in/md-basharat-taquee-84a6a922b',
    },
  ]

  const quickLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.")
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <footer className="footer">
      <FloatingShapes />
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Contact Section */}
          <motion.div
            className="footer-section contact-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: false }}
            >
              Let's Connect
            </motion.h3>

            <div className="contact-grid">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.link}
                  className="contact-card"
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={
                    contact.link.startsWith('http') ? 'noopener noreferrer' : ''
                  }
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + 0.1 * index, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    rotate: 2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: false }}
                >
                  <motion.span
                    className="contact-icon"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {contact.icon}
                  </motion.span>
                  <h4>{contact.title}</h4>
                  <p>{contact.info}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className="footer-section links-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: false }}
            >
              Quick Links
            </motion.h3>

            <div className="quick-links">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="quick-link"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + 0.1 * index, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    x: 10,
                    color: '#667eea',
                  }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: false }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section - Replacing Social Links */}
          <motion.div
            className="footer-section form-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.h3
              className="form-title"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: false }}
            >
              Send Me a Message
            </motion.h3>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: false }}
            >
              <div className="form-row">
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </motion.div>

                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </motion.div>
              </div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="form-textarea"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: false }}
              >
                {isSubmitting ? (
                  <span className="loading-text">
                    <span className="spinner"></span>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="education-card"
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <h4>🎓 Education</h4>
            <p>Bachelor of Technology: Mechanical Engineering</p>
            <p>Jawahar Lal Nehru Technological University - Hyderabad, India</p>
            <p>2013 - 2017</p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="footer-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            viewport={{ once: false }}
          />

          <div className="footer-bottom-content">
            <motion.p
              className="copyright"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              viewport={{ once: false }}
            >
              &copy; 2025 MD Basharat Taquee. All rights reserved.
            </motion.p>

            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 2.2,
                duration: 0.6,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 180,
                backgroundColor: '#667eea',
              }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: false }}
            >
              ⬆️
            </motion.button>
          </div>

          <motion.p
            className="made-with-love"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            viewport={{ once: false }}
          >
            Made with ❤️ using React & Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
