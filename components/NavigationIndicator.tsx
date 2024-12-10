'use client'

import { motion } from 'framer-motion'

interface NavigationIndicatorProps {
  currentPage: number
  totalPages: number
}

export function NavigationIndicator({ currentPage, totalPages }: NavigationIndicatorProps) {
  return (
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 rounded-full border border-black"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-2xl font-light text-black">
          <span>{currentPage}</span>
          <motion.div 
            className="h-px w-8 bg-black rotate-45 my-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <span>{totalPages}</span>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="h-px w-[120%] bg-black rotate-45"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-sm font-light text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Projects
        </motion.span>
      </div>
    </div>
  )
}

