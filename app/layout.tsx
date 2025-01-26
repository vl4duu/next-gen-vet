import "@/styles/globals.css"
import { Poppins } from "next/font/google"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import Loading from "./loading"

import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "NextGen Vet - Clinică Veterinară",
  description: "Clinică Veterinară NextGenVet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative flex min-h-screen flex-col ${poppins.variable} ${inter.variable} font-poppins`}>
        <MainNav />
        <MobileNav />
        <Suspense fallback={<Loading />}>
          <main className="flex-1">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}



import './globals.css'