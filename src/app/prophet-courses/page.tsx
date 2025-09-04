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
  MessageSquare
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prophet Courses | TrimTab Guide',
  description: 'Discover and develop your prophetic gifts with our specialized Prophet courses. Learn to hear God\'s voice, speak truth, and inspire transformation in your community.',
  keywords: 'prophet courses, prophetic gifts, APEST, spiritual development, Christian education'
}

export default function ProphetCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Prophet Courses
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Develop your prophetic gifts and learn to speak God&apos;s truth with clarity and compassion
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
                <div className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl p-8 text-white">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <BookOpen className="w-20 h-20 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">The Four Prophets</h3>
                    <p className="text-purple-100">Master Course</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Four Prophets Course
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Discover the four different types of prophetic calling and learn to operate in your unique prophetic gifting. 
                  This comprehensive course will help you understand the nuances of prophetic ministry and develop your voice.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>All Levels</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>6-8 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Play className="w-4 h-4" />
                  <span>Self-paced</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Lifetime access</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  $24.99
                </div>
                <p className="text-gray-500">One-time payment</p>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Play className="w-4 h-4 mr-2" />
                  Take the Course
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Prophet courses are designed to help you understand and develop your prophetic calling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Four Prophetic Types</h3>
                <p className="text-gray-600">
                  Understand the four distinct types of prophetic ministry and identify your calling
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hearing God&apos;s Voice</h3>
                <p className="text-gray-600">
                  Learn practical techniques for discerning and receiving prophetic revelation
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prophetic Community</h3>
                <p className="text-gray-600">
                  Connect with others on the prophetic journey through our private Facebook group
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p className="text-gray-600">
                  Put your learning into practice with real-world exercises and assignments
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">
                  Receive a certificate of completion upon finishing the course
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lifetime Access</h3>
                <p className="text-gray-600">
                  Return to the material anytime with permanent access to all content
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Questions about our APEST Courses
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Who are the courses for?</h3>
                <p className="text-gray-600">
                  Our courses are customized for a diverse range of individuals. Whether you&apos;re an everyday Christian 
                  looking to understand more about APEST giftings, a small group or ministry leader, or a leader of a church, 
                  church plant, or non-profit, our tailored learning experiences are designed with you in mind.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can I take your courses at my own pace?</h3>
                <p className="text-gray-600">
                  Absolutely! Our online courses are designed for your convenience, allowing you to learn at your own pace. 
                  We understand that everyone has different schedules and learning styles, so our courses are flexible to 
                  fit your individual needs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Are the courses pre-recorded or &quot;live&quot;?</h3>
                <p className="text-gray-600">
                  Most of the courses are pre-recorded. But we also offer &quot;live&quot; courses, too. Unless the course is 
                  labeled &quot;live&quot; in the course description, it is a pre-recorded online course.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What kind of practical experience will I gain?</h3>
                <p className="text-gray-600">
                  Our courses are designed with a strong emphasis on practical, hands-on learning. You&apos;ll not only be 
                  introduced to paradigm shifting content, each course will include practical exercises you can do to apply 
                  APEST right where you live, learn, work, and play.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Develop Your Prophetic Gifts?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of believers who have discovered their prophetic calling through our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Play className="w-4 h-4 mr-2" />
                Start Learning Today
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                Browse All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
