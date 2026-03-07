'use client'

import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header - Simple layout */}
        <div className="mb-12 flex items-start justify-between gap-8 sm:mb-16">
          <h2 className="text-5xl font-bold leading-tight text-white sm:text-7xl">
            About us
          </h2>
          <div className="text-white/40 text-xs"></div>
        </div>

        {/* Main Container with text on left and bordered box on right */}
        <div
          className="flex flex-col items-start gap-10 rounded-tr-[50px] border-r-2 border-t-2 border-white/80 px-4 pb-8 pt-8 sm:px-8 sm:pt-12 lg:flex-row lg:gap-16"
        >
          {/* Left - Text Content */}
          <div className="w-full flex-1">
            <span className="mb-4 inline-block rounded-full border border-white px-4 py-2 text-sm font-medium text-white">
              December 21, 2022
            </span>
            <h3 className="mb-6 text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.1]">
              Attention-Grabbing Marketing in a Noisy Market
            </h3>
            <button className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition text-sm">
              Learn More
            </button>
          </div>

          {/* Right - Bordered Box Container (no borders) */}
          <div className="relative w-full flex-1">
            {/* Cyan gradient circular background with team image */}
            <div className="relative flex h-64 items-center justify-center sm:h-72 lg:h-80">
              {/* Cyan/teal gradient circle background */}
              <div className="absolute inset-0"></div>
              
              {/* Team Image */}
              <div className="relative z-10">
                <Image 
                  src="/team-section.png" 
                  alt="KEIROS Team" 
                  width={380} 
                  height={380}
                  className="h-auto w-full max-w-[380px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
