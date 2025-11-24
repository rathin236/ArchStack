import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center p-1.5 shadow-md overflow-hidden" style={{ 
                borderWidth: '3px',
                borderColor: '#bf9b30',
                boxShadow: '0 4px 6px -1px rgba(191, 155, 48, 0.3), 0 2px 4px -1px rgba(191, 155, 48, 0.2), inset 0 1px 2px rgba(191, 155, 48, 0.1)'
              }}>
                <Image 
                  src="/logo.svg" 
                  alt="ArchStack Logo" 
                  width={44}
                  height={44}
                  className="object-contain scale-110"
                />
              </div>
              <span className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                ArchStack
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with data-driven insights and robust architectures.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Data Consulting</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Data Architecture</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Business Analysis</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Visualization</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} ArchStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
