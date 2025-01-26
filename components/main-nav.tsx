import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNavButton } from "./mobile-nav-button"

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
]

export function MainNav() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/10 backdrop-filter backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nextgen-logo-scale-down-kfV2Dhs1gPNXAWdWDVScN5XYGgZQZS.png"
              alt="NextGenVet Logo"
              width={200}
              height={200}
              className="h-20 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <nav className="hidden gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg transition-colors hover:text-orange-500 text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center">
          <Button variant="default" className="hidden bg-white text-[#2D3142] hover:bg-white/90 md:flex">
            <Phone className="mr-2 h-4 w-4" />
            Sună-ne
          </Button>
          <MobileNavButton />
        </div>
      </div>
    </header>
  )
}

