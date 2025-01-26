"use client"

import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400/20 to-white pt-24">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2D3142] mb-16">Contact</h1>

        {/* Contact Info Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 text-center">
          <div className="flex-1 md:max-w-[250px]">
            <h2 className="font-semibold mb-4">Program</h2>
            <div className="flex flex-col items-center">
              <p>Luni - Vineri: 09:00 - 20:00</p>
              <p>Sambata: 09:00 - 16:00</p>
              <p>Duminica: Închis</p>
            </div>
          </div>

          <div className="flex-1 md:max-w-[250px]">
            <h2 className="font-semibold mb-4">Email</h2>
            <a href="mailto:contact@nextgenvet.ro" className="text-orange-500 hover:text-orange-600">
              contact@nextgenvet.ro
            </a>
          </div>

          <div className="flex-1 md:max-w-[250px]">
            <h2 className="font-semibold mb-4">Adresa</h2>
            <p>Strada Fabricii 38</p>
            <p>Bucuresti</p>
            <p className="mt-4">
              <a href="tel:+40774508694" className="text-orange-500 hover:text-orange-600">
                +40 774 508 694
              </a>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12 max-w-3xl mx-auto relative overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.2870775288613!2d26.08590767609501!3d44.4142594935312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff0a6f3ca93d%3A0xcdc6ca9415ee188b!2sStrada%20Fabrica%20de%20Chibrituri%2050%2C%20Bucure%C8%99ti%20050183!5e1!3m2!1sen!2sro!4v1736455113921!5m2!1sen!2sro"
            width="100%"
            height="400"
            className="w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

