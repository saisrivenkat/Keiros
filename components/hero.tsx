import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-30 pb-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Background gradient */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          style={{
            WebkitMaskImage:
              'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 48%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0) 100%)',
            maskImage:
              'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 48%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0) 100%)',
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[620px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(170,170,170,0.18) 26%, rgba(0,0,0,0.08) 58%, rgba(0,0,0,0) 82%)',
              filter: 'blur(26px)',
            }}
          />
          <div
            className="absolute left-1/2 top-[68%] h-[110px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 78%)',
              filter: 'blur(18px)',
            }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center">
          {/* Banner Image */}
          <div className="">
            <Image 
              src="/banner-hero.png" 
              alt="KEIROS Hero Banner" 
              width={1000} 
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
