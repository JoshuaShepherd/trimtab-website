import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Play, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  BookOpen,
  Award,
  MessageSquare,
  Heart,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shepherd Courses | TrimTab Guide',
  description: 'Develop your shepherding gifts with our specialized Shepherd courses. Learn to care for, guide, and nurture your community with wisdom and love.',
  keywords: 'shepherd courses, shepherding gifts, APEST, spiritual development, Christian education, pastoral care'
}

export default function ShepherdCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Shepherd Courses
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Develop your shepherding gifts and learn to care for your community with wisdom, compassion, and strength
            </p>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl p-8 text-white">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <Heart className="w-20 h-20 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">The Caring Shepherd</h3>
                    <p className="text-green-100">Master Course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Learn to Shepherd with Heart
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Master the art of shepherding through comprehensive training in pastoral care, 
                    community building, and spiritual guidance. This course will help you develop 
                    the heart of a shepherd and the skills to care for your flock.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>8 weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Interactive cohorts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Certificate included</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Play className="w-4 h-4 mr-2" />
                    Start Learning
                  </Button>
                  <Button variant="outline" size="lg">
                    Course Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shepherd Course Catalog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive selection of shepherd-focused courses designed to develop your caring and guiding gifts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-2">Pastoral Care Fundamentals</CardTitle>
                <CardDescription>
                  Learn the essential skills of pastoral care, counseling, and spiritual guidance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Beginner</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">4.9 (234 reviews)</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            {/* Course 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl mb-2">Protecting the Flock</CardTitle>
                <CardDescription>
                  Develop skills in spiritual protection, discernment, and safeguarding your community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>4 weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">4.8 (189 reviews)</span>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            {/* Course 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">Community Building</CardTitle>
                <CardDescription>
                  Learn to build strong, healthy communities that support and nurture growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>5 weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>All levels</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">4.7 (156 reviews)</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Develop Your Shepherding Gifts?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of leaders who are learning to shepherd with wisdom and compassion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Browse All Courses
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <MessageSquare className="w-4 h-4 mr-2" />
                Talk to an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
