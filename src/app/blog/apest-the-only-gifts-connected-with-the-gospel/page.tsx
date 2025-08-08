import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "APEST: The only Gifts Connected with the Gospel",
  description: "This is part 3 (Part 1, 2) in the series APEST vs Spiritual Gifts: What’s the difference? While the APEST giftings are not the only gifts in the New Testament,"
}

export default function ApestTheOnlyGiftsConnectedWithTheGospel() {
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
            "APEST: The only Gifts Connected with the Gospel"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2024-09-05T18:48:23">
              September 5, 2024
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>This is part 3 (Part 1, 2) in the series APEST vs Spiritual Gifts: What’s the difference? While the APEST giftings are not the only gifts in the New Testament, they do have certain qualities that none of the other giftings have. For example, they are the only gifts that are connected with the story of the gospel, specifically, his resurrection and ascension. When Paul introduces the APEST giftings he says:\\n\\nIf we were to map this out visually, it would something like this:\\n\\nPaul sees Christ descending to the realm of the dead, and then ascending out of that realm through the resurrection and ascension, all the way up to the right hand of God. But notice when APEST was given – during the upward movement of his resurrection and ascension. The APEST giftings are associated with the upward movement of Christ from the lowest of lows to the highest of highs.\\n\\nWhy is Paul going out of his way to point ou this connection between APEST and Christ's resurrection and ascension? The clue is found in how Paul sees death itself.\\n\\nIn an earlier letter – 1 Corinthians – Paul says death is our enemy (1 Corinthains 15:26). And why is death our enemy? Because death stops us from reaching the fullness of our potential in God. Paul pictures it like this: when God created Adam, he intended for him to go through a developmental process that would lead to him becoming more and more like God. But through sin, death entered in and cut that developmental process short. Death is an enemy because it holds us back, and holds us down, from becoming everything God created us to be. Like the picture below. Death stands in the way of our progress.\\n\\nThe good news is that God sent his Son to become a human, enter into death, so that through his resurrection and ascension he could make a way out of death and complete God's developmental process within himself.\\n\\nThe resurrection and ascension of Christ demonstrate God's power to break someone out of their a place where they have gotten stuck and raise them up to full and complete maturity. That’s why Paul calls Jesus the “last” Adam (1 Corinthians 15:46-49). Christ completes the developmental process that Adam (and us) have left undone.\\n\\nAnd how does this relate to APEST? Just as the resurection and ascension of Christ enabled him to get unstuck and advance to the next stage of God's developmental path to full and complete maturity, APEST helps us break us out of our immaturity and advances us along God's developmental path, gorwing and maturing into the person God created us to be.\\n\\nHow does this happen? In short, it happens through the equipping each APEST gifting provides. Each one of the five APEST giftings represents specific skills and sensibilities that Christ himself has already perfected within himself. For example, apostles help us develop specific skills ans sensibilities related to engaging in mission, risk taking, systems thinking, goal setting, strategizing, and cross-cultural activities.\\n\\nEach one of these apostolic skills and sensibilities can be traced back to things Jesus himself did during his ministry. He pioneered and perfected each one of thsoe skills and sensibilities within himself. APostles are given as a gift to the body to help develop those skills and sensibilities in us, too.\\n\\nIt is through our participation in equipping processes – wether apostolic, prophetic, evangellistic, shepherding, or teaching – that we are able to break out of our immaturity and develop the Christ-like maturity that each one of the APEST giftings exemplifies. In short, equipping in each APEST function sets us free and moves us forward into the person God created us to be.\\n\\nOnly the APEST giftings are connected to the gospel in this way. At Trimtab, we specialize in equipping people to grow and develop in each one of the APEST functions. If you would like to have a conversation about what it could look like for you to be equipped in any one of the five APEST functions, just click the button “Let’s Talk” below and schedule a time for us to connect.</p>
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