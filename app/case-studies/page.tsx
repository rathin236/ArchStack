"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart, TrendingUp, Database } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    title: "Global Sales Storytelling Dataset",
    client: "Multinational Seafood Company",
    description:
      "Curated a single global sales dataset on a medallion architecture (bronze → silver → gold), with a canonical customer and account model that reconciled CRM, billing, and product‑usage data. On top of the gold layer, we exposed a governed semantic model for \"sales stories\" that surfaces pipeline health, expansion opportunities, and regional narratives for leadership—turning ad‑hoc slide creation into a live, always‑current story.",
    tags: ["Global Dataset", "Canonical Model", "Medallion", "Sales Analytics", "Semantic Layer"],
    icon: BarChart,
  },
  {
    title: "Portfolio Analytics for Private Equity",
    client: "Middle‑Market Private Equity Firm",
    description:
      "Built a unified portfolio data platform that standardized financials, KPIs, and operational metrics across 18 portfolio companies. Implemented a canonical chart of accounts, automated ETL from ERP and CRM systems, and delivered a Deal & Portfolio cockpit that lets partners drill from fund‑level returns down to company and initiative—cutting quarterly reporting cycles from weeks to days.",
    tags: ["Private Equity", "Portfolio Reporting", "KPI Standardization"],
    icon: Database,
  },
  {
    title: "Monetizable Data Product for a Utility",
    client: "Regional Energy & Utilities Provider",
    description:
      "Designed a unified asset and meter data model that combined SCADA, outage, and customer usage feeds into a clean, documented layer. On top of it, we launched a subscription‑based data product for grid planners and large industrial customers, enabling the utility to safely expose anonymized reliability and load profiles—creating a new recurring revenue stream of over $1.2M annually within the first 18 months.",
    tags: ["Utilities", "Data Product", "Data Monetization"],
    icon: BarChart,
  },
  {
    title: "Financial Data Modernization",
    client: "Leading Fintech Firm",
    description:
      "Re-platformed a fragmented on‑prem warehouse into a unified Snowflake environment, rebuilt core models in dbt, and automated nightly loads—cutting average query times by 40%, reducing reporting outages, and unlocking self‑serve analytics for risk and finance teams.",
    tags: ["Snowflake", "dbt", "Modernization"],
    icon: Database,
  },
  {
    title: "Retail Analytics & Store Performance",
    client: "Global Retailer",
    description:
      "Designed a company‑wide semantic layer and Tableau dashboard suite that combined POS, inventory, and marketing data into a single view. Store managers now get predictive inventory alerts and promo performance insights, contributing to a 15% reduction in stockouts across key regions.",
    tags: ["Tableau", "Predictive Analytics", "Store Ops"],
    icon: BarChart,
  },
  {
    title: "Real‑time Fraud Detection Pipeline",
    client: "Major Bank",
    description:
      "Implemented a Kafka- and Spark‑based streaming pipeline that scores card transactions in near real time, with feature stores feeding machine‑learning models and feedback loops from fraud analysts, helping the bank catch suspicious activity in under a second.",
    tags: ["Kafka", "Spark", "Fraud Detection"],
    icon: TrendingUp,
  },
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

