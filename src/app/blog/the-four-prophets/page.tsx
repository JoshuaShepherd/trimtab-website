import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "The Four Prophets",
  description: "The prophet is perhaps the most unique and complex of all the APEST giftings. So it probably won't surprise you to learn that not all prophets are the same. Som"
}

export default function TheFourProphets() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="mb-6">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "The Four Prophets"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-01-31T04:41:00">
              January 31, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The prophet is perhaps the most unique and complex of all the APEST giftings. So it probably won't surprise you to learn that not all prophets are the same. Some prophets focus more on breaking evil things down, while other prophets focus more on building good things up. Some prophets primarily speak their message, while others primarily show us their message through symbolic actions.\\n\\nWhen these different expressions are combined, they point us to four different kinds of prophets, each with their own unique way of being prophetic – the auditor, awakener, restorer, and resistor.\\n\\nDo you want to learn more about these four different kinds of Prophets, and how they each contribute to our growth and development in Christ? Take our online course. We’ll explore things like:\\n\\nIf you want to deepen your understanding of the prophet, and the unique ways they add value to the body, this course up is for you!</p>
          </div>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Continue Your APEST Journey</h4>
              <p className="text-gray-600 text-sm">
                Explore more resources and connect with Tim for personalized guidance.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/apest-quiz">Take APEST Quiz</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contact">Contact Tim</Link>
              </Button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}