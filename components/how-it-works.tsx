'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Create',
    description:
      'Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.',
    image: '/step-1-create.png',
    alt: 'Create step preview',
  },
  {
    id: 2,
    title: 'Engage',
    description:
      "Cut through the yawns, grab your audience's attention, and turn passive attendees into active participants.",
    image: '/step-2-engage.png',
    alt: 'Engage step preview',
  },
  {
    id: 3,
    title: 'Analyze',
    description:
      'Track the success of your events with deep insights and analytics measured across the entire attendee experience.',
    image: '/step-3-analyze.png',
    alt: 'Analyze step preview',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-2 lg:gap-12">
          <h2 className="text-5xl font-medium leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl">
            How it
            <br />
            works
          </h2>

          <div className="flex flex-col justify-center">
            <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it is all here.
            </p>
            <button className="mt-6 w-fit rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-600 sm:px-8 sm:py-3 sm:text-base">
              Learn more
            </button>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {steps.map((step) => (
            <article key={step.id} className="grid items-center gap-5 md:grid-cols-[230px_1fr] md:gap-8 lg:grid-cols-[250px_1fr]">
              <div className="text-white">
                <p className="mb-2 text-xs font-medium text-white/60 sm:text-sm">Step {step.id}</p>
                <h3 className="mb-3 flex items-center gap-2 text-4xl font-medium leading-none sm:text-5xl">
                  {step.title}
                  <ArrowUpRight className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2} />
                </h3>
                <p className="max-w-[280px] text-sm leading-relaxed text-white/75">{step.description}</p>
              </div>

              <div className="relative overflow-hidden rounded-[999px] border border-transparent bg-transparent md:border-white/10 md:bg-black/30">
                <div className="relative h-[150px] sm:h-[200px] lg:h-[190px]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover p-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 65vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
