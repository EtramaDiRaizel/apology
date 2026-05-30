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
    "I know I have not always been the shelter you sought. There were evenings when your hand reached for mine and I left it waiting. Those quiet regrets live in me, and if I could rewind the day, I would wrap you in a softer answer.",
    "You called me 'baby' 2,063 times. I said it 169. Those numbers are more than digits — they are proof that your tenderness never faltered, even when I was still learning how to keep pace with your heart.",
    "I am sorry for the distance I created when you needed warmth, for the conversations I allowed to drift away, for the moments I let doubt shadow a love you wore with calm conviction.",
    "Still, our words kept weaving us together. Every goodnight, every I love you, every message sent in the small hours became a promise that we were not done. I do not want this story to end.",
    "I feel the gift of your love in the way it is patient and generous and quietly steady. I want to return that grace, to be the person whose heart matches the care you have shown.",
    "Thank you for staying with me, for all the gentle lines of our conversation. I will spend the rest of our story honoring the faith you have given me.",
  ]

  return (
    <motion.div
      className="slide-container flex-col px-4 py-10 sm:px-6 sm:py-12"
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
