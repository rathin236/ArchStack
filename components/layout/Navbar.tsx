"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-white"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              {/* Logo with 3D Rounded Border Effect - 10% bigger */}
              <div className="h-16 w-16 rounded-xl flex items-center justify-center p-1.5 shadow-lg overflow-hidden" style={{ 
                borderWidth: '3px',
                borderColor: '#bf9b30',
                boxShadow: '0 4px 6px -1px rgba(191, 155, 48, 0.3), 0 2px 4px -1px rgba(191, 155, 48, 0.2), inset 0 1px 2px rgba(191, 155, 48, 0.1)'
              }}>
                <Image 
                  src="/logo.svg" 
                  alt="ArchStack Logo" 
                  width={62}
                  height={62}
                  className="object-contain scale-110"
                  priority
                />
              </div>
              {/* Larger Bold Text */}
              <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                ArchStack
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#services" className="hover:text-primary transition-colors text-sm font-medium text-foreground/80">Services</Link>
              <Link href="/#process" className="hover:text-primary transition-colors text-sm font-medium text-foreground/80">Process</Link>
              <Link href="/about" className="hover:text-primary transition-colors text-sm font-medium text-foreground/80">About</Link>
              <Link href="/careers" className="hover:text-primary transition-colors text-sm font-medium text-foreground/80">Careers</Link>
              <Link href="/#contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded text-sm font-semibold transition-all">
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-foreground hover:bg-secondary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#services" className="block hover:text-primary px-3 py-2 text-base font-medium text-foreground/80 transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/#process" className="block hover:text-primary px-3 py-2 text-base font-medium text-foreground/80 transition-colors" onClick={() => setIsOpen(false)}>Process</Link>
            <Link href="/about" className="block hover:text-primary px-3 py-2 text-base font-medium text-foreground/80 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/careers" className="block hover:text-primary px-3 py-2 text-base font-medium text-foreground/80 transition-colors" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link href="/#contact" className="block bg-primary text-primary-foreground px-3 py-2 rounded text-base font-semibold" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
