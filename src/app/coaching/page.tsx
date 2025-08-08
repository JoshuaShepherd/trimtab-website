import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Zap, Clock, CheckCircle, Star, ArrowRight, Video, Calendar, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "APEST Coaching Programs",
  description: "Take the next step in your APEST journey with our personalized coaching tracks - Elevate, Apex, and Vanguard."
}

export default function Coaching() {
  const coachingTracks = [
    {
      name: "Elevate",
      subtitle: "For APEST Beginners",
      duration: "5 months",
      sessions: "20 weekly sessions",
      groupSize: "4-8 participants",
      price: "Contact for pricing",
      description: "Join others on their APEST journey for a five-month coaching experience that features five comprehensive modules designed to help you apply APEST paradigms and practices in your life, leadership, groups, and ministry.",
      features: [
        "Personal APEST discovery and development",
        "Weekly Zoom calls with expert feedback",
        "Practical application exercises",
        "APEST Project development",
        "Small group learning environment",
        "Personalized coaching from Tim",
        "Access to exclusive resources"
      ],
      icon: Users,
      color: "bg-blue-500"
    },
    {
      name: "Apex",
      subtitle: "Train-the-Trainer Program",
      duration: "10 months",
      sessions: "20 bi-weekly sessions",
      groupSize: "4-8 participants",
      price: "Contact for pricing",
      description: "Join other APEST practitioners on a ten-month train-the-trainer coaching experience that features five comprehensive modules to help you achieve mastery as an APEST trainer in theological, individual, group, team, and organizational development.",
      features: [
        "Advanced APEST training methodology",
        "Scenario-based learning experiences",
        "Master trainer certification pathway",
        "APEST Equipping Track development",
        "Bi-weekly intensive sessions",
        "High-level coaching skills",
        "Organizational development focus"
      ],
      icon: Target,
      color: "bg-green-500"
    },
    {
      name: "Vanguard",
      subtitle: "Team & Organizational Coaching",
      duration: "10 months",
      sessions: "20 bi-weekly sessions",
      groupSize: "4-8 team members",
      price: "Contact for pricing",
      description: "Invite your team to journey through our ten-month coaching experience that features five comprehensive modules designed to help you navigate creating a healthy and thriving APEST team culture that can scale across and beyond your organization.",
      features: [
        "Team APEST culture development",
        "Organizational transformation",
        "Scalable APEST implementation",
        "Team dynamics optimization",
        "Leadership development",
        "Cultural change management",
        "Sustainable growth strategies"
      ],
      icon: Zap,
      color: "bg-purple-500"
    }
  ];

  const coachingOutcomes = [
    "APEST Identity Formation",
    "Skill Development & Mastery",
    "Practical Application & Implementation",
    "Relational Growth & Community",
    "Leadership Development",
    "Organizational Impact",
    "Sustained Growth & Transformation"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            APEST Coaching Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take the next step in your APEST journey. Everyone is at a different place in their APEST journey, 
            so we offer 3 different coaching tracks – Elevate, Apex, and Vanguard to meet you where you are.
          </p>
          <div className="flex justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Choose the track that fits your goals
            </Badge>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {coachingTracks.map((track, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 ${track.color}`}></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${track.color.replace('bg-', 'bg-opacity-10 bg-')} rounded-full flex items-center justify-center`}>
                    <track.icon className={`w-6 h-6 ${track.color.replace('bg-', 'text-')}`} />
                  </div>
                  <Badge variant="outline">{track.duration}</Badge>
                </div>
                <CardTitle className="text-2xl">{track.name}</CardTitle>
                <p className="text-sm text-gray-600 font-medium">{track.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {track.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {track.sessions}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    {track.groupSize}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Video className="w-4 h-4" />
                    60-minute Zoom sessions
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {track.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Learn More About {track.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Coaching Session Structure</CardTitle>
              <p className="text-center text-gray-600">Each coaching session consists of three focused 20-minute blocks</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Share & Reflect</h4>
                  <p className="text-sm text-gray-600">
                    Participants share learning experiences from previous application exercises with personalized feedback from Tim
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Learn & Discover</h4>
                  <p className="text-sm text-gray-600">
                    New content presentation introducing APEST topics, tools, and tactics
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Apply & Practice</h4>
                  <p className="text-sm text-gray-600">
                    Reflection and discussion around applying concepts in your context with customized feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Seven Developmental Outcomes</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Each coaching session is designed to cultivate seven developmental outcomes that help focus goals 
            and provide metrics to assess your growth throughout the coaching experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coachingOutcomes.map((outcome, index) => (
              <Card key={index} className="text-center p-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-sm">{outcome}</h4>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Coaching Journey?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Take the first step toward developing your APEST gifts and making a greater impact in your context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Discovery Call</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/apest-quiz">Take the APEST Quiz First</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Ask us about our discounts for missionaries and leaders working in smaller churches and non-profits.
          </p>
        </div>
      </article>
    </div>
  )
}