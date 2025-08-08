import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "The Four Apostles",
  description: "The word apostle means one who is sent and scales, but did you know there’s different kinds of apostles? For example, both Peter and Paul were apostles, but the"
}

export default function TheFourApostles() {
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
            "The Four Apostles"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-02-14T04:34:00">
              February 14, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The word apostle means one who is sent and scales, but did you know there’s different kinds of apostles? For example, both Peter and Paul were apostles, but they had different kinds of apostolic ministries. Paul focused more on starting new communities form scratch, while Peter focused more on mobilizing the already existing people of God for mission. Also, some apostles have a broader vision for cities, while other apostles have a more focused vision for specific communities.\\n\\nWhen these different focal points are combined, they point us to four different kinds of apostles, each with their own unique way of teaching people – the front-runner,front-liner, advancer, and ambassador.\\n\\nDo you want to learn more about these four different kinds of Apostles, and how they each contribute to our growth and development in Christ? Take our online course. We’ll explore things like:\\n\\nIf you want to deepen your understanding of apostles, and the unique ways they add value to the body, this course is for you!</p>
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