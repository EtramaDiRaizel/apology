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
    "I know I haven't always been what you needed. There were times you reached for me and I wasn't there the way I should have been. I think about those moments more than you know — and if I could go back, I'd hold on tighter.",
    "You said 'baby' 2,063 times. I said it 169. That alone tells me something I need to hear — that you never stopped showing up for me, even when I was still figuring out how to do the same for you.",
    "I'm sorry for the distance I put between us when you needed closeness. For the conversations I should have started but didn't. For every time I made you feel unsure about something you were already so certain of.",
    "But we never stopped talking, did we? Every goodnight, every I love you, every message sent at 3 AM when we should've been sleeping — that's us refusing to let go. And I don't want to let go.",
    "I see what you've given me. Not just in these numbers, but in the way you love — patient, generous, steady. I want to love you like that. I want to be the person you deserve.",
    "Thank you for staying. For us. For every word you've ever sent me. I'll spend the rest of our story earning them.",
  ]

  return (
    <motion.div
      className="slide-container flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={paragraphVariants} className="mb-4 md:mb-6">
          <h2 className="typography-headline text-off-white">
            An Apology
          </h2>
          <motion.div className="w-12 h-px bg-subtle-accent mt-3" />
        </motion.div>

        {/* Main Text */}
        <motion.div className="space-y-3.5 md:space-y-4">
          {apologyText.map((paragraph, idx) => (
            <motion.p
              key={idx}
              variants={paragraphVariants}
              className="text-base md:text-[17px] text-off-white text-opacity-85 leading-relaxed font-sans font-light tracking-wide text-justify sm:text-left"
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
          <div className="space-y-1.5">
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
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-1 h-12 bg-subtle-accent rounded-full" />
      </motion.div>
    </motion.div>
  )
}
