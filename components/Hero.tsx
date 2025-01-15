'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.5,
        ease: 'power2.out',
      })
    }
  }, [])

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="w-full h-full">
      <iframe src='https://my.spline.design/arcslightbeamsandagianthand-bc97ed35ef9b24d70e58c3ed92592afc/' frameBorder='0' width='100%' height='100%'></iframe>
      </div>
      <div ref={textRef} className="absolute bottom-10 left-10 text-red">
        <h1 className="text-6xl font-bold mb-12">Ryuga</h1>
        <p className="text-2xl mb-8">Dragon Fang</p>
      </div>
    </div>
  )
}

