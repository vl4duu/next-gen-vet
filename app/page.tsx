import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"
import {Exo_2} from "next/font/google";

// Configure the font
const exoFont = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Add needed weights
  variable: '--font-exo2', // Set a CSS variable for easier customization
});


export default function Home() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-gradient-to-b from-sky-400 to-white">
          <div className="container mx-auto px-4 pt-24">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/husky_transparent-9fwm1IwTB3aJPJlJukxhnCziyJFZ7C.svg"
                alt="Cartoon husky in a lab coat"
                width={400}
                height={400}
                className="mx-auto mb-8 relative z-10"
                priority
                loading="eager"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IzInDlajPSc3fCL5mCQj80WXbo0rl2.png"
                alt="Decorative blue spiral"
                width={900}
                height={900}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                priority
                loading="eager"
              />
            </div>
            <div className="text-center">
                <h2
                    className={`text-6xl font-extrabold tracking-wide text-shadow-lg opacity-90 ${exoFont.className}`}
                >
                  <span className="text-black tracking-tighter">NEXTGEN</span>
                  <span className="text-[#4747FF] tracking-tighter">VET</span>
                </h2>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
              NextGen Vet este o clinică veterinară modernă, deschisă în 2022. Oferim o gamă completă de servicii
              medicale pentru animalele de companie, combinând expertiza profesională cu tehnologia de ultimă generație
              pentru a asigura cea mai bună îngrijire pentru prietenii voștri necuvântători.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uC2FDnRph9TARvFO6nzwrucqVtYpbM.png"
                  alt="Calico cat being examined by veterinarian during consultation"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">CONSULTAȚII</h3>
                <Button variant="outline" className="w-full">
                  Vezi mai mult
                </Button>
              </Card>

              <Card className="p-6 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QT1923rB83d1UXSkgYoZGPAU6KPTZh.png"
                  alt="Pet shop shelves stocked with Royal Canin pet food products"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">PET SHOP</h3>
                <Button variant="outline" className="w-full">
                  Vezi mai mult
                </Button>
              </Card>

              <Card className="p-6 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Nr6AeKpOa9ilWKSfDefkasDXlM7wIP.png"
                  alt="Jack Russell Terrier receiving a vaccination from veterinarian"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">VACCINĂRI</h3>
                <Button variant="outline" className="w-full">
                  Vezi mai mult
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 w-full relative overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.2870775288613!2d26.08590767609501!3d44.4142594935312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff0a6f3ca93d%3A0xcdc6ca9415ee188b!2sStrada%20Fabrica%20de%20Chibrituri%2050%2C%20Bucure%C8%99ti%20050183!5e1!3m2!1sen!2sro!4v1736455113921!5m2!1sen!2sro"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <h2 className="text-2xl font-bold text-center mb-12">
              Fă-ți o programare la animalul tău de companie și ne ocupăm de restul!
            </h2>
            <div className="flex justify-center items-center gap-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brown_doggo_transparent-2j8uG3Fta7KMCtGuaqC7YmF9pfvjNn.png"
                alt="Cartoon illustration of a friendly brown dog in a doctor's coat"
                width={210}
                height={210}
                className="rounded-lg"
              />
              <div className="text-5xl font-bold">Grijă cu inima deschisă pentru prietenii necuvântători!</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

