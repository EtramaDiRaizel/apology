import React from 'react'
import { motion } from 'framer-motion'
import { useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

function Counter({ value, duration = 2 }) {
  const motionValue = useMotionValue(0)
  const displayValue = useTransform(motionValue, Math.round)
  const [displayedValue, setDisplayedValue] = useState(0)

  useEffect(() => {
    animate(motionValue, value, { duration })
  }, [value])

  useEffect(() => {
    const unsubscribe = displayValue.on('change', (v) => setDisplayedValue(v))
    return unsubscribe
  }, [displayValue])

  return <motion.span>{displayedValue.toLocaleString()}</motion.span>
}

export default function Slide2Overview({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const stats = [
    { label: 'Total Messages', value: data.metadata.total_messages },
    { label: 'From ikram', value: data.message_counts.ikram },
    { label: 'From twincess 🫶🏼', value: data.message_counts['twincess 🫶🏼'] },
  ]

  return (
    <motion.div
      className="slide-container flex-col"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="typography-headline text-off-white">The Conversation</h2>
        <motion.div className="w-12 h-px bg-subtle-accent mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, idx) => (
          <motion.div key={idx} variants={itemVariants} className="text-center">
            <motion.div
              className="typography-display text-subtle-accent mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
            >
              <Counter value={stat.value} duration={2.5} />
            </motion.div>
            <div className="typography-caption text-off-white text-opacity-50 tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="mt-24 text-center max-w-2xl mx-auto">
        <p className="typography-body text-off-white text-opacity-60 leading-relaxed">
          Eight months of saying good morning and goodnight. Of voice notes and late replies and I miss yous. Every message here is a small proof that we chose each other, again and again.
        </p>
      </motion.div>
    </motion.div>
  )
}
