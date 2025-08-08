import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Evangelist Courses",
  description: "MODAL HERE?\\n\\nQuestions about our APEST Courses."
}

export default function EvangelistCourses() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Evangelist Courses"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>MODAL HERE?\\n\\nQuestions about our APEST Courses.</p>
          </div>
        </div>
      </article>
    </div>
  )
}