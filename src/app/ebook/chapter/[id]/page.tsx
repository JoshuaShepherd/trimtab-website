import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react"
import { notFound } from 'next/navigation'

interface ChapterPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Chapter ${id} - APEST Ebook`,
    description: `Read Chapter ${id} of the comprehensive APEST ministry guide.`
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id: chapterId } = await params

  // For now, we'll show a placeholder since we don't have actual chapter content
  // In a real implementation, you would fetch chapter content based on the ID
  
  if (!chapterId || isNaN(Number(chapterId))) {
    notFound()
  }

  const chapterNumber = Number(chapterId)
  
  // Sample chapter data - in a real app this would come from a database or CMS
  const chapterData = {
    title: `Chapter ${chapterNumber}: Understanding APEST Ministry`,
    content: `This is the content for Chapter ${chapterNumber}. In a full implementation, 
    this would contain the actual chapter text, which would be fetched from a content 
    management system or database based on the chapter ID.`,
    readTime: "15 min read"
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/ebook">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Ebook
            </Link>
          </Button>
          
          <header className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              Chapter {chapterNumber}
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {chapterData.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{chapterData.readTime}</span>
              </div>
            </div>
          </header>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {chapterData.content}
              </p>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Chapter Content Coming Soon
                </h3>
                <p className="text-blue-800">
                  This chapter is currently being developed. The full APEST ebook will contain 
                  comprehensive content about the fivefold ministry gifts, practical applications, 
                  and real-world examples.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <div>
            {chapterNumber > 1 && (
              <Button variant="outline" asChild>
                <Link href={`/ebook/chapter/${chapterNumber - 1}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Chapter
                </Link>
              </Button>
            )}
          </div>
          
          <div>
            <Button asChild>
              <Link href={`/ebook/chapter/${chapterNumber + 1}`}>
                Next Chapter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
