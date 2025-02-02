import Image from "next/image"
import { Phone, Mail, LinkIcon, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Next Gen Vet</h3>
            <div className="flex flex-col space-y-2">
              <a href="tel:0774508694" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Phone className="h-4 w-4" />
                0774 508 694
              </a>
              <a
                href="https://www.instagram.com/nextgenvetmedical/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Instagram className="h-4 w-4" />
                @nextgenvetmedical
              </a>
              <a
                href="mailto:contact@nextgenvet.ro"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-4 w-4" />
                contact@nextgenvet.ro
              </a>
              <a href="https://nextgenvet.ro" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <LinkIcon className="h-4 w-4" />
                nextgenvet.ro
              </a>
            </div>
          </div>
          <nav className="flex gap-8 mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              MENIU
            </a>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              CONTACT
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-4 items-end">
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v2V49ygYAdGnx8NNbYJQZqMPjQ8zqe.png"
              alt="ANPC Solutionarea Alternativa a Litigiilor"
              width={200}
              height={50}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8X69aaFHQh2CetEMcOs0Ic1Mo0PozS.png"
              alt="Solutionarea Online a Litigiilor"
              width={200}
              height={50}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
