import React from 'react'
import { motion } from 'framer-motion'

export default function Slide4Nighttime({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const goodnight = data.keyword_statistics.goodnight.counts
  const baby = data.keyword_statistics.baby.counts
  const sayang = data.keyword_statistics.sayang ? data.keyword_statistics.sayang.counts : { ikram: 0, 'twincess 🫶🏼': 0, total: 0 }

  const goodnightIkram = goodnight.ikram
  const goodnightTwincess = goodnight['twincess 🫶🏼']
  const goodnightTotal = goodnight.total

  const sayangIkram = sayang.ikram
  const sayangTwincess = sayang['twincess 🫶🏼']
  const sayangTotal = sayang.total

  const babyIkram = baby.ikram
  const babyTwincess = baby['twincess 🫶🏼']
  const babyTotal = baby.total

  const goodnightIkramPercent = (goodnightIkram / goodnightTotal) * 100
  const goodnightTwincessPercent = (goodnightTwincess / goodnightTotal) * 100

  const sayangIkramPercent = (sayangIkram / sayangTotal) * 100
  const sayangTwincessPercent = (sayangTwincess / sayangTotal) * 100

  const babyIkramPercent = (babyIkram / babyTotal) * 100
  const babyTwincessPercent = (babyTwincess / babyTotal) * 100

  return (
    <motion.div
      className="slide-container flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-10 md:mb-12">
        <h2 className="typography-headline text-off-white text-center md:text-left">
          Rhythms of Tenderness
        </h2>
        <motion.div className="w-12 h-px bg-subtle-accent mt-4 mx-auto md:mx-0" />
      </motion.div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-6">
        {/* Goodnight Section */}
        <motion.div variants={itemVariants} className="bg-off-white bg-opacity-5 p-6 md:p-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Left - Stats */}
            <div>
              <h3 className="typography-subheader text-off-white mb-6">
                Goodnight
              </h3>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-off-white bg-opacity-5 p-4 rounded">
                  <div className="text-subtle-accent typography-headline mb-1 text-4xl md:text-5xl">
                    {goodnightTotal}
                  </div>
                  <p className="text-off-white text-opacity-50 text-[11px] tracking-wide">
                    How we close every night, for eight months
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] text-off-white text-opacity-40 uppercase tracking-wider">
                    Initiated more often by
                  </div>
                  <div className="typography-caption text-off-white text-base font-normal normal-case">
                    {goodnightIkram > goodnightTwincess ? 'ikram' : 'twincess 🫶🏼'}
                  </div>
                  <p className="text-off-white text-opacity-40 text-[11px] tracking-wider">
                    ikram: {goodnightIkram} • twincess: {goodnightTwincess}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right - Visual */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-end gap-4 h-36 border-b border-off-white border-opacity-10 pb-2">
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    className="w-full bg-subtle-accent rounded-t"
                    style={{ height: `${goodnightIkramPercent}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${goodnightIkramPercent}%` }}
                    transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
                  />
                  <div className="text-off-white text-opacity-50 text-[10px] mt-2 tracking-wider uppercase font-sans whitespace-nowrap">
                    ikram ({goodnightIkramPercent.toFixed(0)}%)
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    className="w-full bg-off-white bg-opacity-20 rounded-t"
                    style={{ height: `${goodnightTwincessPercent}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${goodnightTwincessPercent}%` }}
                    transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
                  />
                  <div className="text-off-white text-opacity-50 text-[10px] mt-2 tracking-wider uppercase font-sans whitespace-nowrap">
                    twincess ({goodnightTwincessPercent.toFixed(0)}%)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sayang Section */}
        <motion.div variants={itemVariants} className="bg-off-white bg-opacity-5 p-6 md:p-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Left - Stats */}
            <div>
              <h3 className="typography-subheader text-off-white mb-6">
                Sayang
              </h3>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-off-white bg-opacity-5 p-4 rounded">
                  <div className="text-subtle-accent typography-headline mb-1 text-4xl md:text-5xl">
                    {sayangTotal}
                  </div>
                  <p className="text-off-white text-opacity-50 text-[11px] tracking-wide">
                    The name that means everything between us
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] text-off-white text-opacity-40 uppercase tracking-wider">
                    Initiated more often by
                  </div>
                  <div className="typography-caption text-off-white text-base font-normal normal-case">
                    {sayangIkram > sayangTwincess ? 'ikram' : 'twincess 🫶🏼'}
                  </div>
                  <p className="text-off-white text-opacity-40 text-[11px] tracking-wider">
                    ikram: {sayangIkram} • twincess: {sayangTwincess}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right - Visual */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-end gap-4 h-36 border-b border-off-white border-opacity-10 pb-2">
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    className="w-full bg-off-white bg-opacity-20 rounded-t"
                    style={{ height: `${sayangIkramPercent}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${sayangIkramPercent}%` }}
                    transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                  />
                  <div className="text-off-white text-opacity-50 text-[10px] mt-2 tracking-wider uppercase font-sans whitespace-nowrap">
                    ikram ({sayangIkramPercent.toFixed(0)}%)
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    className="w-full bg-subtle-accent rounded-t"
                    style={{ height: `${sayangTwincessPercent}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${sayangTwincessPercent}%` }}
                    transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                  />
                  <div className="text-off-white text-opacity-50 text-[10px] mt-2 tracking-wider uppercase font-sans whitespace-nowrap">
                    twincess ({sayangTwincessPercent.toFixed(0)}%)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Baby Section */}
        <motion.div variants={itemVariants} className="bg-off-white bg-opacity-5 p-6 md:p-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Left - Stats */}
            <div>
              <h3 className="typography-subheader text-off-white mb-6">
                Baby
              </h3>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-off-white bg-opacity-5 p-4 rounded">
                  <div className="text-subtle-accent typography-headline mb-1 text-4xl md:text-5xl">
                    {babyTotal}
                  </div>
                  <p className="text-off-white text-opacity-50 text-[11px] tracking-wide">
                    Your favourite way to call me yours
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] text-off-white text-opacity-40 uppercase tracking-wider">
                    Preferred by
                  </div>
                  <div className="typography-caption text-off-white text-base font-normal normal-case">
                    {babyTwincess > babyIkram ? 'twincess 🫶🏼' : 'ikram'}
                  </div>
                  <p className="text-off-white text-opacity-40 text-[11px] tracking-wider">
                    ikram: {babyIkram} • twincess: {babyTwincess}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right - Visual */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-end gap-4 h-36 border-b border-off-white border-opacity-10 pb-2">
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    className="w-full bg-off-white bg-opacity-20 rounded-t"
                    style={{ height: `${babyIkramPercent}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${babyIkramPercent}%` }}
                    transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                  />
                  <div className="text-off-white text-opacity-50 text-[10px] mt-2 tracking-wider uppercase font-sans whitespace-nowrap">
                    ikram ({babyIkramPercent.toFixed(0)}%)
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    className="w-full bg-subtle-accent rounded-t"
                    style={{ height: `${babyTwincessPercent}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${babyTwincessPercent}%` }}
                    transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                  />
                  <div className="text-off-white text-opacity-50 text-[10px] mt-2 tracking-wider uppercase font-sans whitespace-nowrap">
                    twincess ({babyTwincessPercent.toFixed(0)}%)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Closing thought */}
      <motion.div
        variants={itemVariants}
        className="mt-10 md:mt-12 text-center max-w-2xl mx-auto px-6"
      >
        <p className="text-off-white text-opacity-50 text-sm leading-relaxed tracking-wide">
          The small things that hold us together — a goodnight that says I'm thinking of you,
          and the names we only have for each other.
        </p>
      </motion.div>
    </motion.div>
  )
}
