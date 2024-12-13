'use client'

import Image from 'next/image'

interface ProjectCircleProps {
  name: string
  year: number
  number: number
  image: string
  index: number
}

export default function ProjectCircle({ name, year, number, image, index }: ProjectCircleProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Image circle */}
      <div className="relative w-[180px] h-[180px]">
        <div className="absolute inset-0 rounded-full border-2 border-black/20 overflow-hidden">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Connecting dots */}
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-black/50 rounded-full transform -translate-y-1/2 -translate-x-1"></div>
        <div className="absolute top-1/2 right-0 w-2 h-2 bg-black/50 rounded-full transform -translate-y-1/2 translate-x-1"></div>
      </div>

      {/* Info circle */}
      <div className="relative w-[180px] h-[180px]">
        <div className="absolute inset-0 rounded-full border-2 border-black/20 flex flex-col items-center justify-between py-6">
          <span className="text-sm text-black/50 font-stapel">N. {String(number).padStart(2, '0')}</span>
          <h3 className="text-xl font-bold text-black font-stapel text-center px-4">{name}</h3>
          <span className="text-sm text-black/50 font-stapel">Y. {year}</span>
        </div>
        {/* Outer circle */}
        <div className="absolute -inset-2 rounded-full border-2 border-black/20"></div>
        {/* Connecting dots */}
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-black/50 rounded-full transform -translate-y-1/2 -translate-x-1"></div>
        <div className="absolute top-1/2 right-0 w-2 h-2 bg-black/50 rounded-full transform -translate-y-1/2 translate-x-1"></div>
      </div>
    </div>
  )
}

