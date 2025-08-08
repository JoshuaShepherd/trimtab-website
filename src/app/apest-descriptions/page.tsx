import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Compass, 
  Lightbulb, 
  MessageCircle, 
  Heart, 
  Shield,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "APEST Descriptions - Understanding the Five Ministry Gifts",
  description: "Discover the five APEST ministry gifts: Apostles, Prophets, Evangelists, Shepherds, and Teachers. Learn about each gift and how they work together to build the church."
}

export default function APESTDescriptions() {
  const apestGifts = [
    {
      icon: Compass,
      title: "Apostles",
      subtitle: "Sent Ones",
      description: "Pioneer new territories, establish foundations, and extend the kingdom into new contexts.",
      characteristics: [
        "Start new initiatives",
        "Cross cultural barriers", 
        "Build networks",
        "Think strategically"
      ],
      href: "/apostle-description"
    },
    {
      icon: Lightbulb,
      title: "Prophets",
      subtitle: "Truth Tellers",
      description: "Discern God's heart, speak truth, and call people to alignment with divine purposes.",
      characteristics: [
        "Discern spiritual realities",
        "Speak with conviction",
        "Challenge status quo",
        "Call to righteousness"
      ],
      href: "/prophet-description"
    },
    {
      icon: MessageCircle,
      title: "Evangelists",
      subtitle: "Good News Sharers",
      description: "Share the gospel naturally, build bridges with outsiders, and help people encounter Jesus.",
      characteristics: [
        "Share faith naturally",
        "Connect with outsiders",
        "Build relationships",
        "Communicate clearly"
      ],
      href: "/evangelist-description"
    },
    {
      icon: Heart,
      title: "Shepherds",
      subtitle: "Soul Carers",
      description: "Care for people's souls, provide protection and nurturing, and create safe spaces for growth.",
      characteristics: [
        "Care deeply for people",
        "Provide protection",
        "Nurture growth",
        "Create community"
      ],
      href: "/shepherd-description"
    },
    {
      icon: Target,
      title: "Teachers",
      subtitle: "Truth Builders",
      description: "Help people understand truth, build knowledge systematically, and equip others to grow.",
      characteristics: [
        "Explain complex ideas",
        "Build understanding",
        "Develop curriculum",
        "Equip others"
      ],
      href: "/teacher-description"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Five-fold Ministry
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            APEST Descriptions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on Ephesians 4:11-13, the APEST gifts are given to equip the saints 
            and build up the body of Christ until we all reach unity and maturity.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">What is APEST?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                APEST stands for the five ministry gifts mentioned in Ephesians 4:11: 
                <strong> Apostles, Prophets, Evangelists, Shepherds, and Teachers</strong>. 
                These gifts work together to help the church mature and accomplish its mission.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Gifted by Christ</h4>
                  <p className="text-gray-600">Each gift is given by Jesus himself</p>
                </div>
                <div className="text-center">
                  <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">For Equipping</h4>
                  <p className="text-gray-600">To prepare God's people for service</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Until Maturity</h4>
                  <p className="text-gray-600">To help us become like Christ</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Five APEST Gifts</h2>
          <div className="space-y-8">
            {apestGifts.map((gift, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <gift.icon className="w-16 h-16 text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{gift.title}</CardTitle>
                        <Badge variant="secondary">{gift.subtitle}</Badge>
                      </div>
                      <p className="text-gray-600 text-lg mb-4">{gift.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Characteristics:</h4>
                      <ul className="space-y-2">
                        {gift.characteristics.map((characteristic, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {characteristic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-end justify-end">
                      <Button asChild>
                        <Link href={gift.href}>
                          Learn More About {gift.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">How APEST Gifts Work Together</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700">
                  Each APEST gift brings unique strengths that complement the others. 
                  Together, they create a complete ministry ecosystem.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Outward-Focused Gifts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-blue-600" />
                      <strong>Apostles</strong> - Extend the kingdom
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <strong>Evangelists</strong> - Share the good news
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Inward-Focused Gifts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-600" />
                      <strong>Shepherds</strong> - Care for the community
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-600" />
                      <strong>Teachers</strong> - Build understanding
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Bridging Gift</h3>
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <Lightbulb className="w-4 h-4 text-yellow-600" />
                  <strong>Prophets</strong> - Connect heaven and earth, truth and love
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Discover Your APEST Gift?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take our assessment to identify your primary and secondary APEST gifts, 
            then explore courses designed to help you develop and use them effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/apest-quiz">
                Take the APEST Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/courses">
                Explore Courses
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}