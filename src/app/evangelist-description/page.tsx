import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  MessageCircle, 
  UserPlus, 
  Star, 
  Smile, 
  CheckCircle,
  ArrowRight,
  Megaphone,
  Users,
  Globe,
  Handshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "Evangelist - APEST Ministry Description",
  description: "The word evangelist literally means 'messenger of good.' Evangelists continue the ministry of Christ by participating in his work of either promoting the message of the good news or persuading people to respond to it."
}

export default function EvangelistDescription() {
  const evangelistCharacteristics = [
    {
      category: "Core Focus",
      traits: [
        "Promoting the good news message",
        "Persuading people to respond",
        "Building relational connections",
        "Inviting outsiders to become insiders"
      ]
    },
    {
      category: "Ministry Approach",
      traits: [
        "Natural storytelling abilities",
        "Relational entrepreneurship",
        "Attractional ministry style",
        "Building on existing foundations"
      ]
    },
    {
      category: "Strengths",
      traits: [
        "Eternal optimism and positivity",
        "Ability to see potential in everything",
        "Never meeting a stranger",
        "Sensing what could go wrong in encounters"
      ]
    },
    {
      category: "Growth Areas",
      traits: [
        "Following through on commitments",
        "Deepening relationships beyond initial contact",
        "Learning when not to promote something",
        "Developing patience with slow responders"
      ]
    }
  ];

  const evangelistSkills = [
    {
      skill: "Gospel Communication",
      description: "Effectively sharing the good news in ways that connect with different audiences",
      icon: MessageCircle
    },
    {
      skill: "Relationship Building",
      description: "Quickly establishing rapport and meaningful connections with new people",
      icon: Handshake
    },
    {
      skill: "Persuasive Invitation",
      description: "Motivating people to take positive action and embrace new opportunities",
      icon: UserPlus
    },
    {
      skill: "Cultural Bridge-Building",
      description: "Connecting with outsiders and helping them feel welcomed into community",
      icon: Globe
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            E - Evangelist
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Evangelist Ministry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Messenger of good" - Evangelists continue the ministry of Christ by participating 
            in his work of promoting the good news and persuading people to respond to it.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Heart of Evangelistic Ministry</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                While apostles are organizational entrepreneurs, evangelists are primarily relational 
                entrepreneurs. They are natural storytellers and will promote almost anything—if they 
                believe in it. They are the eternal optimists who see the potential for good in everything.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Megaphone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Promote Good News</h4>
                  <p className="text-sm text-gray-600">Sharing the message of God's kingdom</p>
                </div>
                <div className="text-center">
                  <UserPlus className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Invite & Persuade</h4>
                  <p className="text-sm text-gray-600">Motivating people to respond positively</p>
                </div>
                <div className="text-center">
                  <Smile className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Attractional Quality</h4>
                  <p className="text-sm text-gray-600">Drawing outsiders to become insiders</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Evangelist Characteristics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evangelistCharacteristics.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.traits.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Evangelistic Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {evangelistSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-green-600" />
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
              <CardTitle className="text-2xl text-center">How Evangelists Serve the Body of Christ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Relational Entrepreneurship
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Evangelists never meet a stranger. They enjoy meeting new people and inviting 
                    them into new opportunities. They are drawn to first-time encounters with people 
                    outside the group and have a sense for what could potentially make that encounter go bad.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-green-600" />
                    Attractional Ministry
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Overall, evangelists have an attractional quality to their ministry—they want 
                    to see more influence on "outsiders" becoming "insiders." They build on existing 
                    foundations and create bridges between communities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Developing Your Evangelistic Gift</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Master Your Message</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Develop clear, compelling ways to share the gospel that 
                  connect with different audiences and contexts.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/evangelist-courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Handshake className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Build Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Learn to develop deeper relationships beyond initial 
                  connections and follow through on commitments.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/coaching">Get Coaching</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Bridge Cultures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Develop skills to connect across cultural boundaries 
                  and help outsiders feel welcomed into community.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources">Find Resources</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Embrace Your Evangelistic Calling</h2>
          <p className="text-lg text-green-100 mb-6">
            God has given you the ability to share his good news and connect with people who 
            need to hear it. The Church needs your optimism and relational gifts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apest-quiz">Confirm Your APEST Profile</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link href="/evangelist-courses">Explore Evangelist Courses</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
