import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "APEST: Rated &#8220;E&#8221; for Everyone Part 4",
  description: "This is Part 4 (Parts 1, 2, 3) of a series of posts that seeks to answer the question, “Is APEST given to everyone in the church, or just a select group of lead"
}

export default function ApestRatedEForEveryonePart4() {
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
            "APEST: Rated &#8220;E&#8221; for Everyone Part 4"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-12-07T03:32:00">
              December 7, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>This is Part 4 (Parts 1, 2, 3) of a series of posts that seeks to answer the question, “Is APEST given to everyone in the church, or just a select group of leaders?” How we answer this question will radically affect the way we go about applying APEST in our contexts.\\n\\nThe best way to answer this question is to let the text speak for itself, which says,\\n\\nIn this passage, Paul envisions a network of interactive relationships between the head and its body parts. As the head Christ is both the Source and Goal of all things – both in heaven and on earth (1:10).\\n\\nIt is through our union with Christ in the Spirit that we become “one flesh” with him, and have therefore become members of his body (5:29-32). Practically speaking, this means we are not only members of Christ, we are also members of one another.\\n\\nIf we pay close attention, Paul is outlining this network of relationships as being developmental. In other words, each part of the body actively participates with Christ in the growth of the body.\\n\\nIn this passage, Paul envisions a network of interactive relationships between the head and its body parts. As the head Christ is both the Source and Goal of all things – both in heaven and on earth (1:10).\\n\\nIt is through our union with Christ in the Spirit that we become “one flesh” with him, and have therefore become members of his body (5:29-32). Practically speaking, this means we are not only members of Christ, we are also members of one another.\\n\\nIf we pay close attention, Paul is outlining this network of relationships as being developmental. In other words, each part of the body actively participates with Christ in the growth of the body.\\n\\nIn this diagram, Christ the head is empowering each part of the body. Then, like our own physical body, Paul sees each part of the body contributing something unique to every other part of the body so it can grow and build itself up in love.\\n\\nThe important thing note here is that Paul envisions the body as building itself up in love. In other words, this is something the body does to itself – but notably not by itself. The body is empowered by its connection with the head, but the goal of that empowerment is for each part of the body to uniquely contribute to the body’s internal capacities to repair (equip) itself so it can carry out its function as the body of Christ.\\n\\nIf you haven’t guessed by now, that unique contribution from each part of the body flows directly from the unique measure of grace that Christ has given to each person via their APEST gifting. As it turns out, each one of us is called to participate with Christ in gathering all things back up into his headship.\\n\\nIt’s hard to imagine how someone could work their way through the language and imagery of this text and come out on the other side with the idea that APEST is only given to a select group of leaders in the church. Paul sees each member of the body of Christ connected and contributing to the individual and collective growth of the body. To act as if the fivefold giftings of APEST have been restricted to a select few will only continue to frustrate our capacity to carry out our function as the body of Christ.</p>
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