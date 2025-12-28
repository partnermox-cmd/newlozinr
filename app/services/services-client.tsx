"use client"

import { WorkHeader } from "@/components/work-header"
import { ServicesDetailGrid } from "@/components/services-detail-grid"
import { PageLoader } from "@/components/page-loader"

export default function ServicesClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
<<<<<<< HEAD
        {/* Removed UnifiedHeader */}
        <WorkHeader title="Services" showFilters={false} />
=======
        {/* <CHANGE> Removed descriptiveText and coordinates props */}
        <WorkHeader
          title="Services"
          showFilters={false}
        />
>>>>>>> 909f7c4 (Initial commit - updated website)
        <ServicesDetailGrid />
      </main>
    </PageLoader>
  )
}
