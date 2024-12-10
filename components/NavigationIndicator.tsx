'use client'

import { motion } from 'framer-motion'

interface NavigationIndicatorProps {
  currentPage: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
}

export function NavigationIndicator({ currentPage, totalPages, onPrevious, onNext }: NavigationIndicatorProps) {
  return (
    <div className="relative w-[200px] h-[200px]">
      {/* Main circle */}
      <div className="absolute inset-0 rounded-full border border-black/20 bg-white/50 backdrop-blur-sm">
        {/* Top text */}
        <div className="absolute top-8 left-0 right-0 text-center">
          <span className="text-sm font-stapel text-black/70">PROJECTS</span>
        </div>
        
        {/* Center numbers and line */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-stapel mr-8">{currentPage}</span>
              <span className="text-4xl font-stapel ml-8">{totalPages}</span>
            </div>
            <motion.div 
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-1/2 left-1/2 w-[150%] h-px bg-black/20 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            </motion.div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <span className="text-sm font-stapel text-black/70">NAVIGATION</span>
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={onPrevious}
          className="absolute left-12 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors"
        >
          ←
        </button>
        <button 
          onClick={onNext}
          className="absolute right-12 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors"
        >
          →
        </button>
      </div>
    </div>
  )
}

