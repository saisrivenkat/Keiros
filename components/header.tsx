'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/keiros-logo.png" alt="KEIROS" width={100} height={20} className="" />
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground text-sm transition">
              HOME
            </Link>
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground text-sm transition">
              SERVICES
            </a>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground text-sm transition">
              CONTACT
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition">
              Get Started
            </button>
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
            <Link href="/" className="block text-foreground/80 hover:text-foreground text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              HOME
            </Link>
            <a href="#how-it-works" className="block text-foreground/80 hover:text-foreground text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              SERVICES
            </a>
            <Link href="/contact" className="block text-foreground/80 hover:text-foreground text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
              CONTACT
            </Link>
            <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mt-4">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
