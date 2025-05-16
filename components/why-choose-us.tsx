"use client"

import { motion } from "framer-motion"
import { Shield, Clock, BadgeDollarSign, Globe } from "lucide-react"

export function WhyChooseUs() {
  const benefits = [
    {
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption and secure transfer protocols protect your sensitive license information.",
      icon: <Shield className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    },
    {
      title: "Lightning Fast Turnaround",
      description: "Get valuations within minutes and payment within 24 hours of accepting an offer.",
      icon: <Clock className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    },
    {
      title: "AI-Powered Pricing",
      description: "Our proprietary algorithm ensures you get the best possible value for your software licenses.",
      icon: <BadgeDollarSign className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    },
    {
      title: "Global Marketplace",
      description: "Access to buyers worldwide means higher demand and better prices for your licenses.",
      icon: <Globe className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-gradient-to-b from-background to-indigo-50/50 dark:to-indigo-950/20"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4">
            Our Advantages
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Why Choose SoftSell
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            We offer unmatched benefits that make selling your software licenses easy, secure, and profitable.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-xl border border-indigo-100 dark:border-indigo-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 w-fit">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
