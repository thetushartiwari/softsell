"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-2">
              Revolutionizing Software License Resale
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                Transform Unused Licenses Into Instant Revenue
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                SoftSell creates a seamless marketplace where businesses can buy and sell software licenses at
                competitive prices, all with enterprise-grade security.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 rounded-full"
                asChild
              >
                <Link href="#contact" className="group">
                  Sell My Licenses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-indigo-200 dark:border-indigo-800"
                asChild
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-600 dark:to-purple-700 flex items-center justify-center text-xs font-medium text-white border-2 border-background"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">500+</span> businesses already using SoftSell
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full opacity-20 blur-3xl" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-[80%] aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/0 backdrop-blur-sm border border-white/20 dark:border-white/10 p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-24 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
                    </div>
                    <div className="h-4 w-full bg-white/20 dark:bg-white/10 rounded-full" />
                    <div className="h-4 w-3/4 bg-white/20 dark:bg-white/10 rounded-full" />
                    <div className="h-20 w-full bg-white/20 dark:bg-white/10 rounded-xl" />
                    <div className="flex justify-between items-center">
                      <div className="h-10 w-28 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg" />
                      <div className="h-4 w-16 bg-white/20 dark:bg-white/10 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
