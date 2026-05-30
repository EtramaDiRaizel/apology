import React from 'react'
import { motion } from 'framer-motion'

export default function Slide5Apology() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const apologyText = [
    "There are evenings when your hand reached out and I left it waiting. Those quiet missteps now live in me as permanent regrets. If I could re-author those days, I would give you a softer answer.",
    "Our telemetry reveals an undeniable asymmetry: you called me 'baby' 2,063 times; I said it only 169. Those numbers are not mere data points. They are concrete evidence that your tenderness never faltered, even while I was still learning how to keep pace with your heart.",
    "I am sorry for the distance I engineered when you required warmth, for the conversations I allowed to drift into silence, and for the moments I let hesitation shadow a devotion you wore with calm conviction.",
    "Yet, the raw log of our dialogue shows we never truly disconnected. Every late-night sign-off, every 'I love you', and every message sent in the quiet hours became an unspoken agreement that our narrative was unfinished. I refuse to let this document close.",
    "Your affection has been patient, generous, and entirely steady. My objective now is to return that grace, ensuring my actions finally match the metric of care you have established.",
    "Thank you for remaining here, and for every gentle line of our history. I will spend the remainder of our time honoring the faith you have invested in me.",
  ]

  return (
    <motion.div
      className="slide-container flex-col px-4 py-10 sm:px-6 sm:py-12 overflow-auto max-h-screen sm:max-h-full sm:overflow-visible"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-2xl w-full mx-auto px-2 sm:px-0">
        {/* Header */}
        <motion.div variants={paragraphVariants} className="mb-4 md:mb-6">
          <h2 className="typography-headline text-off-white text-3xl sm:text-4xl leading-tight">
            An Apology
          </h2>
          <motion.div className="w-12 h-px bg-subtle-accent mt-3" />
        </motion.div>

        {/* Main Text */}
        <motion.div className="space-y-3 md:space-y-4">
          {apologyText.map((paragraph, idx) => (
            <motion.p
              key={idx}
              variants={paragraphVariants}
              className="text-sm sm:text-base md:text-[17px] text-off-white text-opacity-85 leading-7 sm:leading-8 font-sans font-light tracking-wide text-left break-words"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Signature area */}
        <motion.div
          variants={paragraphVariants}
          className="mt-6 md:mt-8 pt-4 border-t border-off-white border-opacity-10"
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="typography-caption text-off-white text-opacity-40 text-xs tracking-wider normal-case">
              With all my heart
            </div>
            <div className="text-off-white text-opacity-50 text-sm">
              May 2026
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="hidden sm:block absolute bottom-16 left-1/2 -translate-x-1/2"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-1 h-12 bg-subtle-accent rounded-full" />
      </motion.div>
    </motion.div>
  )
}
