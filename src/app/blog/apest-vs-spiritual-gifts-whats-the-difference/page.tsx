import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "APEST vs Spiritual Gifts &#8211; What&#8217;s the Difference?",
  description: "A common question we get about APEST is how they relate to the other gifts listed in the New Testament. It goes something like this, “Why spend so much time on"
}

export default function ApestVsSpiritualGiftsWhatsTheDifference() {
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
            "APEST vs Spiritual Gifts &#8211; What&#8217;s the Difference?"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2021-09-22T04:51:00">
              September 22, 2021
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>A common question we get about APEST is how they relate to the other gifts listed in the New Testament. It goes something like this, “Why spend so much time on APEST?” or “What makes APEST so special?” It’s a great question! This is the first in a series of posts where we will explore what makes APEST different from the other gifts, and why it matters.\\n\\nThere are a total of three passages that list various giftings in the New Testament: 1 Corinthians 12, Romans 12, and Ephesians 4. If we look closely, we notice each of these lists uses a key term(s) that indicate we are looking at different types of gifts. Here’s a table summary:\\n\\nThe key term for the gifts in 1 Corinthians 12 is the Greek word phanerosis, which means manifestation. The idea here is that the gifts of the Spirit are somehow “hidden” but in various situations they come out into the open, but then go back into “hiding.”\\n\\nIn Romans 12 the key term is praxis which means practice. These gifts are most likely associated with routine activities that take place in a house church or synagogue setting. They are giftings that serve the ongoing practical needs of a community on mission.\\n\\nThe key term in Ephesians 4 is actually tied up in a Greek Geek factor. Each one of the APEST giftings are nouns in the accusative case, meaning they are the direct object of the verb “gave”. What this means in simple terms is that the people themselves are the gifts. This is captured by various translations when they make an interpretive decision to render the Greek as “he gave some to be” or “he gave some as“. In other words, Christ does not give people the gift of apostleship, he gives apostles as gifts to the people. See the difference?\\n\\nThe accusative case implies these APEST giftings flow out of who we are – our being – and in some sense are actually expressions of our human nature, which is why we see people who are not in Christ demonstrate these capacities across different vocational settings. For example, apostles in entrepreneurship, prophets in political activism, evangelists in marketing, shepherds in police and military service, and teachers in education.\\n\\nThe process Paul seems to be outlining in Ephesians 4 is that people receive grace from Christ (vs. 7), and that grace starts redeeming and realigning those people, enabling them to rise up and become who Christ originally created them to be – apostles, prophets, evangelists, shepherds, or teachers (v. 8-11).\\n\\nThe gift that Christ gives us is the opportunity for us to become who he created us to be, an opportunity that was first made possible by Christ pioneering and perfecting his own human nature into the fulllness of what God created it to be (v. 24). But we can only realize our full potential in Christ as we are receive equipping from all five APET giftings. In other words, we need eachother!\\n\\nWhile the APEST giftings are not the only gifts, they do have certain qualities that none of the other giftings have. For example, they are the only gifts that:\\n\\nThe next posts in this series will work through each one of these five unique qualities of the APEST giftings and how they should shape the way we approach them.\\n\\nAt Trimtab, we help people apply APEST in their leadership, teams, and organization. We would love to have a conversation about how we can serve you. Click the button below and let us hear from you.</p>
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