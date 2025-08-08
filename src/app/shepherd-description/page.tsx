import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Shepherd &#8211; Description",
  description: "The word shepherd literally means “protect.” Shepherds continue the ministry of Christ by participating in his work of protecting people from harm and providing"
}

export default function ShepherdDescription() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Shepherd &#8211; Description"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The word shepherd literally means “protect.” Shepherds continue the ministry of Christ by participating in his work of protecting people from harm and providing for their needs. The heart of a shepherd is to protect people from both internal and external threats of danger. They notice when people are missing from the group and are naturally concerned about where they are and what kind of danger they might be in. Shepherds will remain loyal to a group for a long time, giving sacrificially of their time and money to make sure it stays up and running. They sense when people in the group are hurting and have a natural desire to nurture them back to health. Overall, shepherds have a communal focus to their ministry — they want people and the group to receive more investment in relationship and resources.</p>
          </div>
        </div>
      </article>
    </div>
  )
}