import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Heart, BookOpen, Target, Star, Award, MessageCircle, Compass, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "About Tim Catchim & TrimTab",
  description: "Discover the heart behind APEST ministry development and our mission to equip leaders in the five-fold ministry gifts."
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Tim & TrimTab
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering leaders to discover, develop, and deploy their unique APEST calling 
            in the five-fold ministry gifts of Apostle, Prophet, Evangelist, Shepherd, and Teacher.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At TrimTab, we believe that every believer has been uniquely gifted by God with one or more 
              of the five-fold ministry gifts outlined in Ephesians 4:11-16. Our mission is to help you 
              discover your APEST calling, develop your gifts, and deploy them effectively in your context.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The name "TrimTab" comes from the small rudder that moves the big rudder on a ship. 
              We believe that understanding and operating in your APEST gifts can be the small change 
              that creates massive transformation in your life, ministry, and organization.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/apest-quiz">Take the APEST Quiz</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Tim</Link>
              </Button>
            </div>
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                To see a generation of leaders who understand their unique APEST calling and 
                are equipped to build healthy, thriving ministry cultures that reflect the 
                full spectrum of Christ's gifts to the Church.
              </p>
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600">
                "Until we all reach unity in the faith and in the knowledge of the Son of God and become mature, 
                attaining to the whole measure of the fullness of Christ." - Ephesians 4:13
              </blockquote>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Tim Catchim</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Author & Researcher
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Tim is a respected author and researcher in the field of APEST ministry, 
                  with extensive experience in theological education and practical ministry application.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Trainer & Coach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  With years of experience coaching leaders and teams, Tim brings practical 
                  wisdom and proven methodologies to APEST development and implementation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  Ministry Leader
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Tim's heart for the Church drives his passion to see every believer 
                  discover and develop their unique contribution to the body of Christ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The APEST Framework</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Based on Ephesians 4:11-16, APEST represents the five ministry gifts Christ gave to the Church. 
            Each gift brings unique perspectives, skills, and contributions to the body of Christ.
          </p>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Compass className="w-6 h-6 text-blue-600" />
                </div>
                <Badge variant="outline" className="mx-auto mb-2">A</Badge>
                <CardTitle className="text-lg">Apostle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Pioneering new frontiers and establishing foundations
                </p>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href="/apostle-description">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <Badge variant="outline" className="mx-auto mb-2">P</Badge>
                <CardTitle className="text-lg">Prophet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Discerning God's will and calling people to faithfulness
                </p>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href="/prophet-description">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <Badge variant="outline" className="mx-auto mb-2">E</Badge>
                <CardTitle className="text-lg">Evangelist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Sharing the Gospel and connecting with seekers
                </p>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href="/evangelist-description">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <Badge variant="outline" className="mx-auto mb-2">S</Badge>
                <CardTitle className="text-lg">Shepherd</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Caring for people and fostering community
                </p>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href="/shepherd-description">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-yellow-600" />
                </div>
                <Badge variant="outline" className="mx-auto mb-2">T</Badge>
                <CardTitle className="text-lg">Teacher</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explaining truth and training in wisdom
                </p>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href="/teacher-description">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Discover Your APEST Calling?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Join thousands of leaders who have already begun their APEST journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              <Star className="w-4 h-4 mr-1" />
              500+ Leaders Equipped
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Award className="w-4 h-4 mr-1" />
              50+ Organizations Transformed
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-4 h-4 mr-1" />
              20+ Countries Reached
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/apest-quiz">Take the APEST Quiz</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/coaching">Explore Coaching</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}