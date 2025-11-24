"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose Archstack?</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground lg:mx-auto">
            We combine technical expertise with business acumen to deliver solutions that matter.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                title: "Proven Expertise",
                description: "Our team consists of seasoned data architects, engineers, and analysts with years of experience across various industries."
              },
              {
                title: "Vendor Agnostic",
                description: "We recommend the best tools for your specific needs, not just what we're partnered with. We work with AWS, Azure, GCP, Snowflake, and more."
              },
              {
                title: "Business-First Approach",
                description: "We don't just write code; we solve business problems. We ensure our data solutions align directly with your strategic objectives."
              },
              {
                title: "End-to-End Support",
                description: "From initial discovery to post-deployment optimization, we are with you every step of the way."
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

