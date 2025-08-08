import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Evangelist &#8211; Description",
  description: "The word evangelist literally means “messenger of good.” Evangelists continue the ministry of Christ by participating in his work of either promoting the messag"
}

export default function EvangelistDescription() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Evangelist &#8211; Description"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The word evangelist literally means “messenger of good.” Evangelists continue the ministry of Christ by participating in his work of either promoting the message of the good news of the kingdom or persuading people to respond to it in contagious ways. While apostles are organizational entrepreneurs, evangelists are primarily relational entrepreneurs. They do their best work when building on an already existing foundation.\\n\\nThey are natural storytellers and will promote almost anything — if they believe in it. They are the eternal optimists who see the potential for good in everything. Evangelists never meet a stranger. They enjoy meeting new people and inviting them into new opportunities. They are drawn to first time encounters with people outside the group and have a sense for what could potentially make that encounter go bad. Overall, evangelists have an attractional quality to their ministry — they want to see more influence on “outsiders” becoming “insiders.”</p>
          </div>
        </div>
      </article>
    </div>
  )
}