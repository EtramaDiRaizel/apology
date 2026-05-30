import React from 'react'
import { motion } from 'framer-motion'

export default function Slide3Keywords({ data }) {
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
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const reverseItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const iloveyoumore = data.keyword_statistics.iloveyoumore.counts
  const iloveyoutoo = data.keyword_statistics.iloveyoutoo.counts
  const iloveyou = data.keyword_statistics.iloveyou.counts

  const morePercentage = (iloveyoumore.ikram / iloveyoumore.total) * 100
  const tooPercentage = (iloveyoutoo.ikram / iloveyoutoo.total) * 100

  return (
    <motion.div
      className="slide-container flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="typography-headline text-off-white">
          The Language of Affection
        </h2>
        <motion.div className="w-12 h-px bg-subtle-accent mt-4" />
      </motion.div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - iloveyoumore */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <div className="mb-8">
            <div className="typography-caption text-off-white text-opacity-40 mb-4">
              I LOVE YOU MORE
            </div>
            <motion.div
              className="typography-display text-subtle-accent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {iloveyoumore.total}
            </motion.div>
            <p className="text-off-white text-opacity-50 text-sm mt-3 tracking-wider">
              times exchanged
            </p>
          </div>

          <div className="space-y-6 mt-12">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-off-white text-opacity-70 text-sm">ikram</span>
                <span className="typography-caption text-subtle-accent">{iloveyoumore.ikram} ({morePercentage.toFixed(0)}%)</span>
              </div>
              <motion.div
                className="h-1 bg-off-white bg-opacity-10 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-subtle-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${morePercentage}%` }}
                  transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-off-white text-opacity-70 text-sm">twincess 🫶🏼</span>
                <span className="typography-caption text-subtle-accent">{iloveyoumore['twincess 🫶🏼']} ({100 - morePercentage.toFixed(0)}%)</span>
              </div>
              <motion.div
                className="h-1 bg-off-white bg-opacity-10 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-off-white bg-opacity-30"
                  initial={{ width: 0 }}
                  animate={{ width: `${100 - morePercentage}%` }}
                  transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - iloveyoutoo */}
        <motion.div variants={reverseItemVariants} className="flex flex-col justify-center">
          <div className="mb-8">
            <div className="typography-caption text-off-white text-opacity-40 mb-4">
              I LOVE YOU TOO
            </div>
            <motion.div
              className="typography-display text-off-white text-opacity-30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {iloveyoutoo.total}
            </motion.div>
            <p className="text-off-white text-opacity-50 text-sm mt-3 tracking-wider">
              times exchanged
            </p>
          </div>

          <div className="space-y-6 mt-12">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-off-white text-opacity-70 text-sm">ikram</span>
                <span className="typography-caption text-subtle-accent">{iloveyoutoo.ikram} ({tooPercentage.toFixed(0)}%)</span>
              </div>
              <motion.div
                className="h-1 bg-off-white bg-opacity-10 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-subtle-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${tooPercentage}%` }}
                  transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-off-white text-opacity-70 text-sm">twincess 🫶🏼</span>
                <span className="typography-caption text-subtle-accent">{iloveyoutoo['twincess 🫶🏼']} ({100 - tooPercentage.toFixed(0)}%)</span>
              </div>
              <motion.div
                className="h-1 bg-off-white bg-opacity-10 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-off-white bg-opacity-30"
                  initial={{ width: 0 }}
                  animate={{ width: `${100 - tooPercentage}%` }}
                  transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom insight */}
      <motion.div
        variants={itemVariants}
        className="mt-24 text-center max-w-2xl mx-auto"
      >
        <p className="text-off-white text-opacity-60 text-sm leading-relaxed tracking-wide">
          "More" is reaching for you first. "Too" is holding you back just as tight.
          Two different ways of saying the same thing — I'm yours.
        </p>
      </motion.div>
    </motion.div>
  )
}
