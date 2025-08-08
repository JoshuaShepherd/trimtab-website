import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Zap, 
  Target, 
  Rocket, 
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Users,
  BookOpen,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "Apostle Courses - Develop Your Apostolic Ministry",
  description: "Taught by APEST specialist Tim Catchim, explore the unique characteristics of four different types of apostles and develop your apostolic calling."
}

export default function ApostleCourses() {
  const courses = [
    {
      title: "The Four Apostles Course",
      description: "Explore the unique and overlapping characteristics of four different types of apostles — the Frontrunner, Frontliner, Advancer, and Ambassador.",
      instructor: "Tim Catchim",
      duration: "8 weeks",
      level: "All Levels",
      features: [
        "Four apostolic types explored",
        "Practical ministry applications",
        "APEST specialist instruction",
        "Modern church context"
      ],
      href: "/the-four-apostles-course"
    },
    {
      title: "Developing the Apostle Within 101",
      description: "Foundation course for understanding apostolic ministry and discovering your apostolic potential in today's church context.",
      instructor: "Tim Catchim",
      duration: "6 weeks",
      level: "Beginner",
      features: [
        "Apostolic foundations",
        "Personal assessment",
        "Ministry identification",
        "Practical exercises"
      ],
      href: "/courses"
    },
    {
      title: "Developing the Apostle Within 201",
      description: "Intermediate development for those with basic understanding of apostolic ministry seeking deeper practical application.",
      instructor: "Tim Catchim",
      duration: "8 weeks",
      level: "Intermediate",
      features: [
        "Advanced apostolic concepts",
        "Leadership development",
        "Church planting principles",
        "Network building"
      ],
      href: "/courses"
    },
    {
      title: "Developing the Apostle Within 301",
      description: "Advanced course for experienced leaders looking to maximize their apostolic impact and influence.",
      instructor: "Tim Catchim",
      duration: "10 weeks",
      level: "Advanced",
      features: [
        "Strategic apostolic thinking",
        "Movement catalyzing",
        "Cross-cultural ministry",
        "Mentoring others"
      ],
      href: "/courses"
    },
    {
      title: "Developing the Apostle Within 401",
      description: "Master-level course for seasoned apostolic leaders ready to train and equip the next generation.",
      instructor: "Tim Catchim",
      duration: "12 weeks",
      level: "Expert",
      features: [
        "Apostolic coaching skills",
        "Training development",
        "Legacy building",
        "Global perspective"
      ],
      href: "/courses"
    }
  ]

  const apostolicTypes = [
    {
      icon: Rocket,
      title: "The Frontrunner",
      description: "Pioneers who break new ground and establish foundations for future growth."
    },
    {
      icon: Target,
      title: "The Frontliner",
      description: "Warriors who advance the kingdom in challenging or hostile environments."
    },
    {
      icon: Zap,
      title: "The Advancer",
      description: "Catalysts who accelerate growth and development in existing works."
    },
    {
      icon: Globe,
      title: "The Ambassador",
      description: "Bridge-builders who connect and represent the kingdom across cultures."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Apostolic Ministry Training
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Apostle Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Taught by APEST specialist Tim Catchim, these courses provide deeper, practical 
            understanding of apostolic ministry in today's church context.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Understanding Apostolic Ministry</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Not all apostles are the same. Our comprehensive course series explores the unique 
                characteristics and overlapping functions of different apostolic types, helping you 
                discover and develop your apostolic calling.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span>Expert Instruction by Tim Catchim</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span>Practical Application Focus</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Four Apostolic Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {apostolicTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <type.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Course Progression</h2>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{course.title}</CardTitle>
                        <Badge variant="secondary">{course.level}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.instructor}
                        </div>
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
                      <h4 className="font-semibold mb-3">Course Highlights:</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
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
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Can I Start at Any Level?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Yes! While the courses are designed to build on one another, you're free to start 
                  at the level that best matches your current understanding and experience.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Starting Points:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      New to apostolic ministry? Start with 101
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Some experience? Consider 201
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Active in ministry? Try 301 or 401
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Best Experience:</h3>
                  <p className="text-gray-700">
                    While each course is self-contained, the learning experience will be more 
                    coherent if you progress through the sequence — especially for long-term 
                    development and comprehensive understanding.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Develop Your Apostolic Calling?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of leaders who have discovered their apostolic type and learned 
            to maximize their kingdom impact through our comprehensive training series.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/the-four-apostles-course">
                Start with The Four Apostles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Questions About Course Levels?
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}