"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function ThemeSync() {
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    const actualTheme = theme === "system" ? systemTheme : theme

    if (actualTheme) {
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(actualTheme)

      document.documentElement.setAttribute("data-theme", actualTheme)
    }
  }, [theme, systemTheme])

  return null
}
