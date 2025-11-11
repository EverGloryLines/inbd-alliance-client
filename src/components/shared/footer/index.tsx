import { ContactForm } from "./_components/contact-form";
import { ContactInfo } from "./_components/contact-Info";


export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Desktop: Two columns with divider */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column */}
          <div className="flex flex-col justify-between md:border-r border-white/10 md:pr-12">
            <ContactInfo />
          </div>

          {/* Right Column */}
          <div className="md:pl-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  )
}
