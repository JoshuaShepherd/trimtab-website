import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "The  &#8220;other&#8221; Apostles",
  description: "Try asking someone at your church, “What’s an apostle?”, and you’ll likely get a response something like this, “You mean, like the 12 apostles???” What most peo"
}

export default function TheOtherApostles() {
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
            "The  &#8220;other&#8221; Apostles"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2021-08-31T04:55:00">
              August 31, 2021
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Try asking someone at your church, “What’s an apostle?”, and you’ll likely get a response something like this, “You mean, like the 12 apostles???” What most people don’t realize is the 12 are not the only people called apostles in the New Testament – there’s other people who are called apostles, too.\\n\\nThe original 12 apostles – as well as the apostle Paul – play a unique, unrepeatable, irreplaceable role in the establishment of the original church. However, in addition to Paul and the 12, there are at least 11 “other apostles” mentioned in the Scriptures. The table below lists them out:\\n\\nThese 11 people mentioned above point us to a valuable, but often overlooked reality: the writers of the New Testament spoke of an apostolic function in and through the church that functioned beyond that of Paul and the 12.\\n\\nBut it doesn’t stop with them. These are only the individuals who who are either directly or indirectly mentioned. The New Testament mentions “other apostles” in addition to these 11, too.\\n\\nIn 1 Corinthians 15:5-8 Paul lists off people Jesus appeared to after his resurrection:\\n\\nDid you catch that? He was seen by Cephas, then by the 12, then by over 500, then by James, and then…by all the apostles. Hmmm…who are these “other apostles” that Jesus appeared to? We don’t know who they are, we just know they are not a part of the 12.\\n\\nWe also read in Revealtion 2:2 that Jesus told the church at Ephesus that they had tested those who said that they were apostles and are not, and had found them to be liars. This implies that someone could say they were an apostle, be tested, and actually be telling the truth.\\n\\nIf Paul and the 12 were the only ones who could legitimately be recognized as apostles, why test anyone at all? Just claiming to be an apostle would have been categoriacally false.\\n\\nFinally, towards the end of the first century the writer of the Didache, a first century document outlining basic Christian teaching, gave instructions about “best practices” for Christians receiving itinerant apostles into their homes (Did. 11-13). Apparently, there were Christians well into the later part of the first century who were recognized and received as apostles in the church.\\n\\nOne way to talk about the apostolic function is to say that there are Big “A” apostles and little “a” apostles. The Big “A” apostles are Paul and the 12. They are unique in respect to their personal eye witness to the bodily resurrected Christ.\\n\\nThe little “a” apostles are people who express the apostolic function of being separated from the group and sent to accomplish a speific mission. As Ephesians 4:7-11 indicates, one does not have to see the resurrected Christ to live out an apostolic function. Christ himself has already gifted some people as little “a” apostles, and in turn gives them to the church as a gift.\\n\\nI don’t know about you, but I want us to receive all the gifts that Christ has to give us. It’s the only way we can enter more deeply into the fullness of Christ.\\n\\nWant to learn more about the APEST giftings and how they help us mature into the fullness of Christ? Click the \"Let's Talk\" button below and we’ll get the conversation going.</p>
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