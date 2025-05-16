"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function FloatingShapes() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large circle */}
      <div
        className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background:
            theme === "dark" ? "linear-gradient(45deg, #6366f1, #8b5cf6)" : "linear-gradient(45deg, #6366f1, #3b82f6)",
        }}
      />

      {/* Small circle */}
      <div
        className="absolute top-[60%] -left-[100px] w-[300px] h-[300px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background:
            theme === "dark" ? "linear-gradient(45deg, #8b5cf6, #ec4899)" : "linear-gradient(45deg, #3b82f6, #ec4899)",
        }}
      />

      {/* Medium circle */}
      <div
        className="absolute top-[30%] -right-[150px] w-[400px] h-[400px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background:
            theme === "dark" ? "linear-gradient(45deg, #ec4899, #f97316)" : "linear-gradient(45deg, #ec4899, #f97316)",
        }}
      />

      {/* Bottom circle */}
      <div
        className="absolute -bottom-[200px] left-[30%] w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background:
            theme === "dark" ? "linear-gradient(45deg, #f97316, #6366f1)" : "linear-gradient(45deg, #f97316, #6366f1)",
        }}
      />
    </div>
  )
}
