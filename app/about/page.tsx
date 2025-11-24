"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Users, Target, ArrowRight, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              We Are <span className="text-primary">ArchStack</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-xl text-muted-foreground"
            >
              A team of data architects, engineers, and analysts dedicated to transforming your data into your most valuable asset.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower businesses with robust, scalable data architectures and actionable insights. We believe that data shouldn't just be stored; it should be the driving force behind every strategic decision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between complex technical implementations and tangible business value, ensuring that your data infrastructure grows with your ambitions.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/30 p-8 rounded-2xl border border-border/50"
            >
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Why We Exist</h3>
              <ul className="space-y-4">
                {[
                  "To eliminate data silos and inefficiencies.",
                  "To democratize access to insights across organizations.",
                  "To build future-proof foundations for AI and advanced analytics.",
                  "To provide vendor-agnostic, best-fit solutions."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise rooted in years of solving complex data challenges.
            </p>
          </div>

          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm max-w-md w-full hover:shadow-md transition-shadow"
            >
              <div className="p-8 text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                   <span className="text-4xl font-bold text-primary">RS</span>
                   {/* Placeholder for actual image if available */}
                   {/* <Image src="/team/rathin.jpg" alt="Rathin Sharma" width={128} height={128} className="rounded-full object-cover" /> */}
                </div>
                <h3 className="text-2xl font-bold text-foreground">Rathin Sharma</h3>
                <p className="text-primary font-medium mb-4">Owner & Principal Architect</p>
                <p className="text-muted-foreground mb-6">
                  With over 5 years of experience in data architecture and engineering, Rathin specializes in designing scalable data systems and optimizing workflows to support critical business objectives.
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="https://rathinsharma.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Personal Website">
                    <span className="sr-only">Website</span>
                    <Award className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/rathinsharma/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn Profile">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Proven Expertise",
                description: "We bring seasoned experience to every project, ensuring high-quality delivery.",
                icon: Award
              },
              {
                title: "Vendor Agnostic",
                description: "We recommend tools that fit your needs, not our partnerships.",
                icon: Target
              },
              {
                title: "Business-First",
                description: "We solve business problems first, using technology as the enabler.",
                icon: Users
              },
              {
                title: "End-to-End",
                description: "From initial strategy to deployment and optimization, we're with you.",
                icon: CheckCircle
              }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build a data-driven future.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-primary hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
