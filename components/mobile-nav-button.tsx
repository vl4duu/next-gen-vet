"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function MobileNavButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Add your mobile menu toggle logic here
  }

  return (
    <Button variant="outline" className="md:hidden bg-white" onClick={toggleMenu}>
      <span className="sr-only">Toggle menu</span>
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </Button>
  )
}

