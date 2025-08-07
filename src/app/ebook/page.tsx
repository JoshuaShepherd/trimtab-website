import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

export default function EBookLandingPage() {
  const chapters = [
    {
      number: 1,
      title: "Understanding the APEST Framework",
      subtitle: "The Five-Fold Ministry Gifts in Modern Context",
      duration: "15 min read",
      status: "completed"
    },
    {
      number: 2,
      title: "The Apostolic Function",
      subtitle: "Pioneering and Catalizing New Kingdom Realities",
      duration: "18 min read",
      status: "current"
    },
    {
      number: 3,
      title: "The Prophetic Voice",
      subtitle: "Discerning God's Heart for His People",
      duration: "16 min read",
      status: "locked"
    },
    {
      number: 4,
      title: "Evangelistic DNA",
      subtitle: "Spreading the Good News Naturally",
      duration: "14 min read",
      status: "locked"
    },
    {
      number: 5,
      title: "Pastoral Care & Shepherding",
      subtitle: "Nurturing and Protecting God's People",
      duration: "17 min read",
      status: "locked"
    },
    {
      number: 6,
      title: "Teaching for Transformation",
      subtitle: "Building Understanding that Changes Lives",
      duration: "19 min read",
      status: "locked"
    }
  ];

  const resources = [
    {
      title: "APEST Assessment Tool",
      type: "Interactive Assessment",
      icon: Target,
      description: "Discover your primary and secondary APEST gifts"
    },
    {
      title: "Ministry Team Dynamics Worksheet",
      type: "PDF Download",
      icon: Users,
      description: "Map your team's APEST composition and gaps"
    },
    {
      title: "Webinar Series: Living Your Gifts",
      type: "Audio/Video",
      icon: Video,
      description: "4-part series on activating your APEST calling"
    },
    {
      title: "Community Discussion Guide",
      type: "Study Guide",
      icon: MessageCircle,
      description: "Questions for group study and reflection"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Church Planter",
      quote: "This eBook completely transformed how I understand my calling and how to build effective ministry teams."
    },
    {
      name: "Marcus Rodriguez", 
      role: "Lead Pastor",
      quote: "The interactive format made complex theological concepts incredibly accessible and practical."
    },
    {
      name: "Dr. Rachel Thompson",
      role: "Seminary Professor",
      quote: "Tim's approach to APEST is both biblically grounded and remarkably practical for today's church."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
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
                Discover Your
                <span className="block trimtab-gradient bg-clip-text text-transparent">
                  APEST Calling
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                An interactive learning journey through the five-fold ministry gifts, 
                featuring audio teachings, reflection exercises, and practical tools 
                for ministry transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/ebook/chapter/1">
                  <Button size="lg" className="trimtab-gradient text-white border-0">
                    <Play className="mr-2 h-5 w-5" />
                    Start Learning Journey
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Version
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2 hours total</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>6 chapters</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="h-4 w-4 mr-1" />
                  <span>Audio included</span>
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
                  <h3 className="text-2xl font-bold mb-2">APEST</h3>
                  <h4 className="text-xl mb-4">Discovering Your Ministry Gifts</h4>
                  <p className="text-blue-100 text-sm mb-6">
                    An Interactive Learning Experience
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
              Learning Journey
            </h2>
            <p className="text-xl text-gray-600">
              Six chapters designed to transform your understanding of ministry gifts
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
            1 of 6 chapters completed (17% progress)
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

      {/* CTA Section */}
      <section className="py-20 trimtab-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discover Your Calling?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of leaders who have transformed their ministry through 
            understanding their APEST gifts.
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
