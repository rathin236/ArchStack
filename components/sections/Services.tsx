"use client"

import { Database, BarChart, Search, Layers, Server, Code, GitBranch, Brain, Workflow } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Data Consulting",
    description: "Strategic roadmaps to align data initiatives with your business goals and drive maturity.",
    icon: Search,
  },
  {
    title: "Data Architecture",
    description: "Designing scalable, secure infrastructures from data lakes to modern warehouses.",
    icon: Database,
  },
  {
    title: "Analytics Engineering",
    description: "Bridging data engineering and analysis to create clean, modeled datasets for production.",
    icon: Workflow,
  },
  {
    title: "AI Solutions",
    description: "Implementing custom ML models and LLM applications to automate and innovate.",
    icon: Brain,
  },
  {
    title: "DataOps & Infrastructure",
    description: "Automating deployment, monitoring, and orchestration of data pipelines for reliability and speed.",
    icon: GitBranch,
  },
  {
    title: "Data Visualization",
    description: "Turning complex numbers into clear, interactive stories with Tableau, PowerBI, or D3.js.",
    icon: Layers,
  },
  {
    title: "Business Analysis",
    description: "Connecting IT and business through precise requirements gathering and process mapping.",
    icon: Code,
  },
  {
    title: "Data Engineering",
    description: "Robust pipelines (ETL/ELT) ensuring reliable data flow and quality at scale.",
    icon: Server,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive data and tech solutions tailored to your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card border border-border/50 p-6 rounded-lg hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
