'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface StoryCardProps {
  title: string
  year: number
  location: string
  story: string
  image: string
  date?: string
  isEven: boolean
  variant?: 'default' | 'compact'
}

export function StoryCard({ title, year, location, story, image, date, isEven, variant = 'default' }: StoryCardProps) {
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto p-4"
      >
        <div className="bg-black/30 backdrop-blur-md rounded-lg shadow-2xl border border-orange-500/20 overflow-hidden">
          <div className="relative h-48">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-bold tracking-tight text-orange-500 mb-2">{title}</h3>
            <div className="flex items-center justify-between text-sm text-orange-300/80 mb-2">
              <span>{year}</span>
              <span>{location}</span>
            </div>
            {date && (
              <div className="text-sm text-orange-300/60 mb-2">
                {date}
              </div>
            )}
            <p className="text-sm leading-relaxed text-gray-100">{story}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full h-full max-w-7xl mx-auto px-4"
    >
      <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2 h-full relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 bg-black/30 backdrop-blur-md rounded-lg shadow-2xl border border-orange-500/20">
          <h3 className="text-4xl font-bold tracking-tight text-orange-500 mb-4">{title}</h3>
          <div className="flex items-center justify-between text-sm text-orange-300/80 mb-2">
            <span>{year}</span>
            <span>{location}</span>
          </div>
          {date && (
            <div className="text-sm text-orange-300/60 mb-4">
              {date}
            </div>
          )}
          <p className="text-lg leading-relaxed text-gray-100">{story}</p>
        </div>
      </div>
    </motion.div>
  )
}

