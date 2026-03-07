'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote:
      'We chose Welcome because it is intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplift our experiences.',
    name: 'Ally Masi',
    role: 'Director of Industries Events Marketing',
    company: 'Salesforce',
    initials: 'AM',
    logo: 'salesforce',
  },
  {
    id: 2,
    quote:
      'Before Welcome, I had to get a switcher, use Ecamm, OBS, and always needed tools or this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment.',
    name: 'Talisha Brantley',
    role: 'VP of Events',
    company: 'Bitwise',
    initials: 'TB',
    logo: 'Bitwise',
  },
  {
    id: 3,
    quote:
      'The Welcome platform has become central to our launch strategy. We run polished sessions quickly, and our team now considers it a secure extension of our workflow.',
    name: 'The Welcome Team',
    role: 'Brand Marketing',
    company: 'dribbble',
    initials: 'TW',
    logo: 'dribbble',
  },
  {
    id: 4,
    quote:
      'This helped our team run product showcases without switching between tools. Setup is faster, and attendee engagement is consistently higher.',
    name: 'Rina Foster',
    role: 'Event Operations Lead',
    company: 'Nova Labs',
    initials: 'RF',
    logo: 'Nova',
  },
  {
    id: 5,
    quote:
      'We replaced a fragmented workflow with one platform and reduced production overhead immediately. The quality stayed high with a smaller team.',
    name: 'Marcus Lee',
    role: 'Head of Marketing Programs',
    company: 'CloudSet',
    initials: 'ML',
    logo: 'CloudSet',
  },
  {
    id: 6,
    quote:
      'The interface is clean and reliable. From registration to live delivery, every step feels streamlined and much easier to manage at scale.',
    name: 'Anika Rao',
    role: 'Senior Events Manager',
    company: 'Brightwork',
    initials: 'AR',
    logo: 'Brightwork',
  },
]

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 3 : 1)
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const scrollNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length)
  }

  const scrollPrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = useMemo(() => {
    return Array.from({ length: visibleCount }, (_, offset) => {
      return testimonials[(startIndex + offset) % testimonials.length]
    })
  }, [startIndex])

  return (
    <section className="relative overflow-hidden bg-black px-4 py-24 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute -top-56 -left-28 h-[400px] w-[1080px] blur-2xl"
        style={{
          background: 'linear-gradient(to left, #0D89AF 0%, #053949 100%)',
          borderRadius: '9999px',
          opacity: 1,
          filter: 'saturate(1.45) brightness(1.12) blur(64px)',
        }}
      />
      <div
        className="pointer-events-none absolute -top-44 left-0 h-[360px] w-[860px] blur-3xl"
        style={{
          background: 'linear-gradient(to left, #0D89AF 0%, #053949 100%)',
          borderRadius: '9999px',
          opacity: 0.92,
          mixBlendMode: 'screen',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/22" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="mb-16 flex items-end justify-between gap-8">
          <h2 className="text-[56px] leading-[0.95] tracking-tight text-white sm:text-[68px]">
            Loved &
            <br />
            trusted
          </h2>
          <div className="mb-3 flex items-center gap-3 text-white">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={scrollPrev}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition hover:border-white/60"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={scrollNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition hover:border-white/60"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-4 pb-2 md:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="min-h-[300px] rounded-tr-[26px] border-r border-t border-white/35 bg-black/80 p-6"
            >
              <p className="text-[15px] leading-7 text-white/90">"{testimonial.quote}"</p>

              <div className="mt-10 flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-l from-[#0D89AF] to-[#053949] text-xs font-semibold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs leading-5 text-white/70">{testimonial.role}</p>
                  <p className="text-xs text-white/70">{testimonial.company}</p>
                </div>
              </div>

              <p className="mt-6 text-lg italic text-white/95">{testimonial.logo}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
