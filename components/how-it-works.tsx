"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      title: "Upload License",
      description: "Submit your software license details through our secure portal for verification.",
      icon: <Upload className="h-10 w-10 text-white" />,
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Get Valuation",
      description:
        "Our AI-powered system analyzes the market and provides you with a competitive valuation within minutes.",
      icon: <DollarSign className="h-10 w-10 text-white" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Get Paid",
      description: "Accept our offer and receive payment through your preferred method within 24 hours.",
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      color: "from-fuchsia-500 to-purple-600",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            How SoftSell Works
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Our streamlined process makes selling your unused software licenses simple, secure, and profitable.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 relative"
        >
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 hidden md:block -z-10" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className={`mb-6 p-5 rounded-full bg-gradient-to-br ${step.color} shadow-lg`}>{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-background border-2 border-indigo-500 flex items-center justify-center text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
