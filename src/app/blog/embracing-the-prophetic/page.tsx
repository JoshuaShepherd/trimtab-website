import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "Embracing the Prophetic",
  description: "This is a guest post by Shaun Grindle:\\n\\nAPEST is widely used to help people understand themselves; the way they are uniquely gifted for ministry. But what mos"
}

export default function EmbracingTheProphetic() {
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
            "Embracing the Prophetic"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-08-19T03:39:00">
              August 19, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>This is a guest post by Shaun Grindle:\\n\\nAPEST is widely used to help people understand themselves; the way they are uniquely gifted for ministry. But what most people do not realize is that APEST can also help diagnose the health of an entire body of believers. For example, a healthy organization will function in various forms of all five APEST ministries. When one or more of these functions are minimized, ignored, or suppressed the organization will suffer.\\n\\nIf these gifts are the very essence of Jesus’ ministry (as we here at Trimtab believe), then it is important that all five are named, valued, and given permission to function in the church or organization you serve. (For a more detailed description of the APEST giftings of apostle, prophet, evangelist, shepherd, and teacher,click here).\\n\\nI have worked within the context of a large mission’s organization for the better part of two decades. Over the course of that time, I have seen many join our organization, and I have seen others leave. Some leave on good terms, and others leave in pain, hurt, and disillusionment.\\n\\nBefore studying APEST in depth, I tended to view those who left in pain as unfortunate, but unrelated cases. But as I learned about APEST and its impact on organizational culture, I began to see a frightening pattern. It is a pattern all too familiar in many evangelical churches and mission organizations—leaders who silence the prophetic function of APEST (and the people who represent that function).\\n\\nThose operating in a prophetic way are often made to feel they are disloyal to the organization, that their voices are untrustworthy, and that their contribution to the health of the organization is misguided, or even harmful. Ultimately, they sense they are no longer welcome. Some continue on, hoping their contribution will be accepted at lower levels of the organization. Others leave confused, trying to make sense of what went wrong in an organization they once loved.\\n\\nThose with a prophetic gift call people back to intimacy and right relationship with God. They are the first to see the gaps, and inconsistencies within the body of Christ. And, unlike the other gifts, these men and women hold the tension of that gap in their physical bodies. Many with this gift will, like Jeremiah, sense that the message they have “is in my heart like a fire, a fire shut up in my bones. I am weary of holding it in; indeed, I cannot.”\\n\\nAs an agent of change, the prophet will most naturally be critical of the misalignment and inconsistencies they see within the organization, church, or body they serve. Part of the maturing process for the prophet is to hone their message, and to choose appropriate moments to spotlight the cause God is hosting within them. Sadly, though, because their message is usually one that calls people towards unfamiliar or uncomfortable places, the prophet’s message is almost always met with resistance.\\n\\nBecause there is a deficit in our awareness and appreciation of the prophetic function within the Body, leaders often struggle to recognize its value and receive its’ contributions. Are the prophetic voices in your context seen as a blessing, a nuisance, or most ostensibly, a danger to the organization?\\n\\nIn my case, I noticed that many of the people leaving on bad terms had one thing in common: they had a prophetic voice. These were people who were extremely dedicated to the organization. Many were noticing and pointing out the distance between what the organization said they valued and what the organization actually valued.\\n\\nAt first they were seen as a nuisance—a distraction from the organization’s mission. But, as time went on, some of those who continued to speak were viewed not just as an inconvenience, but as dangerous. And, because they continued to speak about the gap they saw, they lost credibility, influence, and sometimes—their jobs.\\n\\nHere are three signs that your organization or church has a low capacity for the prophetic function of APEST:\\n\\nYou may be wondering, as a leader, how can I avoid the mistake of ignoring or suppressing the prophetic gift in my context? Here’s a few suggestions:\\n\\nFirst, come to terms with the fact that Jesus himself has given this gift to the Body. When we reject prophets, we’re rejecting a gift from Christ.\\n\\nSecond, recognize that especially in times of change or transition, the prophetic voices in your organization may be the hardest to hear, but are extremely valuable. These are the people who will be most sensitive to, and often the most troubled by, the gap between what is and what should be. They may not always come up with the best solutions (they often need the rest of the Body to hone and shape their ideas), but you can be sure of one thing, when something is awry, they will be the first to sense it. And before long, they will tell you.\\n\\nThird, create space for prophets to mature in their gifting. They may not have the most tact or be able to express what they see with clarity on the first try. Give them space, ask questions, and be genuinely curious about what they have to say. Soon, you will find you are helping them dig up valuable, rough-cut gems that benefit the entire body.\\n\\nFourth, take the ideas surfaced by prophets to the rest of your team. Allow all of the APEST gifts to hone and shape solutions.\\n\\nOf all theAPESTfunctions, the prophetic voice can be the most difficult to receive. And yet, it is a vital part of a healthy, Christ-like culture. Without it, your church or organization is like a sailboat without a compass. You will have a hard time finding true North.\\n\\nConversely, as leaders embrace this gift in those around them, they create opportunities for greater alignment with God and his purposes. While I have seen prophetic people marginalized and leave the organization, I have also seen a few bright spots—leaders who are not afraid to embrace the changes prophets are so good at fomenting. When leaders embrace the prophetic gift, they will be surprised to find that, though the path is rarely easy, the result is a group of people whose hearts are more aligned to God and his mission.</p>
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