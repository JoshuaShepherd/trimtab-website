import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "APEST Foundations",
  description: "Whether you're just beginning to explore APEST or looking to solidify your understanding of its biblical roots, these foundational courses offer a clear, access"
}

export default function ApestFoundationsCourses() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "APEST Foundations"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Whether you're just beginning to explore APEST or looking to solidify your understanding of its biblical roots, these foundational courses offer a clear, accessible entry point into core concepts of APEST, and the book of Ephesians as a whole. Each course will equip you with the essential paradigms and principles to help you see how APEST relates to Christ, the church, and our our develomental journey of becoming everything God created us to be.\\n\\nDiscover the Unique Expressions of Apostolic Gifting\\n\\nApostles are pioneers, catalysts, and builders, shaping the future of the Church. This course explores the unique roles of The Frontrunner, The Frontliner, The Advancer, and The Ambassador.\\n\\nDiscover the Unique Expressions of Apostolic Gifting\\n\\nApostles are pioneers, catalysts, and builders, shaping the future of the Church. This course explores the unique roles of The Frontrunner, The Frontliner, The Advancer, and The Ambassador.\\n\\nQuestions about our APEST Courses.</p>
          </div>
        </div>
      </article>
    </div>
  )
}