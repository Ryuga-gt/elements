'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import ProjectCircle from './ProjectCircle'

interface Project {
  name: string
  year: number
  image: string
}

interface ScrollableProjectListProps {
  projects: Project[]
  onVisibleProjectsChange: (lowestIndex: number, highestIndex: number) => void
}

export default function ScrollableProjectList({ projects, onVisibleProjectsChange }: ScrollableProjectListProps) {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([0, 1, 2, 3])
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const updateVisibleProjects = useCallback((newProjects: number[]) => {
    setVisibleProjects(newProjects)
    onVisibleProjectsChange(newProjects[0], newProjects[3])
  }, [onVisibleProjectsChange])

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY

      if (delta > 0 && visibleProjects[3] < projects.length - 1) {
        // Scrolling down
        updateVisibleProjects([
          visibleProjects[1],
          visibleProjects[2],
          visibleProjects[3],
          visibleProjects[3] + 1
        ])
        controls.start(i => ({
          y: [-400, 0],
          opacity: [0, 1],
          transition: { duration: 0.8, ease: "easeInOut" }
        }))
      } else if (delta < 0 && visibleProjects[0] > 0) {
        // Scrolling up
        updateVisibleProjects([
          visibleProjects[0] - 1,
          visibleProjects[0],
          visibleProjects[1],
          visibleProjects[2]
        ])
        controls.start(i => ({
          y: [400, 0],
          opacity: [0, 1],
          transition: { duration: 0.8, ease: "easeInOut" }
        }))
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll)
      }
    }
  }, [visibleProjects, projects.length, controls, updateVisibleProjects])

  return (
    <div ref={containerRef} className="relative w-full h-[1000px] overflow-hidden">
      {visibleProjects.map((projectIndex, index) => (
        <motion.div
          key={projectIndex}
          className={`absolute ${index % 2 === 0 ? 'left-1/4' : 'right-1/4'} ${
            index < 2 ? 'top-[5%]' : 'bottom-[5%]'
          } transform -translate-x-1/2`}
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          custom={index}
        >
          <ProjectCircle
            {...projects[projectIndex]}
            number={projectIndex + 1}
            index={index}
          />
        </motion.div>
      ))}
    </div>
  )
}

