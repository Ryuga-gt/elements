'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCircleProps {
  name: string
  year: number
  number: number
  image: string
  index: number
}

export function ProjectCircle({ name, year, number, image, index }: ProjectCircleProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* Image Circle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-[180px] h-[180px] relative"
      >
        <div className="absolute inset-0 rounded-full overflow-hidden border border-black/5 backdrop-blur-sm bg-white/10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Info Circle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        className="w-[180px] h-[180px] relative"
      >
        <div className="absolute inset-0 rounded-full border border-black/5 backdrop-blur-sm bg-white/10">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <span className="text-xs text-black/50 mb-1 font-stapel">N. {String(number).padStart(2, '0')}</span>
            <h3 className="text-sm text-black font-stapel text-center mb-1">{name}</h3>
            <span className="text-xs text-black/50 font-stapel">Y. {year}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

