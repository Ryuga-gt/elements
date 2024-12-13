'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import ScrollableProjectList from '@/components/ScrollableProjectList'
import NavigationIndicator from '@/components/NavigationIndicator'
import Clock from '@/components/Clock'

const projects = [
  { name: "Airbag Studio", year: 2024, image: "/images/oo-enhanced.png" },
  { name: "Things Agency", year: 2024, image: "/images/project.jpg" },
  { name: "CME Stem", year: 2024, image: "/images/blog_hero-2.png" },
  { name: "Unisve Crafts", year: 2023, image: "/images/final_edit.jpg" },
  { name: "Abbracci", year: 2023, image: "/images/5-enhanced.png" },
  { name: "Digital Arts", year: 2023, image: "/images/toon.png" },
  { name: "Portfolio 2020", year: 2022, image: "/images/blog_hero.png" },
  { name: "Design System", year: 2022, image: "/images/noise_125.png" },
]

export default function ProjectsPage() {
  const [lowestVisibleProject, setLowestVisibleProject] = useState(1)
  const [highestVisibleProject, setHighestVisibleProject] = useState(4)

  const handleVisibleProjectsChange = useCallback((lowest: number, highest: number) => {
    setLowestVisibleProject(lowest + 1)
    setHighestVisibleProject(highest + 1)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Spline Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <iframe src='https://my.spline.design/abstractgradientbackground-011bda7e03e77cf26d36ff66050f0278/' frameBorder='0' width='100%' height='100%'></iframe>
      </div>

      {/* Left Side Content */}
      <div className="fixed left-8 flex flex-col justify-between h-screen py-8 z-10">
        <Clock />
        <div className="text-xl font-light text-black font-stapel">
          Featured Projects <span className="text-sm">({projects.length})</span>
        </div>
        <NavigationIndicator 
          lowestVisibleProject={lowestVisibleProject}
          highestVisibleProject={highestVisibleProject}
          totalProjects={projects.length}
        />
      </div>

      {/* Right Side Content */}
      <div className="fixed right-8 flex flex-col justify-between h-screen py-8 text-right z-10">
        <div className="space-x-4 text-black font-stapel">
          <Link href="/about" className="hover:underline hover:font-bold hover:underline-offset-4">About Me</Link>
          <span>/</span>
          <Link href="/contact" className="hover:underline hover:font-bold hover:underline-offset-4">Contact</Link>
        </div>
        <div className="text-xl font-light text-black font-stapel">
          2022 <span className="inline-block transform rotate-45 mx-1">/</span> 2024
        </div>
        <div className="flex flex-col items-end space-y-2 mb-16">
          <div className="max-w-[200px] text-xl text-black font-stapel text-right">
          Selected Highlights
          </div>
          <div className="max-w-[200px] text-lg text-black font-stapel text-right">
          The Latest and Greatest
          </div>
          <div className="max-w-[200px] text-lg text-black font-stapel text-right">
          From the Past Two Years
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <main className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="w-full max-w-7xl">
          <ScrollableProjectList 
            projects={projects} 
            onVisibleProjectsChange={handleVisibleProjectsChange}
          />
        </div>
      </main>
    </div>
  )
}

