import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Target, 
  BookOpen, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Video,
  Download
} from "lucide-react"

export const metadata: Metadata = {
  title: "Apostolic Skills Course - Entry Level APEST Training",
  description: "Learn practical apostolic skills for everyday people. Discover how to see the big picture, recognize opportunities, and cast vision in your daily life, family, church, or community."
}

export default function SingleCourseTemplate() {
  const courseModules = [
    {
      title: "Understanding Ephesians 4:1-16",
      description: "Discover the five essential parts of Ephesians 4:1-16 and how they all build up to one big idea."
    },
    {
      title: "Abraham's First Tests",
      description: "God chooses one family out of the scattering of Babylon. Study Genesis 11-14 as Abraham faces his first tests as God's chosen human partner."
    },
    {
      title: "The Promise and the Test",
      description: "The Abraham story zooms in on God's promise to make Abraham the father of many nations. Will Abraham trust God? See how Abraham faces his test."
    },
    {
      title: "Intercession and Judgment",
      description: "In the culmination of the Abraham and Lot drama, Abraham intercedes for Lot in the face of looming judgment on Sodom and Gomorrah. Study these crucial chapters."
    }
  ];

  const learningOutcomes = [
    "Understand and communicate the essential parts of Ephesians 4:1-16",
    "Recognize apostolic patterns in biblical narratives",
    "Apply apostolic principles to your daily life",
    "Develop entry-level apostolic skills regardless of personality type",
    "Create positive change in your family, church, or community",
    "Build confidence in your ability to see the big picture",
    "Learn to recognize and act on opportunities",
    "Practice casting vision in practical ways"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            Entry Level APEST Training
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Apostolic Skills for Everyone
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical apostolic skills designed for average, everyday people who want to live 
            with stronger purpose and influence.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why This Course Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-700 text-center">
                Ever feel like "apostolic" sounds too bold, too intense, or just not "you"? 
                Maybe the idea of seeing the big picture, recognizing opportunities, and casting vision 
                doesn't seem relevant to your life. Well, you're not alone. A lot of people feel this way.
              </p>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Here's the Thing:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Apostolic skills are not just for visionary leaders—they're for anyone who wants to live 
                  with a stronger sense of purpose and influence, no matter what their personality or gifting is. 
                  This course, led by experienced coach Tim Catchim, is designed to help average, everyday people 
                  explore entry level apostolic skills in a practical, approachable way, even if you've never 
                  considered yourself "apostolic".
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Through this course, you'll realize that seeing the big picture, recognizing opportunities, 
                and casting a vision aren't just lofty ideas. They're skills anyone can learn and use to 
                create positive change in their daily life, family, church, or community. With a hands-on, 
                step-by-step approach, you'll explore these skills in a way that makes sense for you—addressing 
                any doubts or insecurities you may have along the way.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Course Modules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courseModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold">{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Learn
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                After you complete this full class, you will be able to understand and communicate the following:
              </p>
              <ul className="space-y-3">
                {learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl">Course Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-blue-600" />
                    <span>Expert instruction by Tim Catchim</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Self-paced learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-blue-600" />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Access across all devices</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">About Your Instructor</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tim Catchim is a missional church leader, author, and consultant with over two decades 
                of experience in movemental and missional church planting. He co-authored the book 
                The Permanent Revolution and focuses on APEST (Apostle, Prophet, Evangelist, Shepherd, Teacher) 
                ministry models as outlined in Ephesians 4. Tim is dedicated to helping churches rediscover 
                the fivefold ministry to foster leadership and church health. He currently consults with 
                churches across the country, providing insights into movement-based strategies for engaging 
                culture and discipleship.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Develop Your Apostolic Skills?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            You can now access the latest Classroom design and features on the device of your choice: 
            mobile phone, tablet, laptop, or desktop computer! All of your session progress, notes, 
            reflections, and quizzes will be saved to your account and accessible across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Have Questions?
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Feel free to reach out to us and we will get back to you as soon as possible!
          </p>
        </div>
      </div>
    </div>
  )
}
