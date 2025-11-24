"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart, TrendingUp, Database } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    title: "Financial Data Modernization",
    client: "Leading Fintech Firm",
    description: "Migrated legacy on-premise data warehouses to a modern Snowflake implementation, reducing query times by 40% and enabling real-time reporting.",
    tags: ["Snowflake", "dbt", "Migration"],
    icon: Database
  },
  {
    title: "Retail Analytics Dashboard",
    client: "Global Retailer",
    description: "Developed a comprehensive Tableau suite providing store managers with predictive inventory insights, reducing stockouts by 15%.",
    tags: ["Tableau", "Predictive Analytics", "Python"],
    icon: BarChart
  },
  {
    title: "Real-time Fraud Detection",
    client: "Major Bank",
    description: "Architected a streaming data pipeline using Kafka and Spark to detect fraudulent transactions with sub-second latency.",
    tags: ["Kafka", "Spark", "Cybersecurity"],
    icon: TrendingUp
  }
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
          >
            Our <span className="text-primary">Success Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            See how we've helped businesses transform their data landscapes.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {cases.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card p-8 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <study.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <div className="mb-4">
                 <span className="text-xs font-bold text-primary uppercase tracking-wider">{study.client}</span>
                 <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                 <p className="text-muted-foreground leading-relaxed text-sm">
                   {study.description}
                 </p>
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {study.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-secondary text-xs text-muted-foreground border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-secondary/5 rounded-2xl border border-border/50 p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to write your success story?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how Archstack can solve your specific data challenges.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

