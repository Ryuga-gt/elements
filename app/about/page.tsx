'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { StorySection } from '@/components/StorySection'

const timelineEvents = [
  {
    year: 2000,
    title: "The Dawn",
    // date: "5th February 2000, 4:30 PM",
    location: "Chandigarh",
    // story: "I was born on a crisp February evening in Chandigarh, a city known for its blend of modernity and serenity. Nestled at the foothills of the Shivalik range, it was the perfect place to begin my journey. Little did I know, this city’s balance of order and vibrancy would shape my own approach to life and learning.",
    image: "/images/1.jpg"
  },
  {
    year: 2006,
    title: "Roots of Learning",
    location: "Agra",
    // story: `My early schooling years began in Agra, where I first learned to read, write, and explore the world through books and stories. The city's rich heritage, with the Taj Mahal standing as a testament to timeless beauty, always inspired me. Even as a child, I felt the quiet pull of curiosity to understand the "why" and "how" behind everything.`,
    image: "/images/TAJ_enhanced.jpg"
  },
  {
    year: 2008,
    title: "Blossoms of Curiosity",
    location: "Sulur",
    // story: "Moving to Sulur was a turning point. Nestled in the calm of southern India, it gave me the space to observe, question, and grow. My teachers encouraged me to ask questions, and I began exploring the world with a deeper sense of wonder. It was here that I started to develop the critical thinking skills that would later become a cornerstone of my personality.",
    image: "/images/art.svg"
  },
  {
    year: 2010,
    title: "The Urban Explorer",
    location: "New Delhi",
    // story: "New Delhi was a completely different world—a fast-paced, dynamic city that exposed me to diverse cultures and ideas. My time here taught me adaptability, and I began to understand the importance of collaboration and connection. Whether it was navigating the crowded streets or excelling in school, I learned how to thrive in a bustling environment.",
    image: "/images/toon.png"
  },
  {
    year: 2015,
    title: "Fields of Glory",
    location: "Noida",
    // story: "The football field became your battleground, where discipline and teamwork shaped you. You stood tall, representing not just yourself but a team, a region, and the dream of making it to the national stage.",
    image: "/images/2.jpg"
  },
  {
    year: 2018,
    title: "Forge of the Future",
    location: "New Delhi",
    // story: "College was the forge where I shaped my ambitions and broadened my horizons. The late-night coding marathons, lively debates, and group projects taught me the value of persistence and collaboration. It was a time of experimentation—building small projects, failing fast, and learning faster. These years built the foundation of my technical expertise and fueled my drive to create meaningful solutions.",
    image: "/images/contact_bg.png"
  },
  {
    year: 2024,
    title: "The Time that is NOW",
    location: "On The MOVE",
    // story: "The last two years have been a whirlwind of growth and preparation. I immersed myself in learning cutting-edge technologies like deep learning, machine learning, and the MERN stack, tackling challenging projects that tested my skills and strengthened my resolve. Staying updated with the latest trends, I made it a priority to refine my problem-solving abilities and explore new ideas. Now, I stand ready—eager to take my skills to a larger stage. This is the moment I’ve been preparing for: to contribute meaningfully, tackle big challenges, and create solutions that leave a lasting impact. The journey so far has been incredible, but I know the best is yet to come.",
    // image: "/images/edit.jpeg"
  },
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        const delta = e.deltaY
        const sensitivity = 30 // Adjust this value to change scrolling sensitivity

        if (Math.abs(delta) > sensitivity) {
          if (delta > 0 && currentSection < timelineEvents.length) {
            setCurrentSection(prev => Math.min(prev + 1, timelineEvents.length))
          } else if (delta < 0 && currentSection > 0) {
            setCurrentSection(prev => Math.max(prev - 1, 0))
          }
        }
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          setCurrentSection(prev => Math.min(prev + 1, timelineEvents.length))
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          setCurrentSection(prev => Math.max(prev - 1, 0))
        }
      }

      container.addEventListener('wheel', handleWheel, { passive: false })
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        container.removeEventListener('wheel', handleWheel)
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.scrollTo({
        left: currentSection * window.innerWidth,
        behavior: 'smooth'
      })
    }
  }, [currentSection])

  return (
    <div 
      ref={containerRef}
      className="flex overflow-x-hidden overflow-y-hidden snap-x snap-mandatory w-screen h-screen"
    >
      {/* Spline Section */}
      <section className="snap-start w-screen h-screen flex-shrink-0 relative">
        <div className="absolute inset-0 z-0">
          <iframe 
            src='https://my.spline.design/hellodistortingintro-9cde4495edda1bd610510d85311aa540/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
          ></iframe>
        </div>
        <Link href="/" className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <Image 
            src="/images/1.jpg"
            alt="Ryuga Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </Link>
        <div className="absolute bottom-16 right-8 z-20 flex items-center text-white">
          <span className="mr-2">Right Arrow</span>
          <ChevronRight size={24} />
        </div>
        <GridBackground />
      </section>

      {/* Story Sections */}
      {timelineEvents.map((event, index) => (
        <StorySection key={index} event={event} isEven={index % 2 === 0} />
      ))}
    </div>
  )
}

function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="grid-pattern" 
            width="200" 
            height="200" 
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line 
              x1="0" 
              y1="0" 
              x2="100" 
              y2="0" 
              stroke="beige" 
              strokeWidth="1"
            />
            <line 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="100" 
              stroke="beige" 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  )
}

