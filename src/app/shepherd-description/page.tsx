import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Heart, 
  Shield, 
  Users, 
  Home, 
  CheckCircle,
  ArrowRight,
  Handshake,
  LifeBuoy,
  UserCheck,
  HeartHandshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "Shepherd - APEST Ministry Description",
  description: "The word shepherd literally means 'protect.' Shepherds continue the ministry of Christ by participating in his work of protecting people from harm and providing for their needs."
}

export default function ShepherdDescription() {
  const shepherdCharacteristics = [
    {
      category: "Core Focus",
      traits: [
        "Protecting people from harm",
        "Providing for community needs",
        "Noticing when people are missing",
        "Nurturing people back to health"
      ]
    },
    {
      category: "Ministry Approach",
      traits: [
        "Investing in relationships",
        "Building strong community bonds",
        "Offering sacrificial care",
        "Creating safe environments"
      ]
    },
    {
      category: "Strengths",
      traits: [
        "Long-term loyalty and commitment",
        "Sensitivity to people's needs",
        "Natural caregiving abilities",
        "Community building skills"
      ]
    },
    {
      category: "Growth Areas",
      traits: [
        "Balancing care with empowerment",
        "Avoiding overprotection",
        "Delegating care responsibilities",
        "Setting healthy boundaries"
      ]
    }
  ];

  const shepherdSkills = [
    {
      skill: "Pastoral Care",
      description: "Providing emotional, spiritual, and practical support to individuals and families",
      icon: Heart
    },
    {
      skill: "Community Building",
      description: "Creating environments where people feel safe, connected, and valued",
      icon: Users
    },
    {
      skill: "Crisis Response",
      description: "Recognizing when people are in danger and providing immediate support",
      icon: LifeBuoy
    },
    {
      skill: "Resource Provision",
      description: "Ensuring people have what they need for physical and spiritual wellbeing",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-red-600" />
            </div>
          </div>
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            S - Shepherd
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Shepherd Ministry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "To protect" - Shepherds continue the ministry of Christ by participating 
            in his work of protecting people from harm and providing for their needs.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Heart of Shepherding Ministry</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                The heart of a shepherd is to protect people from both internal and external threats 
                of danger. They notice when people are missing from the group and are naturally 
                concerned about where they are and what kind of danger they might be in.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Protection</h4>
                  <p className="text-sm text-gray-600">Shielding people from harm and danger</p>
                </div>
                <div className="text-center">
                  <HeartHandshake className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Provision</h4>
                  <p className="text-sm text-gray-600">Meeting physical and spiritual needs</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Community Focus</h4>
                  <p className="text-sm text-gray-600">Building strong relational bonds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shepherd Characteristics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shepherdCharacteristics.map((category, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Shepherding Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {shepherdSkills.map((skill, index) => (
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
              <CardTitle className="text-2xl text-center">How Shepherds Serve the Body of Christ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-600" />
                    Sacrificial Love
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Shepherds will remain loyal to a group for a long time, giving sacrificially 
                    of their time and money to make sure it stays up and running. They sense when 
                    people in the group are hurting and have a natural desire to nurture them back to health.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-600" />
                    Communal Investment
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Overall, shepherds have a communal focus to their ministry—they want people 
                    and the group to receive more investment in relationship and resources. They 
                    create environments where people feel safe and cared for.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Developing Your Shepherding Gift</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Cultivate Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Develop your ability to recognize needs and provide appropriate 
                  care while maintaining healthy boundaries.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/shepherd-courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Build Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Learn to create environments where people feel safe, 
                  connected, and able to grow in their faith.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/coaching">Get Coaching</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Provide Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Develop wisdom in protecting people while empowering 
                  them to grow and take responsibility.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources">Find Resources</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Embrace Your Shepherding Calling</h2>
          <p className="text-lg text-red-100 mb-6">
            God has given you a heart to care for his people and build strong communities. 
            The Church needs your shepherding love and protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apest-quiz">Confirm Your APEST Profile</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-red-600" asChild>
              <Link href="/shepherd-courses">Explore Shepherd Courses</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}