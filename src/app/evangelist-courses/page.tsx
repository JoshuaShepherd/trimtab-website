import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  MessageCircle, 
  Heart, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Globe,
  Handshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "Evangelist Courses - Develop Your Evangelistic Ministry",
  description: "Learn to share the good news effectively and build bridges with people from all walks of life through our comprehensive evangelist training courses."
}

export default function EvangelistCourses() {
  const courses = [
    {
      title: "The Four Evangelists Course",
      description: "Explore the unique characteristics of four different types of evangelists - the Storyteller, Bridge-Builder, Catalyst, and Mobilizer.",
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      features: [
        "Understanding evangelistic types",
        "Storytelling techniques",
        "Building authentic relationships",
        "Effective gospel presentation"
      ],
      href: "/the-four-evangelists-course"
    },
    {
      title: "Relational Evangelism",
      description: "Master the art of building genuine relationships and sharing faith naturally in everyday conversations.",
      duration: "4 weeks",
      level: "All Levels",
      features: [
        "Natural conversation skills",
        "Relationship building strategies",
        "Overcoming evangelism fears",
        "Creating gospel opportunities"
      ],
      href: "/courses"
    },
    {
      title: "Digital Evangelism",
      description: "Learn to effectively share your faith using social media, online platforms, and digital tools.",
      duration: "5 weeks",
      level: "Intermediate",
      features: [
        "Social media evangelism",
        "Online community building",
        "Digital storytelling",
        "Virtual relationship skills"
      ],
      href: "/courses"
    }
  ];

  const evangelistSkills = [
    {
      icon: MessageCircle,
      title: "Gospel Communication",
      description: "Learn to present the good news clearly and compellingly to diverse audiences."
    },
    {
      icon: Users,
      title: "Relationship Building",
      description: "Develop skills in connecting with people and building authentic, lasting relationships."
    },
    {
      icon: Heart,
      title: "Compassionate Outreach",
      description: "Cultivate a heart for the lost and learn to approach evangelism with love and grace."
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "Understand how to share faith effectively across different cultures and contexts."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Evangelistic Ministry Training
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Evangelist Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn to be a messenger of good news, building bridges with people and sharing 
            the love of Christ in natural, authentic ways.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Heart of Evangelism</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Evangelists are relational entrepreneurs who excel at building bridges and sharing 
                the good news of God's kingdom. Our courses will help you develop natural, authentic 
                ways to share your faith and connect with people from all walks of life.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Share Naturally</h4>
                  <p className="text-gray-600">Learn to share faith in everyday conversations</p>
                </div>
                <div className="text-center">
                  <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Build Relationships</h4>
                  <p className="text-gray-600">Connect authentically with diverse people</p>
                </div>
                <div className="text-center">
                  <Heart className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Love Genuinely</h4>
                  <p className="text-gray-600">Approach evangelism with compassion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Courses</h2>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {course.level}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-end justify-end">
                      <Button asChild>
                        <Link href={course.href}>
                          Learn More
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Evangelistic Skills You'll Develop</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {evangelistSkills.map((skill, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <skill.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
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
              <CardTitle className="text-2xl text-center">Why Evangelistic Training Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-green-600" />
                    Natural Evangelism
                  </h3>
                  <p className="text-gray-700">
                    Learn to share your faith in ways that feel natural and authentic, without pressure 
                    or manipulation. Build genuine relationships that open doors for gospel conversations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Effective Outreach
                  </h3>
                  <p className="text-gray-700">
                    Develop skills that help you connect with people from different backgrounds and 
                    communicate the gospel in ways they can understand and relate to.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Become a More Effective Evangelist?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of learners who are discovering how to share the good news 
            naturally and effectively in their daily lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/the-four-evangelists-course">
                Start with The Four Evangelists
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Questions About Our Courses?
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
