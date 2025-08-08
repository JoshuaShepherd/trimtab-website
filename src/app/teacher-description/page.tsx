import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  BookOpen, 
  Lightbulb, 
  Users, 
  Target, 
  CheckCircle,
  ArrowRight,
  GraduationCap,
  FileText,
  Brain,
  Search
} from "lucide-react"

export const metadata: Metadata = {
  title: "Teacher - APEST Ministry Description",
  description: "The word teacher literally means 'to separate and point out.' Teachers continue the ministry of Christ by participating in his work of either explaining truth or training people how to live it out."
}

export default function TeacherDescription() {
  const teacherCharacteristics = [
    {
      category: "Core Focus",
      traits: [
        "Love for wisdom and knowledge",
        "Natural ability to break down complex topics",
        "Passion for helping others understand truth",
        "Enjoyment in instructional activities"
      ]
    },
    {
      category: "Ministry Approach",
      traits: [
        "Explaining truth and reality",
        "Training people in practical application",
        "Connecting information to life",
        "Making complex things simple"
      ]
    },
    {
      category: "Strengths",
      traits: [
        "Research and study abilities",
        "Clear communication skills",
        "Patient instruction methods",
        "Systematic thinking patterns"
      ]
    },
    {
      category: "Growth Areas",
      traits: [
        "Balancing content with relationships",
        "Adapting to different learning styles",
        "Moving from theory to practice",
        "Engaging with contemporary issues"
      ]
    }
  ];

  const teacherSkills = [
    {
      skill: "Biblical Exposition",
      description: "Ability to accurately interpret and explain Scripture in context",
      icon: BookOpen
    },
    {
      skill: "Curriculum Development",
      description: "Creating structured learning experiences and educational materials",
      icon: FileText
    },
    {
      skill: "Knowledge Synthesis",
      description: "Connecting information from various sources into coherent understanding",
      icon: Brain
    },
    {
      skill: "Research & Study",
      description: "Deep investigation of topics to discover truth and wisdom",
      icon: Search
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-yellow-600" />
            </div>
          </div>
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            T - Teacher
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Teacher Ministry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "To separate and point out" - Teachers continue the ministry of Christ by participating 
            in his work of either explaining truth or training people how to live it out.
          </p>
        </header>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Heart of Teaching Ministry</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                The word teacher literally means "to separate and point out." Teachers have a natural love 
                for wisdom and knowledge and find great pleasure when they can help others either come to 
                know what they know or do what they do.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Lightbulb className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Explain Truth</h4>
                  <p className="text-sm text-gray-600">Making complex concepts clear and understandable</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Train People</h4>
                  <p className="text-sm text-gray-600">Helping others develop skills and practical application</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Instructional Focus</h4>
                  <p className="text-sm text-gray-600">Providing insight into revelation and reality</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Teacher Characteristics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teacherCharacteristics.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.traits.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Teaching Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teacherSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-yellow-600" />
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
              <CardTitle className="text-2xl text-center">How Teachers Serve the Body of Christ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-yellow-600" />
                    Information Processing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Teachers are mostly drawn to already existing information like history, best practices, 
                    or training materials. They excel at taking topics and tasks and breaking them down 
                    into smaller parts, showing us what they mean and how they work together.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-yellow-600" />
                    Instructional Ministry
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Overall, teachers have an instructional focus to their ministry—they want people 
                    to have more insight into revelation and reality. They bridge the gap between 
                    knowledge and understanding, helping others grow in wisdom.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Developing Your Teaching Gift</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Study & Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Develop deep knowledge in areas God has called you to teach. Invest in quality 
                  study time and research methods.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/teacher-courses">View Courses</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Practice Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Look for opportunities to teach in small groups, classes, or informal settings. 
                  Practice makes perfect.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/coaching">Get Coaching</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Connect Truth to Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Work on making your teaching practical and applicable. Help people see how 
                  truth applies to their daily lives.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources">Find Resources</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Embrace Your Teaching Calling</h2>
          <p className="text-lg text-yellow-100 mb-6">
            God has gifted you with the ability to help others understand truth and grow in wisdom. 
            The Church needs your unique contribution to the body of Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apest-quiz">Confirm Your APEST Profile</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-yellow-600" asChild>
              <Link href="/teacher-courses">Explore Teacher Courses</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}