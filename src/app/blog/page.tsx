import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Blog | APEST Insights & Resources',
  description: 'Explore Tim Catchim\'s insights on APEST, spiritual gifts, leadership development, and growing in Christ-like maturity.'
}

const posts = [
  {
    "title": "APEST: The only Gifts Connected with the Gospel",
    "slug": "apest-the-only-gifts-connected-with-the-gospel",
    "excerpt": "This is part 3 (Part 1, 2) in the series APEST vs Spiritual Gifts: What’s the difference? While the APEST [&hellip;]",
    "date": "2024-09-05T18:48:23"
  },
  {
    "title": "The Definition of Prophet",
    "slug": "the-definition-of-prophet",
    "excerpt": "In this post we’ll look at the definition of the word prophet in the original language, and how it points us to [&hellip;]",
    "date": "2023-09-26T04:25:00"
  },
  {
    "title": "APEST: Rated &#8220;E&#8221; for Everyone Part 4",
    "slug": "apest-rated-e-for-everyone-part-4",
    "excerpt": "This is Part 4 (Parts 1, 2, 3) of a series of posts that seeks to answer the question, “Is APEST given to [&hellip;]",
    "date": "2022-12-07T03:32:00"
  },
  {
    "title": "The Backstory: Giants, Demons, Spiritual Warfare, and APEST",
    "slug": "the-backstory-giants-demons-spiritual-warfare-and-apest",
    "excerpt": "APEST is more than just a personality or gifting profile. It’s one of the strategic ways Christ empowers his church [&hellip;]",
    "date": "2022-08-19T03:44:00"
  },
  {
    "title": "Embracing the Prophetic",
    "slug": "embracing-the-prophetic",
    "excerpt": "This is a guest post by Shaun Grindle: APEST is widely used to help people understand themselves; the way they [&hellip;]",
    "date": "2022-08-19T03:39:00"
  },
  {
    "title": "APEST: Rated &#8220;E&#8221; for Everyone Part 3",
    "slug": "apest-rated-e-for-everyone-part-3",
    "excerpt": "This is Part 3 of a series of posts (Part 1, 2, 4) that seeks to answer the question, “Is APEST given to [&hellip;]",
    "date": "2022-06-23T04:07:00"
  },
  {
    "title": "APEST: Rated &#8220;E&#8221; for Everyone Part 2",
    "slug": "apest-rated-e-for-everyone-part-2",
    "excerpt": "This is Part 2 (Part 1, 3, 4) of a series of posts that seeks to answer the question, “Is APEST given [&hellip;]",
    "date": "2022-06-20T04:11:00"
  },
  {
    "title": "Where is APEST in the book of Acts?",
    "slug": "where-is-apest-in-the-book-of-acts",
    "excerpt": "A question I often get asked in our coaching groups is: where do we see APEST functioning in the book of Acts? [&hellip;]",
    "date": "2022-06-15T04:14:00"
  },
  {
    "title": "The Four Teachers",
    "slug": "the-four-teachers",
    "excerpt": "The word teacher means to separate and point out, but did you know there’s different kinds of teachers? For example, [&hellip;]",
    "date": "2022-05-12T04:26:00"
  },
  {
    "title": "The Four Shepherds",
    "slug": "the-four-shepherds",
    "excerpt": "",
    "date": "2022-03-14T04:28:00"
  },
  {
    "title": "The Four Apostles",
    "slug": "the-four-apostles",
    "excerpt": "The word apostle means one who is sent and scales, but did you know there’s different kinds of apostles? For [&hellip;]",
    "date": "2022-02-14T04:34:00"
  },
  {
    "title": "The Four Evangelists",
    "slug": "the-four-evangelists",
    "excerpt": "It’s true, “The evangelist’s best friend is the person they’ve never met.” But did you know not all evangelists are [&hellip;]",
    "date": "2022-02-07T04:37:00"
  },
  {
    "title": "APEST: Rated &#8220;E&#8221; for Everyone Part 1",
    "slug": "apest-rated-e-for-everyone-part-1",
    "excerpt": "As I walk with people through a process of applying APEST in their life, leadership, team, and organization, the one question that [&hellip;]",
    "date": "2022-02-02T04:39:00"
  },
  {
    "title": "The Four Prophets",
    "slug": "the-four-prophets",
    "excerpt": "The prophet is perhaps the most unique and complex of all the APEST giftings. So it probably won&#8217;t surprise you [&hellip;]",
    "date": "2022-01-31T04:41:00"
  },
  {
    "title": "APEST: The Only Gifts Given by Christ",
    "slug": "apest-the-only-gifts-given-by-christ",
    "excerpt": "This is part 2 (Parts 1, and 3) in the series – APEST vs Spiritual Gifts – What’s the Differnce? In our first post [&hellip;]",
    "date": "2021-09-30T04:45:00"
  },
  {
    "title": "APEST vs Spiritual Gifts &#8211; What&#8217;s the Difference?",
    "slug": "apest-vs-spiritual-gifts-whats-the-difference",
    "excerpt": "A common question we get about APEST is how they relate to the other gifts listed in the New Testament. [&hellip;]",
    "date": "2021-09-22T04:51:00"
  },
  {
    "title": "The Definition of Apostle&#8230;",
    "slug": "the-definition-of-apostle",
    "excerpt": "Let’s be honest, the word apostle is one of those “church words” that no one ever uses on the regular. [&hellip;]",
    "date": "2021-09-12T04:52:00"
  },
  {
    "title": "The  &#8220;other&#8221; Apostles",
    "slug": "the-other-apostles",
    "excerpt": "Try asking someone at your church, “What’s an apostle?”, and you’ll likely get a response something like this, “You mean, [&hellip;]",
    "date": "2021-08-31T04:55:00"
  }
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-trimtab-blue-4 mb-6">APEST Insights & Resources</h1>
        <p className="text-xl text-trimtab-gray-3 max-w-3xl mx-auto">
          Explore practical insights on APEST giftings, spiritual development, and growing 
          in Christ-like maturity through the fivefold ministry gifts.
        </p>
      </header>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {posts.map((post) => (
          <Card key={post.slug} className="group hover:shadow-lg transition-shadow border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="line-clamp-2">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-trimtab-blue-2 transition-colors text-trimtab-blue-4"
                >
                  {post.title}
                </Link>
              </CardTitle>
              {post.date && (
                <time className="text-sm text-trimtab-gray-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric'
                  })}
                </time>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-trimtab-gray-3 line-clamp-3 mb-4">{post.excerpt}</p>
              <Button variant="outline" size="sm" asChild className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                <Link href={`/blog/${post.slug}`}>
                  Read More
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <div className="bg-trimtab-blue-0 rounded-lg p-8 max-w-2xl mx-auto border border-trimtab-blue-1">
          <h3 className="text-2xl font-bold text-trimtab-blue-4 mb-4">Ready to Discover Your APEST Giftings?</h3>
          <p className="text-trimtab-gray-3 mb-6">
            Take our free APEST quiz to identify your primary gifting and get personalized next steps.
          </p>
          <Button size="lg" asChild className="trimtab-cta-gradient text-white">
            <Link href="/apest-quiz">Take the APEST Quiz</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}