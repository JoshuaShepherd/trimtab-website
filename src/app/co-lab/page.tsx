import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Video,
  BookOpen,
  Target
} from "lucide-react"

export const metadata: Metadata = {
  title: "Co-Lab - Collaborative APEST Learning Community",
  description: "Join our collaborative environment for APEST learning with expert-led sessions, resources, and a supportive community for just $14.99/month."
}

export default function CoLab() {
  const features = [
    {
      icon: Users,
      title: "Expert-Led Sessions",
      description: "Tim Catchim leads the majority of sessions with occasional guest experts sharing their specialized knowledge."
    },
    {
      icon: Calendar,
      title: "Regular Meetings",
      description: "Consistent schedule of collaborative learning sessions focused on practical APEST development."
    },
    {
      icon: MessageCircle,
      title: "Community Discussion",
      description: "Engage with fellow APEST practitioners in meaningful discussions and knowledge sharing."
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access valuable resources, materials, and insights to support your APEST journey."
    }
  ];

  const benefits = [
    "Expert-led APEST development sessions",
    "Guest presentations from APEST specialists", 
    "Collaborative learning environment",
    "Access to exclusive resources and materials",
    "Supportive community network",
    "Monthly investment of just $14.99",
    "Flexible participation schedule",
    "Practical application focus"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Collaborative Learning
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Co-Lab
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Collaborative Environment for APEST Learning
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join the APEST Learning Community</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Tim will lead the majority of the Co-Lab sessions. However, occasionally we will create 
                space for other APEST practitioners to make presentations or facilitate discussions 
                around key areas of their expertise to enrich the Co-Lab experience.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <DollarSign className="w-5 h-5" />
                <span className="font-semibold">Only $14.99/month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You'll Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Join Co-Lab?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Joining the Co-Lab community is an investment in your growth as an APEST practitioner. 
                This allows us to provide you with valuable resources, expert-led sessions, and a 
                supportive network dedicated to your development.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Card className="bg-white border-2 border-blue-200">
                <CardHeader>
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle className="text-2xl">Monthly Membership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">$14.99</div>
                    <div className="text-gray-600">per month</div>
                  </div>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Expert-led sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Community access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Resource library</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Practical application</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full">
                    Join Co-Lab
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our collaborative learning community and start this transformative journey together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Join Co-Lab Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
