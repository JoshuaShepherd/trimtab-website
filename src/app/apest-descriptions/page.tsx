import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "APEST Descriptions",
  description: "The word apostle literally means “separate and send.” Apostles continue the ministry of Christ by participating in his work of either starting new expressions o"
}

export default function ApestDescriptions() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "APEST Descriptions"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The word apostle literally means “separate and send.” Apostles continue the ministry of Christ by participating in his work of either starting new expressions of the church or scaling existing churches into new contexts. They are entrepreneurs who have a natural desire and ability to launch and lead new ventures.\\n\\nApostles are cultural architects who are drawn to issues related to organizational design, systems, and enterprising structures. They intuitively recognize leadership capacity in others and tend to develop leadership training systems that are reproducible. Overall, they have a missional focus to their ministry — they want to see more people and places impacted for the kingdom.\\n\\nThe word prophet literally means “speak before.” Prophets continue the ministry of Christ by participating in his work of either revealing who God is or reforming communities around his heart. Prophets want to see the presence and power of God revealed in every situation. They are quick to recognize the gap between “what is” and “what should be.” In fact, they often host that tension within their own bodies. .\\n\\nProphets have an allergic reaction to hypocrisy and often pull back from groups that say one thing but do another. They are drawn to the edge — people and places that have been overlooked and undervalued. Overall, prophets have an incarnational feel to their ministry — they want to see more integrity between our words and actions.\\n\\nThe wordevangelist literally means “messenger of good.” Evangelists continue the ministry of Christ by participating in his work of either promoting the message of the good news of the kingdom or persuading people to respond to it. While apostles are organizational entrepreneurs, evangelists are primarily relational entrepreneurs. They do their best work when building on an already existing foundation.\\n\\nThe word shepherd literally means “protect.” Shepherds continue the ministry of Christ by participating in his work of protecting people from harm and providing for their needs. The heart of a shepherd is to protect people from both internal and external threats of danger.\\n\\nThe word teacher literally means “to separate and point out.” Teachers continue the ministry of Christ by participating in his work of either explaining truth or training people how to live it out. They take topics and tasks and break them down into smaller parts, showing us what they mean and how they fit and flow together.</p>
          </div>
        </div>
      </article>
    </div>
  )
}