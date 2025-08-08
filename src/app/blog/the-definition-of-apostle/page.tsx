import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "The Definition of Apostle&#8230;",
  description: "Let’s be honest, the word apostle is one of those “church words” that no one ever uses on the regular. But here’s the deal – the word apostle is used over 80 ti"
}

export default function TheDefinitionOfApostle() {
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
            "The Definition of Apostle&#8230;"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2021-09-12T04:52:00">
              September 12, 2021
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Let’s be honest, the word apostle is one of those “church words” that no one ever uses on the regular. But here’s the deal – the word apostle is used over 80 times in the New Testament. And contrary to what most people may think, Paul and the 12 were not the only apostles. There’s at least 11 other apostles mentioned in the New Testament.\\n\\nYep…This word had quite the “buzz” in the early church. But what does this word really mean? And why should we care? Here's a short video defining the word apostle. But if you want more, read on...\\n\\nIn this post we’ll look at the definition of the word apostle in the original language, and how it points us to some unique qualities of apostles in general.\\n\\nThe word apostle was not originally a “church” word. It was a “secular” word used primarily as a verb when talking about:\\n\\nThe word apostle had its own currency long before it showed up in the New Testament. You could actually make a full time living at being an apostle.\\n\\nThe word apostle comes from the Greek word απόστολος (apostolos). It literally means “one who is sent.” But it’s actually a combination of the Greek words απο (apo) and στέλλω (stello). The word απο – means “to separate,” and the word στέλλω means “to send.”\\n\\nNow it’s true, a Greek word is more than just the sum of its parts.\\n\\nThe word apostle is what linguists call a compound verb – a word that combines a preposition with a verb. For those who barely passed English, hang with me for sec – here’s my point:\\n\\nThe two words “apo” and “stello” are like the blue and red lenses on a pair of 3D glasses you get at the movie theater. Each word has its own shade of meaning that affects how we “see” the meaning of this word apostle as a whole. So we’re going to take a quick look through each lens separately – first the blue lens, then the red lens, and then both of them together.\\n\\nIn order for someone to be sent, they first have to separate themselves from the group. It may seem strange, but apostles are actually wired for breaking away from the group. They don’t necessarily mind saying, “Goodbye…” In fact, most apostles have a 3-5 year window when focusing on one place, people group, or project, before they start getting bored and looking around for another assignment.\\n\\nIt ’s not that they don’t like the people in the group. It’s more about the scope of their vision – as those who are sent they will always be looking beyond the boundaries of the group.\\n\\nIt is this impulse to break away from the group to pursue a mission somewhere “out there” that often puts the apostle at odds with the more inwardly focused members of the group.\\n\\nImmature apostles often lack the skills and sensibilities for navigating this conflict. In their immaturity, they either end up leaving the group on bad terms, or splitting the group and taking some of the original group with them. Not a good strategy…\\n\\nApostles are not only wired to separate from the group, they’re also wired to take the group as a whole, and break it down into its core essential parts, defining the nature and function of those parts in relation to each other, and the whole.\\n\\nApostles do this with everything. Whether it’s separating people into distinct types (think APEST, MBTI, DISC, Enneagram) or separating an organization into functional departments (think enterprise, quality assurance, sales, human resources, and training). Apostles are always dividing and defining for strategic leverage.\\n\\nBut they don’t stop there. The απο is always followed by a στέλλω – they take those parts and “send” them to connect with other parts, creating a dynamic network of interactions. If a system is a group of interacting parts, it’s not hard to see why apostles have a natural curiosity around designing and developing systems. They are natural “systems thinkers” and are consequently drawn to books on leadership, management, and organizational design.\\n\\nApostles break things down to know what they are, how they work, and where they fit into the big picture. They’re always thinking and tinkering with the operating system, looking for ways to optimize its inherent capacities for missional effectiveness. In other words, apostles are strategic in the most literal sense of the word – they stratify things in order to more effectively accomplich a goal.\\n\\nIf I’m honest, I wish the English word “apostle” wasn’t in our Bibles. It;s basically a cryptogram – “a type of puzzle that consists of a short piece of encrypted text.” The original Greek word should have been translated (not transliterated) as missionary, entrepreneur, or some other word that conveys its actual meaning.\\n\\nBut sadly, we’re sort of stuck with it as is. Hence, a somewhat technical blogpost to define it.\\n\\nSo… those of us who care about reactivating the missional capacities of the church have a choice to make:\\n\\nWe can either allow the word apostle to stay in crypto mode, or we can go retro and recover its original meaning so that whenever it’s spoken people will think, “I know what that means.”\\n\\nIn order for this to happen, the word apostle will likely have to be meme-ified. In other words, using images, slogans, stories, and even GIF’s to recontextualize it. If you think this sounds weird, ever heard someone say, “product evangelist? Or “MAC evangelist”? This is a good example of a “church word” that has gone through the crypto, retro, I know, cycle.\\n\\nSo here’s a meme on the apostle I generated. Feel free to share in your social media accounts.</p>
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