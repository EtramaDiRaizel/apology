import React from 'react'
import data from '../wrapped_data.json'
import Slide1Title from './slides/Slide1Title'
import Slide2Overview from './slides/Slide2Overview'
import Slide3Keywords from './slides/Slide3Keywords'
import Slide4Nighttime from './slides/Slide4Nighttime'
import Slide5Apology from './slides/Slide5Apology'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const slides = [
    <Slide1Title key="slide-1" />,
    <Slide2Overview key="slide-2" data={data} />,
    <Slide3Keywords key="slide-3" data={data} />,
    export default function App() {
      const slides = [
        <Slide1Title />,
        <Slide2Overview data={data} />,
        <Slide3Keywords data={data} />,
        <Slide4Nighttime data={data} />,
        <Slide5Apology />,
      ]

      return (
        <div className="w-full bg-charcoal">
          <div className="max-w-4xl mx-auto">
            {slides.map((s, i) => (
              <section key={i} className="w-full">
                {s}
              </section>
            ))}
          </div>
        </div>
      )
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
