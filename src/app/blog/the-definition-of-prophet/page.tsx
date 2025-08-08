import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "The Definition of Prophet",
  description: "In this post we’ll look at the definition of the word prophet in the original language, and how it points us to some unique qualities of prophets in general.\\n\\"
}

export default function TheDefinitionOfProphet() {
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
            "The Definition of Prophet"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2023-09-26T04:25:00">
              September 26, 2023
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>In this post we’ll look at the definition of the word prophet in the original language, and how it points us to some unique qualities of prophets in general.\\n\\nNow it’s true, the meaning of a Greek word is more than just the sum of its parts.\\n\\nThe word prophet is what linguists call a compound verb – a word that combines a preposition with a verb. For those who barely passed English, hang with me for sec – here’s my point:\\n\\nThe two words πρό (pro) and φημί (phemi) are like the blue and red lenses on a pair of 3D glasses you get at the movie theater. Each word has its own shade of meaning that affects how we “see” the meaning of the word as a whole. So we’re going to take a quick look through each lens separately – first the blue lens of πρό (pro), then the red lens of φημί (phemi), and then we’ll look through both lenses at the same time.\\n\\nThe relational significance flows out of the spatial. It implies a posture of being turned towards another person for communication and interaction. There can be a kind of face-to-face imagery here.\\n\\nThe implications of the meaning of πρό (pro) for our understading of the prophet are best seen in light of the word φημί (phemi)…\\n\\nThe word φημί (phemi) can also mean to assert one thing over another. It points to the kind of communication that compares and contrasts between two things, with the goal of identifying one thing as being more important than another.\\n\\nProphets then bring those people, places, and problems back from the edge to the center of the group and ask, “Are we going to pay attention to this?” (relational). Prophets want to publicize and prioritize people, places, and problems that have been marginalized.\\n\\nThe prophet wants to stir us up to not only pay attention, but to also proactively address, the gap that exists between the center and the edge. In fact, a prophet will not be satisfied until they start to see a closing of that gap in tangible ways.\\n\\nProphetic ministry is also a values based ministry. It often asserts one thing as being more imporant than all other things, which can sometimes give prophetic ministry a somewhat polarizing, or even overly simplistic, vibe. However, without the prophet exercising their unique skills and sensibilities to prioritize and our relationship and response to the “unseen”, a group will continue to function with a limited perspective and impact in it’s context.</p>
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