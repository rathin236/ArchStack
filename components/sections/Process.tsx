"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, Search, Code, BarChart, Settings, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    id: 1,
    title: "Discovery",
    icon: Search,
    description: "Identify bottlenecks & opportunities.",
    details: "We audit your ecosystem, interview stakeholders, and map data flows to pinpoint exactly where value is hidden."
  },
  {
    id: 2,
    title: "Strategy",
    icon: Lightbulb,
    description: "Roadmap aligning data with business goals.",
    details: "A bespoke strategic blueprint including technology selection, governance, and a clear path to ROI."
  },
  {
    id: 3,
    title: "Architecture",
    icon: Settings,
    description: "Scalable, secure data foundations.",
    details: "Designing robust data meshes, lakehouses, or warehouses that handle scale and democratize access."
  },
  {
    id: 4,
    title: "Implementation",
    icon: Code,
    description: "Agile development of pipelines & models.",
    details: "Building reliable ETL/ELT pipelines and semantic layers that ensure your data is accurate and timely."
  },
  {
    id: 5,
    title: "Optimization",
    icon: BarChart,
    description: "Continuous monitoring & refinement.",
    details: "We don't just leave. We set up observability and refine models to ensure sustained adoption and value."
  },
]

export function Process() {
  const [activeStep, setActiveStep] = useState(steps[0])

  return (
    <section id="process" className="py-20 bg-secondary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Archstack Methodology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A rigorous, agile approach to data transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Steps List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {steps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={cn(
                  "w-full text-left p-4 rounded-lg border transition-all duration-300 relative overflow-hidden",
                  activeStep.id === step.id
                    ? "bg-card border-primary/40 shadow-md"
                    : "bg-transparent border-transparent hover:bg-card/40 hover:border-border/50"
                )}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-md transition-colors",
                      activeStep.id === step.id ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                    )}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className={cn(
                      "font-medium transition-colors",
                      activeStep.id === step.id ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {step.title}
                    </span>
                  </div>
                  {activeStep.id === step.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="text-primary"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  )}
                </div>
                {/* Progress bar effect */}
                 {activeStep.id === step.id && (
                    <motion.div
                      layoutId="active-bg"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                 )}
              </motion.button>
            ))}
          </div>

          {/* Active Step Detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full bg-card border border-border/60 rounded-xl p-8 lg:p-10 flex flex-col relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5">
                   <activeStep.icon className="h-48 w-48" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                     <span className="text-5xl font-bold text-primary/20 font-mono">0{activeStep.id}</span>
                     <div className="h-px flex-1 bg-border/50"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">{activeStep.title}</h3>
                  <h4 className="text-lg text-primary font-medium mb-6">{activeStep.description}</h4>
                  
                  <p className="text-muted-foreground leading-relaxed text-base max-w-2xl">
                    {activeStep.details}
                  </p>

                  <div className="mt-8 flex gap-2">
                    <div className="h-1.5 w-8 rounded-full bg-primary"></div>
                    <div className="h-1.5 w-2 rounded-full bg-primary/20"></div>
                    <div className="h-1.5 w-2 rounded-full bg-primary/20"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
