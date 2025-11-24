"use client"

import { motion } from "framer-motion"

const techs = [
  "Snowflake", "Databricks", "AWS", "Azure", "GCP", "Python", "dbt", "Tableau", "PowerBI", "Airflow", "Kafka", "Spark"
]

export function TechStack() {
  return (
    <section className="py-10 bg-background border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
         <p className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase">
            Powered by Modern Tech Stack
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16">
          {techs.concat(techs).map((tech, index) => (
            <span key={index} className="text-2xl font-bold text-muted-foreground/50 mx-4 uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16">
          {techs.concat(techs).map((tech, index) => (
            <span key={index} className="text-2xl font-bold text-muted-foreground/50 mx-4 uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

