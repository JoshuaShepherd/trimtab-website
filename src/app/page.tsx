import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Puzzle, Users, Wrench, Eye, Layers, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TrimTab - APEST Coaching & Development',
  description: "Discover and develop your unique APEST giftings through our assessments, courses, coaching, and consulting services. Rise up into the fullness of Christ."
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trimtab-gray-1/50 to-trimtab-blue-1/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-trimtab-blue-5 mb-6">
              Let's Rise Up into the <br />
              <span className="text-trimtab-blue-2">Fullness of Christ</span>
            </h1>
            <p className="text-xl text-trimtab-gray-3 mb-8 max-w-3xl mx-auto">
              We provide assessments, short courses, personalized coaching, strategic consults, 
              and collaborative environments for developing Christ-like maturity through the 
              fivefold giftings of APEST.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="trimtab-cta-gradient" asChild>
                <Link href="/apest-quiz">Take the APEST Quiz</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-2 hover:text-white" asChild>
                <Link href="/contact">Talk with Tim</Link>
              </Button>
            </div>
            
            {/* Showcase Link */}
            <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-trimtab-gray-2 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-trimtab-blue-2 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-trimtab-blue-5">Platform Showcase</h3>
              </div>
              <p className="text-trimtab-gray-3 text-center mb-4">
                Explore comprehensive mockups of APEST learning platforms and website layouts
              </p>
              <Button className="w-full trimtab-gradient" asChild>
                <Link href="/showcase">
                  <Layers className="w-4 h-4 mr-2" />
                  View All Mockups & Demos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center trimtab-card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-apest-apostle rounded-full flex items-center justify-center mx-auto mb-4">
                  <Puzzle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-trimtab-blue-5">Identify Your Unique Giftings</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="text-center trimtab-card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-apest-shepherd rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-trimtab-blue-5">Join Others on Their APEST Journey</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="text-center trimtab-card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-apest-teacher rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-trimtab-blue-5">Get Practical Tools to Be Effective</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-trimtab-gray-1/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-trimtab-blue-5 mb-6">
              We can grow in Christ-like maturity by developing the basic skills of each APEST gifting within us.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-trimtab-green flex-shrink-0 mt-1" />
                <p className="text-trimtab-gray-4">
                  Discover your unique APEST profile and how Christ has uniquely gifted you to serve
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-trimtab-green flex-shrink-0 mt-1" />
                <p className="text-trimtab-gray-4">
                  Explore your strengths and weaknesses and how they shape your approach to life, ministry, and leadership
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-trimtab-green flex-shrink-0 mt-1" />
                <p className="text-trimtab-gray-4">
                  Learn the basic skills of each APEST gifting, and practical exercises to develop those skills in individuals and groups
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-trimtab-green flex-shrink-0 mt-1" />
                <p className="text-trimtab-gray-4">
                  Find inspiration and encouragement with others who are growing in Christ-like maturity through the APEST giftings
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-trimtab-green flex-shrink-0 mt-1" />
                <p className="text-trimtab-gray-4">
                  Receive expert guidance and relational support for introducing and applying APEST in your unique context
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-trimtab-green flex-shrink-0 mt-1" />
                <p className="text-trimtab-gray-4">
                  Get exclusive APEST content for designing and developing equipping pathways for each APEST gifting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-trimtab-blue-2">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Are you reaching your full potential in Christ?
            </h2>
            <p className="text-xl text-trimtab-blue-1/90 mb-8">
              Everyone is at a different place in their APEST journey. Let's connect for a 
              conversation about where you are, and where you would like to go.
            </p>
            <Button size="lg" className="trimtab-cta-gradient" asChild>
              <Link href="/contact">Schedule a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}