'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  name: string
  year: number
  image: string
  index: number
}

export function ProjectCard({ name, year, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-[200px] h-[200px] mb-8"
    >
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-black"
        whileHover={{ rotate: -360 }}
        transition={{ duration: 2, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[10px] rounded-full overflow-hidden backdrop-blur-sm bg-white/30"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 2, ease: "linear" }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-center p-4">
            <h3 className="text-white text-lg font-light mb-1">{name}</h3>
            <p className="text-white/70 text-sm">{year}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

