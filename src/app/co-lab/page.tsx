import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Co-Lab",
  description: "A Collaborative Environment for APEST Learning\\n\\nTim will lead the majority of the Co-Lab sessions. However, occassionally we will create space for other APEST"
}

export default function CoLab() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Co-Lab"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>A Collaborative Environment for APEST Learning\\n\\nTim will lead the majority of the Co-Lab sessions. However, occassionally we will create space for other APEST practitioners to make presentations or facilitate discission around key areas of their expertise to enrich the Co-Lab experience.\\n\\nJoining the Co-Lab community is an investment in your growth as an APEST practitioner, with a subscription of just $14.99 a month. This allows us to provide you with valuable resources, expert-led sessions, and a supportive network dedicated to your development.\\n\\nReady to get started? Just click Join and we'll start this transformative journey together.</p>
          </div>
        </div>
      </article>
    </div>
  )
}