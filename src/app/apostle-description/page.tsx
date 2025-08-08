import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Rocket, 
  Users, 
  Target, 
  Building, 
  CheckCircle,
  ArrowRight,
  Compass,
  Map,
  Trophy,
  Zap
} from "lucide-react"

export const metadata: Metadata = {
  title: "Apostle - APEST Ministry Description",
  description: "The word apostle literally means 'separate and send.' Apostles continue the ministry of Christ by participating in his work of starting new expressions of the church or scaling existing churches into new contexts."
}

export default function ApostleDescription() {
  const apostleCharacteristics = [
    {
      category: "Core Focus",
      traits: [
        "Starting new church expressions",
        "Scaling existing churches",
        "Pioneering new ventures",
        "Cultural architecture"
      ]
    },
    {
      category: "Leadership Style",
      traits: [
        "Organizational entrepreneurship",
        "Systems and structure focus",
        "Leadership development",
        "Reproducible training systems"
      ]
    },
    {
      category: "Strengths",
      traits: [
        "Pioneering in impossible situations",
        "Recognizing leadership capacity",
        "Missional kingdom focus",
        "Breaking through barriers"
      ]
    },
    {
      category: "Growth Areas",
      traits: [
        "Patience with existing systems",
        "Maintaining established ministries",
        "Working within constraints",
        "Developing pastoral sensitivity"
      ]
    }
  ];

  const apostleSkills = [
    {
      skill: "Pioneering Leadership",
      description: "Starting new ministries and church expressions where none existed before",
      icon: Rocket
    },
    {
      skill: "Organizational Design",
      description: "Creating systems, structures, and cultures that support kingdom growth",
      icon: Building
    },
    {
      skill: "Leadership Development",
      description: "Recognizing and developing leadership capacity in others for multiplication",
      icon: Users
    },
    {
      skill: "Missional Strategy",
      description: "Focusing on kingdom expansion and reaching new people and places",
      icon: Target
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <Rocket className="w-10 h-10 text-red-600" />
            </div>
          </div>
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            A - Apostle
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Apostle Ministry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Separate and send" - Apostles continue the ministry of Christ by starting new 
            expressions of the church or scaling existing churches into new contexts.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Heart of Apostolic Ministry</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Apostles are entrepreneurs who have a natural desire and ability to pioneer new 
                ventures, even in what may seem like an impossible situation. They are cultural 
                architects drawn to organizational design, systems, and structure.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Compass className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Pioneer & Start</h4>
                  <p className="text-sm text-gray-600">Breaking new ground for the gospel</p>
                </div>
                <div className="text-center">
                  <Building className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Organize & Scale</h4>
                  <p className="text-sm text-gray-600">Building systems for multiplication</p>
                </div>
                <div className="text-center">
                  <Map className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Missional Focus</h4>
                  <p className="text-sm text-gray-600">Expanding kingdom influence</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apostle Characteristics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apostleCharacteristics.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.traits.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        {trait}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Apostolic Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {apostleSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{skill.skill}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">How Apostles Serve the Body of Christ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-600" />
                    Organizational Entrepreneurship
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Apostles intuitively recognize leadership capacity in others and tend to develop 
                    leadership training systems that are reproducible. They break through barriers 
                    that others see as insurmountable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-red-600" />
                    Kingdom Multiplication
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Overall, they have a missional focus to their ministry—they want to see more 
                    people and places impacted for the kingdom. They are natural church planters 
                    and movement catalysts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Developing Your Apostolic Gift</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Rocket className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Pioneer New Works</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Learn to start new ministries and church expressions 
                  with sustainable systems and structures.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/apostle-courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Develop Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Build reproducible systems for identifying and 
                  developing leadership capacity in others.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/coaching">Get Coaching</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Scale Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Learn to scale existing ministries into new contexts 
                  while maintaining kingdom focus.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources">Find Resources</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Embrace Your Apostolic Calling</h2>
          <p className="text-lg text-red-100 mb-6">
            God has given you the ability to pioneer new works and develop leaders for 
            kingdom multiplication. The Church needs your entrepreneurial vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apest-quiz">Confirm Your APEST Profile</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-600" asChild>
              <Link href="/apostle-courses">Explore Apostle Courses</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
