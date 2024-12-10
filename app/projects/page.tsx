'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCard } from '@/components/ProjectCard'
import { NavigationIndicator } from '@/components/NavigationIndicator'
import { Clock } from '@/components/Clock'

const projects = [
  { name: "AI Portfolio Builder", year: 2023, image: "/images/project1.jpg" },
  { name: "E-commerce Redesign", year: 2023, image: "/images/project2.jpg" },
  { name: "Immersive VR Experience", year: 2022, image: "/images/project3.jpg" },
  { name: "Social Media Tool", year: 2022, image: "/images/project4.jpg" },
  { name: "Music Visualizer App", year: 2021, image: "/images/project5.jpg" },
  { name: "Interactive Art Gallery", year: 2021, image: "/images/project6.jpg" },
  { name: "Personal Website", year: 2020, image: "/images/project7.jpg" },
  { name: "Data Viz Dashboard", year: 2020, image: "/images/project8.jpg" },
]

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(projects.length / 4)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        e.preventDefault()
        containerRef.current.scrollTop += e.deltaY
      }
    }

    const currentContainer = containerRef.current
    if (currentContainer) {
      currentContainer.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight
      const maxScrollTop = scrollHeight - clientHeight
      const scrollPerPage = maxScrollTop / (totalPages - 1)
      container.scrollTop = (currentPage - 1) * scrollPerPage
    }
  }, [currentPage, totalPages])

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Left Side Content */}
      <div className="fixed left-8 flex flex-col justify-between h-screen py-8 z-10">
        <div className="flex items-center space-x-4 text-black">
          <span className="font-bold text-xl">RY</span>
          <Clock />
        </div>
        <div className="text-xl font-light text-black">
          Featured Projects <span className="text-sm">({projects.length})</span>
        </div>
        <NavigationIndicator currentPage={currentPage} totalPages={totalPages} />
      </div>

      {/* Right Side Content */}
      <div className="fixed right-8 flex flex-col justify-between h-screen py-8 text-right z-10">
        <div className="space-x-4 text-black">
          <Link href="/about" className="hover:opacity-70 transition-opacity">About Me</Link>
          <span>/</span>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>
        <div className="text-xl font-light text-black">
          2022 <span className="inline-block transform rotate-45 mx-1">/</span> 2024
        </div>
        <div className="max-w-[200px] text-sm text-black">
          A Featured collection of work over the last 2 Years
        </div>
      </div>

      {/* Projects Grid */}
      <main 
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
      >
        <div className="h-screen flex items-center justify-center snap-start">
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 px-32">
            {projects.map((project, index) => (
              <div key={project.name} className={index % 2 === 0 ? "col-start-1" : "col-start-2"}>
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="fixed inset-x-0 bottom-8 flex justify-center space-x-4 z-10">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 hover:opacity-70 disabled:opacity-30 text-black"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 hover:opacity-70 disabled:opacity-30 text-black"
        >
          →
        </button>
      </div>
    </div>
  )
}

