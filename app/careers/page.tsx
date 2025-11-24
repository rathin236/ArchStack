"use client"

import { motion } from "framer-motion"
import { Search, Users, Zap, Coffee } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    title: "Meaningful Work",
    description: "Solve complex data challenges for industry leaders.",
    icon: Search,
  },
  {
    title: "Great Culture",
    description: "Collaborative, inclusive, and innovative environment.",
    icon: Users,
  },
  {
    title: "Growth",
    description: "Continuous learning opportunities and career advancement.",
    icon: Zap,
  },
  {
    title: "Perks",
    description: "Competitive salary, flexible hours, and remote work options.",
    icon: Coffee,
  },
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl mb-4"
          >
            Join the <span className="text-primary">ArchStack</span> Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We're always looking for talented individuals to help us build the future of data consulting.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border/50 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Roles Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Open Positions</h2>
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              0 Openings
            </span>
          </div>

          <div className="bg-secondary/5 rounded-2xl border border-border/50 p-10 text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-3">No open roles at the moment</h3>
              <p className="text-muted-foreground mb-6">
                We don't have any specific openings right now, but we're always interested in meeting talented people.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
              >
                Send us your resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
