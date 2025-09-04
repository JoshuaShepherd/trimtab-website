import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  BookOpen,
  Play,
  Download,
  Users,
  MessageCircle,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Volume2,
  FileText,
  Video,
  Headphones,
  Globe,
  Target,
  Lightbulb,
  Heart,
  Zap
} from "lucide-react";
import Footer from "@/components/Footer";

export default function EBookLandingPage() {
  const chapters = [
    {
      number: 1,
      title: "The Current State of Ministry",
      subtitle: "Why APEST Matters More Than Ever",
      duration: "12 min read",
      status: "completed"
    },
    {
      number: 2,
      title: "Christ as the Chief Cornerstone",
      subtitle: "The Foundation for All Ministry Gifts",
      duration: "22 min read",
      status: "current"
    },
    {
      number: 3,
      title: "Apostolic and Prophetic Connexus",
      subtitle: "When Two Foundation Stones Work Together",
      duration: "25 min read",
      status: "locked"
    },
    {
      number: 4,
      title: "Understanding Apostolic Ministry",
      subtitle: "Sent and Scaling for Kingdom Impact",
      duration: "18 min read",
      status: "locked"
    },
    {
      number: 5,
      title: "The Prophetic Function Unveiled",
      subtitle: "Revealing and Reforming with Integrity",
      duration: "20 min read",
      status: "locked"
    },
    {
      number: 6,
      title: "Overcoming Ministry Hostility",
      subtitle: "Deactivating Conflict for Healthy Relationships",
      duration: "16 min read",
      status: "locked"
    },
    {
      number: 7,
      title: "Building Healthy APEST Teams",
      subtitle: "From Individual Gifts to Collaborative Ministry",
      duration: "19 min read",
      status: "locked"
    }
  ];

  const resources = [
    {
      title: "APEST Assessment Tool",
      type: "Interactive Assessment",
      icon: Target,
      description: "Discover your primary and secondary APEST gifts and calling"
    },
    {
      title: "Apostolic-Prophetic Relationship Guide",
      type: "PDF Workbook",
      icon: Users,
      description: "Practical exercises for building healthy ministry partnerships"
    },
    {
      title: "Webinar Series: Connexus in Action",
      type: "Audio/Video",
      icon: Video,
      description: "Master webinar content with Tim Catchim and Christopher Caputo"
    },
    {
      title: "Ministry Team Dynamics Assessment",
      type: "Study Guide",
      icon: MessageCircle,
      description: "Tools for evaluating and strengthening your ministry foundation"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Harrison",
      role: "Church Planter & Apostolic Leader",
      quote: "This content transformed how I understand my relationship with prophetic voices. We've moved from conflict to powerful collaboration."
    },
    {
      name: "Sarah Chen", 
      role: "Prophetic Minister",
      quote: "Finally, a framework that honors both apostolic and prophetic callings while showing us how to work together in healthy unity."
    },
    {
      name: "Pastor David Rodriguez",
      role: "Senior Pastor",
      quote: "Tim and Chris have given us the theological depth and practical tools our leadership team needed to build on a solid foundation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
                Interactive Digital eBook
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Master Your
                <span className="block trimtab-gradient bg-clip-text text-transparent">
                  Apostolic & Prophetic Connexus
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover how Christ as the Chief Cornerstone provides the foundation 
                for apostles and prophets to work together in healthy, transformative 
                ministry relationships that build the Church.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/ebook/webbook">
                  <Button size="lg" className="trimtab-gradient text-white border-0">
                    <Play className="mr-2 h-5 w-5" />
                    Start Interactive WebBook
                  </Button>
                </Link>
                <Link href="/ebook/skus">
                  <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    <Download className="mr-2 h-5 w-5" />
                    Choose Your Package
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>3.5 hours total</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>7 chapters</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="h-4 w-4 mr-1" />
                  <span>Webinar audio</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - eBook Cover Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Apostolic & Prophetic</h3>
                  <h4 className="text-xl mb-4">Connexus</h4>
                  <p className="text-blue-100 text-sm mb-6">
                    Building Healthy Ministry Foundations
                  </p>
                  <div className="border-t border-blue-400 pt-4">
                    <p className="text-sm font-medium">Tim Catchim</p>
                    <p className="text-xs text-blue-200">TrimTab Leadership</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-sm text-gray-600">(127 reviews)</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">2,340</span>
                  <span className="text-sm text-gray-600">learners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600">
              Seven transformative chapters on apostolic and prophetic ministry relationships
            </p>
          </div>
          
          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <Card key={index} className={`trimtab-card-hover ${chapter.status === 'current' ? 'ring-2 ring-blue-500' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        chapter.status === 'completed' ? 'bg-green-100 text-green-600' :
                        chapter.status === 'current' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {chapter.status === 'completed' ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <span className="font-bold">{chapter.number}</span>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {chapter.title}
                        </h3>
                        <p className="text-gray-600">{chapter.subtitle}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-500">{chapter.duration}</span>
                          {chapter.status === 'current' && (
                            <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {chapter.status !== 'locked' && (
                        <>
                          <Button variant="ghost" size="sm">
                            <Volume2 className="h-4 w-4" />
                          </Button>
                          <Link href={`/ebook/chapter/${chapter.number}`}>
                            <Button size="sm" disabled={chapter.status === 'locked'}>
                              {chapter.status === 'completed' ? 'Review' : 'Continue'}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </>
                      )}
                      {chapter.status === 'locked' && (
                        <Button size="sm" variant="ghost" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
          </div>
          <p className="text-center mt-2 text-sm text-gray-600">
            1 of 7 chapters completed (14% progress)
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-600">
              Complementary materials to enhance your learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <Badge variant="outline" className="mb-3">{resource.type}</Badge>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Learners Are Saying
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Experience
            </h2>
            <p className="text-xl text-gray-600">
              From free introduction to comprehensive team training
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Lite */}
            <Card className="relative border-green-200 bg-green-50">
              <CardHeader className="text-center">
                <Badge className="bg-green-500 text-white mb-2">Free</Badge>
                <CardTitle className="text-lg">Lite Guide</CardTitle>
                <div className="text-2xl font-bold text-green-600">$0</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />20-page PDF guide</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />3 practice exercises</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Email-gated access</li>
                </ul>
                <Link href="/ebook/skus">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Get Free Guide</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Standard */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Standard</CardTitle>
                <div className="text-2xl font-bold">$9</div>
                <div className="text-sm text-gray-500 line-through">$19</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Complete ebook</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />EPUB + PDF formats</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Lifetime access</li>
                </ul>
                <Link href="/ebook/skus">
                  <Button className="w-full">Get Full Book</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro - Featured */}
            <Card className="relative border-2 border-blue-500 shadow-xl">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Pro WebBook</CardTitle>
                <div className="text-2xl font-bold text-blue-600">$39</div>
                <div className="text-sm text-gray-500 line-through">$59</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Interactive WebBook</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Ask Tim AI helper</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Progress tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Chapter quizzes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />3 bonus videos</li>
                </ul>
                <Link href="/ebook/skus">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Unlock Pro Experience</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Deluxe */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Deluxe Bundle</CardTitle>
                <div className="text-2xl font-bold">$89</div>
                <div className="text-sm text-gray-500 line-through">$112 value</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Print book</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />All digital formats</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Coaching voucher</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Bonus materials</li>
                </ul>
                <Link href="/ebook/skus">
                  <Button className="w-full">Complete Package</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Team */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Team Pack</CardTitle>
                <div className="text-2xl font-bold">$249</div>
                <div className="text-sm text-gray-500">10 seats</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />10 WebBook licenses</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Team dashboard</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Facilitator guide</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Group session</li>
                </ul>
                <Link href="/ebook/skus">
                  <Button className="w-full">Equip Your Team</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 trimtab-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Healthy Ministry Foundations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join ministry leaders who are discovering how apostolic and prophetic partnerships 
            create the foundation for thriving, sustainable ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ebook/chapter/1">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
                Start Your Journey Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                Book a Coaching Session
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
