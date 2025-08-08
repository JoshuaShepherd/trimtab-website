import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "APEST: Rated &#8220;E&#8221; for Everyone Part 1",
  description: "As I walk with people through a process of applying APEST in their life, leadership, team, and organization, the one question that always comes up is this:\\n\\nI"
}

export default function ApestRatedEForEveryonePart1() {
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
            "APEST: Rated &#8220;E&#8221; for Everyone Part 1"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-02-02T04:39:00">
              February 2, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>As I walk with people through a process of applying APEST in their life, leadership, team, and organization, the one question that always comes up is this:\\n\\nIt’s a great question, and getting this right is absolutely critical to applying APEST in our context.\\n\\nThe best way to answer this question is to let the text of Ephesians speak for itself. This is Part 1 in a series of blog posts (Parts 2, 3, 4) where I will systematically work through key passages in Ephesians that will help answer that question for us. We’ll start with this phrase…\\n\\nMost people think Paul starts talking about APEST in Ephesians 4:11. But, in reality, he actually starts back in 4:7. He says,\\n\\nWhen doing workshops on APEST, I often jokingly say, “The Greek words Paul uses here for each one of us are fascinating. They literally mean…[long pause]…EACH ONE OF US.. [long pause]…” There’s normally a few chuckles, but my point is that Paul is not using complex or cryptic language here. It’s quite simple, actually.\\n\\nBut for those who like to get a little geeky on the words, this phrase “each one of us” is made up of three Greek words. The first is the word ἑκάστῳ (hekasto) which means “each” or “every”. The second word is εἷς (heis), meaning “one”. The third word is ἡμῶν (hemon) meaning “us”. There are plenty of words in the Greek language that Paul could have used if he wanted to convey the idea of a few, or some, many, or a lot but ἑκάστῳ εἷς ἡμῶν ain’t it. When he said each one of us he implicated each and every person in the church (including himself!).\\n\\nBut for those who like to get a little geeky on the words, this phrase “each one of us” is made up of three Greek words. The first is the word ἑκάστῳ (hekasto) which means “each” or “every”. The second word is εἷς (heis), meaning “one”. The third word is ἡμῶν (hemon) meaning “us”. There are plenty of words in the Greek language that Paul could have used if he wanted to convey the idea of a few, or some, many, or a lot but ἑκάστῳ εἷς ἡμῶν ain’t it. When he said each one of us he implicated each and every person in the church (including himself!).\\n\\nThis grace is not given to a few for the many. It is given by the One to All.\\n\\nIn the course of my discussions with various leaders, I have found it helpful to show how the word “each” ἑκάστῳ (hekasto) in 4:7 is used elsewhere in Ephesians to include each and every person in the church. The most obvious example is just a few verses up in Ephesians 4:25 where Paul says,\\n\\nThe Greek word translated as “each one” in 4:25 is ἕκαστος (hekastos) and comes from the same word used for “each” in 4:7. I say this with tongue in cheek, but does anyone honestly think when Paul said “each” in 4:25 he only had a smaller group of leaders in mind? Is the command to speak truth only applicable to leaders? Is it only leaders who are “members of one another”? The obvious answer is: of course not. Paul uses ἕκαστος because he wants each and every person in the church to stop lying and speak truth to one another.\\n\\nThe grace given by Christ in 4:7 is not given to a few, anymore than the command to speak truth to one another in 4:25 is given to a few. The grace given by Christ in 4:7 is given to each and every person in the church, and this makes all the difference in how we interpret what Paul has to say about APEST in the rest of Ephesians 4. In fact, as we will see in futre posts, it’s the only way to make sense of what Paul says in the rest of the chapter.\\n\\nIf you want to explore how you can identify these APEST giftings in those around you, and create space for them to reach their potential, let’s connect for a conversation. Just click the Let's Talk button below.</p>
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