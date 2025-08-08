import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "APEST: Rated &#8220;E&#8221; for Everyone Part 3",
  description: "The best way to answer this question is to let the text speak for itself. Our next text is Ephesians 4:8, which says:\\n\\nWhile the Greek language has specific w"
}

export default function ApestRatedEForEveryonePart3() {
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
            "APEST: Rated &#8220;E&#8221; for Everyone Part 3"
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2022-06-23T04:07:00">
              June 23, 2022
            </time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The best way to answer this question is to let the text speak for itself. Our next text is Ephesians 4:8, which says:\\n\\nWhile the Greek language has specific words to differentiate between the genders of male and female (or husband and wife), the word translated as “man” in this passage does not use either of those terms. Instead, it uses the the word anthropos. This word, when used in the plural (as it is in this verse) is gender inclusive. In other words, it includes both male and female, and refers to humans in general.\\n\\nIt’s not by accident that Paul quotes a passage from the Old Testament that talks about “gifts” being “given” by Christ to “human beings.” As we noted in our previous post, the “grace” that Christ gives to each one of us in 4:7 cuts across all categories, whether they be Jew-Gentile, circumcised-uncircumcised, male-female, husband-wife, mature-immature, leader-follower etc.\\n\\nIn 4:8 Paul continues this train of thought by citing an Old Testament passage that speaks of gifts being given to human beings after a victory in battle. This giving of gifts to the human beings was a common thing to do in antiquity after a military defeated an enemy. The victors would enter the camp, village, or city, of those they had just conquered and take their resources as gifts to distribute to the people back in their home land.\\n\\nThis giving of gifts was typically done symbolically during a victory parade where money, food, and valuable objects were thrown to the people lining up to watch the army celebrate their victory. The rest of the resources were distributed to the people after the parade was over to ensure each person could participate in the outcome of that military victory.\\n\\nPaul sees Christ’s ascension out of the realm of the dead, and up above the highest of the heavens, as a complete and total victory over death and demonic forces. But that victory is not just accessible to Christ. APEST makes it possible for each one of us to participate in the outcome of that victory. He does that by empowering each one of us to function in his gifts of apostle, prophet, evangelist, shepherd, and teacher. These gifts, in turn, lead us to participate in Christ’s upward movement from the lowest of lows to the highest of highs, growing and maturing us up into the head – who is Christ (4:15-16).\\n\\nPaul sees the entire body of Christ – men and women – as receiving these APEST gifts. And as challenging as this may be for some complementarians, that means Christ has gifted both men and women to be apostles. In fact, Paul actually mentions a female apostle named Junia in Romans 16:7\\n\\n(see these excellent resources from Marg Mowczko on Junia the female apostle). We also see Luke presenting Priscilla, the wife of Aquila, as the primary teacher of Apollos in Acts 18:24-28 (see this excellent resource on Priscilla from Mowczko).\\n\\nRegardless of how one interprets the passages outlining “women’s role” in the church (think 1 Corinthians 14 and 1 Timothy 2), the fact that APEST has been given by Christ to both women and men has real implications for how we approach ministry and leadership in the church. For example, can anyone imagine a woman gifted by Christ as an apostle exercising her apostolic gifting without simultaneously exercising leadership of other men? Exactly how would that work? Especially since Paul models for us a developmental phase in new churches where the apostle plays a, if not the, primary role of leadership in that new church? And exactly how would a mature woman apostle equip other immature male apostles without exercising leadership of those immature male apostles? The thing I love about APEST is that it forces us to wrestle with these kinds of difficult questions, as well as a host of other questions that need to be wrestled with.\\n\\nPaul’s vision of a healthy church in Ephesians 4 is each and every member of the body – male and female – exercising the giftings that Christ himself has given to them. And if each and every member of the body is not being empowered to function in their APEST giftings, maybe we should ask ourselves, “Why not?” After all, if Christ has given each one of us as a gift to the church, who are we to refuse the gifts that Christ has given?\\n\\nHow does seeing APEST as being given to both men and women change the way you see women and men in ministry and leadership?\\n\\nWhat would change if everyone gifted by Christ as an apostle in your church – women and men – knew they were gifted by Christ as apostles? (Think about this with all the APEST giftings)\\n\\nHow does seeing APEST as a way of participating in the victory of Christ change the way you see the purpose of those gifts?</p>
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