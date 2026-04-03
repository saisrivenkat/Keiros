'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            <Image src="/keiros-logo.png" alt="Keiros" width={120} height={24} priority />
           
          </div>

          {/* Navigation + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#problem" className="text-foreground/80 hover:text-foreground text-sm transition">
              PROBLEM
            </Link>
            <Link href="#solution" className="text-foreground/80 hover:text-foreground text-sm transition">
              SOLUTION
            </Link>
            
            <Link href="#contact" className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition inline-flex">
              Get Early Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="flex items-center gap-3 px-2">
              <Image src="/keiros-logo.png" alt="Keiros" width={100} height={20} />
              <span className="text-[11px] text-foreground/70 tracking-[0.08em]">
                Precision Location. Every Address. Every Floor.
              </span>
            </div>
            <Link href="#problem" className="block text-foreground/80 hover:text-foreground text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              PROBLEM
            </Link>
            <Link href="#solution" className="block text-foreground/80 hover:text-foreground text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              SOLUTION
            </Link>
            <Link href="#developers" className="block text-foreground/80 hover:text-foreground text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              DEVELOPERS
            </Link>
            <Link href="#contact" className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mt-4 inline-flex justify-center" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
