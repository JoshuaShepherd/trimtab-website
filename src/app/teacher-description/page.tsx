import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Teacher &#8211; Description",
  description: "The word teacher literally means “to separate and point out.” Teachers continue the ministry of Christ by participating in his work of either explaining truth o"
}

export default function TeacherDescription() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "Teacher &#8211; Description"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The word teacher literally means “to separate and point out.” Teachers continue the ministry of Christ by participating in his work of either explaining truth or training people how to live it out. They take topics and tasks and break them down into smaller parts, showing us what they mean and how they work together. They have a natural love for wisdom and knowledge and find great pleasure when they can help others either come to know what they know or do what they do. Teachers are mostly drawn to already existing information like history, best practices, or training materials. Overall, they have an instructional focus to their ministry — they want people to have more insight into revelation and reality.</p>
          </div>
        </div>
      </article>
    </div>
  )
}