import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Lightbulb, 
  Eye, 
  Heart, 
  CheckCircle,
  Palette,
  Megaphone
} from "lucide-react"

export const metadata: Metadata = {
  title: "Prophet - APEST Ministry Description",
  description: "The word prophet literally means 'to speak before.' Prophets continue the ministry of Christ by participating in his work of either revealing who God is or reforming communities around his heart."
}

export default function ProphetDescription() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-purple-600" />
            </div>
          </div>
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            P - Prophet
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Prophet Ministry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "To speak before" - Prophets continue the ministry of Christ by participating 
            in his work of either revealing who God is or reforming communities around his heart.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Heart of Prophetic Ministry</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Prophets want to see the presence and power of God revealed in every situation. 
                They are quick to recognize the gap between "what is" and "what should be" and 
                often host that tension within their own bodies.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Spiritual Sight</h4>
                  <p className="text-sm text-gray-600">Seeing situations from God's perspective</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Reform Communities</h4>
                  <p className="text-sm text-gray-600">Calling people to align with God's heart</p>
                </div>
                <div className="text-center">
                  <Palette className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Creative Expression</h4>
                  <p className="text-sm text-gray-600">Using various methods to communicate truth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Embrace Your Prophetic Calling</h2>
          <p className="text-lg text-purple-100 mb-6">
            God has given you eyes to see his heart and a voice to call his people to greater 
            integrity and justice. The Church needs your prophetic perspective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apest-quiz">Confirm Your APEST Profile</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link href="/prophet-courses">Explore Prophet Courses</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
