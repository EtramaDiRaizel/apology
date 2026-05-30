import React from 'react'
import { motion } from 'framer-motion'

export default function Slide1Title() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="slide-container flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-off-white text-opacity-40 typography-caption mb-12">
            For You, From Me
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="typography-display mb-6 text-off-white leading-tight"
        >
          An Archive of Us
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="w-16 h-px bg-subtle-accent mx-auto mb-12"
        />

        <motion.p
          variants={itemVariants}
          className="typography-subheader text-off-white text-opacity-60 font-light"
        >
          Eight months of loving you, told through the words we shared
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-20 text-off-white text-opacity-30 text-sm tracking-wider"
        >
          2025 — 2026
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-off-white text-opacity-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
