import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "The Four Teachers",
  description: "The word teacher means to separate and point out, but did you know there’s different kinds of teachers? For example, not all teachers are into theology and phil"
}

export default function TheFourTeachers() {
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
            "The Four Teachers"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-05-12T04:26:00">
              May 12, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The word teacher means to separate and point out, but did you know there’s different kinds of teachers? For example, not all teachers are into theology and philosophy. Some teachers are more into training people how to do certain tasks. Also, not all teachers like speaking in front of groups. Some teachers like working more with individuals.\\n\\nWhen these different preferences are combined, they point us to four different kinds of teachers, each with their own unique way of teaching people – the mapper, mentor, tutor, and translator.\\n\\nDo you want to learn more about these four different kinds of Teachers, and how they each contribute to our growth and development in Christ?Take our online course. We’ll explore things like:\\n\\nIf you want to deepen your understanding of teachers, and the unique ways they add value to the body, this course is for you!</p>
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