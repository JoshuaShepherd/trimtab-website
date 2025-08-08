import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Courses",
  description: "Take Your APEST Skills to the Next Level\\n\\nIdentify your unique APEST giftings profile and how it shapes the way you serve and interact with others\\n\\nGain pra"
}

export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Courses"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Take Your APEST Skills to the Next Level\\n\\nIdentify your unique APEST giftings profile and how it shapes the way you serve and interact with others\\n\\nGain practical skills in each APEST gifting that can be applied in every area of your life and ministry\\n\\nConnect with others on the same path to learn, share insights, and support one another in your APEST journey\\n\\nCreate customized developmental pathways that foster Christ-like maturity in both individuals and groups\\n\\nOur courses are organized around 6 developmental pathways – APEST Foundations, Apostle, Prophet, Evangelist, Shepherd, and Teacher. Each pathwayis designed to help you grow in a specific area of Christ-like maturity through the fivefold giftings of APEST. Choose a pathway below, take a course, and continue developing from there.\\n\\nCourses that help you develop a strong Scriptural foundation in APEST\\n\\nCourses that help you develop apostolic skills and sensibilities\\n\\nCourses that help you develop prophetic skills and sensibilities\\n\\nCourses that help you develop evangelistic skills and sensibilities\\n\\nCourses that help you develop shepherding skills and sensibilities\\n\\nCourses that help you develop teaching skills and sensibilities</p>
          </div>
        </div>
      </article>
    </div>
  )
}