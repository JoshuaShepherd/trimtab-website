import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  BookOpen, 
  Users, 
  Target, 
  MessageCircle, 
  Heart, 
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Award,
  Rocket,
  Compass,
  Shield,
  Lightbulb
} from "lucide-react"

export const metadata: Metadata = {
  title: "APEST Courses - Take Your Skills to the Next Level",
  description: "Identify your unique APEST giftings profile and gain practical skills in each APEST gifting that can be applied in every area of your life and ministry."
}

export default function Courses() {
  const coursePaths = [
    {
      title: "APEST Foundations",
      description: "Build a strong Scriptural foundation in APEST and understand the five-fold ministry gifts",
      icon: BookOpen,
      color: "bg-gray-500",
      textColor: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      courses: [
        "Introduction to APEST",
        "Biblical Foundations of Five-Fold Ministry",
        "APEST in Church History",
        "Personal APEST Assessment"
      ],
      href: "/apest-foundations-courses"
    },
    {
      title: "Apostle Development",
      description: "Develop apostolic skills and sensibilities for pioneering and organizational leadership",
      icon: Rocket,
      color: "bg-red-500",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      courses: [
        "Apostolic Leadership Foundations",
        "Church Planting Strategies",
        "Organizational Development",
        "Leadership Multiplication"
      ],
      href: "/apostle-courses"
    },
    {
      title: "Prophet Development", 
      description: "Develop prophetic skills and sensibilities for discernment and justice advocacy",
      icon: Compass,
      color: "bg-purple-500",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      courses: [
        "Prophetic Discernment",
        "Speaking Truth in Love",
        "Justice and Mercy Ministry",
        "Creative Expression in Ministry"
      ],
      href: "/prophet-courses"
    },
    {
      title: "Evangelist Development",
      description: "Develop evangelistic skills and sensibilities for outreach and invitation",
      icon: MessageCircle,
      color: "bg-green-500",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      courses: [
        "Gospel Communication",
        "Relational Evangelism",
        "Cultural Bridge Building",
        "Invitation and Persuasion"
      ],
      href: "/evangelist-courses"
    },
    {
      title: "Shepherd Development",
      description: "Develop shepherding skills and sensibilities for pastoral care and community building",
      icon: Heart,
      color: "bg-blue-500",
      textColor: "text-blue-600", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      courses: [
        "Pastoral Care Foundations",
        "Community Building",
        "Conflict Resolution",
        "Spiritual Direction"
      ],
      href: "/shepherd-courses"
    },
    {
      title: "Teacher Development",
      description: "Develop teaching skills and sensibilities for biblical instruction and discipleship",
      icon: GraduationCap,
      color: "bg-yellow-500",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      courses: [
        "Biblical Teaching Methods",
        "Discipleship Strategies", 
        "Curriculum Development",
        "Learning Assessment"
      ],
      href: "/teacher-courses"
    }
  ];

  const benefits = [
    {
      title: "Identify Your Profile",
      description: "Discover your unique APEST giftings profile and how it shapes your ministry approach",
      icon: Target
    },
    {
      title: "Gain Practical Skills",
      description: "Develop applicable skills in each APEST gifting for every area of life and ministry",
      icon: Lightbulb
    },
    {
      title: "Connect with Others",
      description: "Learn alongside others on the same journey, sharing insights and mutual support",
      icon: Users
    },
    {
      title: "Customize Your Path",
      description: "Create developmental pathways that foster Christ-like maturity in individuals and groups",
      icon: Compass
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            APEST Development
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Take Your APEST Skills to the Next Level
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identify your unique APEST giftings profile and how it shapes the way you serve 
            and interact with others. Gain practical skills that can be applied in every area 
            of your life and ministry.
          </p>
        </header>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Course Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Developmental Pathways
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Our courses are organized around 6 developmental pathways. Each pathway is designed 
            to help you grow in a specific area of Christ-like maturity through the fivefold 
            giftings of APEST. Choose a pathway below and continue developing from there.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursePaths.map((path, index) => (
              <Card key={index} className={`${path.bgColor} ${path.borderColor} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${path.bgColor} border ${path.borderColor} rounded-full flex items-center justify-center`}>
                      <path.icon className={`w-6 h-6 ${path.textColor}`} />
                    </div>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                  </div>
                  <p className="text-gray-700">{path.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Sample Courses:</h4>
                    <ul className="space-y-2">
                      {path.courses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 ${path.textColor} mt-1 flex-shrink-0`} />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={path.href}>
                      Explore Pathway
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Learning Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Self-Paced Learning</h3>
                  <p className="text-gray-700 text-sm">
                    Progress through courses at your own speed with lifetime access to materials
                  </p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Community Support</h3>
                  <p className="text-gray-700 text-sm">
                    Connect with fellow learners and experienced mentors in course forums
                  </p>
                </div>
                <div>
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Practical Application</h3>
                  <p className="text-gray-700 text-sm">
                    Apply learning through exercises, assessments, and real-world projects
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your APEST Journey?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Begin with our APEST assessment to identify your primary gifts, then choose 
            the pathway that best fits your calling and ministry context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apest-quiz">Take APEST Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/apest-foundations-courses">Start with Foundations</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}