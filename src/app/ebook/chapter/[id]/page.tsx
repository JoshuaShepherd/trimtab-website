import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  BookOpen,
  Lightbulb,
  MessageCircle,
  CheckCircle,
  Clock,
  Download,
  Share,
  Bookmark,
  Users,
  Target,
  Heart,
  Zap
} from "lucide-react";

export default function EBookChapter() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Chapter Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/ebook">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Contents
              </Button>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <Badge className="bg-blue-100 text-blue-800">Chapter 2 of 6</Badge>
            <Badge variant="outline">18 min read</Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Play className="mr-1 h-3 w-3" />
              Audio Available
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Apostolic Function
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pioneering and Catalyzing New Kingdom Realities
          </p>
          
          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
          </div>
          <p className="text-sm text-gray-600">2 of 6 chapters completed</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Chapter Contents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="#intro" className="block text-sm text-blue-600 hover:text-blue-800 py-1">
                  Introduction
                </a>
                <a href="#definition" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                  Defining Apostolic Ministry
                </a>
                <a href="#characteristics" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                  Key Characteristics
                </a>
                <a href="#modern-context" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                  Modern Context Application
                </a>
                <a href="#audio-teaching" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                  Audio Teaching
                </a>
                <a href="#reflection" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                  Reflection Questions
                </a>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900">Quick Actions</h4>
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark Complete
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction Section */}
              <section id="intro" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
                
                {/* Audio Player */}
                <Card className="bg-blue-50 border-blue-200 mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Chapter Audio Introduction</h3>
                          <p className="text-sm text-gray-600">Tim Catchim • 8:32</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Play
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 bg-gray-200 rounded-full h-1">
                      <div className="bg-blue-600 h-1 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The apostolic function represents one of the most misunderstood yet crucial 
                  elements of the five-fold ministry. In our contemporary church context, 
                  the very mention of "apostolic ministry" can evoke everything from 
                  suspicion to excitement, often without a clear biblical framework.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Yet understanding the apostolic function is essential for any leader 
                  seeking to catalyze authentic kingdom transformation. The apostolic 
                  gift provides the pioneering edge that pushes the church beyond 
                  maintenance mode into missional momentum.
                </p>

                {/* Key Insight Box */}
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 my-8">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Lightbulb className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Insight</h4>
                        <p className="text-gray-700">
                          The apostolic function isn't about title or position—it's about 
                          pioneering new expressions of God's kingdom and catalyzing others 
                          to fulfill their calling in Christ.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Definition Section */}
              <section id="definition" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Defining Apostolic Ministry</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Greek word "apostolos" literally means "sent one"—someone commissioned 
                  and empowered for a specific mission. In the New Testament context, 
                  apostles were those who carried the gospel message beyond existing 
                  boundaries, establishing new communities of faith and developing leaders.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <Card className="trimtab-card-hover">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Target className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Pioneer</h3>
                      <p className="text-sm text-gray-600">
                        Breaking new ground and establishing fresh expressions of faith
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="trimtab-card-hover">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Catalyst</h3>
                      <p className="text-sm text-gray-600">
                        Sparking transformation and mobilizing others toward mission
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="trimtab-card-hover">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Builder</h3>
                      <p className="text-sm text-gray-600">
                        Establishing sustainable structures and developing leaders
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Modern apostolic ministry often manifests through church planting, 
                  network development, cross-cultural missions, and organizational 
                  transformation. However, it's crucial to understand that apostolic 
                  function can operate at any level—from local community initiatives 
                  to global movements.
                </p>
              </section>

              {/* Characteristics Section */}
              <section id="characteristics" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Characteristics</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Those operating in apostolic function typically exhibit several 
                  distinctive characteristics that set them apart as pioneers and 
                  kingdom catalysts:
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Entrepreneurial Vision</h3>
                      <p className="text-gray-700">
                        They see opportunities where others see obstacles, and they're 
                        willing to take calculated risks to advance God's kingdom.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Cultural Sensitivity</h3>
                      <p className="text-gray-700">
                        They excel at contextualizing the gospel message for different 
                        cultural contexts without compromising its essential truth.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Leadership Development</h3>
                      <p className="text-gray-700">
                        They're natural mentors who raise up and release others into 
                        their own spheres of influence and calling.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Audio Teaching Section */}
              <section id="audio-teaching" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Extended Audio Teaching</h2>
                
                <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        "Apostolic Ministry in the 21st Century"
                      </h3>
                      <p className="text-gray-600">Original webinar excerpt • 24:17</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">0:00</span>
                        <span className="text-sm text-gray-600">24:17</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2 mb-4">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-6">
                        <Button size="sm" variant="ghost">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                        <Button size="lg" className="trimtab-gradient text-white">
                          <Pause className="h-6 w-6" />
                        </Button>
                        <span className="text-sm text-gray-600">1.25x</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 text-center">
                      This teaching explores how apostolic ministry has evolved and 
                      how it can be authentically expressed in contemporary contexts.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Reflection Section */}
              <section id="reflection" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Reflection & Application</h2>
                
                <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MessageCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Discussion Questions</h4>
                        <div className="space-y-3">
                          <p className="text-gray-700">
                            1. How do you see apostolic function manifesting in your current 
                            ministry context? What new territories might God be calling you to pioneer?
                          </p>
                          <p className="text-gray-700">
                            2. What barriers prevent apostolic ministry from flourishing in 
                            traditional church structures? How might these be addressed?
                          </p>
                          <p className="text-gray-700">
                            3. Reflect on leaders you know who operate in apostolic function. 
                            What characteristics do they display that align with biblical patterns?
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t">
                <Link href="/ebook/chapter/1">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous Chapter
                  </Button>
                </Link>
                
                <Button className="trimtab-gradient text-white">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark as Complete
                </Button>
                
                <Link href="/ebook/chapter/3">
                  <Button>
                    Next Chapter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
