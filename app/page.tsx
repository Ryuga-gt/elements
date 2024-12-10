'use client'

import { useState } from 'react'
import LoadingAnimation from '../components/LoadingAnimation'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main>
      {isLoading ? (
        <LoadingAnimation onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </main>
  )
}

