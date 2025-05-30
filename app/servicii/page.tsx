import {Button} from "@/components/ui/button"
import {Footer} from "@/components/footer"
import Link from 'next/link';
import React from "react";

export default function ServicesPage() {
    const services = ['CONSULTAȚII', 'ECOGRAFIE', 'ANALIZE LABORATOR', 'VACCINĂRI', 'MICROCIPĂRI', 'CHIRURGIE', 'TESTE RAPIDE', 'FARMACIE VETERINARĂ', 'COSMETICĂ FELINĂ ȘI CANINĂ', 'PET SHOP', 'INTERNARE ZI', 'PENSIUNE PISICI'];


    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-400/20 to-white">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="mb-16 pt-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#2D3142] mb-8">
                        Serviciile noastre
                    </h1>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {services.map(service => (
                        <Link href="/contact" key={service}>
                            <div
                                className="bg-gradient-to-br from-sky-300/80 to-transparent rounded-3xl p-8 transform hover:scale-105 transition-transform cursor-pointer">
                                <h2 className="text-2xl font-bold text-[#2D3142] mb-2">{service}</h2>
                            </div>
                        </Link>
                    ))}
                </div>


            </div>
            <Footer/>
        </div>
    )


}

