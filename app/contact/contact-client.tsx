"use client"

import { WorkHeader } from "@/components/work-header"
import { ContactForm } from "@/components/contact-form"
import { FaqSection } from "@/components/faq-section"
import { PageLoader } from "@/components/page-loader"

export default function ContactClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-[#0b0b0b] transition-colors duration-300">
<<<<<<< HEAD
        {/* Removed UnifiedHeader */}
        <WorkHeader title="Contact" showFilters={false} />
=======
        {/* <CHANGE> Removed descriptiveText and coordinates props */}
        <WorkHeader
          title="Contact"
          showFilters={false}
        />
>>>>>>> 909f7c4 (Initial commit - updated website)
        <ContactForm />
        <FaqSection />
      </main>
    </PageLoader>
  )
}
