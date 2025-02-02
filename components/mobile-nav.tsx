"use client"

import * as React from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {Phone} from 'lucide-react'

import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {cn} from "@/lib/utils"

const navigation = [
    {name: "Acasă", href: "/"},
    {name: "Servicii", href: "/servicii"},
    {name: "Galerie", href: "/galerie"},
    {name: "Contact", href: "/contact"}
]

export function MobileNav() {
    const pathname = usePathname()
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden" onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation behavior
                    e.stopPropagation(); // Stop click from propagating further
                    setOpen(true);       // Open the mobile navigation
                }}
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-lg transition-colors hover:text-orange-500",
                                pathname === item.href
                                    ? "text-orange-500"
                                    : "text-gray-500"
                            )}
                            onClick={() => setOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button
                        variant="default"
                        className="mt-4 bg-[#2D3142] hover:bg-[#2D3142]/90"
                        asChild
                    >
                        <a href="tel:0774508694">
                            <Phone className="mr-2 h-4 w-4"/>
                            Sună-ne
                        </a>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

