import Image from 'next/image'
import { motion } from 'framer-motion'
import { GridBackground } from './GridBackground'

interface StorySectionProps {
  event: {
    year: number
    title: string
    date?: string
    location: string
    story: string
    image: string
  }
  isEven: boolean 
}

export function StorySection({ event, isEven }: StorySectionProps) {
  return (
    <section className="snap-start w-screen h-screen flex-shrink-0 relative flex items-center justify-center">
      <GridBackground />
      <div className={`flex w-full h-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <motion.div 
          className="w-1/2 h-full p-12 flex items-center justify-center"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 w-full h-full overflow-y-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">{event.title}</h2>
            <div className="text-orange-300 mb-2">
              <span>{event.year}</span> | <span>{event.location}</span>
            </div>
            {event.date && (
              <div className="text-orange-300/60 mb-4">{event.date}</div>
            )}
            <p className="text-gray-100 text-lg leading-relaxed">{event.story}</p>
          </div>
        </motion.div>
        <motion.div 
          className="w-1/2 h-full relative"
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={event.image}
            alt={event.title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

