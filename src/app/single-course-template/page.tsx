import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Single Course Template",
  description: "Ever feel like “apostolic” sounds too bold, too intense, or just not “you”? Maybe the idea of [name 4 skills, possibly: seeing the big picture, recognizing oppo"
}

export default function SingleCourseTemplate() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Single Course Template"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Ever feel like “apostolic” sounds too bold, too intense, or just not “you”? Maybe the idea of [name 4 skills, possibly: seeing the big picture, recognizing opportunities, and casting vision] , doesn't seem relevant to your life. Well, you're not alone. A lot of people feel this way.\\n\\nBut here's the thing: apostolic skills are not just for visionary leaders—they’re for anyone who wants to live with a stronger sense of purpose and influence, no matter what their personality or gifting is. This course, led by experienced coach Tim Catchim, is designed to help average, everyday people explore entry level apostolic skills in a practical, approachable way, even if you’ve never considered yourself “apostolic”.\\n\\nThrough this course, you’ll realize that seeing the big picture, recognizing opportunities, and casting a vision aren’t just lofty ideas. They’re skills anyone can learn and use to create positive change in their daily life, family, church, or community. With a hands-on, step-by-step approach, you’ll explore these skills in a way that makes sense for you—addressing any doubts or insecurities you may have along the way.\\n\\nDiscover the five essential parts of Ephesians 4:1-16 and how they all buil up to one big idea.\\n\\nGod chooses one family out of the scattering of Babylon. Study Genesis 11-14 as Abraham faces his first tests as God's chosen human partner.\\n\\nThe Abraham story zooms in on God's promise to make Abraham the father of many nations. Will Abraham trust God? See how Abraham faces his test.\\n\\nIn the culmination of the Abraham and Lot drama, Abraham intercedes for Lot in the face of looming judgment on Sodom and Gomorrah. Study these crucial chapters.\\n\\nAfter you complete this full class, you will be able to understand and communicate the following:\\n\\nTim Catchim is a missional church leader, author, and consultant with over two decades of experience in movemental and missional church planting. He co-authored the book The Permanent Revolution and focuses on APEST (Apostle, Prophet, Evangelist, Shepherd, Teacher) ministry models as outlined in Ephesians 4. Tim is dedicated to helping churches rediscover the fivefold ministry to foster leadership and church health. He currently consults with churches across the country, providing insights into movement-based strategies for engaging culture and discipleship.\\n\\nYou can now access the latest Classroom design and features on the device of your choice: mobile phone, tablet, laptop, or desktop computer! All of your future session progress, notes, reflections, and quizzes will be saved to your account and accessible across all platforms. If you had previous progress or notes on Classroom, your data will be synced by June 14, 2024.\\n\\nFeel free to reach out to us and we will get back to you as soon as possible!</p>
          </div>
        </div>
      </article>
    </div>
  )
}