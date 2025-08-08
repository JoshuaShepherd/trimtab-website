import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "APEST: The Only Gifts Given by Christ",
  description: "This is part 2 (Parts 1, and 3) in the series – APEST vs Spiritual Gifts – What’s the Differnce? In our first post we noticed that the APEST giftings have certa"
}

export default function ApestTheOnlyGiftsGivenByChrist() {
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
            "APEST: The Only Gifts Given by Christ"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2021-09-30T04:45:00">
              September 30, 2021
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>This is part 2 (Parts 1, and 3) in the series – APEST vs Spiritual Gifts – What’s the Differnce? In our first post we noticed that the APEST giftings have certain qualities that none of the other giftings have, namely, they are the only gifts that:\\n\\nIn this post we are going to look at the significance of APEST being given by Christ, and how that can shape the way we understand the nature of these five giftings.\\n\\nIn Ephesians, Paul uses a variety of terms when speaking about Jesus. The table below captures those terms and their frequency of use in the letter.\\n\\nAs you can tell, the terms Lord, Jesus, and Christ show up with the most frequency, with Christ taking the lead. But let’s pause here to make an importnt observation about the word Christ:\\n\\nIn other words, it is not a term that points to Jesus’ divine nature (there are other terms for that). The word Christ means “chosen” or “anointed” or “messiah”. And for a Jewish person in Paul’s day, to identify someone as Israel’s Messiah was to simultaneously identify them as Israel’s King, God’s son, and a descendant from the line of David (2 Sam. 7:8-17; Psalm 2; 1 Tim 2:5; 2 Tim 2:8). In short, when Paul says Christ, it points to Jesus’ humanity, not his divinity.\\n\\nWhile “Christ” is the leading term in Ephesians (used 43 times), it is not the only term Paul uses that points to Jesus’ human nature. Surprisingly, there’s quite a few.\\n\\nAll six of the above terms describe the human nature of Jesus in its perfected, mature form. But Christ did not start out with a perfected, fully mature, human nature. He started out – like the rest of us – with a corrupted human nature. And his corrupted human nature – like ours – was constantly trying to lead him down a path that would further that corruption – both in himself, and those around him. As Paul describes in 2:14-15, Jesus had forces within his flesh that were directing him to live his life according the inherited traditions of his culture i.e. to promote, practice, and perpetuate hostility towards people who were “un-circumcised.”\\n\\nBy resisting those forces in his flesh, and ruling over them, he was able to render those forces inoperative, creating space for Jesus to participate with God in forging a new humanity within himself, one that expressed itself in peaceful interactions towards those who did not share in his bodily characteristics, or covenantal status (2:15-16). This new way of seeing and relating to people – not by what they are “not” in relation to us, but by what they “are” in relation to God – was brought to full maturity at the cross where Christ chose to sacrificially offer himself in equal measure for both Jews and Gentiles.\\n\\nAnd what does this have to do with APEST? A lot, actually. When Paul says that APEST is given by Christ, he is wanting us to see these five giftings as flowing out of the one and only human who was able to successfully conquer evil, and complete the developmental process of bringing their human nature into full participation with the Divine nature. Christ the King resisted and ruled over the corruption in his human nature, choosing to partner with God in the creation a new humanity within himself, one that was fashioned according to God in righteousness and holiness (4:24), not the deceitful desires of his flesh (4:22).\\n\\nNow, in his glorified, resurrected body, Christ is the source (head) of all genuine human progress. And this is where we begin to see APEST in its proper context. The five-fold giftings of APEST are given by Christ to empower the development of his new humanity within us, expressed vocationally through apostolic, prophetic, evangelistic, shepherding, and teaching functions. In short, through the equipping that each APEST gifting provides, what took place in Christ can now start taking place in us. We, too, can start partnering with God in the development of our human nature, growing and maturing into the fullness of Christs’ new humanity.\\n\\nThrough the equipping that each APEST gifting provides, what took place in Christ can now start taking place in us.\\n\\nAt Trimtab, we help people apply APEST in their leadership, teams, and organization so they can continue developing into the fullness of Christ. You can get in touch with us by clicking the button below. We would love to have a conversation about how we can serve you. Click the \"Let's Talk\" button below and set up a time to connect.</p>
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