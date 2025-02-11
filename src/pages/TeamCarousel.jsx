"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

const marqueeStyles = `
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  .marquee {
    animation: marquee 20s linear infinite;
  }
`

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const slideRefs = useRef([])

  const teamMembers = [
    {
      name: "Gifran",
      role: "CEO of KEIKEN Academy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-09%20at%2015.53.06-t3EbjhZMgNJxja4i4lrer13kHVqBR3.jpeg",
    },
    {
      name: "Rizky",
      role: "CTO of KEIKEN Academy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-09%20at%2015.53.06-t3EbjhZMgNJxja4i4lrer13kHVqBR3.jpeg",
    },
    {
      name: "Rafli",
      role: "CAO of KEIKEN Academy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-09%20at%2015.53.06-t3EbjhZMgNJxja4i4lrer13kHVqBR3.jpeg",
    },
    {
      name: "Randi",
      role: "Creative Team",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-09%20at%2015.53.06-t3EbjhZMgNJxja4i4lrer13kHVqBR3.jpeg",
    },
  ]

  const extendedTeamMembers = [teamMembers[teamMembers.length - 1], ...teamMembers, teamMembers[0]]

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, extendedTeamMembers.length)
  }, [extendedTeamMembers.length]) // Added extendedTeamMembers.length to dependencies

  const animateSlide = (index, instant = false) => {
    const slideWidth = 100 / extendedTeamMembers.length
    const xPosition = -(index + 1) * slideWidth

    gsap.to(carouselRef.current, {
      duration: instant ? 0 : 0.8,
      ease: "power3.out",
      x: `${xPosition}%`,
      onComplete: () => {
        if (index >= teamMembers.length) {
          gsap.set(carouselRef.current, { x: `-${slideWidth}%` })
          setCurrentIndex(0)
        } else if (index < 0) {
          gsap.set(carouselRef.current, { x: `${-slideWidth * teamMembers.length}%` })
          setCurrentIndex(teamMembers.length - 1)
        }
      },
    })

    slideRefs.current.forEach((slide, i) => {
      gsap.to(slide, {
        duration: instant ? 0 : 0.5,
        opacity: i === index + 1 ? 1 : 0.4,
        scale: i === index + 1 ? 1 : 0.95,
        ease: "power2.out",
      })
    })
  }

  const next = () => {
    const nextIndex = currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
    animateSlide(nextIndex)
  }

  const prev = () => {
    const prevIndex = currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    animateSlide(prevIndex)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    animateSlide(index)
  }

  useEffect(() => {
    animateSlide(0, true)
    const interval = setInterval(next, 3000)
    return () => clearInterval(interval)
  }, [animateSlide, next]) // Added animateSlide and next to dependencies

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = marqueeStyles
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <div className="p-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-black p-8">
          <h1 className="mb-12 text-4xl font-medium text-white text-center">Team</h1>

          <div className="relative overflow-hidden">
            <div ref={carouselRef} className="flex gap-6" style={{ width: `${extendedTeamMembers.length * 100}%` }}>
              {extendedTeamMembers.map((member, index) => (
                <div
                  key={index}
                  ref={(el) => (slideRefs.current[index] = el)}
                  className="relative"
                  style={{ width: `${100 / extendedTeamMembers.length}%` }}
                >
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-lg h-64">
                    <div className="absolute right-3 top-3 z-10">
                      <svg
                        className="h-5 w-5 text-white opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 mix-blend-color" />
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`Team member ${member.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-lg font-medium text-white">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 transform text-white/50 transition-colors hover:text-white"
            >
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute -right-12 top-1/2 -translate-y-1/2 transform text-white/50 transition-colors hover:text-white"
            >
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-white" : "w-1.5 bg-white/30"
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative h-16 overflow-hidden bg-black">
        <div className="absolute whitespace-nowrap marquee">
          <span className="inline-block text-4xl font-bold text-white px-4">
            KEIKEN Academy&nbsp;&nbsp;&nbsp;KEIKEN Academy&nbsp;&nbsp;&nbsp; KEIKEN Academy&nbsp;&nbsp;&nbsp;KEIKEN
            Academy&nbsp;&nbsp;&nbsp; KEIKEN Academy&nbsp;&nbsp;&nbsp;KEIKEN Academy&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamCarousel

