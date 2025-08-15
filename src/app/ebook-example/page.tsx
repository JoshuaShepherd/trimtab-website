import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Zap,
  Award,
  Brain,
  Map,
  Compass,
  Shield,
  Eye,
  Mic,
  Send,
  Building
} from "lucide-react";
import Footer from "@/components/Footer";

export default function APESTEBookExample() {
  const userProgress = 35; // Example progress percentage
  const completedChapters = 3;
  const totalChapters = 8;

  const chapters = [
    {
      number: 1,
      title: "Discovering Your APEST DNA",
      subtitle: "Understanding God's Design for Your Ministry",
      duration: "15 min read",
      status: "completed",
      type: "interactive",
      hasQuiz: true,
      hasWorksheet: true,
      icon: <Compass className="w-5 h-5" />
    },
    {
      number: 2,
      title: "The Apostolic Journey",
      subtitle: "Pioneering & Church Multiplication",
      duration: "18 min read", 
      status: "completed",
      type: "video",
      hasQuiz: true,
      hasWorksheet: true,
      icon: <Send className="w-5 h-5" />
    },
    {
      number: 3,
      title: "Prophetic Discernment",
      subtitle: "Hearing God's Voice for Direction",
      duration: "20 min read",
      status: "completed",
      type: "audio",
      hasQuiz: true,
      hasWorksheet: false,
      icon: <Eye className="w-5 h-5" />
    },
    {
      number: 4,
      title: "Evangelistic Passion",
      subtitle: "Reaching the Lost with Good News",
      duration: "16 min read",
      status: "current",
      type: "interactive",
      hasQuiz: true,
      hasWorksheet: true,
      icon: <Heart className="w-5 h-5" />
    },
    {
      number: 5,
      title: "Shepherding Excellence",
      subtitle: "Caring for God's People",
      duration: "22 min read",
      status: "locked",
      type: "video",
      hasQuiz: true,
      hasWorksheet: true,
      icon: <Shield className="w-5 h-5" />
    },
    {
      number: 6,
      title: "Teaching with Authority",
      subtitle: "Communicating Biblical Truth",
      duration: "19 min read",
      status: "locked",
      type: "interactive",
      hasQuiz: true,
      hasWorksheet: true,
      icon: <Brain className="w-5 h-5" />
    },
    {
      number: 7,
      title: "Team Integration",
      subtitle: "Building APEST-Balanced Teams",
      duration: "25 min read",
      status: "locked",
      type: "video",
      hasQuiz: true,
      hasWorksheet: true,
      icon: <Users className="w-5 h-5" />
    },
    {
      number: 8,
      title: "Organizational Transformation",
      subtitle: "Creating APEST-Aligned Churches",
      duration: "28 min read",
      status: "locked",
      type: "interactive",
      hasQuiz: true,
      hasWorksheet: true,
      icon: <Building className="w-5 h-5" />
    }
  ];

  const features = [
    {
      icon: <Video className="w-6 h-6 text-blue-600" />,
      title: "Embedded Videos",
      description: "Watch Tim teach key concepts"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "Interactive Worksheets", 
      description: "Apply learning with practical exercises"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Self-Assessment Quizzes",
      description: "Test your understanding and retention"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-orange-600" />,
      title: "Ask Tim (AI Assistant)",
      description: "Get answers to your questions anytime"
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      title: "Digital Badges",
      description: "Earn recognition for completing sections"
    },
    {
      icon: <Download className="w-6 h-6 text-indigo-600" />,
      title: "Downloadable Resources",
      description: "Take key tools with you"
    }
  ];

  const testimonials = [
    {
      quote: "This ebook transformed how I understand my calling. The interactive elements made complex theological concepts practical and actionable.",
      author: "Sarah M.",
      role: "Youth Pastor",
      rating: 5
    },
    {
      quote: "Tim's approach to competency-based growth is brilliant. I can clearly see my next steps toward Christlike maturity.",
      author: "Marcus L.", 
      role: "Church Planter",
      rating: 5
    },
    {
      quote: "The team application section helped our leadership team identify gaps and align our gifts like never before.",
      author: "Jennifer K.",
      role: "Executive Pastor",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-black">Interactive Learning Experience</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover, Activate & Align Your
                <span className="text-yellow-400 block">APEST Calling</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                A comprehensive, Scripture-based journey to understanding God's design for your ministry gifts and growing toward Christlike maturity.
              </p>
              
              {/* Progress Section for Returning Users */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Your Progress</span>
                  <span className="text-sm text-blue-200">{completedChapters} of {totalChapters} chapters</span>
                </div>
                <Progress value={userProgress} className="mb-3" />
                <p className="text-sm text-blue-200">Keep going! You're making great progress on your APEST journey.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link href="/ebook-example/chapter/4">
                    <Play className="w-5 h-5 mr-2" />
                    Continue Reading
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Link href="#overview">
                    <BookOpen className="w-5 h-5 mr-2" />
                    View All Chapters
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-bold mb-2">Interactive eBook Features</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <p className="text-sm font-medium">{feature.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Foundation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic mb-4">
              "So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up until we all reach unity in the faith and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of Christ."
            </blockquote>
            <cite className="text-blue-600 font-semibold">Ephesians 4:11-13 (NIV)</cite>
          </div>
        </div>
      </section>

      {/* Chapter Overview */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your APEST Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a proven pathway from discovery to transformation. Each chapter builds on the previous, ensuring deep understanding and practical application.
            </p>
          </div>

          <div className="grid gap-6">
            {chapters.map((chapter, index) => (
              <Card key={chapter.number} className={`transition-all duration-300 hover:shadow-lg ${
                chapter.status === 'completed' ? 'border-green-200 bg-green-50/50' :
                chapter.status === 'current' ? 'border-blue-200 bg-blue-50/50 ring-2 ring-blue-200' :
                'border-gray-200 bg-gray-50/50'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        chapter.status === 'completed' ? 'bg-green-100 text-green-600' :
                        chapter.status === 'current' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {chapter.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : chapter.status === 'locked' ? (
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        ) : (
                          chapter.icon
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            Chapter {chapter.number}: {chapter.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            {chapter.type === 'video' && (
                              <Badge variant="secondary" className="bg-red-100 text-red-700">
                                <Video className="w-3 h-3 mr-1" />
                                Video
                              </Badge>
                            )}
                            {chapter.type === 'audio' && (
                              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                                <Headphones className="w-3 h-3 mr-1" />
                                Audio
                              </Badge>
                            )}
                            {chapter.type === 'interactive' && (
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                <Zap className="w-3 h-3 mr-1" />
                                Interactive
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{chapter.subtitle}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {chapter.duration}
                          </span>
                          {chapter.hasQuiz && (
                            <span className="flex items-center">
                              <Brain className="w-4 h-4 mr-1" />
                              Quiz
                            </span>
                          )}
                          {chapter.hasWorksheet && (
                            <span className="flex items-center">
                              <FileText className="w-4 h-4 mr-1" />
                              Worksheet
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {chapter.status === 'completed' && (
                        <Badge className="bg-green-100 text-green-700">
                          <Award className="w-3 h-3 mr-1" />
                          Badge Earned
                        </Badge>
                      )}
                      
                      <Button 
                        asChild={chapter.status !== 'locked'}
                        variant={chapter.status === 'current' ? 'default' : 'outline'}
                        disabled={chapter.status === 'locked'}
                        className={chapter.status === 'current' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                      >
                        {chapter.status !== 'locked' ? (
                          <Link href={`/ebook-example/chapter/${chapter.number}`}>
                            {chapter.status === 'completed' ? 'Review' : 
                             chapter.status === 'current' ? 'Continue' : 'Start'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        ) : (
                          <span className="cursor-not-allowed">
                            Locked
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Competency-Based Growth Model
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                This ebook follows Tim Catchim's proven learning methodology: skills, knowledge, and habits built in sequence with visible thresholds that mark maturity stages.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Diagnose</h3>
                    <p className="text-gray-600">Assessments reveal strengths and gaps in your APEST profile</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Prescribe</h3>
                    <p className="text-gray-600">The learning hub prescribes personalized next steps</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Practice</h3>
                    <p className="text-gray-600">Apply learning with concrete action plans and real ministry</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reflect</h3>
                    <p className="text-gray-600">Reflect and reassess to see growth and celebrate progress</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <Map className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Modal Learning</h3>
                <p className="text-gray-600">Every learning style is accommodated</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center">
                    <div className="mx-auto mb-2">{feature.icon}</div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how this interactive ebook is changing lives and ministries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">{testimonial.author}</cite>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Your APEST Calling?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of leaders who are growing toward Christlike maturity through understanding and activating their God-given gifts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link href="/apest-quiz">
                <Target className="w-5 h-5 mr-2" />
                Take Free APEST Assessment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/ebook-example/chapter/1">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Reading Now
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15,000+</div>
              <p className="text-blue-100">Leaders Equipped</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">94%</div>
              <p className="text-blue-100">Completion Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <p className="text-blue-100">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
