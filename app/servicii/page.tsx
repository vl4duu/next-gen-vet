import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400/20 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-16 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D3142] mb-8">
            Serviciile noastre
          </h1>
          <p className="text-2xl md:text-3xl text-[#2D3142] max-w-2xl">
            Îngrijire de calitate pentru însoțitorii dvs. de animale iubiți.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Each service card has a gradient background and rounded corners */}
          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">CONSULTAȚII</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">ECOGRAFIE</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">ANALIZE LABORATOR</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">VACCINĂRI</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">MICROCIPĂRI</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">CHIRURGIE</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">TESTE RAPIDE</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">FARMACIE VETERINARĂ</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">COSMETICĂ FELINĂ ȘI CANINĂ</h2>
          </div>

          <div className="bg-gradient-to-br from-sky-300/80 to-white rounded-3xl p-8 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-[#2D3142] mb-2">PET SHOP</h2>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#2D3142] text-white px-4 py-2 rounded-lg text-sm">
                Next Gen Vet

              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#2D3142]">
                Protejați sănătatea animalului dvs. de companie.
              </h2>
            </div>
            <Button 
              className="bg-[#F4845F] hover:bg-[#F4845F]/90 text-white px-8"
            >
              Contact
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

