'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectCircleProps {
  name: string
  year: number
  number: number
  image: string
  index: number
}

export default function ProjectCircle({ name, year, number, image, index }: ProjectCircleProps) {
  return (
    <motion.div
      className="relative w-[14rem] h-[26rem]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image circle */}
      <div className="absolute top-0 w-[14rem] h-[14rem]">
        <div className="relative w-full h-full rounded-full border-2 border-black/20 overflow-hidden">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Info circle */}
      <div className="absolute bottom-0 w-[14rem] h-[14rem]">
        <div className="relative w-full h-full rounded-full border-2 border-black/20 flex flex-col items-center justify-between py-6 bg-white/30 backdrop-blur-sm">
          <span className="text-sm text-black/50 font-stapel">N. {String(number).padStart(2, '0')}</span>
          <h3 className="text-xl font-bold text-black font-stapel text-center px-4 ">{name}</h3>
          <span className="text-sm text-black/50 font-stapel">Y. {year}</span>
        </div>
      </div>

      {/* Connecting dots */}
      <div className="absolute top-[6.5rem] left-0 w-2 h-2 bg-black/50 rounded-full transform -translate-x-1/2"></div>
      <div className="absolute top-[6.5rem] right-0 w-2 h-2 bg-black/50 rounded-full transform translate-x-1/2"></div>
      <div className="absolute bottom-[6.5rem] left-0 w-2 h-2 bg-black/50 rounded-full transform -translate-x-1/2"></div>
      <div className="absolute bottom-[6.5rem] right-0 w-2 h-2 bg-black/50 rounded-full transform translate-x-1/2"></div>
    </motion.div>
  )
}

