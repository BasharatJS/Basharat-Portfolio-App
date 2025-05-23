import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import FloatingShapes from '../floating/FloatingShaps'

const Projects = () => {
  const projects = [
    {
      title: 'Dayprise App',
      category: 'Mobile App Development',
      description:
        'Mobile application developed using React Native CLI within the React ecosystem.',
      technologies: [
        'React Native CLI',
        'Redux',
        'JavaScript',
        'Third-party APIs',
      ],
      points: [
        'Built responsive UI components based on prototypes and wireframes',
        'Integrated third-party libraries and APIs for enhanced functionality',
        'Implemented Redux for efficient state management and improved app performance',
      ],
    },
    {
      title: 'Social Media App',
      category: 'Mobile App Development',
      description:
        'Interactive social platform built with Expo CLI for faster development workflow.',
      technologies: ['Expo CLI', 'Clerk', 'Convex', 'React Native'],
      points: [
        'Utilized Expo libraries to create an interactive and user-friendly interface',
        'Integrated Clerk for secure user authentication',
        'Connected to a Convex backend to manage database operations and real-time data',
      ],
    },
    {
      title: 'Chat App & E-Commerce Store',
      category: 'MERN Stack Development',
      description:
        'Full-stack MERN application with modern UI and efficient state management.',
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'Zustand',
      ],
      points: [
        'Used React.js for the user interface, styled with Tailwind CSS and Daisy UI',
        "Implemented Zustand for managing the application's state",
        'Set up backend with Node.js, Express.js, and MongoDB database',
      ],
    },
  ]

  return (
    <section
      id="projects"
      className="section projects"
      style={{ marginBottom: 0 }}
    >
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
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              whileHover={{
                scale: 1.03,
                rotateY: 2,
                boxShadow: '0 25px 50px var(--shadow)',
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="project-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
                <p className="project-description">{project.description}</p>
              </motion.div>

              <motion.div
                className="technologies"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.2 * index + 0.6 + 0.1 * techIndex,
                      duration: 0.3,
                    }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <div className="project-points">
                {project.points.map((point, pointIndex) => (
                  <motion.p
                    key={pointIndex}
                    className="project-point"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2 * index + 0.8 + 0.1 * pointIndex,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
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

export default Projects
