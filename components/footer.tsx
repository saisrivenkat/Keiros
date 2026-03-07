import Image from 'next/image'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr_auto]">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold text-white">Keiros</h3>
              <p className="mt-3 text-base text-white/90">To the point</p>
              <p className="mt-1 text-base text-[#5BC9F0]">Coming Soon</p>

              <h4 className="mt-8 text-3xl font-semibold text-white">App</h4>
              <ul className="mt-3 space-y-1 text-base text-white/90">
                <li>FAQs</li>
                <li>About keiros</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white">Contact</h3>
              <p className="mt-3 text-base text-white/90">Email: help@keiros.com</p>
              <p className="mt-1 text-base text-white/90">Location: New York, NY</p>
            </div>
          </div>

          <div className="hidden md:block" />

          <div className="md:justify-self-end">
            <Image
              src="/keiros-logo.png"
              alt="Keiros Logo"
              width={220}
              height={72}
              className="h-auto w-[220px]"
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-7 text-white">
            <a href="#" aria-label="Instagram" className="opacity-90 transition hover:opacity-100">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="Twitter/X" className="text-xl font-semibold opacity-90 transition hover:opacity-100">
              X
            </a>
            <a href="#" aria-label="Facebook" className="opacity-90 transition hover:opacity-100">
              <Facebook size={22} />
            </a>
            <a href="#" aria-label="YouTube" className="opacity-90 transition hover:opacity-100">
              <Youtube size={22} />
            </a>
           
          </div>

          <p className="text-sm text-white/70">© Keiros, all rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
