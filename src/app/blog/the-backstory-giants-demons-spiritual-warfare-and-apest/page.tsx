import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "The Backstory: Giants, Demons, Spiritual Warfare, and APEST",
  description: "APEST is more than just a personality or gifting profile. It’s one of the strategic ways Christ empowers his church to partner with him in the ongoing struggle"
}

export default function TheBackstoryGiantsDemonsSpiritualWarfareAndApest() {
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
            "The Backstory: Giants, Demons, Spiritual Warfare, and APEST"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-08-19T03:44:00">
              August 19, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>APEST is more than just a personality or gifting profile. It’s one of the strategic ways Christ empowers his church to partner with him in the ongoing struggle against evil – forces that want to hinder us from becoming everything God created us to be, in him.\\n\\nIf you want to deepen your understanding of the relationship between APEST and spiritual warfare, this webinar is for you!</p>
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