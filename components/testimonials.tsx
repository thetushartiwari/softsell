"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechSolutions Inc.",
      content:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless, and their valuation was higher than we expected. Highly recommended for any business looking to optimize their software assets.",
      stars: 5,
      avatar: "SJ",
      bgColor: "from-indigo-400 to-purple-500",
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "Innovate Partners",
      content:
        "As we transitioned to cloud services, we had dozens of perpetual licenses sitting idle. SoftSell provided a secure marketplace to sell these assets, with excellent customer service throughout the process. The extra capital helped fund our digital transformation initiatives.",
      stars: 5,
      avatar: "MC",
      bgColor: "from-purple-400 to-fuchsia-500",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4">
            Customer Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -z-10 top-10 left-10 w-20 h-20 text-indigo-200 dark:text-indigo-900 opacity-50">
            <Quote className="w-full h-full" />
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col items-center md:items-start">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeIndex].bgColor} flex items-center justify-center text-xl font-bold text-white mb-4`}
                    >
                      {testimonials[activeIndex].avatar}
                    </div>
                    <div className="flex mb-2">
                      {Array(testimonials[activeIndex].stars)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg md:text-xl italic mb-6">{testimonials[activeIndex].content}</p>
                    <div>
                      <p className="font-semibold text-lg">{testimonials[activeIndex].name}</p>
                      <p className="text-muted-foreground">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-indigo-200 dark:border-indigo-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 p-0 rounded-full ${
                  activeIndex === index ? "bg-indigo-500" : "bg-indigo-200 dark:bg-indigo-800"
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-indigo-200 dark:border-indigo-800"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
