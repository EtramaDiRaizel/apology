import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../wrapped_data.json'
import Slide1Title from './slides/Slide1Title'
import Slide2Overview from './slides/Slide2Overview'
import Slide3Keywords from './slides/Slide3Keywords'
import Slide4Nighttime from './slides/Slide4Nighttime'
import Slide5Apology from './slides/Slide5Apology'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const slides = [
    <Slide1Title key="slide-1" />,
    <Slide2Overview key="slide-2" data={data} />,
    <Slide3Keywords key="slide-3" data={data} />,
    <Slide4Nighttime key="slide-4" data={data} />,
    <Slide5Apology key="slide-5" />,
  ]

  const slideVariants = {
    enter: (dir) => ({
      y: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      y: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => {
      const next = prev + newDirection
      return Math.max(0, Math.min(next, slides.length - 1))
    })
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        paginate(-1)
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        paginate(1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  // Mouse wheel navigation
  useEffect(() => {
    let wheelTimeout
    const handleWheel = (e) => {
      clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          paginate(1)
        } else if (e.deltaY < 0) {
          paginate(-1)
        }
      }, 100)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentSlide])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-charcoal">
      {/* Main Content */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
          }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-off-white bg-opacity-10">
        <motion.div
          className="h-full bg-off-white"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      {/* Navigation Hints */}
      <div className="fixed bottom-12 right-safe text-off-white text-opacity-40 text-xs tracking-wider font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {currentSlide + 1} / {slides.length}
        </motion.div>
      </div>

      {/* Navigation Arrows (subtle) */}
      <motion.button
        onClick={() => paginate(-1)}
        disabled={currentSlide === 0}
        className="fixed left-safe top-1/2 -translate-y-1/2 text-off-white text-opacity-20 hover:text-opacity-60 transition-all duration-300 disabled:opacity-0 disabled:cursor-not-allowed z-20"
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={() => paginate(1)}
        disabled={currentSlide === slides.length - 1}
        className="fixed right-safe top-1/2 -translate-y-1/2 text-off-white text-opacity-20 hover:text-opacity-60 transition-all duration-300 disabled:opacity-0 disabled:cursor-not-allowed z-20"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Keyboard Hint */}
      <motion.div
        className="fixed bottom-12 left-safe text-off-white text-opacity-30 text-xs tracking-wider font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Use ↑↓ or Space to navigate
      </motion.div>
    </div>
  )
}
