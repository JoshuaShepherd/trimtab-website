import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Apostle &#8211; Description",
  description: "The word apostle literally means “separate and send.” Apostles continue the ministry of Christ by participating in his work of either starting new expressions o"
}

export default function ApostleDescription() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Apostle &#8211; Description"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The word apostle literally means “separate and send.” Apostles continue the ministry of Christ by participating in his work of either starting new expressions of the church or scaling existing churches into new contexts.\\n\\nApostles are entrepreneurs who have a natural desire and ability to pioneer new ventures, even in what may seem like an impossible situation. They are cultural architects who are drawn to issues related to organizational design, systems, and structure.\\n\\nThey intuitively recognize leadership capacity in others and tend to develop leadership training systems that are reproducible. Overall, they have a missional focus to their ministry — they want to see more people and places impacted for the kingdom.</p>
          </div>
        </div>
      </article>
    </div>
  )
}