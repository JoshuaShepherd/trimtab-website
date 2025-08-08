import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Prophet &#8211; Description",
  description: "The word prophet literally means “speak before.” Prophets continue the ministry of Christ by participating in his work of either revealing who God is or reformi"
}

export default function ProphetDescription() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Prophet &#8211; Description"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The word prophet literally means “speak before.” Prophets continue the ministry of Christ by participating in his work of either revealing who God is or reforming communities around his heart. Prophets want to see the presence and power of God revealed in every situation.\\n\\nThey are quick to recognize the gap between “what is” and “what should be.” In fact, they often host that tension within their own bodies. They have an allergic reaction to hypocrisy and often pull back from groups that say one thing but do another. Prophets are drawn to the edge — people and places that have been overlooked and undervalued. As such, they often start or support humanitarian efforts that resist or reform systems of injustice.\\n\\nProphets will often use creative methods to get their point across — music, poetry, photography, art, or even shocking demonstrations. Overall, prophets have an incarnational feel to their ministry — they want to see more integrity between our words and actions.</p>
          </div>
        </div>
      </article>
    </div>
  )
}