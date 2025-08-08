import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "My account",
  description: ""
}

export default function MyAccount2() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "My account"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            
          </div>
        </div>
      </article>
    </div>
  )
}