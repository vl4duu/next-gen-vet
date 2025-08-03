"use client"

import Image from "next/image"
import {Card} from "@/components/ui/card"
import {Footer} from "@/components/footer"
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog"

const galleryImages = [
    {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-14%20at%2008.18.26%20(7)-sdbA6P0nBEl6bezsZmJYFe3F5y0CIq.jpeg",
        alt: "Modern veterinary examination room with hydraulic table and medical equipment",
        width: 600,
        height: 400,
    },
    {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-14%20at%2008.18.26%20(5)-iZACoV0AKpL3kJKHqhVSA2xkXqeTFg.jpeg",
        alt: "Pet shop area with organized shelving units containing veterinary supplies and pet products",
        width: 600,
        height: 400,
    },
    {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-14%20at%2008.18.26%20(1)-iKD4m0KLDDgjSLSdMyyMaEJB6FeEKT.jpeg",
        alt: "Waiting room with modern decor featuring a colorful cat artwork and comfortable seating",
        width: 600,
        height: 400,
    },
    {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-14%20at%2008.18.26%20(2)-C9k9Hh1OSqkyOwzsLucX6eUxyGEyPd.jpeg",
        alt: "Reception area with modern white curved desk and colorful dog artwork",
        width: 600,
        height: 400,
    },
    {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-14%20at%2008.18.26%20(8)-L5j0BQT1Y63Qb7EE1HK3iznN9r6pk9.jpeg",
        alt: "Surgical room with stainless steel examination table and medical lighting",
        width: 600,
        height: 400,
    },
    {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped_equipment-D4mBoCqULsctEtv7IQJ8Mj5Ddm5xsK.jpeg",
        alt: "Advanced laboratory diagnostic equipment and analysis machines",
        width: 600,
        height: 400,
    },
    {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-14%20at%2008.18.27%20(3)-85jMq4biywo9SaRbFSvyRFzNOtKTap.jpeg",
        alt: "NextGenVet business card display with decorative pet figurines",
        width: 600,
        height: 400,
    },
    {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-14%20at%2008.18.27%20(2)-M7Km8dFZhmmnJbGvouxeaK9aVRizuE.jpeg",
        alt: "Cozy waiting area with veterinary magazines and comfortable seating",
        width: 600,
        height: 400,
    },
    {
        src: "https://i.imgur.com/O0dY5Jc.jpeg",
        alt: "Cozy waiting area with veterinary magazines and comfortable seating",
        width: 600,
        height: 400,
    }
]

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-400/20 to-white">
            <div className="container mx-auto px-4">
                {/* Page Title */}
                <div className="pt-32 pb-16">
                    <div className="bg-white rounded-t-3xl pt-16 pb-20 px-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#2D3142]">
                            Galerie
                        </h1>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                            {galleryImages.map((image, index) => (
                                <Card key={index} className="overflow-hidden group">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="cursor-pointer">
                                                <Image
                                                    src={image.src || "/placeholder.svg"}
                                                    alt={image.alt}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-7xl w-full p-0">
                                            <Image
                                                src={image.src || "/placeholder.svg"}
                                                alt={image.alt}
                                                width={1200}
                                                height={800}
                                                className="w-full h-auto"
                                            />
                                        </DialogContent>
                                    </Dialog>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

