'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingAnimation({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [percentage, setPercentage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isExpanding, setIsExpanding] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsLoaded(true)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const handleClick = useCallback(() => {
    setIsExpanding(true)
    setTimeout(onLoadingComplete, 1000)
  }, [onLoadingComplete])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ${isExpanding ? 'scale-[200]' : ''}`}>
      <div className="w-full h-full relative">
      <iframe src='https://my.spline.design/particleplanet-4f48dfc473edb5c80c31bfa9f6518742/' frameBorder='0' width='100%' height='100%'></iframe>
      </div>
      <AnimatePresence>
        {!isLoaded ? (
          <motion.div
            key="percentage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-10 text-white text-4xl font-bold"
          >
            {percentage}%
          </motion.div>
        ) : (
          <motion.button 
            key="enter-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
            className="absolute bottom-10 text-white text-2xl font-bold bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-6 py-3 rounded-lg hover:bg-opacity-30 transition-colors"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            Click to Enter
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

