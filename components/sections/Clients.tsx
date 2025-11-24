"use client"

import { motion } from "framer-motion"

const directClients = [
  { name: "CGS", logo: "CGS" },
  { name: "Jamlabs", logo: "Jamlabs" },
  { name: "Cooke Inc.", logo: "Cooke Inc." },
  { name: "Launchroom.ca", logo: "Launchroom" },
  { name: "Cayenta", logo: "Cayenta" },
  { name: "Harris Computers", logo: "Harris Computers" },
]

const indirectClients = [
  { name: "Red Hat", logo: "Red Hat" },
  { name: "Liberty Mutual", logo: "Liberty Mutual" },
]

export function Clients() {
  return (
    <section className="py-12 border-y border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-10">
          Trusted by Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500 mb-8">
          {directClients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-foreground/80 hover:text-primary transition-colors cursor-default select-none"
            >
              {client.logo}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-10 border-t border-border/30 pt-8 max-w-4xl mx-auto">
           <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-6">Indirectly Served</p>
           <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {indirectClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="text-lg md:text-xl font-medium text-foreground/60 hover:text-primary transition-colors cursor-default select-none"
              >
                {client.logo}
              </motion.div>
            ))}
           </div>
        </div>

      </div>
    </section>
  )
}
