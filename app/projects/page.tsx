'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCircle } from '@/components/ProjectCircle'
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
  const projectsPerPage = 4
  const startIndex = (currentPage - 1) * projectsPerPage

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Spline Background */}
      <div className="fixed inset-0 z-0">
        <iframe src='https://my.spline.design/abstractgradientbackground-011bda7e03e77cf26d36ff66050f0278/' frameBorder='0' width='100%' height='100%'></iframe>
      </div>

      {/* Left Side Content */}
      <div className="fixed left-8 flex flex-col justify-between h-screen py-8 z-10">
        <div className="flex items-center space-x-4 text-black">
          <span className="font-bold text-xl">RY</span>
          <Clock />
        </div>
        <div className="text-xl font-light text-black font-stapel">
          Featured Projects <span className="text-sm">({projects.length})</span>
        </div>
        <NavigationIndicator 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>

      {/* Right Side Content */}
      <div className="fixed right-8 flex flex-col justify-between h-screen py-8 text-right z-10">
        <div className="space-x-4 text-black font-stapel">
          <Link href="/about" className="hover:opacity-70 transition-opacity">About Me</Link>
          <span>/</span>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>
        <div className="text-xl font-light text-black font-stapel">
          2022 <span className="inline-block transform rotate-45 mx-1">/</span> 2024
        </div>
        <div className="max-w-[200px] text-sm text-black font-stapel">
          A Featured collection of work over the last 2 Years
        </div>
      </div>

      {/* Projects Grid */}
      <main className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 gap-x-24 gap-y-16">
          {projects.slice(startIndex, startIndex + projectsPerPage).map((project, index) => (
            <motion.div 
              key={index}
              className={`
                ${index % 2 === 0 ? '-mt-32' : 'mt-32'}
                ${index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'}
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCircle
                {...project}
                number={startIndex + index + 1}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

