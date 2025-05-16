"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      company: "",
      licenseType: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required"
      valid = false
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "License type is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData)

        toast({
          title: "Form submitted!",
          description: "We'll get back to you as soon as possible.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        })

        setIsSubmitting(false)
      }, 1500)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, licenseType: value }))
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-indigo-50/50 dark:from-indigo-950/20 to-background"
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
            Get in Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Ready to Sell Your Licenses?
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Fill out the form below and our team will get back to you within 24 hours with a valuation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-[800px]"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-indigo-100 dark:border-indigo-900 overflow-hidden">
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-lg border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-lg border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className="rounded-lg border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licenseType" className="text-sm font-medium">
                      License Type
                    </Label>
                    <Select onValueChange={handleSelectChange} value={formData.licenseType}>
                      <SelectTrigger
                        id="licenseType"
                        className="rounded-lg border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <SelectValue placeholder="Select license type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enterprise">Enterprise Software</SelectItem>
                        <SelectItem value="productivity">Productivity Suite</SelectItem>
                        <SelectItem value="creative">Creative Software</SelectItem>
                        <SelectItem value="development">Development Tools</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.licenseType && <p className="text-sm text-red-500">{errors.licenseType}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your software licenses"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-lg border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 rounded-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>Submit Inquiry</span>
                      <Send className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
