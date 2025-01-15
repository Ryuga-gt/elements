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
    date: "///",
    location: "Chandigarh",
    story: "0",
    image: "/images/1.jpg"
  },
  {
    year: 2006,
    title: "Roots of Learning",
    location: "Agra",
    story: `1`,
    image: "/images/TAJ_enhanced.jpg"
  },
  {
    year: 2008,
    title: "Blossoms of Curiosity",
    location: "Sulur",
    story: "2",
    image: "/images/art.svg"
  },
  {
    year: 2010,
    title: "The Urban Explorer",
    location: "New Delhi",
    story: "3",
    image: "/images/toon.png"
  },
  {
    year: 2015,
    title: "Fields of Glory",
    location: "Noida",
    story: "4",
    image: "/images/2.jpg"
  },
  {
    year: 2018,
    title: "Forge of the Future",
    location: "New Delhi",
    story: "5",
    image: "/images/contact_bg.png"
  },
  {
    year: 2024,
    title: "The Time that is NOW",
    location: "On The MOVE",
    story: "6",
    image: "/images/edit.jpeg"
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

