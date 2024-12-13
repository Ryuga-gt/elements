'use client'

import { motion } from 'framer-motion'

interface NavigationIndicatorProps {
  lowestVisibleProject: number
  highestVisibleProject: number
  totalProjects: number
}

export default function NavigationIndicator({ lowestVisibleProject, highestVisibleProject, totalProjects }: NavigationIndicatorProps) {
  return (
    <div className="relative w-[220px] h-[220px]">
      <div className="absolute inset-0 rounded-full border-2 border-black/40 bg-transparent">
        <div className="absolute top-8 left-0 right-0 text-center">
          <span className="text-sm font-stapel text-black/70">PROJECTS</span>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-stapel mr-8 text-black/80">{lowestVisibleProject}</span>
              <span className="text-5xl font-stapel ml-8 text-black/80">{highestVisibleProject}</span>
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

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <span className="text-sm font-stapel text-black/70">NAVIGATION</span>
        </div>
      </div>
    </div>
  )
}

