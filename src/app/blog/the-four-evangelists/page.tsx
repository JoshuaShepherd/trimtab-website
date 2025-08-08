import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "The Four Evangelists",
  description: "It’s true, “The evangelist’s best friend is the person they’ve never met.” But did you know not all evangelists are the same? That’s right…there’s at least four"
}

export default function TheFourEvangelists() {
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
            "The Four Evangelists"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-02-07T04:37:00">
              February 7, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>It’s true, “The evangelist’s best friend is the person they’ve never met.” But did you know not all evangelists are the same? That’s right…there’s at least four different kinds of evangelists, each with their own style and approach to evangelizing people. For example, some evangelists prefer to rely more on their words, while other evangelists rely more on their presence. Also, some evangelists like to evangelize in stages, while other evangelists like to evangelize in shorter windows of time.\\n\\nWhen these different preferences are combined, they point us to four different kinds of evangelists, each with their own unique way of evangelizing people – the converser, convincer, inviter, and investor.\\n\\nIf you want to deepen your understanding of the evangelist, and broaden your perspective about how to do evangelism, this course is for you!</p>
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