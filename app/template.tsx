'use client'
import { motion } from 'framer-motion'
import React from 'react'

const variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  enter: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 120,
      duration: 1.2,
    }
  },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className='site-wrapper'
      variants={variants}
      initial='hidden'
      animate='enter'
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  )
}