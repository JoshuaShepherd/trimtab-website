import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Lightbulb, 
  Target, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Calendar,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "APEST Consulting Services - Transform Your Organization",
  description: "Expert APEST consulting to help your organization discover, develop, and deploy the fivefold ministry gifts for maximum kingdom impact."
}

export default function ConsultingPage() {
  const consultingServices = [
    {
      title: "APEST Assessment & Analysis",
      description: "Comprehensive evaluation of your team's APEST profile and organizational culture",
      icon: Target,
      features: [
        "Team-wide APEST assessments",
        "Organizational culture analysis",
        "Gap identification and recommendations",
        "Custom development roadmap"
      ]
    },
    {
      title: "Leadership Development",
      description: "Equip leaders to recognize, develop, and deploy APEST gifts effectively",
      icon: TrendingUp,
      features: [
        "Leadership coaching sessions",
        "APEST-based team building",
        "Ministry deployment strategies",
        "Performance optimization"
      ]
    },
    {
      title: "Organizational Transformation",
      description: "Restructure systems and processes to align with APEST principles",
      icon: Users,
      features: [
        "Structural realignment",
        "Process optimization",
        "Culture transformation",
        "Sustainable change management"
      ]
    }
  ];

  const consultingProcess = [
    {
      step: 1,
      title: "Discovery",
      description: "We begin with a comprehensive assessment of your current state",
      icon: Lightbulb
    },
    {
      step: 2,
      title: "Design",
      description: "Create a customized APEST development plan for your organization",
      icon: Target
    },
    {
      step: 3,
      title: "Deploy",
      description: "Implement strategies with ongoing support and coaching",
      icon: TrendingUp
    },
    {
      step: 4,
      title: "Develop",
      description: "Continuous improvement and long-term transformation",
      icon: Award
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Professional Services
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            APEST Consulting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your organization by discovering, developing, and deploying 
            the fivefold ministry gifts for maximum kingdom impact.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why APEST Consulting Matters</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Most organizations operate below their full potential because they haven't aligned 
                their people with their God-given APEST gifts. Our consulting services help you 
                create a culture where every person can thrive in their calling.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Clarity</h4>
                  <p className="text-gray-600">Understand each person's unique contribution</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Growth</h4>
                  <p className="text-gray-600">Accelerate personal and organizational development</p>
                </div>
                <div className="text-center">
                  <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Unity</h4>
                  <p className="text-gray-600">Build cohesive teams that complement each other</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Consulting Services</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Consulting Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {consultingProcess.map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="mb-2">Step {phase.step}</Badge>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Churches & Ministries</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Leadership team development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Ministry structure optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Volunteer mobilization strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Discipleship pathway design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Organizations & Businesses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Team dynamics improvement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Leadership pipeline development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Organizational culture transformation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Performance optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Let's discover how APEST principles can unlock your team's full potential 
            and accelerate your mission impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Conversation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/coaching">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Discovery Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
