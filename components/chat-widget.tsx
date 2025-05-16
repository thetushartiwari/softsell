"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi there! How can I help you with selling your software licenses today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Sample questions for the user to click on
  const sampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does the process take?",
    "How is payment handled?",
  ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // In a real implementation, this would use the OpenAI API
      // For this demo, we'll simulate a response
      const prompt = `You are a helpful assistant for SoftSell, a software license resale platform. 
      Answer the following question about selling software licenses: ${input}`

      // Simulating AI response with a timeout
      setTimeout(() => {
        const mockResponses: Record<string, string> = {
          "how do i sell my license?":
            "To sell your license with SoftSell, simply fill out our contact form with details about your license. Our AI system will review it, provide a valuation within minutes, and if you accept, we'll handle the secure transfer and payment within 24 hours.",
          "what types of licenses do you accept?":
            "We accept a wide range of software licenses including enterprise software, productivity suites, creative tools, development environments, and more. Both perpetual and subscription licenses can be evaluated through our AI-powered platform.",
          "how long does the process take?":
            "The entire process typically takes 1-2 business days. We provide valuations within minutes using our AI system, and once you accept, payment is processed within 24 hours after the license transfer is complete.",
          "how is payment handled?":
            "We offer multiple payment options including direct bank transfer, PayPal, and cryptocurrency. You can select your preferred method during the process, and all transactions are secure and encrypted with enterprise-grade security.",
        }

        const lowerInput = input.toLowerCase()
        let responseText = ""

        // Check if the input matches any of our predefined responses
        for (const [key, value] of Object.entries(mockResponses)) {
          if (lowerInput.includes(key)) {
            responseText = value
            break
          }
        }

        // If no match, provide a generic response
        if (!responseText) {
          responseText =
            "Thank you for your question. Our license specialists would be happy to help with this. Please fill out our contact form, and we'll get back to you with specific information tailored to your needs."
        }

        setMessages((prev) => [...prev, { role: "assistant", content: responseText }])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again later." },
      ])
      setIsLoading(false)
    }
  }

  const handleSampleQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full shadow-lg flex items-center justify-center ${
            isOpen
              ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 h-12 w-12"
              : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white h-14 w-14"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-indigo-100 dark:border-indigo-900 flex flex-col z-50"
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-2xl">
              <div className="flex items-center space-x-2">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-indigo-600">
                  <span className="font-bold text-sm">SS</span>
                </div>
                <span className="font-semibold">SoftSell Support</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`mb-4 ${message.role === "user" ? "flex justify-end" : "flex justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="max-w-[80%] p-3 rounded-2xl bg-gray-100 dark:bg-gray-800">
                    <div className="flex space-x-2">
                      <div
                        className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Sample Questions */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t">
                <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                      onClick={() => handleSampleQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="rounded-full border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                />
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={isLoading}
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
